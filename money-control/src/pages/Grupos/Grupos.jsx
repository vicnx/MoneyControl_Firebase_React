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
import "./Grupos.css";
import useCuentas from "hooks/useCuentas";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import { Link } from "react-router-dom";
import MClistgrupos from "components/Grupos/MClistgrupos/mclistgrupos";
import MCjoingroup from "components/Grupos/MCjoingroup/mcjoingroup";
const GruposPage = () => {
  const { cuentas, loadingcuentas } = useCuentas();
  console.log("GruposPage");
  return (
    <IonPage>
      <IonContent fullscreen scrollX="false" scrollY="false">
        <div className="boton_group">
          <IonRouterLink
            routerLink={"/groups/add"}
            routerDirection="none"
            className="boton-add"
          >
            <DynamicFaIcon name="addCircle" color="var(--ion-color-primary)" />
          </IonRouterLink>
          <MCjoingroup />
        </div>
        <IonContent className="list-grupos">
          <MClistgrupos />
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default GruposPage;
