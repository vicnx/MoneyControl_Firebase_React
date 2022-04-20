import {
  IonAlert,
  IonItem,
  IonLabel,
  IonList,
  IonToast,
  IonRouterLink,
  IonSearchbar,
  IonToolbar,
  IonDatetime,
  IonButton,
  IonModal,
  IonContent,
  IonTitle,
  IonButtons,
} from "@ionic/react";
import { calendar, filter } from "ionicons/icons";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import useGrupos from "hooks/useGrupos";
import useUser from "hooks/useUser";
import { informationCircle } from "ionicons/icons";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./mcfilters.css";
import { CONSTANTS } from "global/functions";
import ClipLoader from "react-spinners/ClipLoader";

const MCfilters = ({ filters }) => {
  console.log(filters);
  const [showDesdeModal, setShowDesdeModal] = useState(false);
  const [showHastaModal, setShowHastaModal] = useState(false);

  return (
    <>
      <div className="gastos-filters">
        <IonSearchbar
          value={filters.searchText}
          onIonChange={(e) => filters.setSearchText(e.detail.value)}
          showCancelButton="focus"
        ></IonSearchbar>
        <div className="gastos-filters-fechas">
          <div className="gastos-filters-fechas-fecha">
            <IonButton onClick={() => setShowDesdeModal(true)}>Desde</IonButton>
            <span>{filters.desdeDate}</span>
            <IonModal
              isOpen={showDesdeModal}
              onDidDismiss={() => setShowDesdeModal(false)}
              className="calendarModal"
            >
              <IonContent forceOverscroll={false} color="transparent">
                <IonDatetime></IonDatetime>
              </IonContent>
            </IonModal>
          </div>
          <div className="gastos-filters-fechas-fecha">
            <IonButton onClick={() => setShowHastaModal(true)}>Hasta</IonButton>
            <span>{filters.hastaDate}</span>

            <IonModal
              isOpen={showHastaModal}
              onDidDismiss={() => setShowHastaModal(false)}
              className="calendarModal"
            >
              <IonContent forceOverscroll={false} color="transparent">
                <IonDatetime></IonDatetime>
              </IonContent>
            </IonModal>
          </div>
        </div>
      </div>
    </>
  );
};

export default MCfilters;
