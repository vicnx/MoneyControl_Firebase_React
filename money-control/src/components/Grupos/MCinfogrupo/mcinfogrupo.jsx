import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonRouterLink,
} from "@ionic/react";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import useGrupos from "hooks/useGrupos";
import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import MClistgastos from "../MClistgastos/mclistgastos";
import "./mcinfogrupo.css";

const MCinfogrupo = ({ grupo }) => {
  console.log("MCinfogrupo", grupo);
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
        {grupo.gastos ? <MClistgastos gastos={grupo.gastos} /> : <></>}
      </IonContent>
    </>
  );
};

export default MCinfogrupo;
