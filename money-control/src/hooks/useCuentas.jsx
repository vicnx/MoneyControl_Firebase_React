import { useCallback, useContext, useState, useEffect } from "react"; //evita que se vuelva a ejecutar una funcion
import CuentasContext from "context/CuentasContext";
import { useHistory } from "react-router-dom";
//Firebase
import { app, db } from "firebase.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  addDoc,
  collection,
  getDoc,
  doc,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export default function useCuentas() {
  const { cuentas, setCuentas } = useContext(CuentasContext);
  const [loadingcuentas, setLoadingCuentas] = useState(false);
  const [state, setState] = useState({
    loading: false,
    error: false,
  });
  const [error, setError] = useState({ status: false, msg: "" });
  const [success, setSuccess] = useState({ status: false, msg: "" });
  const [errorMSG, setErrorMSG] = useState("");
  const auth = getAuth(app);
  const history = useHistory();
  let isSubscribed = true;

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setSuccess({ status: false, msg: "" });
      setLoadingCuentas(true);
      if (auth.currentUser) {
        setState({
          loading: false,
          error: false,
        });
        getCuentas(auth.currentUser.uid);
      } else {
        setState({
          loading: false,
          error: false,
        });
        setTimeout(() => {
          setState({
            loading: false,
            error: false,
          });
        }, 500);
      }
    });
    return () => (isSubscribed = false);
  }, [auth]);

  const createDefaultCuenta = useCallback((user) => {
    const colRef = collection(db, "cuentas");
    addDoc(colRef, {
      uid: user.uid,
      icono: "cash-outline",
      color: "#7895ff",
      cantidad: 0,
      name: "Default",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const getCuentas = useCallback(async (uid) => {
    const colRef = collection(db, "cuentas");
    const pRef = await query(colRef, where("uid", "==", uid));
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

  const createNewCuenta = useCallback((cuenta) => {
    const colRef = collection(db, "cuentas");
    addDoc(colRef, cuenta)
      .then((res) => {
        setSuccess({ status: true, msg: "Cuenta creada con exito!" });
        setTimeout(() => {
          history.push("/cuentas");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const deleteCuenta = useCallback(async (cuenta) => {
    console.log("cuentas length", cuentas.length);
    if (cuentas.length <= 1) {
      setError({ status: true, msg: "No puedes eliminar tu ultima cuenta!" });
    } else {
      deleteDoc(doc(db, "cuentas", cuenta.docid)).then((res) => {
        setSuccess({ status: true, msg: "Cuenta eliminada con exito!" });
        getCuentas(auth.currentUser.uid);
      });
    }
  });

  return {
    errors: errorMSG,
    error: error,
    setError,
    success: success,
    loadingcuentas,
    cuentas,
    createDefaultCuenta,
    createNewCuenta,
    success,
    setSuccess,
    deleteCuenta,
  };
}
