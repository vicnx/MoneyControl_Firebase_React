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
  return (
    <>
      <IonMenu
        side="start"
        menuId="first"
        contentId="menuContent"
        className="menu-sidebar"
      >
        {/* <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonContent>
          <div className="sidebar">
            <div className="sidebar-top">
              <div className="image-circle" style={userImage}></div>
            </div>
            <div className="sidebar-bottom">
              <IonItem>Menu Item</IonItem>
              <IonItem>Menu Item</IonItem>
              <IonItem>Menu Item</IonItem>
              <IonItem>Menu Item</IonItem>
              <IonItem>Menu Item</IonItem>
            </div>
          </div>
        </IonContent>
      </IonMenu>
    </>
  );
}
