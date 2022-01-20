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
import DynamicFaIcon from "components/DynamicIcons/DynamicIcons";
import { Link } from "react-router-dom";
import MClistgrupos from "components/MClistgrupos/mclistgrupos";

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
          <IonButton
            className="boton-join"
            size="medium"
            shape="round"
            color="danger"
          >
            <IonLabel className="label">Unirse a un grupo</IonLabel>
            <DynamicFaIcon name="peopleOutline" color="white" slot="end" />
          </IonButton>
        </div>
        <IonContent className="list-grupos">
          <MClistgrupos />
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default GruposPage;
