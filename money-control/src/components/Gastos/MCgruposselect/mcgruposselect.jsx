import { IonLabel } from "@ionic/react";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import useGrupos from "hooks/useGrupos";
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./mcgruposselect.css";

const MCgruposselect = (props) => {
  const { grupos, loadinggrupos } = useGrupos();

  return (
    <>
      <div className="gruposselect-component">
        <span className="title">
          Selecciona un grupo <span className="required">*</span>
        </span>
        {loadinggrupos ? (
          <ClipLoader
            color={"blue"}
            loading={true}
            css={"display: block;margin: 0 auto"}
            size={150}
          />
        ) : grupos ? (
          <div className="gruposselect-list">
            <Swiper slidesPerView={2} loop={false} className="mySwiper">
              {grupos.map((g, index) => (
                <SwiperSlide
                  className={
                    props.grupoSelected == g
                      ? "gruposelect selected"
                      : "gruposelect"
                  }
                  style={
                    props.grupoSelected == g
                      ? {
                          borderColor: g.color,
                          borderWidth: "3px",
                          borderStyle: "solid",
                        }
                      : {}
                  }
                  key={index}
                  onClick={() => {
                    props.onChange(g);
                  }}
                >
                  <hr
                    className="separador-grupos"
                    style={
                      props.grupoSelected == g
                        ? {
                            backgroundColor: g.color,
                          }
                        : { backgroundColor: "var(--color_small)" }
                    }
                  />
                  <div className="grupo-content">
                    <DynamicFaIcon
                      name={g.icono}
                      color={
                        props.grupoSelected == g
                          ? g.color
                          : "var(--color_small)"
                      }
                    />

                    <IonLabel
                      className="grupo-name"
                      style={
                        props.grupoSelected == g
                          ? {
                              color: g.color,
                            }
                          : { color: "var(--color_small)" }
                      }
                    >
                      {g.name}
                    </IonLabel>
                  </div>
                  <hr
                    className="separador-grupos"
                    style={
                      props.grupoSelected == g
                        ? {
                            backgroundColor: g.color,
                          }
                        : { backgroundColor: "var(--color_small)" }
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          "No grupos"
        )}
      </div>
    </>
  );
};

export default MCgruposselect;
