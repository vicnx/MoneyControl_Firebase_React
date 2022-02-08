import { IonLabel } from "@ionic/react";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import useCuentas from "hooks/useCuentas";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import ClipLoader from "react-spinners/ClipLoader";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./mccuentaselect.css";

const MCcuentaselect = (props) => {
  const { cuentas, loadingcuentas } = useCuentas();

  useEffect(() => {
    if (!props.cuentaSelected) {
      props.setCuentaSelected(cuentas[0]);
    }
  }, [cuentas]);

  return (
    <>
      {loadingcuentas ? (
        <ClipLoader
          color={"blue"}
          loading={true}
          css={"display: block;margin: 0 auto"}
          size={150}
        />
      ) : (
        <>
          <div className="cuentasSelect-component">
            <span className="title-cuentasSelect">
              Selecciona la cuenta <span className="required">*</span>
            </span>
            <div className="cuentaSelect-info">
              {props.cuentaSelected ? (
                <>
                  <div className="cuentaSelect-info-icono">
                    <DynamicFaIcon
                      name={props.cuentaSelected.icono}
                      color={props.cuentaSelected.color}
                    />
                  </div>
                  <div className="cuentaSelect-info-name">
                    {props.cuentaSelected.name}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="cuentasSelect-list">
              <Swiper slidesPerView={2} loop={false} className="mySwiper">
                {cuentas
                  ? cuentas.map((c, index) => (
                      <SwiperSlide
                        className={
                          props.cuentaSelected
                            ? props.cuentaSelected.docid == c.docid
                              ? "cuenta selected"
                              : "cuenta"
                            : "cuenta"
                        }
                        key={index}
                        onClick={() => {
                          console.log("click");
                          props.onChange(c);
                        }}
                      >
                        <div className="cuenta-top">
                          {/* <IonIcon icon={c.icono}></IonIcon> */}
                          <DynamicFaIcon
                            name={c.icono}
                            color={
                              props.cuentaSelected
                                ? props.cuentaSelected.docid == c.docid
                                  ? c.color
                                  : "var(--color_small)"
                                : "var(--color_small)"
                            }
                          />
                          <IonLabel
                            className="cuenta-name"
                            style={{
                              color: props.cuentaSelected
                                ? props.cuentaSelected.docid == c.docid
                                  ? c.color
                                  : "var(--color_small)"
                                : "var(--color_small)",
                            }}
                          >
                            {c.name}
                          </IonLabel>
                        </div>
                        <div className="cuenta-bottom">
                          <IonLabel className="cuenta-balance">
                            <CountUp
                              end={c.cantidad}
                              suffix=" €"
                              duration={1.5}
                              separator=" "
                              decimal=","
                              decimals={2}
                            />
                          </IonLabel>
                          <hr
                            className="separador-cuentas"
                            style={{
                              backgroundColor: props.cuentaSelected
                                ? props.cuentaSelected.docid == c.docid
                                  ? c.color
                                  : "var(--color_small)"
                                : "var(--color_small)",
                            }}
                          />
                        </div>
                      </SwiperSlide>
                    ))
                  : "Sin cuentas"}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MCcuentaselect;
