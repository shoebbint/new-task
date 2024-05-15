import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../../assets/Rectangle 88.png";
import bgImage from "../../../assets/Frame (1).png";
import left from "../../../assets/left.png";
import right from "../../../assets/right.png";
import "./ThirdSection.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useRef, useState } from "react";

const ThirdSection = () => {
  const [currentNode, setCurrentNode] = useState(0); // Current node index
  const nodePositions = [
    { x: 38, y: 240 },
    { x: 50, y: 360 },
    { x: 90, y: 450 },
    { x: 190, y: 540 },
    { x: 318, y: 570 },
    { x: 450, y: 556 },
    { x: 570, y: 480 },
  ]; // Example node positions

  const nextSlide = () => {
    if (currentNode < nodePositions.length - 1) {
      setCurrentNode(currentNode + 1);
    }
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  const swiperRef = useRef(null);
  const prevSlide = () => {
    if (currentNode > 0) {
      setCurrentNode(currentNode - 1);
    }

    if (swiperRef && swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <div className="md:px-36 py-20">
      <h1 className="first-h1">Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
        <div className="">
          <motion.svg
            width="100%"
            height="auto"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            className=""
            style={{ maxWidth: "100%" }}
          >
            {/* Background Image */}
            <image xlinkHref={bgImage} x="0" y="0" width="100%" height="100%" />

            {/* Animated Circle */}
            <motion.g>
              <circle
                cx={nodePositions[currentNode].x}
                cy={nodePositions[currentNode].y}
                r="30"
                fill="url(#gradient)"
              />
              {/* Text Inside Circle */}
              <text
                x={nodePositions[currentNode].x}
                y={nodePositions[currentNode].y}
                textAnchor="middle"
                dominantBaseline="central"
                fill="white"
                fontSize="16"
              >
                {currentNode + 1}
              </text>
            </motion.g>

            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F24397" />
                <stop offset="100%" stopColor="#F64C3B" />
              </linearGradient>
            </defs>
          </motion.svg>
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
              loop={false}
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
