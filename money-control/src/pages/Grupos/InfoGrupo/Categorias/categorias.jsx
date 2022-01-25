import {
  IonContent,
  IonPage,
  IonLabel,
  IonIcon,
  IonHeader,
  IonItem,
  IonButton,
  IonRouterLink,
} from "@ionic/react";
import { useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import React, { useEffect, useState } from "react";
import "./categorias.css";
import useCuentas from "hooks/useCuentas";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import { Link } from "react-router-dom";
import MClistgrupos from "components/Grupos/MClistgrupos/mclistgrupos";
import MCjoingroup from "components/Grupos/MCjoingroup/mcjoingroup";
import MCinfogrupo from "components/Grupos/MCinfogrupo/mcinfogrupo";
import useGrupos from "hooks/useGrupos";
const CategoriasPage = () => {
  let { groupUID } = useParams();
  const { loadinggrupos, getGroup, setgrupoSelected, grupoSelected } =
    useGrupos();

  useEffect(() => {
    console.log("categorias page", groupUID);
    getGroup(groupUID);
  }, [groupUID]);

  return (
    <IonPage>
      <IonContent fullscreen scrollX="false" scrollY="false">
        {loadinggrupos ? (
          <ClipLoader
            color={"blue"}
            loading={true}
            css={"display: block;margin: 0 auto"}
            size={150}
          />
        ) : (
          <>
            CATEGORIAS
            {/* <MCinfogrupo grupo={grupoSelected} /> */}
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CategoriasPage;
