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
      <MCprofile />
    </IonPage>
  );
};

export default Profile;
