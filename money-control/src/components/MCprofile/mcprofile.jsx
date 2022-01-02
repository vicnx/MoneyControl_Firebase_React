import React from "react";
import useUser from "hooks/useUser";
import { IonContent, IonPage } from "@ionic/react";
import "./mcprofile.css";
import LogoutButton from "components/auth/logout";
export default function MCprofile() {
  const { auth } = useUser();

  const userImage = {
    backgroundImage: 'url("' + auth.currentUser.photoURL + '")',
  };

  console.log(auth);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div class="profile-div">
          <div class="up">
            <div class="up__bkg-photo"></div>
            <div class="up__face-photo" style={userImage}></div>
            <div class="up__text">
              <h3 class="up__text-header">{auth.currentUser.displayName}</h3>
              <p class="up__text-para">{auth.currentUser.email}</p>
              <LogoutButton />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
