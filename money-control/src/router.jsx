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

import MCfabmenu from "components/Generales/MCfabmenu/mcfabmenu";
import MCmenu from "components/Generales/MCmenu/mcmenu";
import MCheader from "components/Generales/MCheader/mcheader";

export default function MCrouter() {
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
  const InfoGrupo = React.lazy(() =>
    import("pages/Grupos/InfoGrupo/InfoGrupo")
  );
  const CategoriasPage = React.lazy(() =>
    import("pages/Grupos/InfoGrupo/Categorias/categorias")
  );
  const NewCategoriaPage = React.lazy(() =>
    import("pages/Grupos/InfoGrupo/Categorias/newcategoria")
  );
  const NuevoGasto = React.lazy(() => import("pages/Gastos/NuevoGasto"));
  const AddMoney = React.lazy(() => import("pages/Cuentas/AddMoney/AddMoney"));
  const GastosListPage = React.lazy(() => import("pages/Gastos/GastosList"));
  const GastosTotales = React.lazy(() => import("pages/Gastos/GastosTotales"));

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
          <Route path="/group/:groupUID" component={InfoGrupo}></Route>
          <Route
            path="/categories/:groupUID"
            component={CategoriasPage}
          ></Route>
          <Route
            path="/newcategorie/:groupUID"
            component={NewCategoriaPage}
          ></Route>
          <Route path="/spendings/add" component={NuevoGasto}></Route>
          <Route path="/spendings/:groupUID" component={GastosListPage}></Route>
          <Route path="/totalspendings" component={GastosTotales}></Route>
          <Route path="/money/add" component={AddMoney}></Route>
          <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </IonRouterOutlet>
    </>
  );
}
