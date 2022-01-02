import { useCallback, useContext, useState, useEffect } from "react"; //evita que se vuelva a ejecutar una funcion
import UserContext from "context/UserContext";
//Firebase
import { app, googleAuthProvider } from "firebase.jsx";
import {
  signInWithPopup,
  getAdditionalUserInfo,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

export default function useUser() {
  // const firebase = useFirebaseApp();
  // const user = useUserFirebase();

  const [profile, setProfile] = useState();
  // const [user, setUser] = useState(null);
  const [state, setState] = useState({
    loading: false,
    error: false,
    loadingUser: true,
  });
  const [error, setError] = useState({ status: false, msg: "" });
  const [success, setSuccess] = useState({ status: false, msg: "" });
  const [errorMSG, setErrorMSG] = useState("");

  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (auth.currentUser) {
        console.log(auth.currentUser);
        setState({ loading: false, error: false, loadingUser: false });
        // getProfile(user.data.uid)
      } else {
        setState({ loading: false, error: false, loadingUser: true });
        setTimeout(() => {
          setState({ loading: false, error: false, loadingUser: false });
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
          //TODO: Crear perfil de usuario
          console.log("NUEVO USUARIO");
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
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
  };
}
