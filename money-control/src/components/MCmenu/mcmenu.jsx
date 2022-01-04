import React from "react";
import { Redirect, Route } from "react-router-dom";

import useUser from "hooks/useUser";
import { IonMenu, IonContent, IonItem, IonLabel } from "@ionic/react";
import logo from "assets/logo/money_control_small.png";

import "./mcmenu.css";
// import {
//   ellipse,
//   square,
//   triangle,
//   personOutline,
//   homeOutline,
//   arrowForwardCircle,
// } from "ionicons/icons";

export default function MCmenu() {
  const { auth, profile } = useUser();
  console.log(profile);
  // const Profile = React.lazy(() => import("../../pages/Profile/Profile"));
  // const Login = React.lazy(() => import("../../pages/Login/Login"));

  const userImage = {
    backgroundImage: 'url("' + profile.image + '")',
  };

  return (
    <>
      <IonMenu
        side="start"
        menuId="first"
        contentId="menuContent"
        className="menu-sidebar"
      >
        <IonContent>
          <div className="sidebar">
            <div className="sidebar-header">
              <div className="back_logo">
                <img src={logo} alt="" srcset="" />
              </div>
            </div>
            <div className="sidebar-top">
              <div className="image">
                <div className="image-circle" style={userImage}></div>
              </div>
              <IonLabel className="label">{profile.name}</IonLabel>
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
