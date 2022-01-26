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
  limit,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { randomString, defaultCategories } from "global/functions";

export default function useGrupos() {
  const { grupos, setGrupos } = useContext(GruposContext);
  const { grupoSelected, setgrupoSelected } = useContext(GruposContext);
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

  const createNewGrupo = useCallback(async (grupo) => {
    isSubscribed = true;
    const colRef = collection(db, "grupos");
    let codigoInv = grupo.codinv ? null : await createNewCode(colRef); //comprueba si el grupo es privado
    addDoc(colRef, {
      ...grupo,
      codinv: codigoInv,
      users: [auth.currentUser.uid],
      categories: defaultCategories,
    })
      .then((res) => {
        setSuccess({ status: true, msg: "Grupo creado con exito!" });
        setTimeout(() => {
          history.push("/groups");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const createNewCode = async (colRef) => {
    let ok = false;
    let codinv = "";
    while (!ok) {
      codinv = randomString(8);
      const checkifinvexits = query(colRef, where("codinv", "==", codinv));
      const querySnapshot = await getDocs(checkifinvexits);
      if (querySnapshot.empty) {
        ok = true;
      }
    }
    return codinv;
  };

  const createDefaultGrupo = useCallback((user) => {
    isSubscribed = true;
    const colRefGrupos = collection(db, "grupos");
    addDoc(colRefGrupos, {
      icono: "piechardOutline",
      color: "#7895ff",
      imagen: null,
      name: "General",
      default: true,
      codinv: null,
      desc: "Grupo de gastos generales.",
      createdby: user.uid,
      users: [user.uid],
      categories: defaultCategories,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const getGrupos = useCallback(async (uid) => {
    let isAdmin = false;
    const colRefGrupoUser = collection(db, "grupos");
    const q = query(colRefGrupoUser, where("users", "array-contains", uid));
    const querySnapshot = await getDocs(q);
    let grupocopia = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().createdby == uid) {
        isAdmin = true;
      } else {
        isAdmin = false;
      }
      grupocopia.push({ ...doc.data(), docid: doc.id, isAdmin: isAdmin });
    });
    if (isSubscribed) {
      setGrupos(grupocopia);
      setLoadingGrupos(false);
    }
  });

  const joinGroup = useCallback(async (code) => {
    const colRefGrupoUser = collection(db, "grupos");
    console.log("joinGroup", code);
    if (code) {
      if (code.length == 8) {
        setLoadingGrupos(true);
        let grupo = await getGrupoByCodInv(code);
        let codeOK = await checkCodeExists(code);
        let userInGroup = await checkUserinGroup(auth.currentUser.uid, code);
        if (codeOK && !userInGroup) {
          const docRef = doc(db, "grupos", grupo.docid);
          updateDoc(docRef, {
            users: arrayUnion(auth.currentUser.uid),
          }).then((res) => {
            setLoadingGrupos(false);
            getGrupos(auth.currentUser.uid);
            setSuccess({ status: true, msg: "Te has unido a un nuevo grupo." });
          });
        } else {
          setLoadingGrupos(false);
          setError({
            status: true,
            msg: "Ya perteneces a este grupo!",
          });
        }
      } else {
        setError({
          status: true,
          msg: "Los códigos de grupo deben tener 8 carácteres.",
        });
      }
    } else {
      setError({
        status: true,
        msg: "No has introducido ningún código.",
      });
    }
  });

  const checkCodeExists = async (code) => {
    const colRef = collection(db, "grupos");
    let ok = false;
    const checkifinvexits = query(colRef, where("codinv", "==", code));
    const querySnapshot = await getDocs(checkifinvexits);
    if (querySnapshot.empty) {
      ok = false;
    } else {
      ok = true;
    }
    return ok;
  };

  const checkUserinGroup = async (uiduser, groupcode) => {
    const colRef = collection(db, "grupos");
    let ok = false;
    const q = query(
      colRef,
      where("users", "array-contains", uiduser),
      where("codinv", "==", groupcode)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      ok = false;
    } else {
      ok = true;
    }
    return ok;
  };

  const getGrupoByCodInv = useCallback(async (codinbv) => {
    const colRefGrupo = collection(db, "grupos");
    const q = query(colRefGrupo, where("codinv", "==", codinbv));
    const querySnapshot = await getDocs(q);
    let gruposbycodinv = [];
    querySnapshot.forEach((doc) => {
      gruposbycodinv.push({ ...doc.data(), docid: doc.id });
    });
    if (isSubscribed && gruposbycodinv.length > 0) {
      return gruposbycodinv[0];
    }
  });

  const exitGroup = useCallback(async (grupo) => {
    const grupoRef = doc(db, "grupos", grupo.docid);
    updateDoc(grupoRef, {
      users: arrayRemove(auth.currentUser.uid),
    }).then((res) => {
      setLoadingGrupos(false);
      getGrupos(auth.currentUser.uid);
      setSuccess({ status: true, msg: "Has salido del grupo" });
    });
  });

  const getGroup = useCallback(async (uid) => {
    setLoadingGrupos(true);
    const docRef = doc(db, "grupos", uid);
    const Grupo = await getDoc(docRef);
    let isAdmin = false;
    if (Grupo.data().createdby == auth.currentUser.uid) {
      isAdmin = true;
    } else {
      isAdmin = false;
    }
    setgrupoSelected({ ...Grupo.data(), docid: Grupo.id, isAdmin: isAdmin });
    await setLoadingGrupos(false);
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
  const deleteGroup = useCallback(async (grupo) => {
    if (grupo.default) {
      setError({
        status: true,
        msg: "No puedes eliminar tu grupo principal.",
      });
    } else {
      deleteDoc(doc(db, "grupos", grupo.docid)).then((res) => {
        setSuccess({ status: true, msg: "Grupo eliminado con exito!" });
        getGrupos(auth.currentUser.uid);
      });
    }
  });

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
    createNewGrupo,
    joinGroup,
    exitGroup,
    deleteGroup,
    getGroup,
    setgrupoSelected,
    grupoSelected,
  };
}
