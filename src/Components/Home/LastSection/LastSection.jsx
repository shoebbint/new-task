import "./LastSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/Rectangle 88.png";
import left from "../../../assets/left.png";
import right from "../../../assets/right.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import SwiperVertical from "./SwiperVertical/SwiperVertical";

const LastSection = () => {
  const nextSlider = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  const swiperRef = useRef(null);
  const prevSlider = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
<div className="sm:flex items-center justify-center">
<div className="md:px-36 text-center md:text-left">
          <h1 className="first-h1 ">Our Teachers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-20 ">
        <div>
          <SwiperVertical className=""></SwiperVertical>
        </div>
        <div className="col-span-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="grid grid-cols-1 md:grid-cols-3 border-2 p-8 rounded-[16px] slider-bg">
                <div className=" flex items-start ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="182"
                    height="160"
                    viewBox="0 0 182 160"
                    fill="none"
                  >
                    <path
                      d="M0 16C0 7.16345 7.16344 0 16 0H166C174.837 0 182 7.16344 182 16V144C182 152.837 174.837 160 166 160H16C7.16344 160 0 152.837 0 144V16Z"
                      fill="#FE5268"
                    />
                  </svg>
                </div>
                <div className=" text-left md:col-span-2">
                  <p>
                    Ashrei Mitra started his journey in yoga at the age of 16.
                    He was chosen by his master Dr. Bharat Thakur from a
                    meditation workshop and has worked with him closely for many
                    years to become one of the most senior teachers at Bharat
                    Thakur Artistic Yoga. Combining his love of fitness,
                    breathwork, functional training, and his deep knowledge of
                    the human anatomy and yogic knowhow, he is committed to
                    maximizing on the human potential by strengthening and
                    opening up the body so that the mind naturally falls into a
                    deep state of relaxation and meditation. He has taught yoga
                    to people from all walks of life including athletes,
                    celebrities and several top corporate organizations
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
          <div className="flex justify-end">
            <button className=" custom-prev" onClick={prevSlider}>
              <img src={left} alt="" />
            </button>
            <button className=" custom-next" onClick={nextSlider}>
              <img src={right} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default LastSection;
