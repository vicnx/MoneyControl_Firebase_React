import {
  IonAlert,
  IonItem,
  IonLabel,
  IonList,
  IonToast,
  IonRouterLink,
  IonSearchbar,
  IonToolbar,
  IonDatetime,
  IonButton,
  IonModal,
  IonContent,
  IonTitle,
  IonButtons,
} from "@ionic/react";
import { calendar } from "ionicons/icons";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import useGrupos from "hooks/useGrupos";
import useUser from "hooks/useUser";
import { informationCircle } from "ionicons/icons";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./mcgastostotales.css";
import { CONSTANTS } from "global/functions";
import ClipLoader from "react-spinners/ClipLoader";
import MCfilters from "../../Generales/MCfilters/mcfilters";

const MCgastostotales = ({ gastos, grupo }) => {
  const { profile } = useUser();
  const {
    loadinggastos,
    setError,
    error,
    success,
    setSuccess,
    deleteCategoria,
  } = useGrupos();
  const [desdeDate, setDesdeDate] = useState("01/02/2003");
  const [hastaDate, setHastaDate] = useState("02/02/2003");

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [searchText, setSearchText] = useState("");

  function filterBuscador(elemento) {
    return elemento.desc.toLowerCase().includes(searchText.toLowerCase());
  }

  return (
    <>
      {loadinggastos ? (
        <ClipLoader
          color={"blue"}
          loading={true}
          css={"display: block;margin: 0 auto"}
          size={150}
        />
      ) : (
        <>
          {gastos ? (
            <div className="gastostotales-component">
              <span className="gastostotales-component-title">
                {grupo.name}
              </span>
              <MCfilters
                filters={{
                  searchText,
                  setSearchText,
                  desdeDate,
                  setDesdeDate,
                  hastaDate,
                  setHastaDate,
                }}
              />
              <div className="info-gastos-pagin"></div>

              <IonList className="lista-gastostotales">
                {gastos
                  .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))
                  .filter(filterBuscador)
                  .map((g, index) => (
                    <div
                      className="gasto-general-item"
                      key={index}
                      style={{
                        borderColor: g.group.color,
                      }}
                    >
                      <div className="gasto-general-left">
                        <div className="gasto-general-grupo">
                          <div className="gasto-general-grupo-icono">
                            <DynamicFaIcon
                              name={g.group.icono}
                              slot="end"
                              color={g.group.color}
                            />
                          </div>
                          <div className="gasto-general-grupo-name">
                            {g.group.name}
                          </div>
                        </div>
                        <div className="gasto-general-desc">{g.desc}</div>
                        <div className="gasto-general-category">
                          <div className="gasto-general-category-name">
                            {g.categoria.name}
                          </div>
                          <div className="gasto-general-category-icono">
                            <DynamicFaIcon
                              name={g.categoria.icono}
                              slot="end"
                              color={g.categoria.color}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="gasto-general-right">
                        <div className="gasto-general-userInfo">
                          <div className="gasto-general-userInfo-name">
                            {profile.name}
                          </div>
                          <div className="gasto-general-userInfo-avatar">
                            <div
                              className="gasto-general-name-info-image-circle"
                              style={{
                                backgroundImage:
                                  'url("' +
                                  (profile
                                    ? profile.image
                                    : CONSTANTS.defaultAvatar) +
                                  '")',
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="gasto-general-cantidad">
                          <span
                            style={
                              g.cantidad.length < 7
                                ? { fontSize: "25px" }
                                : { fontSize: "12px" }
                            }
                          >
                            - {g.cantidad} €
                          </span>
                        </div>
                        <div className="gasto-general-fecha">
                          {g.fechaConvert}
                        </div>
                      </div>
                    </div>
                  ))}
              </IonList>
            </div>
          ) : (
            "Sin gastos"
          )}
        </>
      )}

      <IonToast
        isOpen={success.status}
        onDidDismiss={() => setSuccess({ status: false, msg: "" })}
        message={success.msg}
        icon={informationCircle}
        position="top"
        duration={2000}
        color="success"
      />
      <IonToast
        isOpen={error.status}
        onDidDismiss={() => setError({ status: false, msg: "" })}
        message={error.msg}
        icon={informationCircle}
        position="top"
        duration={2000}
        color="warning"
      />
      <IonAlert
        isOpen={isConfirmOpen}
        onDidDismiss={() => setIsConfirmOpen(false)}
        // cssClass='my-custom-class'
        header={"Eliminar Categoría"}
        message={
          "¿Seguro que quieres elimiar la categoría</br><strong>" +
          selected.name +
          "</strong>?"
        }
        buttons={[
          {
            text: "Cancelar",
            role: "cancel",
            cssClass: "secondary",
            id: "cancel-button",
          },
          {
            text: "Elimiar",
            id: "confirm-button",
            handler: () => {
              deleteCategoria(gastos, selected);
            },
          },
        ]}
      />
    </>
  );
};

export default MCgastostotales;
