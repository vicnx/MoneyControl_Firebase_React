import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./mccolores.css";

const MCcolores = (props) => {
  const colores = [
    "#F44336",
    "#9B59B6",
    "#5499C7",
    "#76D7C4",
    "#7DCEA0",
    "#F7DC6F",
    "#E59866",
    "#36f443",
    "#4336f4",
    "#f436a8",
    "#9e36f4",
    "#36f488",
    "#f47f36",
  ];
  return (
    <div className="color-component">
      <span className="info">
        Selecciona un color <span className="required">*</span>
      </span>
      <hr
        className="separador-color"
        style={{
          backgroundColor: props.colorSelected,
        }}
      />

      <div className="color-list">
        <Swiper slidesPerView={5} loop={true} className="mySwiper">
          {colores
            ? colores.map((c, index) => (
                <SwiperSlide
                  className={
                    props.colorSelected == c ? "color selected" : "color"
                  }
                  style={
                    props.colorSelected == c
                      ? {
                          borderColor: c,
                          borderWidth: "3px",
                          borderStyle: "solid",
                        }
                      : {}
                  }
                  key={index}
                  onClick={() => {
                    props.onChange(c);
                  }}
                >
                  <div
                    className="circle"
                    style={{
                      backgroundColor: c,
                    }}
                  ></div>
                </SwiperSlide>
              ))
            : "No hay colores disponibles"}
        </Swiper>
      </div>
    </div>
  );
};

export default MCcolores;
