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

const MCnuevogasto = (props) => {
  const { profile, loadingprofile } = useUser();
  const { createNewGrupo, success, setSuccess, error, setError } = useGrupos();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [gprivate, setGprivate] = useState(false);
  const [color, setColor] = useState("#5499C7");
  const [icono, setIcono] = useState("happyOutline");
  const [grupo, setGrupo] = useState();
  const [categoria, setCategoria] = useState();

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

  function changeGrupoSelect(newValue) {
    setGrupo(newValue);
  }

  function changeCategoria(newValue) {
    setCategoria(newValue);
  }

  function saveGrupo() {
    if (!name) {
      setError({
        status: true,
        msg: "El nombre del grupo no puede estar vacio",
      });
      return;
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
          <MCgruposselect onChange={changeGrupoSelect} grupoSelected={grupo} />
          <MCcategorylist
            grupo={grupo}
            onChange={changeCategoria}
            categoria={categoria}
          />
          <IonItem className="mc-input">
            <IonLabel
              position="floating"
              style={error && !desc ? { color: "red" } : { color: "black" }}
            >
              Descripción
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
