import { useCallback, useContext, useState, useEffect } from "react"; //evita que se vuelva a ejecutar una funcion
import CuentasContext from "context/CuentasContext";
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
  let isSubscribed = true;

  useEffect(() => {
    onAuthStateChanged(auth, () => {
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
      cuentasTotal.push(doc.data());
    });
    if (isSubscribed) {
      setCuentas(cuentasTotal);
      setLoadingCuentas(false);
    }
  });

  return {
    errors: errorMSG,
    error: error,
    success: success,
    loadingcuentas,
    cuentas,
    createDefaultCuenta,
  };
}
