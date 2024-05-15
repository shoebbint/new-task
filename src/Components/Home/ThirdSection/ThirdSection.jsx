import { Swiper, SwiperSlide } from "swiper/react";
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
  const [day, setDay] = useState(1);
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
      setDay(prevDay => prevDay + 1);
    }
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  const swiperRef = useRef(null);
  const prevSlide = () => {
    if (currentNode > 0) {
      setCurrentNode(currentNode - 1);
      setDay(prevDay => prevDay - 1);
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
              <h1 className="first-h1">Day {day}- Class </h1>
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
                <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%" /* 16:9 aspect ratio */,
            }}
          >
            <iframe
              className="rounded-[16px]"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/FdyhENXyIQ4?si=Mimqq47HEOc72hjO"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
                <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%" /* 16:9 aspect ratio */,
            }}
          >
            <iframe
              className="rounded-[16px]"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/dAqQqmaI9vY?si=c-YJr3B2_8sueGqk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
                <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%" /* 16:9 aspect ratio */,
            }}
          >
            <iframe
              className="rounded-[16px]"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            src="https://www.youtube.com/embed/nQwKKCqkJxg?si=KUOg9edH1umE8brA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
                <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%" /* 16:9 aspect ratio */,
            }}
          >
            <iframe
              className="rounded-[16px]"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/m756Gz8de4M?si=uwdWV90wyN9bFPxC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
                <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%" /* 16:9 aspect ratio */,
            }}
          >
            <iframe
              className="rounded-[16px]"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/uJZ6hmnjrOs?si=txwpi27YGySxUkk2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
                <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%" /* 16:9 aspect ratio */,
            }}
          >
            <iframe
              className="rounded-[16px]"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
             src="https://www.youtube.com/embed/149Iac5fmoE?si=ATSNKzLxgEvbejX_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
                <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%" /* 16:9 aspect ratio */,
            }}
          >
            <iframe
              className="rounded-[16px]"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/6hZIzMpHl-c?si=RSr7yxAxpTi7gWpu"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
                </div>
                <div className="pt-10 sm:mx-auto">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </SwiperSlide>
<button className="join">Join Today</button>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
