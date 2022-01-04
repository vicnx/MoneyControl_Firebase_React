import React, { useState, useEffect } from "react";
import useUser from "hooks/useUser";
import {
  IonContent,
  IonPage,
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
import "./mcprofile.css";
import * as Icons from "ionicons/icons";
import LogoutButton from "components/auth/logout";
import randomString from "global/functions";
export default function MCprofile() {
  const { auth, profile } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [imageURL, setImageURL] = useState(profile.image);
  const userImage = {
    backgroundImage: 'url("' + profile.image + '")',
  };
  const tiposavatar = [
    "adventurer",
    "adventurer-neutral",
    "avataaars",
    "big-ears",
  ];

  useEffect(() => {
    setImageURL(profile.image);
  }, [profile]);

  const genAvatar = () => {
    var style = tiposavatar[Math.floor(Math.random() * tiposavatar.length)];
    setImageURL(
      "https://avatars.dicebear.com/api/" +
        style +
        "/" +
        randomString(8) +
        ".svg"
    );
  };

  return (
    <IonPage>
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
              <h3 className="up__text-header">
                {auth.currentUser.displayName}
              </h3>
              <p className="up__text-para">{auth.currentUser.email}</p>
              <LogoutButton />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
