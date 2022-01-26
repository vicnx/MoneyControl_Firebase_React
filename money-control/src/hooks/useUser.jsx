import UserContext from "context/UserContext";
//Firebase
import { app, db, googleAuthProvider } from "firebase.jsx";
import {
  getAdditionalUserInfo,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useCallback, useContext, useEffect, useState } from "react"; //evita que se vuelva a ejecutar una funcion
import useCuentas from "./useCuentas";
import useGrupos from "./useGrupos";

export default function useUser() {
  const { profile, setProfile } = useContext(UserContext);
  const { createDefaultCuenta } = useCuentas();
  const { createDefaultGrupo } = useGrupos();
  const [loadingprofile, setLoadingProfile] = useState(false);
  const [state, setState] = useState({
    loading: false,
    error: false,
    loadingUser: true,
    isLogged: false,
  });
  const [error, setError] = useState({ status: false, msg: "" });
  const [success, setSuccess] = useState({ status: false, msg: "" });
  const auth = getAuth(app);
  let isSubscribed = true;

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setLoadingProfile(true);
      if (auth.currentUser) {
        setState({
          loading: false,
          error: false,
          loadingUser: false,
          isLogged: true,
        });
        getProfile(auth.currentUser.uid);
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
          createDefaultGrupo(result.user);
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
        setProfile({});

        window.location.reload();
      })
      .catch((error) => {
        setProfile({});
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
      name: user.displayName,
    })
      .then((res) => {
        getDoc(res).then((snapshot) => {
          if (isSubscribed) {
            setProfile(snapshot.data());
            setLoadingProfile(false);
          }
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
      if (isSubscribed) {
        let profileTemp = doc.data();
        console.log(profileTemp);
        setProfile({ ...profileTemp, docid: doc.id });
        setLoadingProfile(false);
      }
    });
  });

  const updateProfile = async (newdata) => {
    const docRef = doc(db, "profiles", profile.docid);
    console.log(profile.docid);
    updateDoc(docRef, {
      image: newdata.imageURL,
    }).then((res) => {
      getProfile(auth.currentUser.uid);
    });
  };

  return {
    GoogleSignIn,
    SignOut,
    isLogginLoading: state.loading,
    hasLoginError: state.error,
    loadingUser: state.loadingUser,
    error: error,
    setError,
    setSuccess,
    success: success,
    auth,
    isLogged: state.isLogged,
    profile,
    loadingprofile,
    updateProfile,
  };
}
