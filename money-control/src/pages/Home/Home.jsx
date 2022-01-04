import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonLabel,
  IonToolbar,
  IonImg,
  IonSelect,
  IonSelectOption,
  IonIcon,
} from "@ionic/react";
import "swiper/css";
import "swiper/css/navigation";
import React, { useEffect, useState } from "react";
import * as Icons from "ionicons/icons";
import "./Home.css";
import MCcuentas from "components/MCcuentas/mccuentas";
import MCgrupos from "components/MCgrupos/mcgrupos";

const HomePage = () => {
  // const { profile } = useUser();
  const [cuentaSelected, setCuentaSelected] = useState("cuenta1");

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="header-home">
          <IonLabel className="title">Overview</IonLabel>
        </div>
        <div className="home-page">
          <div className="home-page-top">
            <div className="info-select-cuenta">
              <IonLabel className="cuenta-selected">
                <IonIcon icon={Icons.logoPaypal} slot="start"></IonIcon> Paypal
              </IonLabel>
            </div>
            <div className="info-cuenta">
              <IonLabel className="dinero-cuenta">2900 €</IonLabel>
              <div className="gastos-beneficios">
                <div className="gastos-beneficios-div">
                  <IonLabel className="gastos-beneficios-label">
                    Ganancias
                  </IonLabel>
                  <IonLabel className="beneficios-cuenta">
                    <IonIcon icon={Icons.caretUpOutline}></IonIcon>
                    100 €
                  </IonLabel>
                </div>
                <div className="gastos-beneficios-div">
                  <IonLabel className="gastos-beneficios-label">
                    Gastos
                  </IonLabel>
                  <IonLabel className="gastos-cuenta">
                    <IonIcon icon={Icons.caretDownOutline}></IonIcon>
                    1020 €
                  </IonLabel>
                </div>
              </div>
            </div>
          </div>
          <div className="home-page-bottom">
            <div className="seccion">
              <MCcuentas />
            </div>
            <div className="seccion">
              <MCgrupos />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
