// import * as Icons from "react-icons/io5";
import * as Icons from "ionicons/icons";
import {
  IonContent,
  IonModal,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonItem,
  IonInput,
  IonLabel,
  IonIcon,
} from "@ionic/react";

/* Your icon name from database data can now be passed as prop */
const DynamicFaIcon = ({ name, color, slot }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one

    return <IonIcon icon={Icons.imageOutline} />;
  }

  return slot ? (
    <IonIcon
      style={{ color: color ? color : "black" }}
      icon={IconComponent}
      slot={slot ? slot : null}
    />
  ) : (
    <IonIcon style={{ color: color ? color : "black" }} icon={IconComponent} />
  );
};

export default DynamicFaIcon;
