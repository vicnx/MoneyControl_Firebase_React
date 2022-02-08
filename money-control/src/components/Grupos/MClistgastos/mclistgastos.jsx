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
import "./mclistgastos.css";
import { CONSTANTS } from "global/functions";
import ClipLoader from "react-spinners/ClipLoader";

const MClistgastos = ({ gastos }) => {
  const {
    grupos,
    loadinggastos,
    loadinggrupos,
    setError,
    error,
    success,
    setSuccess,
    deleteCategoria,
  } = useGrupos();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selected, setSelected] = useState({});

  return (
    <>
      {loadinggastos ? (
        <ClipLoader
          color={"blue"}
          loading={true}
          css={"display: block;margin: 0 auto"}
          size={150}
        />
      ) : (
        <>
          {gastos ? (
            <div className="listgastos-component">
              <span className="listgastos-component-title">
                Últimos movimientos
              </span>
              <IonList className="lista-categorias">
                {gastos.map((g, index) => (
                  <div className="gasto-item" key={index}>
                    <div className="gasto-name-info">
                      <div className="image">
                        <div
                          className="image-circle"
                          style={{
                            backgroundImage:
                              'url("' +
                              (g.profileData
                                ? g.profileData.image
                                : CONSTANTS.defaultAvatar) +
                              '")',
                          }}
                        ></div>
                        <div className="">{g.profileData.name}</div>
                      </div>
                    </div>
                    wdad
                    <div className="gasto-options" slot="end"></div>
                  </div>
                ))}
              </IonList>
            </div>
          ) : (
            "Sin gastos"
          )}
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
              deleteCategoria(gastos, selected);
            },
          },
        ]}
      />
    </>
  );
};

export default MClistgastos;
