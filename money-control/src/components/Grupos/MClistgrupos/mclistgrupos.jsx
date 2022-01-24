import { IonLabel, IonList, IonItem, IonToast, IonAlert } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useCuentas from "hooks/useCuentas";
import useGrupos from "hooks/useGrupos";
import React, { useEffect, useState } from "react";
import "./mclistgrupos.css";
import ClipLoader from "react-spinners/ClipLoader";
import CountUp from "react-countup";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import { informationCircle } from "ionicons/icons";

const MClistgrupos = (props) => {
  const {
    grupos,
    loadinggrupos,
    exitGroup,
    checkAdmin,
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
        <div>
          {grupos.map((c, index) => (
            <div
              className="grupo-item"
              key={index}
              style={{
                borderColor: c.color,
                borderWidth: "5px",
                borderStyle: "solid",
                backgroundColor: c.color,
              }}
            >
              <div className="grupo-left" style={{ backgroundColor: c.color }}>
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
                        onClick={() => {
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
                        onClick={() => {
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

                    <div
                      className="exit"
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
                </div>
                <div className="grupo-r-participantes">
                  {c.users.length < 2
                    ? "Solo tú"
                    : c.users.length + " participantes"}
                </div>
              </div>
            </div>
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
