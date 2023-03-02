import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactHashRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import MCloading from "components/Generales/MCloading/MCloading";
import useUser from "hooks/useUser";
import React, { Suspense } from "react";
import MCrouter from "router";
import Login from "./pages/Login/Login";
/* Theme variables */
import "./theme/variables.css";
// import "./theme/variables-dark.css"; //Activar solo en caso de tener completado el modo oscuro
import "./app.css";

setupIonicReact();

function App() {
  const { isLogged } = useUser();

  return (
    <Suspense fallback={<MCloading loading={true} />}>
      <IonApp>
        <IonReactHashRouter>
          {isLogged ? <MCrouter /> : <Login />}
        </IonReactHashRouter>
      </IonApp>
    </Suspense>
  );
}

export default App;
