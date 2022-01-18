import { IonLabel, IonList, IonItem, IonToast } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useCuentas from "hooks/useCuentas";
import React, { useEffect, useState } from "react";
import "./mclistcuentas.css";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/DynamicIcons/DynamicIcons";
import { informationCircle } from "ionicons/icons";

const MClistcuentas = (props) => {
  const {
    cuentas,
    loadingcuentas,
    deleteCuenta,
    success,
    setSuccess,
    error,
    setError,
  } = useCuentas();
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
                <DynamicFaIcon name={c.icono} color={c.color} />
                <IonLabel className="cuenta-name">{c.name}</IonLabel>
              </div>
              <CountUp
                end={c.cantidad}
                suffix=" €"
                duration={1.5}
                separator=" "
                decimal=","
                decimals={2}
                className="contador-money"
              />

              <div className="cuenta-options" slot="end">
                <div className="delete" onClick={() => deleteCuenta(c)}>
                  <DynamicFaIcon
                    name="trash"
                    color="var(--ion-color-danger-tint)"
                  />
                </div>
              </div>
            </IonItem>
          ))}
        </IonList>
      ) : (
        "Sin cuentas"
      )}
      <IonToast
        isOpen={success.status}
        onDidDismiss={() => setSuccess({ status: false, msg: "" })}
        message={success.msg}
        icon={informationCircle}
        position="top"
        duration={2000}
        color="success"
      />
      <IonToast
        isOpen={error.status}
        onDidDismiss={() => setError({ status: false, msg: "" })}
        message={error.msg}
        icon={informationCircle}
        position="top"
        duration={2000}
        color="warning"
      />
    </>
  );
};

export default MClistcuentas;
