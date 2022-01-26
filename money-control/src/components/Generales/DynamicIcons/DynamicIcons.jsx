import { IonIcon } from "@ionic/react";
import * as Icons from "ionicons/icons";

const DynamicFaIcon = ({ name, color, slot }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return (
      <IonIcon
        icon={Icons.imageOutline}
        style={{ color: color ? color : "black" }}
        slot={slot ? slot : null}
      />
    );
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
