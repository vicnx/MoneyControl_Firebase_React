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
  IonToggle
} from "@ionic/react";
import logo from "assets/logo/logorounded.png";
import { CONSTANTS } from "global/functions";
import useOffline from "hooks/useOffline";
import useUser from "hooks/useUser";
import {
  barChartOutline,
  gridOutline,
  homeOutline,
  listOutline,
  peopleOutline,
  personOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MCConfirmAlert from "../MCconfirmalert/mcconfirmalert";
import "./mcmenu.css";
import { constants } from "global/constants";
import MCOfflineButton from "../MCOfflineButton/mcofflinebutton";

export default function MCmenu(props) {
  const { profile } = useUser();
  const { offlineMode, setOfflineMode} = useOffline();
  const [selected, setSelected] = useState("");
  const [showAlert, setShowAlert] = useState(false);

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

  function toggleOfflineMode() {
    if(offlineMode === true){
      setOfflineMode(false)
    }else{
      setOfflineMode(true)
    }
  }

  const handleAlertYes = () => {
    toggleOfflineMode();
    handleAlertDismiss();
  }

  const handleAlertDismiss = () => {
    setShowAlert(false);
  }

  const openAlert = () =>{
    setShowAlert(!showAlert);
  }



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
                <IonItem
                  className={
                    selected == "/totalspendings"
                      ? "menu-item selected-item"
                      : "menu-item"
                  }
                  routerLink={"/totalspendings"}
                  routerDirection="forward"
                >
                  <IonIcon
                    className="menu-item-icon"
                    icon={listOutline}
                  ></IonIcon>
                  <span>Gastos Totales</span>
                </IonItem>
              </IonMenuToggle>
            </div>
          </div>
          <MCOfflineButton/>
        </IonContent>
      </IonMenu>
    </>
  );
}
