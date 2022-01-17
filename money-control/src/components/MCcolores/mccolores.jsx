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
import "./mccolores.css";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/DynamicIcons/DynamicIcons";

const MCcolores = (props) => {
  const colores = [
    "#F44336",
    "#9B59B6",
    "#5499C7",
    "#76D7C4",
    "#7DCEA0",
    "#F7DC6F",
    "#E59866",
  ];
  return (
    <div className="color-component">
      <IonLabel className="title">Selecciona color</IonLabel>
      <div className="color-list">
        <Swiper slidesPerView={4} loop={true} className="mySwiper">
          {colores
            ? colores.map((c, index) => (
                <SwiperSlide
                  className={
                    props.colorSelected == c ? "color selected" : "color"
                  }
                  style={
                    props.colorSelected == c
                      ? {
                          borderColor: c,
                          borderWidth: "3px",
                          borderStyle: "solid",
                        }
                      : {}
                  }
                  key={index}
                  onClick={() => {
                    props.onChange(c);
                  }}
                >
                  <div
                    className="circle"
                    style={{
                      backgroundColor: c,
                    }}
                  ></div>
                </SwiperSlide>
              ))
            : "No hay colores disponibles"}
        </Swiper>
      </div>
    </div>
  );
};

export default MCcolores;
