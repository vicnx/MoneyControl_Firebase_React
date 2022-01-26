import { IonContent, IonImg, IonLabel, IonPage } from "@ionic/react";
import people from "assets/images/people_SVG.svg";
import MCloading from "components/Generales/MCloading/MCloading";
import useUser from "hooks/useUser";
import GoogleButton from "../../components/auth/googleButton";
import "./Login.css";

const LoginPage = () => {
  const { loadingUser, auth } = useUser();
  return (
    <IonPage>
      <IonContent fullscreen>
        {loadingUser ? (
          <MCloading loading={true} />
        ) : auth.currentUser ? (
          <></>
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
