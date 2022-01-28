import {
  IonAvatar,
  IonBackButton,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { CONSTANTS } from "global/functions";
import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./mcheader.css";

export default function MCheader() {
  const { profile } = useUser();
  const [page, setPage] = useState("");

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname.split("/"));
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
      case "/groups":
        setPage("Gestión de grupos");
        break;
      case "/groups/add":
        setPage("Nuevo grupo");
        break;
      default:
        if (location.pathname.split("/")[1] == "categories") {
          setPage("Gestor de categorías");
        } else if (location.pathname.split("/")[1] == "newcategorie") {
          setPage("Nueva categoría");
        } else {
          setPage("");
        }
        break;
    }
  }, [location]);

  return (
    <>
      <IonHeader className="ion-no-border" color="white" fixed>
        <IonToolbar color="white">
          <IonTitle>{page}</IonTitle>
          {location.pathname == "/home" ? (
            <></>
          ) : (
            <IonBackButton
              defaultHref="/home"
              slot="start"
              text=""
              style={{
                color: "var(--ion-color-primary)",
                fontSize: "20px",
              }}
              className="backButtonHeader"
            />
          )}
          <IonMenuButton
            autoHide={true}
            slot="end"
            className="header-menu-avatar"
          >
            <IonAvatar className="header-avatar">
              <img
                src={profile.image ? profile.image : CONSTANTS.defaultAvatar}
              />
            </IonAvatar>
          </IonMenuButton>
        </IonToolbar>
      </IonHeader>
    </>
  );
}
