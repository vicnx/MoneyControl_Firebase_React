import { useCallback, useContext, useState, useEffect } from "react"; //evita que se vuelva a ejecutar una funcion
import CuentasContext from "context/CuentasContext";
import GruposContext from "context/GruposContext";
import { useHistory } from "react-router-dom";
//Firebase
import { app, db } from "firebase.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export default function useGrupos() {
  const { grupos, setGrupos } = useContext(GruposContext);
  const [loadinggrupos, setLoadingGrupos] = useState(false);
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
  let gruposTotal = [];

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setSuccess({ status: false, msg: "" });
      setLoadingGrupos(true);
      if (auth.currentUser) {
        setState({
          loading: false,
          error: false,
        });
        getGrupos(auth.currentUser.uid);
        // getCuentas(auth.currentUser.uid);
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

  const createDefaultGrupo = useCallback((user) => {
    isSubscribed = true;
    const colRefGrupos = collection(db, "grupos");
    const colRefGrupoUser = collection(db, "grupouser");
    addDoc(colRefGrupos, {
      icono: "piechardOutline",
      color: "#7895ff",
      imagen: null,
      name: "General",
      default: true,
      codinv: null,
      desc: "Grupo de gastos generales.",
      createdby: user.uid,
    })
      .then((res) => {
        getDoc(res).then((snapshot) => {
          if (isSubscribed) {
            addDoc(colRefGrupoUser, {
              admin: true,
              uidgrupo: snapshot.id,
              uiduser: user.uid,
            })
              .then((res) => {
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const getGrupos = useCallback(async (uid) => {
    let grupocopia = [];
    const colRefGrupoUser = collection(db, "grupouser");
    const pRefGrupoUser = query(colRefGrupoUser, where("uiduser", "==", uid));
    getDocs(pRefGrupoUser).then((grupouser) => {
      grupouser.forEach(async (gid) => {
        let actual = await getDoc(doc(db, "grupos", gid.data().uidgrupo));
        grupocopia.push({ ...actual.data(), docid: actual.id });
        localStorage.setItem("Groups", JSON.stringify(grupocopia));
      });
    });
    setGrupos(JSON.parse(localStorage.getItem("Groups")));
  });

  // const createNewCuenta = useCallback((cuenta) => {
  //   const colRef = collection(db, "cuentas");
  //   addDoc(colRef, cuenta)
  //     .then((res) => {
  //       setSuccess({ status: true, msg: "Cuenta creada con exito!" });
  //       setTimeout(() => {
  //         history.push("/cuentas");
  //       }, 2000);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
  // const deleteCuenta = useCallback(async (cuenta) => {
  //   console.log("cuentas length", cuentas.length);
  //   if (cuentas.length <= 1) {
  //     setError({ status: true, msg: "No puedes eliminar tu ultima cuenta!" });
  //   } else {
  //     deleteDoc(doc(db, "cuentas", cuenta.docid)).then((res) => {
  //       setSuccess({ status: true, msg: "Cuenta eliminada con exito!" });
  //       getCuentas(auth.currentUser.uid);
  //     });
  //   }
  // });

  return {
    errors: errorMSG,
    error: error,
    setError,
    success: success,
    loadinggrupos,
    grupos,
    success,
    setSuccess,
    createDefaultGrupo,
    getGrupos,
  };
}
