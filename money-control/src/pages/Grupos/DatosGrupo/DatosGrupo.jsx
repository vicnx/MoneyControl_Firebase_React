import {
  IonContent,
  IonPage,
  IonLabel,
  IonIcon,
  IonHeader,
} from "@ionic/react";
import "swiper/css";
import "swiper/css/navigation";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./DatosGrupo.css";
import useCuentas from "hooks/useCuentas";
import MClistcuentas from "components/Cuentas/MClistcuentas/mclistcuentas";
import MCdatoscuenta from "components/Cuentas/MCdatoscuenta/mcdatoscuenta";
import MCdatosgrupo from "components/Grupos/MCdatosgrupo/mcdatosgrupo";

const DatosGrupoPage = () => {
  const { cuentas, loadingcuentas } = useCuentas();
  const location = useLocation();
  var str = location.pathname.split("/");
  var type = str[str.length - 1];

  return (
    <IonPage>
      <IonContent fullscreen scrollX="false" scrollY="false">
        {/* <IonHeader fixed className="header-cuentas-datos">
          <IonLabel className="title">
            {type == "add" ? "Nueva cuenta" : "Editar cuenta"}
          </IonLabel>
        </IonHeader> */}
        <IonContent scrollX="true" scrollY="true">
          <MCdatosgrupo type={type} />
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default DatosGrupoPage;
