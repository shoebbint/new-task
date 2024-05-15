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
    <div className="md:px-36 py-20">
      <h1 className="first-h1">Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
        <div className="">
          <img
            className="w-full h-auto"
            style={{ width: "495.365px", height: "472.089px" }}
            src={img}
            alt=""
          />
        </div>
        <div>
          <div className=" md:flex justify-between pb-10">
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
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper bg-transparent "
            >
              <SwiperSlide className=" text-left ">
                <div className=" ">
                  <img className="" src={img1} alt="" />
                </div>
                <div className="pt-10 sm:mx-auto">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
