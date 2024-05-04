"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useCallback, useRef } from "react";

export default function Choice() {
  const sliderRef = useRef(null) as any;

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <>
      <div className="sticky z-30 top-44 max-w-screen-2xl mx-auto px-10">
        <div className="relative w-[calc(100%-496px)] overflow-hidden rounded-2xl h-[540px] bg-fg-3">
          <Swiper
            ref={sliderRef}
            slidesPerView={1}
            navigation={false}
            pagination={{ type: "bullets", clickable: true }}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide className="w-full h-full">
              <img
                src="/tototte-1-1.png"
                alt="tototte"
                className="w-full h-full object-cover aspect-video"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src="/tototte-1-2.png"
                alt="tototte"
                className="w-full h-full object-cover aspect-video"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src="/tototte-1-3.png"
                alt="tototte"
                className="w-full h-full object-cover aspect-video"
              />
            </SwiperSlide>
          </Swiper>
          <div className="absolute w-full flex items-center justify-between z-30 top-1/2 -translate-y-1/2 p-4">
            <button onClick={handlePrev}>
              <img src="/arrow-left.svg" alt="arrow-left" />
            </button>
            <button onClick={handleNext}>
              <img src="/arrow-right.svg" alt="arrow-right" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-bg-blue">
        <div className="w-full max-w-screen-2xl flex items-center justify-center px-10 py-44 gap-24">
          <div className="w-full flex items-center justify-end">
            <div className="w-[392px] flex flex-col items-center justify-center gap-12">
              <div className="w-full flex flex-col items-start gap-4">
                <h3 className="text-6xl text-fg-1">
                  personnalisez votre tototte
                </h3>
                <p className="text-fg-3 font-gustavo">
                  Vous allez créer la tototte idéale pour vous. <br />À chacun
                  son expérience, à chacun sa tototte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
