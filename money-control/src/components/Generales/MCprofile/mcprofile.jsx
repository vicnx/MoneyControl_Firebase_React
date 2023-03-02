import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import LogoutButton from "components/auth/logout";
import { CONSTANTS, randomString } from "global/functions";
import useUser from "hooks/useUser";
import * as Icons from "ionicons/icons";
import React, { useEffect, useState } from "react";
import "./mcprofile.css";

export default function MCprofile() {
  const { profile, updateProfile } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [imageURL, setImageURL] = useState(profile.image);
  const userImage = {
    backgroundImage:
      'url("' +
      (profile.image ? profile.image : CONSTANTS.defaultAvatar) +
      '")',
  };
  const tiposavatar = [
    "adventurer",
    "adventurer-neutral",
    "avataaars",
    "big-ears",
    "fun-emoji",
    "bottts",
    "bottts-neutral",
    "personas",
    "pixel-art",
    "pixel-art-neutral",
  ];

  useEffect(() => {
    console.log("ha cambiado profile");
    setImageURL(profile.image ? profile.image : CONSTANTS.defaultAvatar);
  }, [profile]);

  const genAvatar = () => {
    var style = tiposavatar[Math.floor(Math.random() * tiposavatar.length)];
    let url = `https://api.dicebear.com/5.x/${style}/svg?seed=${randomString(8)}`
    setImageURL(url);
  };

  return (
    <>
      <IonModal
        isOpen={showModal}
        initialBreakpoint={0.5}
        breakpoints={[0, 0.5, 1]}
        onDidDismiss={() => setShowModal(false)}
      >
        <IonToolbar>
          <IonTitle>Cambiar foto</IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={() => {
                setShowModal(false);
              }}
            >
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonContent className="modalContent">
          <IonItem>
            <IonLabel position="stacked">
              Introduce la URL de la imagen
            </IonLabel>
            <IonInput
              value={imageURL}
              placeholder="Enter new image URL"
              onIonChange={(e) => setImageURL(e.detail.value)}
              clearInput
            ></IonInput>
          </IonItem>
          <div className="buttons-div">
            <IonButton
              onClick={() => {
                updateProfile({ imageURL });
                setShowModal(false);
              }}
              color="success"
            >
              <IonIcon slot="start" icon={Icons.logInOutline} />
              Guardar
            </IonButton>
            <IonButton
              onClick={() => {
                genAvatar();
              }}
              color="warning"
            >
              <IonIcon slot="start" icon={Icons.imageOutline} />
              Generar Avatar
            </IonButton>
          </div>
          <div className="imageCanvas">
            <img src={imageURL} alt="" />
          </div>
        </IonContent>
      </IonModal>
      <IonContent fullscreen>
        <div className="profile-div">
          <div className="up">
            <IonLabel
              className="icon-edit-photo"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <IonIcon icon={Icons.createOutline} slot="start"></IonIcon>
              Edit
            </IonLabel>

            <div className="up__bkg-photo"></div>
            <div
              className="up__face-photo"
              style={userImage}
              onClick={() => {
                setShowModal(true);
              }}
              id="trigger-button"
            ></div>

            <div className="up__text">
              <h3 className="up__text-header">{profile.name}</h3>
              <p className="up__text-para">{profile.email}</p>
              <LogoutButton />
            </div>
          </div>
        </div>
      </IonContent>
    </>
  );
}
