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
import {
  ellipse,
  square,
  triangle,
  personOutline,
  homeOutline,
} from "ionicons/icons";

import MCfabmenu from "components/MCfabmenu/mcfabmenu";
import MCmenu from "components/MCmenu/mcmenu";

export default function MCrouter() {
  const { auth } = useUser();
  const Profile = React.lazy(() => import("pages/Profile/Profile"));
  const Login = React.lazy(() => import("pages/Login/Login"));
  const Home = React.lazy(() => import("pages/Home/Home"));
  const userImage = {
    backgroundImage: 'url("' + auth.currentUser.photoURL + '")',
  };

  return (
    <>
      <MCmenu />
      <IonRouterOutlet id="menuContent">
        <Route path="/home" component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>

        <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
      </IonRouterOutlet>
    </>
  );
}
