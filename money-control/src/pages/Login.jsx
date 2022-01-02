import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
} from "@ionic/react";
import GoogleButton from "../components/auth/googleButton";
import LogoutButton from "components/auth/logout";
import "./Login.css";
import people from "assets/images/people_SVG.svg";
import useUser from "hooks/useUser";
import MCloading from "components/MCloading/MCloading";

const LoginPage = () => {
  const {
    isLogginLoading,
    hasLoginError,
    errors,
    loadingUser,
    error,
    success,
    auth,
  } = useUser();
  console.log(auth);
  return (
    <IonPage>
      <IonContent fullscreen>
        {loadingUser ? (
          <MCloading loading={true} />
        ) : auth.currentUser ? (
          <LogoutButton />
        ) : (
          <div className="page">
            <div className="pageContent">
              <IonImg src={people} className="imageLogin" />
              <GoogleButton className="googleButton" />
            </div>
          </div>
        )}
        {/* <MCloading loading={isLogginLoading} /> */}
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
