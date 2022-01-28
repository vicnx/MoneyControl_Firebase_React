import {
  IonAlert,
  IonItem,
  IonLabel,
  IonList,
  IonToast,
  IonContent,
} from "@ionic/react";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import useGrupos from "hooks/useGrupos";
import { informationCircle } from "ionicons/icons";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./mclistcategorias.css";

const MClistcategorias = ({ grupo }) => {
  console.log("MClistcategorias", grupo);
  const { grupos, loadinggrupos, setError, error, success, setSuccess } =
    useGrupos();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selected, setSelected] = useState({});

  return (
    <>
      {grupo ? (
        <IonList className="lista-categorias">
          {grupo.categories
            ? grupo.categories.map((c, index) => (
                <IonItem className="cuenta-item" key={index}>
                  <div className="cuenta-name-info">
                    <DynamicFaIcon name={c.icono} color={c.color} />
                    <IonLabel className="cuenta-name">{c.name}</IonLabel>
                  </div>

                  <div className="cuenta-options" slot="end">
                    <div
                      className="delete"
                      onClick={() => {
                        setSelected(c);
                        setIsConfirmOpen(true);
                      }}
                    >
                      <DynamicFaIcon
                        name="trash"
                        color="var(--ion-color-danger-tint)"
                      />
                    </div>
                  </div>
                </IonItem>
              ))
            : "Sin categorias"}
        </IonList>
      ) : (
        "Sin categorias"
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
      <IonAlert
        isOpen={isConfirmOpen}
        onDidDismiss={() => setIsConfirmOpen(false)}
        // cssClass='my-custom-class'
        header={"Eliminar Categoría"}
        message={
          "¿Seguro que quieres elimiar la categoría</br><strong>" +
          selected.name +
          "</strong>?"
        }
        buttons={[
          {
            text: "Cancelar",
            role: "cancel",
            cssClass: "secondary",
            id: "cancel-button",
          },
          {
            text: "Elimiar",
            id: "confirm-button",
            handler: () => {
              // deleteCuenta(selected);
            },
          },
        ]}
      />
    </>
  );
};

export default MClistcategorias;
