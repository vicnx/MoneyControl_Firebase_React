import { IonLabel, IonList, IonItem, IonContent } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useCuentas from "hooks/useCuentas";
import React, { useEffect, useState } from "react";
import "./mclistcuentas.css";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/DynamicIcons/DynamicIcons";

const MClistcuentas = (props) => {
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
      ) : cuentas ? (
        <IonList>
          {cuentas.map((c, index) => (
            <IonItem className="cuenta-item" key={index}>
              <div className="cuenta-name-info">
                <DynamicFaIcon name={c.icono} />
                <IonLabel className="cuenta-name">{c.name}</IonLabel>
              </div>
              <CountUp
                end={c.cantidad}
                suffix=" €"
                duration={1.5}
                className="contador-money"
              />

              <div className="cuenta-options" slot="end">
                <DynamicFaIcon name="trash" />
              </div>
            </IonItem>
          ))}
        </IonList>
      ) : (
        "Sin cuentas"
      )}
    </>
  );
};

export default MClistcuentas;
