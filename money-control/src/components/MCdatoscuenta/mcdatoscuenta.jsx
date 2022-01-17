import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonLabel,
  IonToolbar,
  IonImg,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonText,
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useCuentas from "hooks/useCuentas";
import React, { useEffect, useState } from "react";
import "./mcdatoscuenta.css";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/DynamicIcons/DynamicIcons";
import MCcolores from "components/MCcolores/mccolores";
const MCdatoscuenta = (props) => {
  const { cuentas, loadingcuentas } = useCuentas();
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [cantidad, setCantidad] = useState("");

  function changeColor(newValue) {
    setColor(newValue);
    console.log(color);
  }

  return (
    <>
      <IonContent className="ion-padding">
        <IonItem className="mc-input">
          <IonLabel position="floating">Nombre de la cuenta</IonLabel>
          <IonInput
            value={name}
            placeholder="Nombre de la cuenta"
            onIonChange={(e) => setName(e.detail.value)}
          ></IonInput>
        </IonItem>
        <IonItem className="mc-input">
          <IonLabel position="floating">Valor inicial (EUR)</IonLabel>
          <IonInput
            value={cantidad}
            type="number"
            placeholder="Valor inicial de la cuenta en euros"
            onIonChange={(e) => setCantidad(e.detail.value)}
          ></IonInput>
        </IonItem>
        <MCcolores onChange={changeColor} colorSelected={color} />
      </IonContent>
    </>
  );
};

export default MCdatoscuenta;
