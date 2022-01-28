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
import "./mcdatosgrupo.css";
const MCdatosgrupo = (props) => {
  const { profile, loadingprofile } = useUser();
  const { createNewGrupo, success, setSuccess } = useGrupos();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(false);
  const [gprivate, setGprivate] = useState(false);
  const [color, setColor] = useState("#5499C7");
  const [icono, setIcono] = useState("happyOutline");
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

  function saveGrupo() {
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

    const NewGrupo = {
      createdby: profile.uid,
      icono: icono ? icono : "cashOutline",
      color: color ? color : "#5499C7",
      desc: desc,
      name: name,
      users: [profile.uid],
      codinv: gprivate,
    };
    createNewGrupo(NewGrupo);
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
          <IonItem className="mc-input">
            <IonLabel
              position="floating"
              style={error && !name ? { color: "red" } : { color: "black" }}
            >
              Nombre del grupo <span className="required">*</span>
            </IonLabel>
            <IonInput
              maxlength="20"
              disabled={success.status}
              value={name}
              placeholder="Nombre de la cuenta"
              onIonChange={(e) => setName(e.detail.value)}
            ></IonInput>
          </IonItem>
          <IonItem className="mc-input">
            <IonLabel
              position="floating"
              style={error && !desc ? { color: "red" } : { color: "black" }}
            >
              Descripción <span className="required">*</span>
            </IonLabel>
            <IonTextarea
              maxlength="100"
              disabled={success.status}
              clearOnEdit={true}
              value={desc}
              onIonChange={(e) => setDesc(e.detail.value)}
            ></IonTextarea>
          </IonItem>
          <MCcolores onChange={changeColor} colorSelected={color} />
          <MCiconos
            onChange={changeIcono}
            colorSelected={color}
            iconoSelected={icono}
            type="group"
          />
          <IonItem className="checkbox-gprivate">
            <div className="checkbox-gprivate-text">
              <IonLabel>Grupo privado</IonLabel>
              <small>Si activas esta opción nadie podrá unirse.</small>
            </div>

            <IonCheckbox
              slot="start"
              checked={gprivate}
              onIonChange={(e) => setGprivate(e.detail.checked)}
            />
          </IonItem>
          <IonButton
            expand="full"
            className="boton-guardar"
            onClick={saveGrupo}
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

export default MCdatosgrupo;
