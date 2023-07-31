import React, { useState } from "react";
import axios from "axios";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { MdLocationOn } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaConciergeBell } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { TbGridDots, TbHomeSearch } from "react-icons/tb";
import { useEffect } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [read, setRead] = useState([]);
  const [Data, setData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const readData = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios
        .get(
          "http://localhost:7001/user/read",
          config
          // signal: abortController.signal,
        )
        .then((data) => {
          setRead(data);
        })
        .catch((Error) => {
          console.log(Error);
        });
    };
    readData();

    return () => {
      abortController.abort();
    };
  }, []);

  const fetchData = async (event) => {
    const id = event.target.closest(".food-cart").id;
    console.log(id);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

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
        {[
          { icon: <MdLocationOn size={20} />, label: "nearby" },
          {
            icon: <SiHomeassistantcommunitystore size={20} />,
            label: "Promotion",
          },
          { icon: <FaConciergeBell size={20} />, label: "Newcomers" },
          { icon: <BsStarFill size={20} />, label: "Top Rated" },
          { icon: <TbGridDots size={20} />, label: "All" },
        ].map((items, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={activeIndex == index ? "underline-icons " : "checking"}
          >
            {items.icon}
            <h3>{items.label}</h3>
          </div>
        ))}
      </div>

      <div className="icons-content">
        {read.status == 200 &&
          read.data.map(
            (item, index) =>
              (activeIndex === -1 || activeIndex === 0) &&
              index < 6 && (
                <div className="food-cart" key={index} id={item._id}>
                  <img src={item.pic} alt="" />
                  <div>
                    <span>{item.foodName}</span>
                    <span>{item.cost}Rs</span>
                    <span>{item.address}</span>
                    <h2 onClick={fetchData}>
                      <MdOutlineAddShoppingCart />
                    </h2>
                  </div>
                </div>
              )
          )}
        {read.status == 200 &&
          read.data.map(
            (item, index) =>
              activeIndex === 4 && (
                <div className="food-cart" key={index} id={item._id}>
                  <img src={item.pic} alt="" />
                  <div>
                    <span>{item.foodName}</span>
                    <span>{item.cost}Rs</span>
                    <span>{item.address}</span>
                    <h2 onClick={fetchData}>
                      <MdOutlineAddShoppingCart />
                    </h2>
                  </div>
                </div>
              )
          )}
      </div>
    </section>
  );
};

export default HeroSection;
