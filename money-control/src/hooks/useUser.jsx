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
  // const firebase = useFirebaseApp();
  // const user = useUserFirebase();

  const [profile, setProfile] = useState();
  const [isLogged, setIsLogged] = useState(false);
  // const [user, setUser] = useState(null);
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

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      if (auth.currentUser) {
        setState({
          loading: false,
          error: false,
          loadingUser: false,
          isLogged: true,
        });
        console.log(auth);
        getProfile(auth.currentUser.uid);

        // getProfile(user.data.uid)
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
  }, [auth]);

  const GoogleSignIn = () => {
    setState({ loading: true, error: false, loadingUser: true });
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        console.log(result);
        const additionalUserInfo = getAdditionalUserInfo(result);
        if (additionalUserInfo.isNewUser) {
          createProfile(result.user);
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
    const colRef = collection(db, "profiles");
    addDoc(colRef, { uid: user.uid, admin: false, email: user.email })
      .then((res) => {
        getDoc(res).then((snapshot) => {
          setProfile(snapshot.data());
        });
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
      setProfile(doc.data());
    });
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
  };
}
