import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./AddMoney.css";
import MCaddmoney from "components/Gastos/MCaddmoney/mcaddmoney";
const AddMoney = () => {
  return (
    <IonPage>
      <IonContent fullscreen scrollX="false" scrollY="true">
        <MCaddmoney />
      </IonContent>
    </IonPage>
  );
};

export default AddMoney;
