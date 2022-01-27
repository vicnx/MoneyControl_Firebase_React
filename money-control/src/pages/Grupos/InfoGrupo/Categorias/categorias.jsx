import { IonContent, IonPage } from "@ionic/react";
import MClistcategorias from "components/Grupos/MClistcategorias/mclistcategorias";
import MCnewcategoria from "components/Grupos/MCnewcategoria/mcnewcategoria";
import useGrupos from "hooks/useGrupos";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "swiper/css";
import "swiper/css/navigation";
import "./categorias.css";

const CategoriasPage = () => {
  let { groupUID } = useParams();
  const { loadinggrupos, getGroup, grupoSelected } = useGrupos();

  useEffect(() => {
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
            <MCnewcategoria />
            <MClistcategorias grupo={grupoSelected} />
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CategoriasPage;
