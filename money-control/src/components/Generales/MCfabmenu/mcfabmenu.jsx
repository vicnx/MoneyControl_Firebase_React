import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { add, arrowUp, remove } from "ionicons/icons";
import React from "react";
import "./mcfabmenu.css";

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
          <IonFabButton color="success">
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabButton color="danger">
            <IonIcon icon={remove} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </>
  );
}
