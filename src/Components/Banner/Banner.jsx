import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner from '../../assets/images/banner.png';
function Banner() {
  return (
    <>
      <section id='home'>
        <div className="relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#00000030] after:backdrop-blur-xs sm:after:backdrop-blur-none">
          <img src={banner} alt="" className="w-full h-screen" />
          <div className="container absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] pt-32 text-center text-white z-10 px-4 xl:px-0">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={swiper => console.log(swiper)}
            >
              <SwiperSlide className="transition-all duration-500">
                <div className="item">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                    Frontend Web Developers
                  </h2>
                  <p className="text-lg mt-4 font-bold mb-6 text-center">
                    Batch: CIT ES FDR 2501
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="transition-all duration-500">
                <div className="item">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                    Frontend Web Developers
                  </h2>
                  <p className="text-lg mt-4 font-bold mb-6 text-center">
                    Batch: CIT ES FDR 2501
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="transition-all duration-500">
                <div className="item">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                    Frontend Web Developers
                  </h2>
                  <p className="text-lg mt-4 font-bold mb-6 text-center">
                    Batch: CIT ES FDR 2501
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="transition-all duration-500">
                <div className="item">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                    Frontend Web Developers
                  </h2>
                  <p className="text-lg mt-4 font-bold mb-6 text-center">
                    Batch: CIT ES FDR 2501
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
