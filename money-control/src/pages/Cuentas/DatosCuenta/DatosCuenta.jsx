import { IonContent, IonPage } from "@ionic/react";
import MCdatoscuenta from "components/Cuentas/MCdatoscuenta/mcdatoscuenta";
import React from "react";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./DatosCuenta.css";

const DatosCuentaPage = () => {
  const location = useLocation();
  var str = location.pathname.split("/");
  var type = str[str.length - 1];

  return (
    <IonPage>
      <IonContent fullscreen scrollX="false" scrollY="false">
        <IonContent scrollX="true" scrollY="true">
          <MCdatoscuenta type={type} />
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default DatosCuentaPage;
