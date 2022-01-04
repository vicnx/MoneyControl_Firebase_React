import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonLabel,
  IonToolbar,
  IonImg,
} from "@ionic/react";
import GoogleButton from "../../components/auth/googleButton";
import LogoutButton from "components/auth/logout";
import "./Login.css";
import people from "assets/images/people_SVG.svg";
import useUser from "hooks/useUser";
import MCloading from "components/MCloading/MCloading";
import { Redirect } from "react-router-dom";

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
  return (
    <IonPage>
      <IonContent fullscreen>
        {loadingUser ? (
          <MCloading loading={true} />
        ) : auth.currentUser ? (
          // <Redirect to={"/profile"} />
          "hola"
        ) : (
          <div className="page">
            <div className="pageContent">
              <IonImg src={people} className="imageLogin" />
              <IonLabel color="primary" className="welcomeText">
                Welcome to Money Control
              </IonLabel>
              <small>The application to control your financial income</small>
              <br />

              <GoogleButton className="googleButton" />
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
