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
import useUser from "hooks/useUser";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";

const HomePage = () => {
  const { cuentas, loadingcuentas } = useUser();
  const [cuentaSelected, setCuentaSelected] = useState({});
  useEffect(() => {
    if (cuentas) {
      console.log("hay cuentas");
      setCuentaSelected(cuentas[0]);
    }
  }, [cuentas]);

  function changeCuenta(newValue) {
    setCuentaSelected(newValue);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="header-home">
          <IonLabel className="title">Overview</IonLabel>
        </div>
        <div className="home-page">
          <div className="home-page-top">
            {loadingcuentas ? (
              <ClipLoader
                color={"blue"}
                loading={true}
                css={"display: block;margin: 0 auto"}
                size={150}
              />
            ) : (
              <>
                <div className="info-select-cuenta">
                  <IonLabel className="cuenta-selected">
                    <ion-icon name={cuentaSelected.icono}></ion-icon>
                    {cuentaSelected.name}
                  </IonLabel>
                </div>
                <div className="info-cuenta">
                  <IonLabel className="dinero-cuenta">
                    <CountUp
                      end={cuentaSelected.cantidad}
                      suffix=" €"
                      duration={1}
                    />
                  </IonLabel>
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
              </>
            )}
          </div>
          <div className="home-page-bottom">
            <div className="seccion">
              <MCcuentas
                onChange={changeCuenta}
                cuentaSelected={cuentaSelected}
              />
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