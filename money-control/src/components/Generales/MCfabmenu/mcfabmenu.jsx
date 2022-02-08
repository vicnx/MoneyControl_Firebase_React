import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonRouterLink,
} from "@ionic/react";
import { add, arrowUp, remove } from "ionicons/icons";
import React from "react";
import "./mcfabmenu.css";
import DynamicFaIcon from "../DynamicIcons/DynamicIcons";

export default function MCfabmenu() {
  return (
    <>
      <IonFab
        vertical="bottom"
        horizontal="start"
        slot="fixed"
        className="options-fab"
      >
        <IonFabButton color="secondary">
          <IonIcon icon={arrowUp} />
        </IonFabButton>
        <IonFabList side="top">
          <IonRouterLink
            routerLink={"/spendings/add"}
            routerDirection="forward"
            className="addgasto-fab"
          >
            <IonFabButton color="danger" className="addgasto">
              <DynamicFaIcon name="remove" color="white" />
            </IonFabButton>
          </IonRouterLink>

          <IonRouterLink
            routerLink={"/spendings/add"}
            routerDirection="forward"
            className="addgasto-fab"
          >
            <IonFabButton color="success" className="addgasto">
              <DynamicFaIcon name="add" color="white" />
            </IonFabButton>
          </IonRouterLink>
        </IonFabList>
      </IonFab>
    </>
  );
}
