import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import React, { useEffect, useState } from "react";
import "./mciconos.css";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";
import {
  iconosCuentas,
  iconosGrupos,
  iconosCategorias,
} from "global/functions";

const MCiconos = (props) => {
  const [iconos, setIconos] = useState(iconosCuentas);

  useEffect(() => {
    switch (props.type) {
      case "group":
        setIconos(iconosGrupos);
        break;
      case "cuentas":
        setIconos(iconosCuentas);
        break;
      case "categories":
        setIconos(iconosCategorias);
        break;
      default:
        break;
    }
  }, [props.type]);

  return (
    <div className="icono-component">
      <span className="info">
        Selecciona un icono <span className="required">*</span>
      </span>
      <div className="icono-list">
        <Swiper slidesPerView={5} loop={true} className="mySwiper">
          {iconos
            ? iconos.map((i, index) => (
                <SwiperSlide
                  className={
                    props.iconoSelected == i ? "icono selected" : "icono"
                  }
                  style={
                    props.iconoSelected == i
                      ? {
                          borderColor: props.colorSelected,
                          borderWidth: "3px",
                          borderStyle: "solid",
                        }
                      : {}
                  }
                  key={index}
                  onClick={() => {
                    props.onChange(i);
                  }}
                >
                  <DynamicFaIcon name={i} color={props.colorSelected} />
                </SwiperSlide>
              ))
            : "No hay iconos disponibles"}
        </Swiper>
      </div>
    </div>
  );
};

export default MCiconos;
