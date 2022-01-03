import React from "react";
import { Redirect, Route } from "react-router-dom";

import useUser from "hooks/useUser";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
  IonMenuToggle,
  IonMenuButton,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";

import "./mcmenu.css";
import {
  ellipse,
  square,
  triangle,
  personOutline,
  homeOutline,
  arrowForwardCircle,
} from "ionicons/icons";

export default function MCmenu() {
  const { auth } = useUser();
  const Profile = React.lazy(() => import("../../pages/Profile/Profile"));
  const Login = React.lazy(() => import("../../pages/Login/Login"));
  const userImage = {
    backgroundImage: 'url("' + auth.currentUser.photoURL + '")',
  };

  console.log(auth);
  return (
    <>
      <IonMenu side="start" menuId="first" contentId="menuContent">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
}
