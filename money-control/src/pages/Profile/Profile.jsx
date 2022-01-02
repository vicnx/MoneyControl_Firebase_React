import { IonContent, IonPage } from "@ionic/react";
import LogoutButton from "components/auth/logout";
import "./Profile.css";
import useUser from "hooks/useUser";
import MCloading from "components/MCloading/MCloading";
import MCprofile from "components/MCprofile/mcprofile";

const Profile = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <MCprofile />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
