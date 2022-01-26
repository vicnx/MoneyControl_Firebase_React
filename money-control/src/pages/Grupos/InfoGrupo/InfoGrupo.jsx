import { IonContent, IonPage } from "@ionic/react";
import MCinfogrupo from "components/Grupos/MCinfogrupo/mcinfogrupo";
import useGrupos from "hooks/useGrupos";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "swiper/css";
import "swiper/css/navigation";
import "./InfoGrupo.css";

const InfoGrupoPage = () => {
  let { groupUID } = useParams();
  const { loadinggrupos, getGroup, grupoSelected } = useGrupos();

  useEffect(() => {
    getGroup(groupUID);
  }, [groupUID, getGroup]);

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
            <MCinfogrupo grupo={grupoSelected} />
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default InfoGrupoPage;
