import { IonButton, IonIcon } from "@ionic/react";
import useUser from "hooks/useUser";
import { logoGoogle } from "ionicons/icons";
import React from "react";

export default function GoogleButton() {
  const { GoogleSignIn } = useUser();

  return (
    <IonButton size="large" shape="round" color="danger" onClick={GoogleSignIn}>
      <IonIcon slot="start" icon={logoGoogle} />
      Login
    </IonButton>
  );
}
