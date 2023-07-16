import CuentasContext from 'context/CuentasContext';
import { useCallback, useContext, useEffect, useState } from 'react'; //evita que se vuelva a ejecutar una funcion
import { useHistory } from 'react-router-dom';
//Firebase
import { app, db } from 'firebase.jsx';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import UserContext from 'context/UserContext';
import dexieDB from 'dexiedb';
import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';

export default function useCuentas() {
    const { cuentas, setCuentas } = useContext(CuentasContext);
    const [loadingcuentas, setLoadingCuentas] = useState(false);
    const [setState] = useState({
        loading: false,
        error: false
    });
    const [error, setError] = useState({ status: false, msg: '' });
    const [success, setSuccess] = useState({ status: false, msg: '' });
    const [errorMSG] = useState('');
    const auth = getAuth(app);
    const history = useHistory();
    let isSubscribed = true;
    const { offlineMode } = useContext(UserContext);

    useEffect(() => {
        onAuthStateChanged(auth, () => {
            setSuccess({ status: false, msg: '' });
            setLoadingCuentas(true);
            if (auth.currentUser) {
                setState({ loading: false, error: false });
                getCuentas(auth.currentUser.uid);
            } else {
                setLoadingCuentas(false);
                setState({
                    loading: false,
                    error: false
                });
                setTimeout(() => {
                    setState({
                        loading: false,
                        error: false
                    });
                }, 500);
            }
        });
        return () => (isSubscribed = false);
    }, [auth]);

    const createDefaultCuenta = (user) => {
        const colRef = collection(db, 'cuentas');
        addDoc(colRef, {
            uid: user.uid,
            icono: 'cashOutline',
            color: '#7895ff',
            cantidad: 0,
            name: 'Default'
        })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getCuentas = useCallback(async (uid) => {
        if (offlineMode) {
            offlineGetCuentas();
            return;
        }
        const colRef = collection(db, 'cuentas');
        const pRef = await query(colRef, where('uid', '==', uid));
        const querySnapshot = await getDocs(pRef);
        let cuentasTotal = [];
        querySnapshot.forEach((doc) => {
            cuentasTotal.push({ ...doc.data(), docid: doc.id });
        });
        if (isSubscribed) {
            setCuentas(cuentasTotal);
            setLoadingCuentas(false);
        }
    });

    const createNewCuenta = (cuenta) => {
        if (offlineMode) {
            offlineCreateCuenta(cuenta);
        } else {
            //TODO Vicente: Refactorizar modo online (crear cuentas en local y botón para subir datos, así ahorramos llamadas a firebase)
            const colRef = collection(db, 'cuentas');
            addDoc(colRef, cuenta)
                .then((res) => {
                    setSuccess({ status: true, msg: 'Cuenta creada con exito!' });
                    setTimeout(() => {
                        history.push('/cuentas');
                    }, 2000);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const deleteCuenta = async (cuenta) => {
        if (cuentas.length <= 1) {
            setError({ status: true, msg: 'No puedes eliminar tu ultima cuenta!' });
        } else {
            deleteDoc(doc(db, 'cuentas', cuenta.docid)).then((res) => {
                setSuccess({ status: true, msg: 'Cuenta eliminada con exito!' });
                getCuentas(auth.currentUser.uid);
            });
        }
    };

    const removeSaldo = async (cuenta, newCantidad) => {
        const docRef = doc(db, 'cuentas', cuenta.docid);
        const Cuenta = await getDoc(docRef);
        let cuentaSelected = { ...Cuenta.data(), docid: Cuenta.id };
        if (cuentaSelected) {
            let newSaldo = parseFloat(cuentaSelected.cantidad) - parseFloat(newCantidad);
            updateDoc(docRef, {
                cantidad: newSaldo,
                totalgastos: cuentaSelected.totalgastos ? parseFloat(cuentaSelected.totalgastos) + parseFloat(newCantidad) : 0 + parseFloat(newCantidad)
            }).then((res) => {
                getCuentas(auth.currentUser.uid);
            });
        }
    };

    const addSaldo = async (cuenta, ingreso) => {
        const docRef = doc(db, 'cuentas', cuenta.docid);
        const Cuenta = await getDoc(docRef);
        let cuentaSelected = { ...Cuenta.data(), docid: Cuenta.id };
        if (cuentaSelected) {
            let newSaldo = parseFloat(cuentaSelected.cantidad) + parseFloat(ingreso.cantidad);
            updateDoc(docRef, {
                cantidad: newSaldo,
                totalganancias: cuentaSelected.totalganancias ? parseFloat(cuentaSelected.totalganancias) + parseFloat(ingreso.cantidad) : 0 + parseFloat(ingreso.cantidad),
                ingresos: arrayUnion(ingreso)
            }).then((res) => {
                getCuentas(auth.currentUser.uid);
                setSuccess({ status: true, msg: 'Nuevo ingreso añadido con exito!' });
                setTimeout(() => {
                    history.goBack();
                    setLoadingCuentas(false);
                }, 1000);
            });
        }
    };

    const offlineCreateCuenta = (cuenta) => {
        const generarDocId = () => Math.random().toString(36).substr(2, 10);
        const docidGenerado = generarDocId();
        const cuentaConDocId = { ...cuenta, docid: docidGenerado };
        dexieDB.cuentas
            .where('docid')
            .equals(docidGenerado)
            .count()
            .then((count) => {
                if (count === 0) {
                    dexieDB.cuentas
                        .add(cuentaConDocId)
                        .then((id) => {
                            setSuccess({ status: true, msg: 'Cuenta creada con exito!' });
                            setTimeout(() => {
                                history.push('/cuentas');
                            }, 2000);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                } else {
                    console.log('El docid ya existe en Dexie DB');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const offlineGetCuentas = () => {
        dexieDB
            .table('cuentas')
            .toArray()
            .then((cuentasDexieDB) => setCuentas(cuentasDexieDB));
    };

    return {
        errors: errorMSG,
        error: error,
        setError,
        success: success,
        loadingcuentas,
        cuentas,
        createDefaultCuenta,
        createNewCuenta,
        setSuccess,
        deleteCuenta,
        removeSaldo,
        addSaldo
    };
}
