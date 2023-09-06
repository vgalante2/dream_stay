import React from 'react';
import { Link } from 'react-router-dom';
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from 'swiper/modules';
import FavoriteIcon from '@mui/icons-material/Favorite';





function Card({ home }) {
  return (
    <Link to={`/homes/${home.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className="card">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
      <FavoriteIcon className="favorite"  style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1, color: "rgba(0, 0, 0, 0.5)", filter: "brightness(0.9) blur(0.2px)",  stroke: "white", strokeWidth: "3px" }}/>
        {home.imgSrc.map((src, i) => (
      
          <SwiperSlide id={i}>
            <img src={src} alt="img" className="card-img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info">
        <h3 className="card-title">{home.title}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>{home.rating}</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{home.location}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{home.category}</p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
        <span style={{ fontWeight: "600" }}>${home.price}</span> night
      </p>
    </div>
    </Link>
  );
}


export default Card;

