import React from "react";
import { Redirect, Route } from "react-router-dom";

import useUser from "hooks/useUser";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonMenuButton,
  IonContent,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import "./mctabbar.css";
import {
  ellipse,
  square,
  triangle,
  personOutline,
  homeOutline,
} from "ionicons/icons";

import MCfabmenu from "components/MCfabmenu/mcfabmenu";
import MCmenu from "components/MCmenu/mcmenu";

export default function MCtabbar() {
  const { auth } = useUser();
  const Profile = React.lazy(() => import("../../pages/Profile/Profile"));
  const Login = React.lazy(() => import("../../pages/Login/Login"));
  const userImage = {
    backgroundImage: 'url("' + auth.currentUser.photoURL + '")',
  };

  return (
    <>
      <IonTabs>
        <IonRouterOutlet id="menuContent">
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/tab2">
            <Profile />
          </Route>
          <Route path="/tab3">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="profile" href="/profile" layout="icon-top">
            <IonIcon icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/home" layout="icon-top">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton>
            <IonMenuButton />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <MCmenu />
    </>
  );
}
