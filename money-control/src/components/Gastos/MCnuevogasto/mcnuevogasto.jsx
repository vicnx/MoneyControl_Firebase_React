import {
  IonButton,
  IonCheckbox,
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
  IonToast,
} from "@ionic/react";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import MCcolores from "components/Generales/MCcolores/mccolores";
import MCiconos from "components/Generales/MCiconos/mciconos";
import useGrupos from "hooks/useGrupos";
import useUser from "hooks/useUser";
import { informationCircle } from "ionicons/icons";
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "swiper/css";
import "swiper/css/navigation";
import "./mcnuevogasto.css";
import MCgruposselect from "../MCgruposselect/mcgruposselect";
import MCcategorylist from "../MCcategorylist/mccategorylist";
import CurrencyInput from "react-currency-input-field";
import { useEffect } from "react";
import MCcuentaselect from "../MCcuentaselect/mccuentaselect";
import { randomString } from "global/functions";
const MCnuevogasto = (props) => {
  const { profile, loadingprofile } = useUser();
  const { nuevoGasto, success, setSuccess, error, setError } = useGrupos();
  const [desc, setDesc] = useState("");
  const [grupo, setGrupo] = useState();
  const [categoria, setCategoria] = useState();
  const [cantidad, setCantidad] = useState(0);
  const [cuenta, setCuenta] = useState(false);

  function changeGrupoSelect(newValue) {
    setGrupo(newValue);
    setCategoria(false);
  }

  function changeCategoria(newValue) {
    setCategoria(newValue);
  }

  function changeCuenta(newValue) {
    setCuenta(newValue);
  }

  function saveGasto() {
    if (!grupo) {
      setError({ status: true, msg: "Selecciona un grupo." });
      return;
    }
    if (!categoria) {
      setError({ status: true, msg: "Selecciona una categoría." });
      return;
    }
    if (!desc) {
      setError({ status: true, msg: "Tienes que añadir una descripción." });
      return;
    }
    console.log(cantidad);

    let newGasto = {
      cuenta: cuenta,
      cantidad: cantidad ? cantidad.toString().replace(/,/g, ".") : 0,
      user: profile.uid,
      profile: profile.docid,
      desc: desc,
      categoria: categoria,
      uidgasto: randomString(25),
      fecha: Date.now(),
    };
    nuevoGasto(newGasto, grupo);
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
            <span>Cantidad (EUR)</span>
            <div className="input-currency">
              <button
                id="decrement"
                className="button-decrement"
                onClick={(e) => {
                  if (cantidad >= 1) {
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
                allowNegativeValue={false}
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
          </div>
          <IonItem className="mc-input">
            <IonLabel
              position="floating"
              style={
                error.status && !desc ? { color: "red" } : { color: "black" }
              }
            >
              Descripción del gasto <span className="required">*</span>
            </IonLabel>
            <IonTextarea
              maxlength="100"
              disabled={success.status}
              clearOnEdit={true}
              value={desc}
              onIonChange={(e) => setDesc(e.detail.value)}
            ></IonTextarea>
          </IonItem>
          <MCcuentaselect
            onChange={changeCuenta}
            cuentaSelected={cuenta}
            setCuentaSelected={setCuenta}
          />
          <MCgruposselect onChange={changeGrupoSelect} grupoSelected={grupo} />
          <MCcategorylist
            grupo={grupo}
            onChange={changeCategoria}
            categoria={categoria}
          />
          <IonButton
            expand="full"
            className="boton-guardar"
            onClick={saveGasto}
            disabled={success.status}
          >
            Añadir gasto
            <DynamicFaIcon
              name={"arrowUpCircleOutline"}
              slot="end"
              color="white"
            />
          </IonButton>
        </>
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

export default MCnuevogasto;
