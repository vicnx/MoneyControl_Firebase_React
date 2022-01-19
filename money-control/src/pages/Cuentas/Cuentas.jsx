import {
  IonContent,
  IonPage,
  IonLabel,
  IonIcon,
  IonHeader,
  IonItem,
  IonButton,
  IonRouterLink,
} from "@ionic/react";
import "swiper/css";
import "swiper/css/navigation";
import React, { useEffect, useState } from "react";
import "./Cuentas.css";
import useCuentas from "hooks/useCuentas";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/DynamicIcons/DynamicIcons";
import MClistcuentas from "components/MClistcuentas/mclistcuentas";
import { Link } from "react-router-dom";

const CuentasPage = () => {
  const { cuentas, loadingcuentas } = useCuentas();
  console.log(cuentas);
  return (
    <IonPage>
      <IonContent fullscreen className="cuentasPage">
        <div className="boton_add_parent">
          <IonRouterLink
            routerLink={"/cuentas/add"}
            routerDirection="none"
            className="boton-add"
          >
            <DynamicFaIcon name="addCircle" color="var(--ion-color-primary" />
          </IonRouterLink>
        </div>
        {/* <IonHeader fixed className="header-cuentas">
          <IonLabel className="title">Gestión de cuentas</IonLabel>
          <IonRouterLink
            routerLink={"/cuentas/add"}
            routerDirection="none"
            className="boton-add"
          >
            <DynamicFaIcon name="addCircle" color="var(--ion-color-primary" />
          </IonRouterLink>
        </IonHeader> */}

        <IonContent className="list-cuentas">
          <MClistcuentas />
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CuentasPage;
