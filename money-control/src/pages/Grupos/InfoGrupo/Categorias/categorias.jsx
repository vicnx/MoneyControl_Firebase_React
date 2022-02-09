import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import MClistcategorias from "components/Grupos/MClistcategorias/mclistcategorias";
import useGrupos from "hooks/useGrupos";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import "swiper/css";
import "swiper/css/navigation";
import "./categorias.css";

const CategoriasPage = () => {
  let { groupUID } = useParams();
  const { loadinggrupos, getGroup, grupoSelected } = useGrupos();

  useEffect(() => {
    getGroup(groupUID, true);
  }, [groupUID]);

  return (
    <IonPage>
      <IonContent fullscreen scrollX="true" scrollY="true">
        {loadinggrupos ? (
          <ClipLoader
            color={"blue"}
            loading={true}
            css={"display: block;margin: 0 auto"}
            size={150}
          />
        ) : (
          <>
            <div className="botones-div">
              <IonRouterLink
                routerLink={"/newcategorie/" + groupUID}
                routerDirection="forward"
                className="boton-add"
              >
                <DynamicFaIcon
                  name="addCircle"
                  color="var(--ion-color-primary)"
                />
              </IonRouterLink>
            </div>

            <MClistcategorias grupo={grupoSelected} />
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CategoriasPage;
