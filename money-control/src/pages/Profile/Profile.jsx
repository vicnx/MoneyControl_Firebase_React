import { IonContent, IonPage } from "@ionic/react";
import "./Profile.css";
import useUser from "hooks/useUser";
import MCloading from "components/MCloading/MCloading";
import MCprofile from "components/MCprofile/mcprofile";
import React from "react";

const Profile = () => {
  const { loadingprofile } = useUser();

  return (
    <IonPage>
      <IonContent fullscreen>
        {loadingprofile ? <MCloading /> : <MCprofile />}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
