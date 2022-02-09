import {
  IonAlert,
  IonItem,
  IonLabel,
  IonList,
  IonToast,
  IonRouterLink,
} from "@ionic/react";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import useGrupos from "hooks/useGrupos";
import { informationCircle } from "ionicons/icons";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./mclistgastos.css";
import { CONSTANTS } from "global/functions";
import ClipLoader from "react-spinners/ClipLoader";

const MClistgastos = ({ gastos, groupuid }) => {
  const gastosViewDefect = 5;
  const gastosViewMaxDefect = 10;
  const {
    grupos,
    loadinggastos,
    loadinggrupos,
    setError,
    error,
    success,
    setSuccess,
    deleteCategoria,
  } = useGrupos();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [gastosview, setGastosview] = useState(5);

  function viewAll(prop) {
    setGastosview(
      prop
        ? gastos.length < gastosViewMaxDefect
          ? gastos.length
          : gastosViewMaxDefect
        : gastosViewDefect
    );
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
            <div className="listgastos-component">
              <span className="listgastos-component-title">Últimos gastos</span>
              <div className="info-gastos-pagin">
                <span className="mostrando-text">
                  Mostrando{" "}
                  {gastos.length > gastosViewDefect
                    ? gastosview
                    : gastos.length}{" "}
                  de
                  {gastos.length} gastos.
                </span>

                <IonRouterLink
                  routerLink={"/spendings/" + groupuid}
                  routerDirection="forward"
                  className="boton-view"
                >
                  Ver todos
                </IonRouterLink>
              </div>

              <IonList className="lista-gastos">
                {gastos
                  .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))
                  .slice(0, gastosview)
                  .map((g, index) => (
                    <div
                      className="gasto-item"
                      key={index}
                      style={{ borderColor: g.categoria.color }}
                    >
                      <div className="gasto-name-username">
                        {g.profileData.name}
                      </div>
                      <div className="gasto-name-info">
                        <div className="gasto-name-info-image">
                          <div
                            className="gasto-name-info-image-circle"
                            style={{
                              backgroundImage:
                                'url("' +
                                (g.profileData
                                  ? g.profileData.image
                                  : CONSTANTS.defaultAvatar) +
                                '")',
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="gasto-info">
                        <div className="gasto-info-desc">{g.desc}</div>
                        <div className="gasto-info-fecha">{g.fechaConvert}</div>
                      </div>
                      <div
                        className="gasto-cantidad"
                        style={
                          g.cantidad.length < 7
                            ? { fontSize: "16px" }
                            : { fontSize: "10px" }
                        }
                      >
                        - {g.cantidad} €
                      </div>
                      <div className="gasto-category">
                        <div className="gasto-category-icon">
                          <DynamicFaIcon
                            name={g.categoria.icono}
                            slot="end"
                            color={g.categoria.color}
                          />
                        </div>
                      </div>
                      <div className="gasto-options" slot="end"></div>
                    </div>
                  ))}
              </IonList>
              {gastos ? (
                gastos.length != gastosview ? (
                  gastos.length <= gastosViewDefect ? (
                    <></>
                  ) : (
                    <IonRouterLink
                      onClick={() => viewAll(true)}
                      className="boton-view"
                    >
                      Ver más...
                    </IonRouterLink>
                  )
                ) : (
                  <IonRouterLink
                    onClick={() => viewAll(false)}
                    className="boton-view"
                  >
                    Ver menos...
                  </IonRouterLink>
                )
              ) : (
                <></>
              )}
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

export default MClistgastos;
