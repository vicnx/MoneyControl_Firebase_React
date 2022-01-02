import React from "react";
import { IonButton, IonIcon, IonContent } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import useUser from "hooks/useUser";

export default function GoogleButton() {
  const { GoogleSignIn } = useUser();

  return (
    <IonButton size="large" shape="round" color="danger" onClick={GoogleSignIn}>
      <IonIcon slot="start" icon={logoGoogle} />
      Google
    </IonButton>
  );
}
