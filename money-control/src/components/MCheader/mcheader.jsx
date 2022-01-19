import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useUser from "hooks/useUser";
import {
  IonIcon,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonAvatar,
  IonMenuButton,
} from "@ionic/react";
import { gridOutline } from "ionicons/icons";
import "./mcheader.css";

export default function MCheader() {
  const { auth, profile } = useUser();
  const [page, setPage] = useState("");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setPage("Home");
        break;
      case "/profile":
        setPage("Perfil");
        break;
      case "/cuentas":
        setPage("Gestión de cuentas");
        break;
      case "/cuentas/add":
        setPage("Nueva cuenta");
        break;
      default:
        setPage("");
        break;
    }
  }, [location]);

  console.log(auth);
  return (
    <>
      <IonHeader className="ion-no-border" color="white" fixed>
        <IonToolbar color="white">
          <IonMenuButton autoHide={true} slot="start">
            <IonIcon
              icon={gridOutline}
              style={{ color: "var(--ion-color-primary-shade)" }}
            />
          </IonMenuButton>
          <IonTitle>{page}</IonTitle>
          <IonAvatar slot="end" className="header-avatar">
            <img src={profile.image} />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
    </>
  );
}
