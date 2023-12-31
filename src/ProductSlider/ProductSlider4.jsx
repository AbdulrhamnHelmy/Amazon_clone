import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import{Link} from 'react-router-dom'
import "swiper/css";
import "swiper/css/free-mode";
import "./Productslider.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ProductSlider = () => {
  return (
    <div className=" py-4 px-4 justify-content-center slideee">
      <div className="divvv">
        <h3>Top White Friday Sale categories</h3>
        <Link className="shop" to="#"> Shop all deals</Link>
      </div>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0:{
            slidesPerView:1,
            spaceBetween:0,
          },
          480:{
            slidesPerView:2,
            spaceBetween:0,
          },
          768:{
            slidesPerView:3,
            spaceBetween:0,
          },
          992:{
            slidesPerView:4,
            spaceBetween:0,
          },
          1200:{
            slidesPerView:6,
            spaceBetween:0,
          },
          1400:{
            slidesPerView:8,
            spaceBetween:0,
          },
        }}
      >
        <SwiperSlide>
          <Link to="#">
            <img className="imgg" src="/amazon-image/box4_1.jpg" alt=''/>
          </Link>          <Link className="price">
          <div  className="price1">
            <p>EGP 199.92 and under</p>
          </div>
          <div className="price2">
            <h5>White Friday Deal</h5>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <img
              className="imgg"
              src="/amazon-image/box4_1.jpg"
              alt=''   />
          </Link>          <Link className="price">
          <div  className="price1">
            <p>EGP 199.92 and under</p>
          </div>
          <div className="price2">
            <h5>White Friday Deal</h5>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <img
              className="imgg"
              alt=''    src="/amazon-image/box4_1.jpg"
            />
          </Link>          <Link className="price">
          <div  className="price1">
            <p>EGP 199.92 and under</p>
          </div>
          <div className="price2">
            <h5>White Friday Deal</h5>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <img
              className="imgg"
              alt=''    src="/amazon-image/box4_1.jpg"
            />
          </Link>          <Link className="price">
          <div  className="price1">
            <p>EGP 199.92 and under</p>
          </div>
          <div className="price2">
            <h5>White Friday Deal</h5>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <img
              className="imgg"
              alt=''   src="/amazon-image/box4_1.jpg"
            />
          </Link>          <Link className="price">
          <div  className="price1">
            <p>EGP 199.92 and under</p>
          </div>
          <div className="price2">
            <h5>White Friday Deal</h5>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <img
              className="imgg"
              alt=''   src="/amazon-image/box4_1.jpg"
            />
          </Link>          <Link className="price">
          <div  className="price1">
            <p>EGP 199.92 and under</p>
          </div>
          <div className="price2">
            <h5>White Friday Deal</h5>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <img
              className="imgg"
              alt=''   src="/amazon-image/box4_1.jpg"
            />
          </Link>          <Link className="price">
          <div  className="price1">
            <p>EGP 199.92 and under</p>
          </div>
          <div className="price2">
            <h5>White Friday Deal</h5>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <img
              className="imgg"
              alt=''    src="/amazon-image/box4_1.jpg"
            />
          </Link>          <Link className="price">
          <div  className="price1">
            <p>EGP 199.92 and under</p>
          </div>
          <div className="price2">
            <h5>White Friday Deal</h5>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <img
              className="imgg"
              alt=''     src="/amazon-image/box4_1.jpg"
            />
          </Link>          <Link className="price">
          <div  className="price1">
            <p>EGP 199.92 and under</p>
          </div>
          <div className="price2">
            <h5>White Friday Deal</h5>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <img
              className="imgg"
              alt=''     src="/amazon-image/box4_1.jpg"
            />
          </Link>          <Link className="price">
          <div  className="price1">
            <p>EGP 199.92 and under</p>
          </div>
          <div className="price2">
            <h5>White Friday Deal</h5>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <img
              className="imgg"
              alt=''    src="/amazon-image/box4_1.jpg"
            />
          </Link>          <Link className="price">
          <div  className="price1">
            <p>EGP 199.92 and under</p>
          </div>
          <div className="price2">
            <h5>White Friday Deal</h5>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#">
            <img
              className="imgg"
              alt=''    src="/amazon-image/box4_1.jpg"
            />
          </Link>          <Link className="price">
          <div  className="price1">
            <p>EGP 199.92 and under</p>
          </div>
          <div className="price2">
            <h5>White Friday Deal</h5>
          </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default ProductSlider;
