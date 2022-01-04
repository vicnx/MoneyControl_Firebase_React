import { Redirect, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { IonApp, setupIonicReact } from "@ionic/react";
import { UserContextProvider } from "context/UserContext";

import { IonReactRouter } from "@ionic/react-router";
// import Tab1 from "./pages/Tab1";
// import Tab2 from "./pages/Tab2";
// import Tab3 from "./pages/Tab3";
import Login from "./pages/Login/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import useUser from "hooks/useUser";
import MCloading from "components/MCloading/MCloading";
import MCtabbar from "components/MCtabbar/mctabbar";
import MCmenu from "components/MCmenu/mcmenu";
import MCrouter from "router";

setupIonicReact();

function App() {
  const {
    isLogginLoading,
    hasLoginError,
    errors,
    loadingUser,
    error,
    success,
    auth,
    isLogged,
  } = useUser();

  return (
    <UserContextProvider>
      <Suspense fallback={<MCloading loading={true} />}>
        <IonApp>
          <IonReactRouter>{isLogged ? <MCrouter /> : <Login />}</IonReactRouter>
        </IonApp>
      </Suspense>
    </UserContextProvider>
  );
}

export default App;
