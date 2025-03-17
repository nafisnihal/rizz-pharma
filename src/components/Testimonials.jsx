import React from "react";
import user from "../assets/user.png";
import "../styles/main.scss";

import { BiSolidQuoteLeft } from "react-icons/bi";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1 className="section-title">
        Hear What <span className="colored-text">Rizz</span> Patients Have To
        Say
      </h1>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[Pagination, Autoplay]}
        className="testimonials-slider"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4.5,
          },
        }}
      >
        {new Array(6).fill(0).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <BiSolidQuoteLeft size={24} className="quote-icon" />
              <p className="testimonial-text">
                I've tried every home remedy and hair care treatment but ended
                up with long waits and no results. Since I've started using Hims
                my hair has grown, thickened, and darkened tremendously.
              </p>
              <div className="rating">
                <TiStarFullOutline className="star" size={22} />
                <TiStarFullOutline className="star" size={22} />
                <TiStarFullOutline className="star" size={22} />
                <TiStarFullOutline className="star" size={22} />
                <TiStarOutline className="star" size={22} />
              </div>
              <div className="user">
                <img src={user} alt="" className="user-image" />
                <div className="user-info">
                  <h4 className="name">Jane Doe</h4>
                  <p className="position">Software Engineer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
