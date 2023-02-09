import React, { useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './cssFile/Banner.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';


const Banner = () => {
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty('--progress', 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };
    
    return (
        <div className='banner-box'>
            <Swiper
                 spaceBetween={50}
                 slidesPerView={1}
                
                 autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
               
                className="mySwiper"
                >
                <SwiperSlide><img src="./img/ba-img/ba1.jpg" alt='사진1'/> </SwiperSlide>
                <SwiperSlide><img src="./img/ba-img/ba2.png" alt='사진2' /> </SwiperSlide>
                <SwiperSlide><img src="./img/ba-img/ba3.jpg" alt='사진3'/> </SwiperSlide>
                <SwiperSlide><img src="./img/ba-img/ba4.jpg" alt='사진4'/> </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Banner;