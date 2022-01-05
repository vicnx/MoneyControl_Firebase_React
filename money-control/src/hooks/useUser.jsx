import { useCallback, useContext, useState, useEffect } from "react"; //evita que se vuelva a ejecutar una funcion
import UserContext from "context/UserContext";
//Firebase
import { app, googleAuthProvider, db } from "firebase.jsx";
import {
  signInWithPopup,
  getAdditionalUserInfo,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

import {
  addDoc,
  collection,
  getDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function useUser() {
  const [profile, setProfile] = useState({});
  const [cuentas, setCuentas] = useState();
  const [loadingprofile, setLoadingProfile] = useState(false);
  const [loadingcuentas, setLoadingCuentas] = useState(false);
  const [state, setState] = useState({
    loading: false,
    error: false,
    loadingUser: true,
    isLogged: false,
  });
  const [error, setError] = useState({ status: false, msg: "" });
  const [success, setSuccess] = useState({ status: false, msg: "" });
  const [errorMSG, setErrorMSG] = useState("");
  const auth = getAuth(app);
  let isSubscribed = true;

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setLoadingProfile(true);
      setLoadingCuentas(true);
      if (auth.currentUser) {
        setState({
          loading: false,
          error: false,
          loadingUser: false,
          isLogged: true,
        });
        getProfile(auth.currentUser.uid);
        getCuentas(auth.currentUser.uid);
      } else {
        setState({
          loading: false,
          error: false,
          loadingUser: true,
          isLogged: false,
        });
        setTimeout(() => {
          setState({
            loading: false,
            error: false,
            loadingUser: false,
            isLogged: false,
          });
        }, 500);
      }
    });
    return () => (isSubscribed = false);
  }, [auth]);

  const GoogleSignIn = () => {
    setState({ loading: true, error: false, loadingUser: true });
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const additionalUserInfo = getAdditionalUserInfo(result);
        if (additionalUserInfo.isNewUser) {
          createProfile(result.user);
          createDefaultCuenta(result.user);
          setState({ loading: false, error: false, loadingUser: false });
        } else {
          console.log("ESTE USUARIO YA EXISITIA");
          setState({ loading: false, error: false, loadingUser: false });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SignOut = () => {
    signOut(auth)
      .then(() => {
        setState({ loading: false, error: false, loadingUser: false });
        setProfile(null);

        window.location.reload();
      })
      .catch((error) => {
        setProfile(null);

        console.log(error);
      });
  };

  const createProfile = useCallback((user) => {
    isSubscribed = true;
    const colRef = collection(db, "profiles");
    addDoc(colRef, {
      uid: user.uid,
      admin: false,
      email: user.email,
      image: user.photoURL,
    })
      .then((res) => {
        getDoc(res).then((snapshot) => {
          if (isSubscribed) {
            setProfile(
              Object.assign(snapshot.data(), {
                name: auth.currentUser.displayName,
                email: auth.currentUser.email,
              })
            );
            setLoadingProfile(false);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const createDefaultCuenta = useCallback((user) => {
    const colRef = collection(db, "cuentas");
    addDoc(colRef, {
      uid: user.uid,
      icono: "Icons.cashOutline",
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

  const getProfile = useCallback(async (uid) => {
    const colRef = collection(db, "profiles");
    const pRef = await query(colRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(pRef);
    querySnapshot.forEach((doc) => {
      if (isSubscribed) {
        setProfile(
          Object.assign(doc.data(), {
            name: auth.currentUser.displayName,
            email: auth.currentUser.email,
          })
        );
        setLoadingProfile(false);
      }
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
    GoogleSignIn,
    SignOut,
    isLogginLoading: state.loading,
    hasLoginError: state.error,
    errors: errorMSG,
    loadingUser: state.loadingUser,
    error: error,
    success: success,
    auth,
    isLogged: state.isLogged,
    profile,
    loadingprofile,
    loadingcuentas,
    cuentas,
  };
}
