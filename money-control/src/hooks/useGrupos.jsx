import GruposContext from "context/GruposContext";
//Firebase
import { app, db } from "firebase.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { defaultCategories, randomString } from "global/functions";
import { useCallback, useContext, useEffect, useState } from "react"; //evita que se vuelva a ejecutar una funcion
import { useHistory } from "react-router-dom";
import useCuentas from "./useCuentas";

export default function useGrupos() {
  const { grupos, setGrupos } = useContext(GruposContext);
  const { grupoSelected, setgrupoSelected } = useContext(GruposContext);
  const [loadinggrupos, setLoadingGrupos] = useState(false);
  const [loadinggastos, setLoadingGastos] = useState(false);
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
  const { removeSaldo } = useCuentas();

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setSuccess({ status: false, msg: "" });
      setLoadingGrupos(true);
      if (auth.currentUser) {
        setState({
          loading: false,
          error: false,
        });
        setError({
          status: false,
          msg: false,
        });
        getGrupos(auth.currentUser.uid);
        // getCuentas(auth.currentUser.uid);
      } else {
        setState({
          loading: false,
          error: false,
        });
        setError({
          status: false,
          msg: false,
        });
        setTimeout(() => {
          setState({
            loading: false,
            error: false,
          });
          setError({
            status: false,
            msg: false,
          });
        }, 500);
      }
    });
    return () => (isSubscribed = false);
  }, [auth]);

  const createNewGrupo = useCallback(async (grupo) => {
    if (grupos.length >= 10) {
      setError({
        status: true,
        msg: "Solo puedes pertenecer a 10 grupos como máximo.",
      });
      setTimeout(() => {
        history.push("/groups");
      }, 2000);
    } else {
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
    }
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
        addDoc(colRefGrupos, {
          icono: "listOutline",
          color: "#ffe278",
          imagen: null,
          name: "Gastos Totales",
          default: false,
          onlyread: true,
          codinv: null,
          desc: "Aquí puedes visualizar los gastos totales.",
          createdby: user.uid,
          users: [user.uid],
        })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const getGrupos = useCallback(async (uid, refers) => {
    let isAdmin = false;
    const gastosArray = [];
    const colRefGrupoUser = collection(db, "grupos");
    const q = query(colRefGrupoUser, where("users", "array-contains", uid));
    const querySnapshot = await getDocs(q);
    let grupocopia = [];
    querySnapshot.forEach((grupo) => {
      if (grupo.data().createdby == uid) {
        isAdmin = true;
      } else {
        isAdmin = false;
      }
      if (refers && grupo.data().gastos) {
        grupo.data().gastos.forEach(async (gasto) => {
          const docRef = doc(db, "profiles", gasto.profile);
          getDoc(docRef).then((profile) => {
            gasto.profileData = profile.data();
            console.log("gastoprofiledata", gasto);
            gastosArray.push(gasto);
          });
          console.log(gastosArray);
        });
        grupocopia.push({
          ...grupo.data(),
          docid: grupo.id,
          isAdmin: isAdmin,
          gastos: gastosArray,
        });
      } else {
        grupocopia.push({
          ...grupo.data(),
          docid: grupo.id,
          isAdmin: isAdmin,
        });
      }
    });
    if (isSubscribed) {
      setGrupos(grupocopia);
      setLoadingGrupos(false);
    }
  });

  const joinGroup = useCallback(async (code) => {
    if (grupos.length >= 10) {
      setError({
        status: true,
        msg: "Solo puedes pertenecer a 10 grupos como máximo.",
      });
      setTimeout(() => {
        history.push("/groups");
      }, 2000);
    } else {
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
              setSuccess({
                status: true,
                msg: "Te has unido a un nuevo grupo.",
              });
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

  const getGroup = useCallback(async (uid, ref = true) => {
    isSubscribed = true;
    setLoadingGastos(true);
    const gastosArray = [];
    const docRef = doc(db, "grupos", uid);
    const Grupo = await getDoc(docRef);
    let isAdmin = false;
    if (Grupo.data().createdby == auth.currentUser.uid) {
      isAdmin = true;
    } else {
      isAdmin = false;
    }
    if (ref && Grupo.data().gastos) {
      Grupo.data().gastos.forEach(async (gasto) => {
        const docRef = doc(db, "profiles", gasto.profile);
        getDoc(docRef).then((profile) => {
          gasto.profileData = profile.data();
          gasto.fechaConvert = new Date(gasto.fecha).toLocaleDateString(
            "es-ES"
          );
          gastosArray.push(gasto);
        });
      });
      if (isSubscribed) {
        setgrupoSelected({
          ...Grupo.data(),
          docid: Grupo.id,
          isAdmin: isAdmin,
          gastos: gastosArray,
        });
        isSubscribed = false;
        setTimeout(() => {
          setLoadingGastos(false);
          setLoadingGrupos(false);
        }, 1000);
      }
    } else {
      if (isSubscribed) {
        setgrupoSelected({
          ...Grupo.data(),
          docid: Grupo.id,
          isAdmin: isAdmin,
        });
        isSubscribed = false;
        setTimeout(() => {
          setLoadingGastos(false);
          setLoadingGrupos(false);
        }, 1000);
      }
    }
  });

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

  const createCategoria = useCallback(async (grupo, categoria) => {
    console.log("grupo.categories.length", grupo.categories.length);
    if (grupo.categories.length >= 10) {
      setError({
        status: true,
        msg: "Solo se permiten 10 categorias.",
      });
      setTimeout(() => {
        history.push("/categories/" + grupo.docid);
        setLoadingGrupos(false);
      }, 1000);
    } else {
      setLoadingGrupos(true);
      const grupoRef = doc(db, "grupos", grupo.docid);
      updateDoc(grupoRef, {
        categories: arrayUnion(categoria),
      }).then((res) => {
        getGrupos(auth.currentUser.uid);
        getGroup(grupo.docid, true);
        setSuccess({ status: true, msg: "Nueva categoría creada!" });
        setTimeout(() => {
          history.push("/categories/" + grupo.docid);
          setLoadingGrupos(false);
        }, 1000);
      });
    }
  });
  const deleteCategoria = useCallback(async (grupo, categoria) => {
    if (grupo.categories.length <= 1) {
      setError({
        status: true,
        msg: "No puedes eliminar tu ultima categoria!",
      });
    } else {
      const grupoRef = doc(db, "grupos", grupo.docid);
      updateDoc(grupoRef, {
        categories: arrayRemove(categoria),
      }).then((res) => {
        setLoadingGrupos(false);
        getGrupos(auth.currentUser.uid);
        getGroup(grupo.docid, true);
        setSuccess({ status: true, msg: "Categoría eliminada!" });
      });
    }
  });

  const nuevoGasto = async (newGasto, grupo) => {
    const grupoRef = doc(db, "grupos", grupo.docid);
    updateDoc(grupoRef, {
      gastos: arrayUnion(newGasto),
    }).then((res) => {
      removeSaldo(newGasto.cuenta, newGasto.cantidad);
      const gastosTotalesGroup = grupos.filter((grupo) => grupo.onlyread);
      const grupoDefRef = doc(db, "grupos", gastosTotalesGroup[0].docid);
      let gastoDefault = {
        ...newGasto,
        group: grupo,
      };
      updateDoc(grupoDefRef, {
        gastos: arrayUnion(gastoDefault),
      });
      // if (!grupo.default) {
      //   const defaultGroup = grupos.filter((grupo) => grupo.default);
      //   const grupoDefRef = doc(db, "grupos", defaultGroup[0].docid);
      //   let gastoDefault = {
      //     ...newGasto,
      //     isOtherGroup: true,
      //     otherGroup: grupo,
      //   };
      //   updateDoc(grupoDefRef, {
      //     gastos: arrayUnion(gastoDefault),
      //   });
      // }
      getGrupos(auth.currentUser.uid);
      getGroup(grupo.docid, true);
      setSuccess({ status: true, msg: "Nuevo gasto añadido!" });
      setTimeout(() => {
        history.push("/group/" + grupo.docid);
        setLoadingGrupos(false);
      }, 1000);
    });
  };

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
    createCategoria,
    deleteCategoria,
    nuevoGasto,
    loadinggastos,
  };
}
