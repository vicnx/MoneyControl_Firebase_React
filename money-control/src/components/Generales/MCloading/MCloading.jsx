import { IonLoading } from "@ionic/react";
import React from "react";

export default function MCloading({ loading }) {
  return (
    <IonLoading
      cssClass="my-custom-class"
      isOpen={loading}
      message={"Please wait..."}
    />
  );
}
