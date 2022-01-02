import { Redirect, Route } from "react-router-dom";
import React, { Suspense } from "react";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { UserContextProvider } from "context/UserContext";

import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
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

setupIonicReact();

const Profile = React.lazy(() => import("./pages/Profile/Profile"));

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
          <IonReactRouter>
            {isLogged ? (
              <IonTabs>
                <IonRouterOutlet>
                  <Route exact path="/profile">
                    <Profile />
                  </Route>
                  <Route exact path="/tab2">
                    <Login />
                  </Route>
                  <Route path="/tab3">
                    <Login />
                  </Route>
                  <Route exact path="/">
                    <Redirect to="/profile" />
                  </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                  <IonTabButton tab="profile" href="/profile">
                    <IonIcon icon={triangle} />
                    <IonLabel>Profile</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab2" href="/tab2">
                    <IonIcon icon={ellipse} />
                    <IonLabel>Tab 2</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab3" href="/tab3">
                    <IonIcon icon={square} />
                    <IonLabel>Tab 3</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            ) : (
              <Login />
            )}
          </IonReactRouter>
        </IonApp>
      </Suspense>
    </UserContextProvider>
  );
}

export default App;
