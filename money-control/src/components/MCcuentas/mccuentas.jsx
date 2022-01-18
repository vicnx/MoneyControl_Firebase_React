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
import "./mccuentas.css";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/DynamicIcons/DynamicIcons";

const MCcuenta = (props) => {
  const { cuentas, loadingcuentas } = useCuentas();
  return (
    <>
      {loadingcuentas ? (
        <ClipLoader
          color={"blue"}
          loading={true}
          css={"display: block;margin: 0 auto"}
          size={150}
        />
      ) : (
        <>
          <IonLabel className="title">Cuentas</IonLabel>
          <div className="cuentas-list">
            <Swiper slidesPerView={2} loop={false} className="mySwiper">
              {cuentas
                ? cuentas.map((c, index) => (
                    <SwiperSlide
                      className={
                        props.cuentaSelected.docid == c.docid
                          ? "cuenta selected"
                          : "cuenta"
                      }
                      key={index}
                      onClick={() => {
                        console.log("click");
                        props.onChange(c);
                      }}
                    >
                      <div className="cuenta-top">
                        {/* <IonIcon icon={c.icono}></IonIcon> */}
                        <DynamicFaIcon
                          name={c.icono}
                          color={
                            props.cuentaSelected.docid == c.docid
                              ? c.color
                              : "var(--color_small)"
                          }
                        />
                        <IonLabel
                          className="cuenta-name"
                          style={{
                            color:
                              props.cuentaSelected.docid == c.docid
                                ? c.color
                                : "var(--color_small)",
                          }}
                        >
                          {c.name}
                        </IonLabel>
                      </div>
                      <div className="cuenta-bottom">
                        <IonLabel className="cuenta-balance">
                          <CountUp
                            end={c.cantidad}
                            suffix=" €"
                            duration={1.5}
                            separator=" "
                            decimal=","
                            decimals={2}
                          />
                        </IonLabel>
                        <hr
                          className="separador-cuentas"
                          style={{
                            backgroundColor:
                              props.cuentaSelected.docid == c.docid
                                ? c.color
                                : "var(--color_small)",
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  ))
                : "Sin cuentas"}
            </Swiper>
          </div>
        </>
      )}
    </>
  );
};

export default MCcuenta;
