import React from "react";
import useUser from "hooks/useUser";
import { IonContent, IonPage } from "@ionic/react";
import "./mcprofile.css";
import LogoutButton from "components/auth/logout";
export default function MCprofile() {
  const { auth, profile } = useUser();
  const userImage = {
    backgroundImage: 'url("' + profile.image + '")',
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="profile-div">
          <div className="up">
            <div className="up__bkg-photo"></div>
            <div className="up__face-photo" style={userImage}></div>
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
