import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonLabel,
  IonToolbar,
  IonImg,
  IonSelect,
  IonSelectOption,
  IonRouterLink,
  IonFab,
  IonFabButton,
  IonFabList,
  IonButton,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import "./mcinfogrupo.css";
import useGrupos from "hooks/useGrupos";
import ClipLoader from "react-spinners/ClipLoader";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";

const MCinfogrupo = ({ grupo }) => {
  // const { profile } = useUser();
  useEffect(() => {
    console.log(grupo);
  }, [grupo]);
  const {
    grupos,
    loadinggrupos,
    exitGroup,
    checkAdmin,
    deleteGroup,
    setError,
    error,
    success,
    setSuccess,
  } = useGrupos();

  return (
    <>
      <div
        className="header-info-grupo"
        style={{ backgroundColor: grupo.color }}
      >
        <span
          style={
            grupo.name
              ? grupo.name.length < 10
                ? { fontSize: "30px" }
                : { fontSize: "20px" }
              : null
          }
        >
          {grupo.name}
        </span>
        {grupo.isAdmin ? (
          <IonFab className="grupo-info-fab">
            <IonFabButton color="success" className="grupo-info-fab-first">
              <DynamicFaIcon name={"arrowBackOutline"} color="white" />
            </IonFabButton>
            <IonFabList side="start" className="grupo-info-list">
              <IonFabButton color="warning" className="grupo-info-fab-button">
                <DynamicFaIcon name={"pencilOutline"} color="black" />
              </IonFabButton>
              <IonRouterLink
                routerLink={"/categories/" + grupo.docid}
                routerDirection="forward"
              >
                <IonFabButton
                  color="secondary"
                  className="grupo-info-fab-button"
                >
                  <DynamicFaIcon name={"appsOutline"} color="black" />
                </IonFabButton>
              </IonRouterLink>
            </IonFabList>
          </IonFab>
        ) : (
          <></>
        )}
      </div>
      <IonContent className="content-info-grupo">
        {/* <MClistgrupos /> */}
      </IonContent>
    </>
  );
};

export default MCinfogrupo;
