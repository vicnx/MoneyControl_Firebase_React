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
  IonIcon,
} from "@ionic/react";
import { calendarOutline, filter } from "ionicons/icons";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./mcfilters.css";
import { CONSTANTS } from "global/functions";
import { format, parseISO, getDate, getMonth, getYear } from "date-fns";
const MCfilters = ({ filters }) => {
  console.log(filters);
  const [showDesdeModal, setShowDesdeModal] = useState(false);
  const [showHastaModal, setShowHastaModal] = useState(false);

  const formatDate = (value) => {
    var date = new Date(parseInt(value));
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    return day + "/" + month + "/" + year;
  };

  const isoDate = (v) => {
    console.log({ v });
    return new Date(parseInt(v)).toISOString();
  };

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
            <IonButton onClick={() => setShowDesdeModal(true)}>
              <IonIcon slot="start" icon={calendarOutline} /> Desde
            </IonButton>
            <span>{formatDate(filters.desdeDate)}</span>
            <IonModal
              isOpen={showDesdeModal}
              onDidDismiss={() => setShowDesdeModal(false)}
              className="calendarModal"
            >
              <IonContent forceOverscroll={false} color="transparent">
                <IonDatetime
                  value={isoDate(filters.desdeDate)}
                  onIonChange={(e) => {
                    filters.setDesdeDate(new Date(e.detail.value).getTime());
                  }}
                  presentation="date"
                ></IonDatetime>
              </IonContent>
            </IonModal>
          </div>
          <div className="gastos-filters-fechas-fecha">
            <IonButton onClick={() => setShowHastaModal(true)}>
              <IonIcon slot="start" icon={calendarOutline} /> Hasta
            </IonButton>
            <span>{formatDate(filters.hastaDate)}</span>

            <IonModal
              isOpen={showHastaModal}
              onDidDismiss={() => setShowHastaModal(false)}
              className="calendarModal"
            >
              <IonContent forceOverscroll={false} color="transparent">
                <IonDatetime
                  value={isoDate(filters.hastaDate)}
                  onIonChange={(e) => {
                    filters.setHastaDate(new Date(e.detail.value).getTime());
                  }}
                  presentation="date"
                ></IonDatetime>
              </IonContent>
            </IonModal>
          </div>
        </div>
      </div>
    </>
  );
};

export default MCfilters;
