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
        <span className="gruposselect-component-title">
          Selecciona un grupo <span className="required">*</span>
        </span>
        <div className="gruposselect-info">
          {props.grupoSelected ? (
            <>
              <div className="gruposselect-info-icono">
                <DynamicFaIcon
                  name={props.grupoSelected.icono}
                  color={props.grupoSelected.color}
                />
              </div>
              <div className="gruposselect-info-name">
                {props.grupoSelected.name}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
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
                    props.grupoSelected
                      ? props.grupoSelected.docid == g.docid
                        ? "gruposelect selected"
                        : "gruposelect"
                      : "gruposelect"
                  }
                  style={
                    props.grupoSelected
                      ? props.grupoSelected.docid == g.docid
                        ? {
                            borderColor: g.color,
                            borderWidth: "3px",
                            borderStyle: "solid",
                          }
                        : {}
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
                      props.grupoSelected
                        ? props.grupoSelected.docid == g.docid
                          ? {
                              backgroundColor: g.color,
                            }
                          : { backgroundColor: "var(--color_small)" }
                        : { backgroundColor: "var(--color_small)" }
                    }
                  />
                  <div className="grupo-content">
                    <DynamicFaIcon
                      name={g.icono}
                      color={
                        props.grupoSelected
                          ? props.grupoSelected.docid == g.docid
                            ? g.color
                            : "var(--color_small)"
                          : "var(--color_small)"
                      }
                    />

                    <IonLabel
                      className="grupo-name"
                      style={
                        props.grupoSelected
                          ? props.grupoSelected.docid == g.docid
                            ? {
                                color: g.color,
                              }
                            : { color: "var(--color_small)" }
                          : { color: "var(--color_small)" }
                      }
                    >
                      {g.name}
                    </IonLabel>
                  </div>
                  <hr
                    className="separador-grupos"
                    style={
                      props.grupoSelected
                        ? props.grupoSelected.docid == g.docid
                          ? {
                              backgroundColor: g.color,
                            }
                          : { backgroundColor: "var(--color_small)" }
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
