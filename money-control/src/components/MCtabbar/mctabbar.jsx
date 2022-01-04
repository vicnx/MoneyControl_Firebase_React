import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

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
  IonSplitPane,
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
      <MCmenu />

      <IonTabs>
        <IonRouterOutlet id="menuContent">
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/home">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="profile" href="/profile" layout="icon-top">
            <IonIcon icon={personOutline} />
          </IonTabButton>
          <IonTabButton tab="home" href="/home" layout="icon-top">
            <IonIcon icon={homeOutline} />
          </IonTabButton>
          <IonTabButton>
            <IonMenuButton autoHide={true} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
}
