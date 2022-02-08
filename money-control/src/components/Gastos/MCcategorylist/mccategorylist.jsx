import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./mccategorylist.css";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";

const MCcategorylist = (props) => {
  return (
    <div className="categories-component">
      <span className="info">
        Selecciona una categoría <span className="required">*</span>
      </span>
      <div className="categories-info">
        {props.categoria ? (
          <>
            <div className="categories-info-icono">
              <DynamicFaIcon
                name={props.categoria.icono}
                color={props.categoria.color}
              />
            </div>
            <div className="categories-info-name">{props.categoria.name}</div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="categories-list">
        {props.grupo ? (
          <Swiper slidesPerView={4} loop={true} className="mySwiper">
            {props.grupo.categories ? (
              props.grupo.categories.map((c, index) => (
                <SwiperSlide
                  className={
                    props.categoria == c ? "category selected" : "category"
                  }
                  style={
                    props.categoria == c
                      ? {
                          borderColor: c.color,
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
                  <div className="category-content">
                    <div className="category-icon">
                      <DynamicFaIcon name={c.icono} color={c.color} />
                    </div>
                    <span className="category-name">{c.name}</span>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <span className="errorShow">No hay categorías</span>
            )}
          </Swiper>
        ) : (
          <span className="errorShow">
            Selecciona un grupo para ver sus categorías.
          </span>
        )}
      </div>
    </div>
  );
};

export default MCcategorylist;
