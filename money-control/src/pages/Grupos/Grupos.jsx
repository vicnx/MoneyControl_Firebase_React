import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import MCjoingroup from "components/Grupos/MCjoingroup/mcjoingroup";
import MClistgrupos from "components/Grupos/MClistgrupos/mclistgrupos";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./Grupos.css";

const GruposPage = () => {
  return (
    <IonPage>
      <IonContent fullscreen scrollX="false" scrollY="false">
        <div className="boton_group">
          <IonRouterLink
            routerLink={"/groups/add"}
            routerDirection="forward"
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
