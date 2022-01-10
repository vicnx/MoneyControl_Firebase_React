import React from "react";
import { Redirect, Route, Switch, HashRouter } from "react-router-dom";

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
  const Home = React.lazy(() => import("pages/Home/Home"));
  const Cuentas = React.lazy(() => import("pages/Cuentas/Cuentas"));

  return (
    <>
      <MCmenu />
      <MCfabmenu />
      <IonRouterOutlet id="menuContent">
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/cuentas" component={Cuentas}></Route>
          <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
        </Switch>
      </IonRouterOutlet>
    </>
  );
}
