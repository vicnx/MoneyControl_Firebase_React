import { IonAlert, IonLabel, IonRouterLink, IonToast } from "@ionic/react";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import useGrupos from "hooks/useGrupos";
import { informationCircle } from "ionicons/icons";
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "swiper/css";
import "swiper/css/navigation";
import "./mclistgrupos.css";

const MClistgrupos = (props) => {
  const {
    grupos,
    loadinggrupos,
    exitGroup,
    deleteGroup,
    setError,
    error,
    success,
    setSuccess,
  } = useGrupos();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [selectedDelete, setSelectedDelete] = useState({});

  return (
    <>
      {loadinggrupos ? (
        <ClipLoader
          color={"blue"}
          loading={true}
          css={"display: block;margin: 0 auto"}
          size={150}
        />
      ) : grupos ? (
        <div className="lista-grupos">
          {grupos.map((c, index) => (
            <IonRouterLink
              routerLink={"/group/" + c.docid}
              routerDirection="forward"
              key={index}
            >
              <div
                className="grupo-item"
                style={{
                  borderColor: c.color,
                  borderWidth: "5px",
                  borderStyle: "solid",
                  backgroundColor: c.color,
                }}
              >
                <div
                  className="grupo-left"
                  style={{ backgroundColor: c.color }}
                >
                  {c.isAdmin ? (
                    <div className="isAdmin">
                      <DynamicFaIcon
                        name="ellipse"
                        color="var(--ion-color-success)"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  <DynamicFaIcon name={c.icono} color="white" />
                </div>
                <div className="grupo-right">
                  <div className="grupo-r-l">
                    <IonLabel className="grupo-name" style={{ color: c.color }}>
                      {c.name}
                    </IonLabel>
                    <div className="gastos_totales">
                      <span>-1000 €</span>
                    </div>
                    {c.codinv ? (
                      <div className="codinv">CODIGO: {c.codinv}</div>
                    ) : (
                      <div className="codinv">Grupo privado</div>
                    )}
                  </div>
                  <div className="grupo-r-r">
                    <div className="grupo-options">
                      {c.isAdmin && !c.default ? (
                        <div
                          className="delete"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setSelectedDelete(c);
                            setIsConfirmDeleteOpen(true);
                          }}
                        >
                          <DynamicFaIcon
                            name="trashOutline"
                            color="var(--ion-color-danger-tint)"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {c.codinv ? (
                        <div
                          className="copy"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            navigator.clipboard.writeText(c.codinv);
                            setSuccess({
                              status: true,
                              msg: "Código de grupo copiado",
                            });
                          }}
                        >
                          <DynamicFaIcon
                            name="clipboardOutline"
                            color="var(--ion-color-primary)"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {!c.default ? (
                        <div
                          className="exit"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setSelected(c);
                            setIsConfirmOpen(true);
                          }}
                        >
                          <DynamicFaIcon
                            name="exitOutline"
                            color="var(--ion-color-danger-tint)"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="grupo-r-participantes">
                    {c.default
                      ? "És tu grupo principal"
                      : c.users.length < 2
                      ? "Solo tú"
                      : c.users.length + " participantes"}
                  </div>
                </div>
              </div>
            </IonRouterLink>
          ))}
        </div>
      ) : (
        "Sin grupos"
      )}

      {/* {grupos ? (
        <div>
          {grupos.map((c, index) => (
            <div
              className="grupo-item"
              key={index}
              style={{
                borderColor: c.color,
                borderWidth: "4px",
                borderStyle: "solid",
              }}
            >
              <div className="grupo-name-info">
                <div className="grupo-name-info-top">
                  <DynamicFaIcon name={c.icono} color={c.color} />
                  <IonLabel className="grupo-name" style={{ color: c.color }}>
                    {c.name}
                  </IonLabel>
                </div>
                <div className="grupo-name-info-bottom">{c.desc}</div>
              </div>
              <div className="gastos_totales">
                <span>-1000 €</span>
              </div>

              <div className="grupo-options">
                <div
                  className="delete"
                  onClick={() => {
                    setSelected(c);
                    setIsConfirmOpen(true);
                  }}
                >
                  <DynamicFaIcon
                    name="exitOutline"
                    color="var(--ion-color-danger-tint)"
                  />
                </div>
              </div>
              {c.codinv ? (
                <div className="codinv">CODIGO: {c.codinv}</div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      ) : (
        "Sin grupos"
      )} */}
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
        header={"Salir del grupo"}
        message={
          "¿Seguro que quieres salir de </br><strong>" +
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
            text: "Salir",
            id: "confirm-button",
            handler: () => {
              exitGroup(selected);
            },
          },
        ]}
      />
      <IonAlert
        isOpen={isConfirmDeleteOpen}
        onDidDismiss={() => setIsConfirmDeleteOpen(false)}
        // cssClass='my-custom-class'
        header={"Eliminar grupo"}
        message={
          "¿Seguro que quieres eliminar el grupo </br><strong>" +
          selectedDelete.name +
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
            text: "ELIMINAR",
            id: "confirm-button",
            handler: () => {
              deleteGroup(selectedDelete);
            },
          },
        ]}
      />
    </>
  );
};

export default MClistgrupos;
