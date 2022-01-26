import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import MClistcuentas from "components/Cuentas/MClistcuentas/mclistcuentas";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./Cuentas.css";

const CuentasPage = () => {
  return (
    <IonPage>
      <IonContent
        fullscreen
        className="cuentasPage"
        scrollX="false"
        scrollY="false"
      >
        <div className="boton_add_parent">
          <IonRouterLink
            routerLink={"/cuentas/add"}
            routerDirection="forward"
            className="boton-add"
          >
            <DynamicFaIcon name="addCircle" color="var(--ion-color-primary)" />
          </IonRouterLink>
        </div>
        <IonContent className="list-cuentas">
          <MClistcuentas />
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CuentasPage;
