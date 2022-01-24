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
import "./mcgrupos.css";
import useGrupos from "hooks/useGrupos";
import ClipLoader from "react-spinners/ClipLoader";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";

const MCgrupos = (props) => {
  // const { profile } = useUser();
  const [grupoSelected, setgrupoSelected] = useState("grupo1");
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
      <IonLabel className="title">Grupos de gastos</IonLabel>
      {loadinggrupos ? (
        <ClipLoader
          color={"blue"}
          loading={true}
          css={"display: block;margin: 0 auto"}
          size={150}
        />
      ) : grupos ? (
        <div className="grupos-list">
          <Swiper slidesPerView={2} loop={false} className="mySwiper">
            {grupos.map((g, index) => (
              <SwiperSlide
                className="grupo"
                key={index}
                onClick={() => {
                  console.log("click");
                }}
              >
                <hr
                  className="separador-grupos"
                  style={{ backgroundColor: g.color }}
                />
                <div className="grupo-content">
                  <DynamicFaIcon name={g.icono} color={g.color} />

                  <IonLabel className="grupo-name" style={{ color: g.color }}>
                    {g.name}
                  </IonLabel>
                </div>
                <hr
                  className="separador-grupos"
                  style={{ backgroundColor: g.color }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        "No grupos"
      )}
    </>
  );
};

export default MCgrupos;
