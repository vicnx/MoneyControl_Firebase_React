import { IonLabel } from "@ionic/react";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import useGrupos from "hooks/useGrupos";
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./mcgrupos.css";

const MCgrupos = (props) => {
  const { grupos, loadinggrupos } = useGrupos();

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
            {grupos
              .filter((g) => !g.onlyread)
              .map((g, index) => (
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
