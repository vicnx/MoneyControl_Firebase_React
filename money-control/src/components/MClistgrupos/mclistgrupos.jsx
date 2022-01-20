import { IonLabel, IonList, IonItem, IonToast, IonAlert } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useCuentas from "hooks/useCuentas";
import useGrupos from "hooks/useGrupos";
import React, { useEffect, useState } from "react";
import "./mclistgrupos.css";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/DynamicIcons/DynamicIcons";
import { informationCircle } from "ionicons/icons";

const MClistgrupos = (props) => {
  const {
    cuentas,
    loadingcuentas,
    deleteCuenta,
    success,
    setSuccess,
    error,
    setError,
  } = useCuentas();
  const { grupos, loadinggrupos } = useGrupos();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selected, setSelected] = useState({});
  return (
    <>
      {grupos ? (
        <div>
          {grupos.map((c, index) => (
            <span key={index}>{c.name} wdad</span>
            // <IonItem className="grupo-item" key={index}>
            //   <div className="grupo-name-info">
            //     {/* <DynamicFaIcon name={c.icono} color={c.color} /> */}
            //     <IonLabel className="grupo-name">{c.name}</IonLabel>
            //   </div>

            //   <div className="grupo-options" slot="end">
            //     <div
            //       className="delete"
            //       onClick={() => {
            //         setSelected(c);
            //         setIsConfirmOpen(true);
            //       }}
            //     >
            //       <DynamicFaIcon
            //         name="trash"
            //         color="var(--ion-color-danger-tint)"
            //       />
            //     </div>
            //   </div>
            // </IonItem>
          ))}
        </div>
      ) : (
        "Sin grupos"
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

export default MClistgrupos;
