import {
  IonContent,
  IonPage,
  IonLabel,
  IonIcon,
  IonHeader,
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

const CuentasPage = () => {
  const { cuentas, loadingcuentas } = useCuentas();

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader fixed className="header-cuentas">
          <IonLabel className="title">Gestión de cuentas</IonLabel>
          <DynamicFaIcon name="add" />
        </IonHeader>
        <IonContent className="list-cuentas">
          <MClistcuentas />
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CuentasPage;
