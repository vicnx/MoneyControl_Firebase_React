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
import MCheader from "components/MCheader/mcheader";

export default function MCrouter() {
  const { auth } = useUser();
  const Profile = React.lazy(() => import("pages/Profile/Profile"));
  const Home = React.lazy(() => import("pages/Home/Home"));
  const Cuentas = React.lazy(() => import("pages/Cuentas/Cuentas"));
  const DatosCuenta = React.lazy(() =>
    import("pages/Cuentas/DatosCuenta/DatosCuenta")
  );
  const Grupos = React.lazy(() => import("pages/Grupos/Grupos"));
  const DatosGrupo = React.lazy(() =>
    import("pages/Grupos/DatosGrupo/DatosGrupo")
  );

  return (
    <>
      <MCmenu fabhidden={true} />
      <MCfabmenu />
      <MCheader />
      <IonRouterOutlet id="menuContent">
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/cuentas" component={Cuentas}></Route>
          <Route exact path="/cuentas/add" component={DatosCuenta}></Route>
          <Route exact path="/groups" component={Grupos}></Route>
          <Route exact path="/groups/add" component={DatosGrupo}></Route>

          <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
        </Switch>
      </IonRouterOutlet>
    </>
  );
}
