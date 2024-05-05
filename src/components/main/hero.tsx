import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen w-full relative">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute inset-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-mask absolute w-full h-full z-10"></div>
      <div className="absolute bottom-20 w-full flex flex-col items-center justify-center z-20">
        <p className="mix-blend-multiply text-2xl my-2">the french tototte</p>
        <img src="/france-flag.svg" alt="france flag" className="" />
        <h1 className="d text-7xl mix-blend-multiply w-[550px] text-center my-6">
          pour ceux qui osent etre differents
        </h1>
        <a
          href="#bento"
          className="text-fg-2 py-2 px-10 font-gustavo mix-blend-multiply hover-link"
        >
          découvrir
        </a>
      </div>
    </div>
  );
}
