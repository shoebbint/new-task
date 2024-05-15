
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import "./SwiperVertical.css";

const SwiperVertical = () => {
  return (
    <div className="swiper-container-wrapper ">
      <Swiper
      loop={true}
        direction="vertical"
        spaceBetween={30}
        slidesPerView={5}
        centeredSlides={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        modules={[Pagination, Navigation]}
        className="swiper-vertical   text-3xl list"
      >
        <SwiperSlide>Sunil K</SwiperSlide>
        <SwiperSlide>Rahul</SwiperSlide>
        <SwiperSlide>Ashray M</SwiperSlide>
        <SwiperSlide>Ashray</SwiperSlide>
        <SwiperSlide>Ashish</SwiperSlide>
        <SwiperSlide>Xinia</SwiperSlide>
      </Swiper>

    </div>
  );
};

export default SwiperVertical;
