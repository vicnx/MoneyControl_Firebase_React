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
import "./mcinfogrupo.css";
import useGrupos from "hooks/useGrupos";
import ClipLoader from "react-spinners/ClipLoader";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";

const MCinfogrupo = ({ grupo }) => {
  // const { profile } = useUser();
  useEffect(() => {
    console.log(grupo);
  }, [grupo]);
  const {
    grupos,
    loadinggrupos,
    exitGroup,
    checkAdmin,
    deleteGroup,
    setError,
    error,
    success,
    setSuccess,
  } = useGrupos();

  return (
    <>
      <div
        className="header-info-grupo"
        style={{ backgroundColor: grupo.color }}
      >
        <span
          style={
            grupo.name
              ? grupo.name.length < 10
                ? { fontSize: "30px" }
                : { fontSize: "20px" }
              : null
          }
        >
          {grupo.name}
        </span>
      </div>
      <IonContent className="content-info-grupo">
        {/* <MClistgrupos /> */}
      </IonContent>
    </>
  );
};

export default MCinfogrupo;
