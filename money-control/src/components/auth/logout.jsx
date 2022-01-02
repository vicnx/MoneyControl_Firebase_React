import React from "react";
import { IonButton, IonIcon, IonContent } from "@ionic/react";
import { logOutOutline } from "ionicons/icons";
import useUser from "hooks/useUser";

export default function LogoutButton() {
  const { SignOut } = useUser();

  return (
    <IonButton size="medium" shape="round" color="danger" onClick={SignOut}>
      <IonIcon slot="start" icon={logOutOutline} />
      Logout
    </IonButton>
  );
}
