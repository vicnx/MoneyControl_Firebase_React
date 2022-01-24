import { IonLabel, IonToast, IonItem, IonInput, IonButton } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useCuentas from "hooks/useCuentas";
import React, { useEffect, useState } from "react";
import "./mcdatoscuenta.css";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import MCcolores from "components/Generales/MCcolores/mccolores";
import MCiconos from "components/Generales/MCiconos/mciconos";
import useUser from "hooks/useUser";
import { informationCircle } from "ionicons/icons";
import CurrencyInput from "react-currency-input-field";

const MCdatoscuenta = (props) => {
  const { profile, updateProfile, loadingprofile } = useUser();
  const { cuentas, createNewCuenta, success, setSuccess } = useCuentas();
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [color, setColor] = useState("#5499C7");
  const [icono, setIcono] = useState("cashOutline");
  const [cantidad, setCantidad] = useState(0);
  const [toast, setToast] = useState({
    isOpen: false,
    content: "Ha ocurrido un error!",
    color: "danger",
  });

  function changeColor(newValue) {
    setColor(newValue);
  }

  function changeIcono(newValue) {
    setIcono(newValue);
  }

  function saveCuenta() {
    if (!name) {
      setError(true);
      setToast({
        isOpen: true,
        content: "Revise los campos marcados en rojo.",
        color: "danger",
      });
      return;
    } else {
      setError(true);
    }

    const NewCuenta = {
      uid: profile.uid,
      icono: icono ? icono : "cashOutline",
      color: color ? color : "#5499C7",
      cantidad: cantidad ? cantidad.replace(/,/g, ".") : 0,
      name: name,
    };
    console.log("NewCuenta", NewCuenta);
    createNewCuenta(NewCuenta);
  }

  return (
    <>
      {loadingprofile ? (
        <ClipLoader
          color={"blue"}
          loading={true}
          css={"display: block;margin: 0 auto"}
          size={150}
        />
      ) : (
        <>
          <div className="mc-input value">
            <span>Valor inicial (EUR)</span>
            <div className="input-currency">
              <button
                id="decrement"
                className="button-decrement"
                onClick={(e) => {
                  if (!(cantidad < 1)) {
                    setCantidad(cantidad - 1);
                  }
                }}
              >
                <DynamicFaIcon
                  name={"removeCircleOutline"}
                  slot="end"
                  color="white"
                />
              </button>
              <CurrencyInput
                className="valueInput"
                id="input-example"
                name="input-name"
                placeholder="Valor inicial de la cuenta"
                defaultValue={0}
                value={cantidad}
                decimalsLimit={2}
                onValueChange={(value) => {
                  setCantidad(value);
                }}
                suffix=" €"
              />
              <button
                id="increment"
                className="button-increment"
                onClick={(e) => {
                  setCantidad(cantidad + 1);
                }}
              >
                <DynamicFaIcon
                  name={"addCircleOutline"}
                  slot="end"
                  color="white"
                />
              </button>
            </div>

            {/* <IonLabel position="floating">Valor inicial (EUR)</IonLabel>
            <IonInput
              disabled={success.status}
              value={cantidad}
              type="number"
              maxlength="8"
              placeholder="Valor inicial de la cuenta en euros"
              onIonChange={(e) => setCantidad(e.detail.value)}
            ></IonInput> */}
          </div>
          <IonItem className="mc-input">
            <IonLabel
              position="floating"
              style={error && !name ? { color: "red" } : { color: "black" }}
            >
              Nombre de la cuenta <span className="required">*</span>
            </IonLabel>
            <IonInput
              maxlength="20"
              disabled={success.status}
              value={name}
              placeholder="Nombre de la cuenta"
              onIonChange={(e) => setName(e.detail.value)}
            ></IonInput>
          </IonItem>
          <MCcolores onChange={changeColor} colorSelected={color} />
          <MCiconos
            onChange={changeIcono}
            colorSelected={color}
            iconoSelected={icono}
          />
          <IonButton
            expand="full"
            className="boton-guardar"
            onClick={saveCuenta}
            disabled={success.status}
          >
            Guardar
            <DynamicFaIcon
              name={"arrowUpCircleOutline"}
              slot="end"
              color="white"
            />
          </IonButton>
        </>
      )}
      <IonToast
        isOpen={toast.isOpen}
        onDidDismiss={() => setToast(false)}
        message={toast.content}
        icon={informationCircle}
        position="top"
        duration={2000}
        color={toast.color}
      />

      <IonToast
        isOpen={success.status}
        onDidDismiss={() => setSuccess({ status: false, msg: "" })}
        message={success.msg}
        icon={informationCircle}
        position="top"
        duration={2000}
        color="success"
      />
    </>
  );
};

export default MCdatoscuenta;
