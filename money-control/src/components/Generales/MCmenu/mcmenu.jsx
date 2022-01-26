import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
} from "@ionic/react";
import logo from "assets/logo/logorounded.png";
import { CONSTANTS } from "global/functions";
import useUser from "hooks/useUser";
import {
  barChartOutline,
  gridOutline,
  homeOutline,
  peopleOutline,
  personOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./mcmenu.css";

export default function MCmenu(props) {
  const { profile } = useUser();
  const [selected, setSelected] = useState("");

  const location = useLocation();

  const userImage = {
    backgroundImage:
      'url("' +
      (profile.image ? profile.image : CONSTANTS.defaultAvatar) +
      '")',
  };
  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <>
      {props.fabhidden ? (
        <></>
      ) : (
        <IonFab
          vertical="bottom"
          horizontal="end"
          slot="fixed"
          className="menu-fab"
        >
          <IonFabButton>
            <IonMenuButton autoHide={true}>
              <IonIcon icon={gridOutline} />
            </IonMenuButton>
          </IonFabButton>
        </IonFab>
      )}

      <IonMenu
        side="start"
        menuId="first"
        contentId="menuContent"
        className="menu-sidebar"
        autoHide="true"
      >
        <IonContent scrollX="false" scrollY="false">
          <div className="sidebar">
            <div className="sidebar-header">
              <div className="back_logo">
                <img src={logo} alt="" />
              </div>
            </div>
            {/* <hr className="menu-divider" /> */}
            <div className="sidebar-top">
              <div className="image">
                <div className="image-circle" style={userImage}></div>
              </div>
              <IonLabel className="label">{profile.name}</IonLabel>
              <IonLabel className="label small">{profile.email}</IonLabel>
            </div>
            <hr className="menu-divider" />
            <div className="sidebar-bottom">
              <IonMenuToggle>
                <IonItem
                  className={
                    selected == "/home"
                      ? "menu-item selected-item"
                      : "menu-item"
                  }
                  routerLink={"/home"}
                  routerDirection="forward"
                >
                  <IonIcon
                    className="menu-item-icon"
                    icon={homeOutline}
                  ></IonIcon>
                  <span>Home</span>
                </IonItem>
                <IonItem
                  className={
                    selected == "/profile"
                      ? "menu-item selected-item"
                      : "menu-item"
                  }
                  routerLink={"/profile"}
                  routerDirection="forward"
                >
                  <IonIcon
                    className="menu-item-icon"
                    icon={personOutline}
                  ></IonIcon>
                  <span>Perfil</span>
                </IonItem>
                <IonItem
                  className={
                    selected == "/cuentas"
                      ? "menu-item selected-item"
                      : "menu-item"
                  }
                  routerLink={"/cuentas"}
                  routerDirection="forward"
                >
                  <IonIcon
                    className="menu-item-icon"
                    icon={barChartOutline}
                  ></IonIcon>
                  <span>Cuentas</span>
                </IonItem>
                <IonItem
                  className={
                    selected == "/groups"
                      ? "menu-item selected-item"
                      : "menu-item"
                  }
                  routerLink={"/groups"}
                  routerDirection="forward"
                >
                  <IonIcon
                    className="menu-item-icon"
                    icon={peopleOutline}
                  ></IonIcon>
                  <span>Grupos</span>
                </IonItem>
              </IonMenuToggle>
            </div>
          </div>
        </IonContent>
      </IonMenu>
    </>
  );
}
