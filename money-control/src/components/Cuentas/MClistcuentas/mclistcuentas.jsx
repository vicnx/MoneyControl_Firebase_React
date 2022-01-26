import { IonAlert, IonItem, IonLabel, IonList, IonToast } from "@ionic/react";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import useCuentas from "hooks/useCuentas";
import { informationCircle } from "ionicons/icons";
import React, { useState } from "react";
import CountUp from "react-countup";
import ClipLoader from "react-spinners/ClipLoader";
import "swiper/css";
import "swiper/css/navigation";
import "./mclistcuentas.css";

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
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selected, setSelected] = useState({});

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
      <IonAlert
        isOpen={isConfirmOpen}
        onDidDismiss={() => setIsConfirmOpen(false)}
        // cssClass='my-custom-class'
        header={"Eliminar Cuenta"}
        message={
          "¿Seguro que quieres elimiar la cuenta</br><strong>" +
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
              deleteCuenta(selected);
            },
          },
        ]}
      />
    </>
  );
};

export default MClistcuentas;
