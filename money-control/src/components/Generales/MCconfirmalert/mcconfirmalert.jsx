import React, { useState } from "react";
import "./mcconfirmalert.css";
import DynamicFaIcon from "../DynamicIcons/DynamicIcons";
import { IonAlert } from "@ionic/react";

export default function MCConfirmAlert(props) {
  return (
    <>
      <IonAlert
        isOpen={props.showAlert}
        onDidDismiss={props.onDismiss}
        header={props.header}
        message={props.message}
        cssClass="bigAlert"
        buttons={[
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              props.onDismiss();
            }
          },
          {
            text: 'Sí',
            handler: () =>{
              props.onYesClick();
            }
          }
        ]}
      />
    </>
  );
}
