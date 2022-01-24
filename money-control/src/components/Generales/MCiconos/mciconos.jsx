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
import useCuentas from "hooks/useCuentas";
import React, { useEffect, useState } from "react";
import "./mciconos.css";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";

const MCiconos = (props) => {
  const iconosCuentas = [
    "walletOutline",
    "cardOutline",
    "logoPaypal",
    "cashOutline",
    "contrastOutline",
    "earthOutline",
    "serverOutline",
    "happyOutline",
    "flashOutline",
    "flaskOutline",
    "globeOutline",
    "heartOutline",
    "flowerOutline",
    "rocketOutline",
  ];

  const iconosGrupos = [
    "happyOutline",
    "flashOutline",
    "flaskOutline",
    "globeOutline",
    "heartOutline",
    "flowerOutline",
    "rocketOutline",
    "accessibilityOutline",
    "airplaneOutline",
    "alarmOutline",
    "beerOutline",
    "boatOutline",
    "barbellOutline",
    "bedOutline",
    "chatbubblesOutline",
  ];
  return (
    <div className="icono-component">
      <span className="info">
        Selecciona un icono <span className="required">*</span>
      </span>
      <div className="icono-list">
        <Swiper slidesPerView={5} loop={true} className="mySwiper">
          {props.type != "group"
            ? iconosCuentas
              ? iconosCuentas.map((i, index) => (
                  <SwiperSlide
                    className={
                      props.iconoSelected == i ? "icono selected" : "icono"
                    }
                    style={
                      props.iconoSelected == i
                        ? {
                            borderColor: props.colorSelected,
                            borderWidth: "3px",
                            borderStyle: "solid",
                          }
                        : {}
                    }
                    key={index}
                    onClick={() => {
                      props.onChange(i);
                    }}
                  >
                    <DynamicFaIcon name={i} color={props.colorSelected} />
                  </SwiperSlide>
                ))
              : "No hay iconos disponibles"
            : iconosGrupos
            ? iconosGrupos.map((i, index) => (
                <SwiperSlide
                  className={
                    props.iconoSelected == i ? "icono selected" : "icono"
                  }
                  style={
                    props.iconoSelected == i
                      ? {
                          borderColor: props.colorSelected,
                          borderWidth: "3px",
                          borderStyle: "solid",
                        }
                      : {}
                  }
                  key={index}
                  onClick={() => {
                    props.onChange(i);
                  }}
                >
                  <DynamicFaIcon name={i} color={props.colorSelected} />
                </SwiperSlide>
              ))
            : "No hay iconos disponibles"}
        </Swiper>
      </div>
    </div>
  );
};

export default MCiconos;
