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
import "./mcgrupos.css";

const MCgrupos = () => {
  // const { profile } = useUser();
  const [grupoSelected, setgrupoSelected] = useState("grupo1");

  return (
    <>
      <IonLabel className="title">Grupos de gastos</IonLabel>
      <div className="grupos-list">
        <Swiper slidesPerView={2} loop={false} className="mySwiper">
          <SwiperSlide className="grupo">
            <hr className="separador-grupos" />
            <div className="grupo-content">
              <IonIcon icon={Icons.peopleOutline}></IonIcon>
              <IonLabel className="grupo-name">Fammily</IonLabel>
            </div>
            <hr className="separador-grupos" />
            <img
              src="https://filesedc.com/uploads/333/img/2020/08/1200/existen-8-tipos-distintos-de-familias-5f312cc934b72.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="grupo">
            <hr className="separador-grupos" />
            <div className="grupo-content">
              <IonIcon icon={Icons.peopleCircleOutline}></IonIcon>
              <IonLabel className="grupo-name">Fammily</IonLabel>
            </div>
            <hr className="separador-grupos" />
            <img
              src="https://static.guiainfantil.com/media/17060/c/mi-familia-poemas-cortos-para-ninos-md.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="grupo">
            <hr className="separador-grupos" />
            <div className="grupo-content">
              <IonIcon icon={Icons.peopleCircleOutline}></IonIcon>
              <IonLabel className="grupo-name">Fammily</IonLabel>
            </div>
            <hr className="separador-grupos" />
            <img
              src="https://static.guiainfantil.com/media/17060/c/mi-familia-poemas-cortos-para-ninos-md.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="grupo">
            <hr className="separador-grupos" />
            <div className="grupo-content">
              <IonIcon icon={Icons.peopleCircleOutline}></IonIcon>
              <IonLabel className="grupo-name">Fammily</IonLabel>
            </div>
            <hr className="separador-grupos" />
            <img
              src="https://static.guiainfantil.com/media/17060/c/mi-familia-poemas-cortos-para-ninos-md.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MCgrupos;
