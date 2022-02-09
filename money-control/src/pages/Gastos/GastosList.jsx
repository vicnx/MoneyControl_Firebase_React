import { IonContent, IonPage } from "@ionic/react";
import MCinfogrupo from "components/Grupos/MCinfogrupo/mcinfogrupo";
import useGrupos from "hooks/useGrupos";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "swiper/css";
import "swiper/css/navigation";
import "./GastosList.css";

const GastosListPage = () => {
  let { groupUID } = useParams();
  const { loadinggrupos, getGroup, grupoSelected } = useGrupos();

  useEffect(() => {
    getGroup(groupUID, true);
  }, [groupUID]);

  return (
    <IonPage>
      <IonContent fullscreen scrollX="false" scrollY="true">
        {loadinggrupos ? (
          <ClipLoader
            color={"blue"}
            loading={true}
            css={"display: block;margin: 0 auto"}
            size={150}
          />
        ) : (
          <>GASTOS LIST {groupUID}</>
        )}
      </IonContent>
    </IonPage>
  );
};

export default GastosListPage;
