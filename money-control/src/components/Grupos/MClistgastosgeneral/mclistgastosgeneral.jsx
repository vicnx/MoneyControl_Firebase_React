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
import "./mclistgastosgeneral.css";
import { CONSTANTS } from "global/functions";
import ClipLoader from "react-spinners/ClipLoader";

const MClistgastosgeneral = ({ gastos, groupuid }) => {
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
    grupoSelected,
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
            <div className="listgastos-general-component ">
              <span className="listgastos-general-component-title">
                Últimos gastos de todos tus grupos.
              </span>
              <div className="info-gastos-general-pagin">
                <span className="mostrando-text">
                  Mostrando{" "}
                  {gastos.length > gastosViewDefect
                    ? gastosview
                    : gastos.length}{" "}
                  de {gastos.length} gastos.
                </span>

                <IonRouterLink
                  routerLink={"/spendings/" + groupuid}
                  routerDirection="forward"
                  className="boton-view"
                >
                  Ver todos
                </IonRouterLink>
              </div>

              <IonList className="lista-gastos-general">
                {gastos
                  .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))
                  .slice(0, gastosview)
                  .map((g, index) => (
                    <div
                      className="gasto-general-item"
                      key={index}
                      style={{
                        borderColor: g.otherGroup
                          ? g.otherGroup.color
                          : grupoSelected.color,
                      }}
                    >
                      <div className="gasto-general-left">
                        <div className="gasto-general-grupo">
                          <div className="gasto-general-grupo-icono">
                            <DynamicFaIcon
                              name={
                                g.isOtherGroup
                                  ? g.otherGroup.icono
                                  : grupoSelected.icono
                              }
                              slot="end"
                              color={
                                g.isOtherGroup
                                  ? g.otherGroup.color
                                  : grupoSelected.color
                              }
                            />
                          </div>
                          <div className="gasto-general-grupo-name">
                            {g.otherGroup
                              ? g.otherGroup.name
                              : grupoSelected.name}
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
                            {g.profileData.name}
                          </div>
                          <div className="gasto-general-userInfo-avatar">
                            <div
                              className="gasto-general-name-info-image-circle"
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
                      {/* <div className="gasto-name-username">
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
                      <div className="gasto-options" slot="end"></div> */}
                    </div>
                  ))}
              </IonList>
              {gastos ? (
                gastos.length != gastosViewDefect ? (
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

export default MClistgastosgeneral;
