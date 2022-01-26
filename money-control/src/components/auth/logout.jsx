import { IonButton, IonIcon } from "@ionic/react";
import useUser from "hooks/useUser";
import { logOutOutline } from "ionicons/icons";
import React from "react";

export default function LogoutButton() {
  const { SignOut } = useUser();

  return (
    <IonButton size="medium" shape="round" color="danger" onClick={SignOut}>
      <IonIcon slot="start" icon={logOutOutline} />
      Logout
    </IonButton>
  );
}
