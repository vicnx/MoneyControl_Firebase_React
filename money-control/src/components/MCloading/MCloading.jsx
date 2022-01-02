import React from "react";
import { IonLoading } from "@ionic/react";

export default function MCloading({ loading }) {
  return (
    <IonLoading
      cssClass="my-custom-class"
      isOpen={loading}
      message={"Please wait..."}
    />
  );
}
