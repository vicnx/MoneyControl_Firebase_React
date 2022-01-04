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
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import * as Icons from "ionicons/icons";
import "./mccuentas.css";

const MCcuenta = () => {
  // const { profile } = useUser();
  const [cuentaSelected, setCuentaSelected] = useState("cuenta1");

  return (
    <>
      <IonLabel className="title">Cuentas</IonLabel>
      <div className="cuentas-list">
        <Swiper slidesPerView={2} loop={false} className="mySwiper">
          <SwiperSlide className="cuenta">
            <div className="cuenta-top">
              <IonIcon icon={Icons.cardOutline}></IonIcon>
              <IonLabel className="cuenta-name">Bank</IonLabel>
            </div>
            <div className="cuenta-bottom">
              <IonLabel className="cuenta-balance">1000 €</IonLabel>
              <hr className="separador-cuentas" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cuenta">
            <div className="cuenta-top">
              <IonIcon icon={Icons.cardOutline}></IonIcon>
              <IonLabel className="cuenta-name">Paypal</IonLabel>
            </div>
            <div className="cuenta-bottom">
              <IonLabel className="cuenta-balance">2900 €</IonLabel>
              <hr className="separador-cuentas" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cuenta">
            <div className="cuenta-top">
              <IonIcon icon={Icons.cardOutline}></IonIcon>
              <IonLabel className="cuenta-name">Long name</IonLabel>
            </div>
            <div className="cuenta-bottom">
              <IonLabel className="cuenta-balance">290000000000 €</IonLabel>
              <hr className="separador-cuentas" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="cuenta">
            <div className="cuenta-top">
              <IonIcon icon={Icons.cardOutline}></IonIcon>
              <IonLabel className="cuenta-name">Paypal</IonLabel>
            </div>
            <div className="cuenta-bottom">
              <IonLabel className="cuenta-balance">2900 €</IonLabel>
              <hr className="separador-cuentas" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MCcuenta;
