import { IonContent, IonPage } from "@ionic/react";
import MCdatosgrupo from "components/Grupos/MCdatosgrupo/mcdatosgrupo";
import React from "react";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./DatosGrupo.css";

const DatosGrupoPage = () => {
  const location = useLocation();
  var str = location.pathname.split("/");
  var type = str[str.length - 1];

  return (
    <IonPage>
      <IonContent fullscreen scrollX="false" scrollY="false">
        <IonContent scrollX="true" scrollY="true">
          <MCdatosgrupo type={type} />
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default DatosGrupoPage;
