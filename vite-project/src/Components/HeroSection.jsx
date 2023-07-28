import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { MdLocationOn } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaConciergeBell } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";

const HeroSection = () => {
  const slide_img = [
    "https://cdn.pixabay.com/photo/2019/07/25/17/22/diet-4363111_1280.jpg",
  ];
  SwiperCore.use([Autoplay]);

  return (
    <section className="hero-section">
      <div className="slider">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          speed={5000}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          <div className="override-image">
            <div>
              <h1>{Math.floor(Math.random() * 100)}% off</h1>
              <span>fitness meal</span>
            </div>
          </div>
          <div className="override-image2"></div>
          {slide_img.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="content-icons">
        <div>
          <MdLocationOn />
          <h3>nearby</h3>
        </div>
        <div>
          <SiHomeassistantcommunitystore />
          <h3>Promotion</h3>
        </div>
        <div>
          <FaConciergeBell />
          <h3>Newcomers</h3>
        </div>
        <div>
          <BsStarFill />
          <h3>Top Rated</h3>
        </div>
        <div>
          <TbGridDots />
          <h3>All</h3>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default HeroSection;
