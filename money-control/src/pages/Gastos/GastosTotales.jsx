import { IonContent, IonPage } from "@ionic/react";
import useGrupos from "hooks/useGrupos";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "swiper/css";
import "swiper/css/navigation";
import "./GastosTotales.css";
import MCgastostotales from "components/Gastos/MCgastostotales/mcgastostotales";

const GastosTotales = () => {
  const { getGrupoGastosTotales, grupoTotal, loadinggrupos } = useGrupos();

  useEffect(() => {
    console.log("useeffect");
    getGrupoGastosTotales();
    console.log(grupoTotal);
  }, []);

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
        ) : grupoTotal.gastos ? (
          <MCgastostotales gastos={grupoTotal.gastos} grupo={grupoTotal} />
        ) : (
          "Sin gastos"
        )}
        {/* {loadinggrupos ? (
          <ClipLoader
            color={"blue"}
            loading={true}
            css={"display: block;margin: 0 auto"}
            size={150}
          />
        ) : grupoSelected.gastos ? (
          <MCgastostotales gastos={grupoSelected.gastos} />
        ) : (
          <></>
        )} */}
      </IonContent>
    </IonPage>
  );
};

export default GastosTotales;
