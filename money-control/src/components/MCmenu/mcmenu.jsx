import React, { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";

import useUser from "hooks/useUser";
import {
  IonMenu,
  IonContent,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonMenuToggle,
  IonRouterOutlet,
  IonFab,
  IonFabButton,
  IonMenuButton,
} from "@ionic/react";
import logo from "assets/logo/logorounded.png";
import MCrouter from "router";

import "./mcmenu.css";
import {
  ellipse,
  homeOutline,
  personOutline,
  gridOutline,
} from "ionicons/icons";
import { menuController } from "@ionic/core";

export default function MCmenu() {
  const { auth, profile } = useUser();
  const [selected, setSelected] = useState("");
  const [closed, setClosed] = useState("");

  console.log(profile);
  const location = useLocation();
  // const Profile = React.lazy(() => import("../../pages/Profile/Profile"));
  // const Login = React.lazy(() => import("../../pages/Login/Login"));

  const userImage = {
    backgroundImage: 'url("' + profile.image + '")',
  };
  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonMenuButton autoHide={true}>
            <IonIcon icon={gridOutline} />
          </IonMenuButton>
        </IonFabButton>
      </IonFab>
      <IonMenu
        side="start"
        menuId="first"
        contentId="menuContent"
        className="menu-sidebar"
        autoHide="true"
      >
        <IonContent scrollX="false" scrollY="false">
          <div className="sidebar">
            <div className="sidebar-header">
              <div className="back_logo">
                <img src={logo} alt="" />
              </div>
            </div>
            {/* <hr className="menu-divider" /> */}
            <div className="sidebar-top">
              <div className="image">
                <div className="image-circle" style={userImage}></div>
              </div>
              <IonLabel className="label">{profile.name}</IonLabel>
              <IonLabel className="label small">{profile.email}</IonLabel>
            </div>
            <hr className="menu-divider" />
            <div className="sidebar-bottom">
              <IonMenuToggle>
                <IonItem
                  className={
                    selected == "/home"
                      ? "menu-item selected-item"
                      : "menu-item"
                  }
                  routerLink={"/home"}
                  routerDirection="none"
                >
                  <IonIcon
                    className="menu-item-icon"
                    icon={homeOutline}
                  ></IonIcon>
                  <span>Home</span>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem
                  className={
                    selected == "/profile"
                      ? "menu-item selected-item"
                      : "menu-item"
                  }
                  routerLink={"/profile"}
                  routerDirection="none"
                >
                  <IonIcon
                    className="menu-item-icon"
                    icon={personOutline}
                  ></IonIcon>
                  <span>Profile</span>
                </IonItem>
              </IonMenuToggle>
            </div>
          </div>
        </IonContent>
      </IonMenu>
    </>
  );
}
