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
import {
  add,
  settings,
  logoInstagram,
  cardOutline,
  cartOutline,
  peopleOutline,
} from "ionicons/icons";

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
      <IonFab vertical="top" horizontal="start" slot="fixed">
        <IonFabButton>
          <IonIcon icon={add} />
        </IonFabButton>
        <IonFabList>
          <IonButton
            color="secondary"
            shape="round"
            size="small"
            className="floatingmenu-button"
          >
            <IonIcon icon={cardOutline} slot="start" />
            <IonLabel>CUENTAS</IonLabel>
          </IonButton>
          <IonButton
            color="tertiary"
            shape="round"
            size="small"
            className="floatingmenu-button"
          >
            <IonIcon icon={cartOutline} slot="start" />
            <IonLabel>GASTOS</IonLabel>
          </IonButton>
          <IonButton
            color="secondary"
            shape="round"
            size="small"
            className="floatingmenu-button"
          >
            <IonIcon icon={peopleOutline} slot="start" />
            <IonLabel>GRUPOS</IonLabel>
          </IonButton>
        </IonFabList>
      </IonFab>
    </>
  );
}
