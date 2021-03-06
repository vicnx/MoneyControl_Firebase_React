import {
  IonButton,
  IonButtons,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import MCcolores from "components/Generales/MCcolores/mccolores";
import MCiconos from "components/Generales/MCiconos/mciconos";
import MCloading from "components/Generales/MCloading/MCloading";
import useGrupos from "hooks/useGrupos";
import { informationCircle } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import "./mcnewcategoria.css";

const MCnewcategoria = (props) => {
  const {
    error,
    setError,
    loadinggrupos,
    success,
    setSuccess,
    createCategoria,
  } = useGrupos();
  const [submited, setSubmited] = useState(false);
  const [newCategoria, setNewCategoria] = useState({
    name: "",
    icono: "shirtOutline",
    color: "#F44336",
  });

  function changeColor(newValue) {
    setNewCategoria({ ...newCategoria, color: newValue });
  }

  function changeIcono(newValue) {
    setNewCategoria({ ...newCategoria, icono: newValue });
  }
  function createCat() {
    setSubmited(true);
    if (!newCategoria.name) {
      setError({
        status: true,
        msg: "El nombre de la categoría no puede estar vacio",
      });
      setSubmited(false);
      return;
    } else {
      createCategoria(props.grupo, newCategoria);
    }
  }

  return (
    <>
      <IonContent>
        {loadinggrupos ? (
          <MCloading loading={true} />
        ) : (
          <>
            <IonItem>
              <IonLabel position="stacked">
                Introduce el nombre de la categoría
                <span className="required">*</span>
              </IonLabel>
              <IonInput
                value={newCategoria.name}
                placeholder="Introduce el nombre de la categoría"
                onIonChange={(e) =>
                  setNewCategoria({ ...newCategoria, name: e.detail.value })
                }
                clearInput
              ></IonInput>
            </IonItem>
            <MCcolores
              onChange={changeColor}
              colorSelected={newCategoria.color}
            />
            <MCiconos
              onChange={changeIcono}
              colorSelected={newCategoria.color}
              iconoSelected={newCategoria.icono}
              type="categories"
            />
            <div className="buttons-div">
              <IonButton
                className="boton-join"
                size="medium"
                shape="round"
                color="success"
                onClick={() => createCat()}
                disabled={submited}
              >
                <IonLabel className="label">Crear</IonLabel>
                <DynamicFaIcon
                  name="checkmarkOutline"
                  color="black"
                  slot="end"
                />
              </IonButton>
            </div>
          </>
        )}
      </IonContent>

      <IonToast
        isOpen={error.status}
        onDidDismiss={() => setError({ status: false, msg: "" })}
        message={error.msg}
        icon={informationCircle}
        position="top"
        duration={2000}
        color="danger"
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

export default MCnewcategoria;
