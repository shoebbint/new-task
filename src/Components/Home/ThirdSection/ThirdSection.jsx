import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/Group 286 (1).png";
import img1 from "../../../assets/Rectangle 88.png";
import left from "../../../assets/left.png";
import right from "../../../assets/right.png";
import "./ThirdSection.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const ThirdSection = () => {
  const nextSlide = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  const swiperRef = useRef(null);
  const prevSlide = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <div className="px-36 py-20">
      <h1 className="first-h1">Schedule</h1>
      <div className="grid grid-cols-2 gap-20">
<div>
    <img style={{width:"495.365px",height:"472.089px"}} src={img}alt="" />
</div>
        <div>
          <div className=" flex justify-between pb-10">
            <div className="flex justify-start ">
              <h1 className="first-h1">Day 1- Class </h1>
            </div>
            <div className="flex justify-end">
              <button className=" custom-prev" onClick={prevSlide}>
                <img src={left} alt="" />
              </button>
              <button className=" custom-next" onClick={nextSlide}>
                <img src={right} alt="" />
              </button>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper border-2"
          >
            <SwiperSlide>
              <img
                className="mx-auto"
                style={{ width: "475.673px", height: "283.118px" }}
                src={img1}
                alt=""
              />
              <div className="pt-10">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
