import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./mccategorylist.css";
import DynamicFaIcon from "components/Generales/DynamicIcons/DynamicIcons";

const MCcategorylist = (props) => {
  console.log("props MCcategorylist", props);
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
    <div className="categories-component">
      <span className="info">
        Selecciona una categoría <span className="required">*</span>
      </span>

      <div className="categories-list">
        {props.grupo ? (
          <Swiper slidesPerView={5} loop={true} className="mySwiper">
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
