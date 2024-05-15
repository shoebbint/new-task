
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
        className="swiper-vertical   text-4xl list"
      >
        <SwiperSlide className='flex'><div className="bullet me-3"></div><h1>Sunil K</h1></SwiperSlide>
        <SwiperSlide className='flex'> <div className="bullet me-3"></div><h1>Rahul</h1></SwiperSlide>
        <SwiperSlide className='flex'><div className="bullet me-3"></div><h1>Ashray M</h1></SwiperSlide>
        <SwiperSlide className='flex'><div className="bullet me-3"></div><h1>Ashray</h1></SwiperSlide>
        <SwiperSlide className='flex'><div className="bullet me-3"></div><h1>Ashish</h1></SwiperSlide>
        <SwiperSlide className='flex'><div className="bullet me-3"></div><h1>Xinia</h1></SwiperSlide>
      </Swiper>

    </div>
  );
};

export default SwiperVertical;
