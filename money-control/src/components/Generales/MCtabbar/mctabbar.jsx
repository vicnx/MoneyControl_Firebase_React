import {
  IonIcon,
  IonMenuButton,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import MCmenu from "components/MCmenu/mcmenu";
import useUser from "hooks/useUser";
import { homeOutline, personOutline } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import "./mctabbar.css";

export default function MCtabbar() {
  const { auth } = useUser();
  const Profile = React.lazy(() => import("../../pages/Profile/Profile"));
  const Login = React.lazy(() => import("../../pages/Login/Login"));

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
