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
      <div className="sticky h-0 -mb-40 top-40 z-30 max-w-screen-2xl mx-auto px-10">
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
              <img
                src="/arrow-left.svg"
                alt="arrow-left"
                className="rotate-180"
              />
            </button>
            <button onClick={handleNext}>
              <img src="/arrow-right.svg" alt="arrow-right" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-bg-blue">
        <div className="w-full max-w-screen-2xl flex items-center justify-center px-10 py-40 gap-24">
          <div className="w-full flex items-center justify-end">
            <div className="w-[392px] flex flex-col items-center justify-center gap-16">
              <div className="w-full flex flex-col items-start gap-2">
                <h3 className="text-6xl text-fg-1">
                  personnalisez votre tototte
                </h3>
                <p className="text-fg-3 font-gustavo text-base">
                  Vous allez créer la tototte idéale pour vous. <br />À chacun
                  son expérience, à chacun sa tototte.
                </p>
              </div>
              <div className="w-full flex items-start flex-col gap-3">
                <div className="w-full flex flex-col items-start gap-2">
                  <h3 className="text-4xl text-fg-1">finition</h3>
                  <p className="text-fg-3 font-gustavo text-base">
                    Choisissez votre favorite
                  </p>
                </div>
                <div className="w-full flex justify-start items-center gap-2">
                  <div className="flex items-center justify-center rounded-full border-2 border-fg-1 cursor-pointer">
                    <img src="/finition-1.svg" alt="finition" />
                  </div>
                  <div className="flex items-center justify-center rounded-full border-2 border-transparent cursor-pointer">
                    <img src="/finition-2.svg" alt="finition" />
                  </div>
                  <div className="flex items-center justify-center rounded-full border-2 border-transparent cursor-pointer">
                    <img src="/finition-3.svg" alt="finition" />
                  </div>
                  <div className="flex items-center justify-center rounded-full border-2 border-transparent cursor-pointer">
                    <img src="/finition-4.svg" alt="finition" />
                  </div>
                </div>
              </div>
              <div className="w-full flex items-start flex-col gap-3">
                <div className="w-full flex flex-col items-start gap-2">
                  <h3 className="text-4xl text-fg-1">ornement</h3>
                  <p className="text-fg-3 font-gustavo text-base">
                    Choisissez votre pierre précieuse
                  </p>
                </div>
                <div className="w-full flex justify-start items-center gap-2">
                  <div className="flex items-center justify-center rounded-full border-2 border-fg-1 cursor-pointer">
                    <img src="/ornement-1.svg" alt="ornement" />
                  </div>
                  <div className="flex items-center justify-center rounded-full border-2 border-transparent cursor-pointer">
                    <img src="/ornement-2.svg" alt="ornement" />
                  </div>
                  <div className="flex items-center justify-center rounded-full border-2 border-transparent cursor-pointer">
                    <img src="/ornement-3.svg" alt="ornement" />
                  </div>
                  <div className="flex items-center justify-center rounded-full border-2 border-transparent cursor-pointer">
                    <img src="/ornement-4.svg" alt="ornement" />
                  </div>
                </div>
              </div>
              <div className="w-full flex items-start flex-col gap-4">
                <div className="w-full flex flex-col items-start gap-2">
                  <h3 className="text-4xl text-fg-1">pack saveur</h3>
                  <p className="text-fg-3 font-gustavo text-base">
                    Choisissez votre pack de saveurs
                  </p>
                </div>
                <div className="w-full flex flex-col items-center text-fg-1 font-gustavo gap-1">
                  <div className="w-full p-4 border border-fg-1 flex items-center justify-between cursor-pointer transition-colors hover:bg-bg-2">
                    <div className="flex flex-col items-start">
                      <span className="text-xl font-bold">Pack Starter</span>
                      <span className="text-base">3 saveurs de découverte</span>
                    </div>
                    <span className="block">Offert</span>
                  </div>
                  <div className="w-full p-4 border border-transparent flex items-center justify-between cursor-pointer transition-colors hover:bg-bg-2">
                    <div className="flex flex-col items-start">
                      <span className="text-xl font-bold">Pack Suçoteur</span>
                      <span className="text-base">6 saveurs</span>
                    </div>
                    <span className="block">29€</span>
                  </div>
                  <div className="w-full p-4 border border-transparent flex items-center justify-between cursor-pointer transition-colors hover:bg-bg-2">
                    <div className="flex flex-col items-start">
                      <span className="text-xl font-bold">
                        Pack Suçoteur Pro
                      </span>
                      <span className="text-base">
                        12 saveurs + 1 jus de Mynthos
                      </span>
                    </div>
                    <span className="block">
                      <span className="line-through">60€</span> 49€
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
