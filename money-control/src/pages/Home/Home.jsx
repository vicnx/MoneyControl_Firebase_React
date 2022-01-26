import { IonContent, IonIcon, IonLabel, IonPage } from "@ionic/react";
import MCcuentas from "components/Cuentas/MCcuentas/mccuentas";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import MCgrupos from "components/Grupos/MCgrupos/mcgrupos";
import useCuentas from "hooks/useCuentas";
import * as Icons from "ionicons/icons";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ClipLoader from "react-spinners/ClipLoader";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";

const HomePage = () => {
  const { cuentas, loadingcuentas } = useCuentas();
  const [cuentaSelected, setCuentaSelected] = useState({});
  useEffect(() => {
    if (cuentas.length > 0) {
      setCuentaSelected(cuentas[0]);
    }
  }, [cuentas]);

  function changeCuenta(newValue) {
    setCuentaSelected(newValue);
    console.log(cuentaSelected.cantidad);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
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
                  <div className="cuenta-selected">
                    <div className="text-icon">
                      <DynamicFaIcon
                        name={cuentaSelected.icono}
                        color={cuentaSelected.color}
                      />
                      <IonLabel className="cuenta-selected-name">
                        {cuentaSelected.name}
                      </IonLabel>
                    </div>
                  </div>
                </div>
                <div className="info-cuenta">
                  <IonLabel className="dinero-cuenta">
                    <small>Balance actual:</small>
                    <CountUp
                      end={cuentaSelected.cantidad}
                      suffix=" €"
                      duration={1}
                      separator=" "
                      decimal=","
                      decimals={2}
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
