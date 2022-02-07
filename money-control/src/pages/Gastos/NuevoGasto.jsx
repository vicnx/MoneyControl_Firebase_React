import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./NuevoGasto.css";
import MCnuevogasto from "components/Gastos/MCnuevogasto/mcnuevogasto";
const NuevoGasto = () => {
  return (
    <IonPage>
      <IonContent fullscreen scrollX="false" scrollY="true">
        <MCnuevogasto />
      </IonContent>
    </IonPage>
  );
};

export default NuevoGasto;
