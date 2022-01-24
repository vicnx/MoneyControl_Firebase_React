import {
  IonLabel,
  IonList,
  IonItem,
  IonToast,
  IonAlert,
  IonButton,
  IonModal,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonInput,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useCuentas from "hooks/useCuentas";
import useGrupos from "hooks/useGrupos";
import React, { useEffect, useState } from "react";
import "./mcjoingroup.css";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/DynamicIcons/DynamicIcons";
import { informationCircle } from "ionicons/icons";
import MCloading from "components/MCloading/MCloading";

const MCjoingroup = () => {
  const { error, setError, joinGroup, loadinggrupos, success, setSuccess } =
    useGrupos();
  const [showModal, setShowModal] = useState(false);
  const [groupcode, setGroupcode] = useState("");
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  useEffect(() => {
    if (success.status && showModal) {
      setShowModal(false);
    }
  }, [success]);
  return (
    <>
      <IonModal
        isOpen={showModal}
        initialBreakpoint={0.5}
        breakpoints={[0, 0.5, 1]}
        onDidDismiss={() => setShowModal(false)}
      >
        <IonToolbar>
          <IonTitle>Unirse a un grupo</IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={() => {
                setShowModal(false);
              }}
            >
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonContent className="modalContent">
          {loadinggrupos ? (
            <MCloading loading={true} />
          ) : (
            <>
              <IonItem>
                <IonLabel position="stacked">
                  Introduce el código del grupo
                </IonLabel>
                <IonInput
                  value={groupcode}
                  placeholder="Introduce el código del grupo"
                  onIonChange={(e) => setGroupcode(e.detail.value)}
                  clearInput
                ></IonInput>
              </IonItem>
              <div className="buttons-div">
                <IonButton
                  className="boton-join"
                  size="medium"
                  shape="round"
                  color="success"
                  onClick={() => joinGroup(groupcode)}
                >
                  <IonLabel className="label">Unirse</IonLabel>
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
      </IonModal>
      <IonButton
        className="boton-join"
        size="medium"
        shape="round"
        color="danger"
        onClick={() => setShowModal(true)}
      >
        <IonLabel className="label">Unirse a un grupo</IonLabel>
        <DynamicFaIcon name="peopleOutline" color="white" slot="end" />
      </IonButton>
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

export default MCjoingroup;
