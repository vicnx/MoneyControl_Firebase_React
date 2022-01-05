import React from "react";
import { Redirect, Route } from "react-router-dom";

import useUser from "hooks/useUser";
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonButton,
  IonLabel,
} from "@ionic/react";

import "./mcfabmenu.css";
import { add, remove, arrowUp } from "ionicons/icons";

export default function MCfabmenu() {
  const { auth } = useUser();
  const Profile = React.lazy(() => import("../../pages/Profile/Profile"));
  const Login = React.lazy(() => import("../../pages/Login/Login"));
  const userImage = {
    backgroundImage: 'url("' + auth.currentUser.photoURL + '")',
  };

  console.log(auth);
  return (
    <>
      <IonFab
        vertical="bottom"
        horizontal="start"
        slot="fixed"
        className="options-fab"
      >
        <IonFabButton color="secondary">
          <IonIcon icon={arrowUp} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton color="success">
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabButton color="danger">
            <IonIcon icon={remove} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </>
  );
}
