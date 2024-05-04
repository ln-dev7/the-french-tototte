import React from "react";

export default function Bento() {
  return (
    <div
      id="bento"
      className="relative w-full flex items-center justify-center bg-choice-container"
    >
      <div className="w-full max-w-screen-2xl flex items-center justify-center px-10 py-14">
        <div className="bento w-[976px] h-[926px]">
          <div className="bento-item">
            <img
              src="/bento-bg-a.png"
              alt="bento"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src="/bento-a.png"
              alt="bento"
              className="bento-item-a-image absolute top-40 -left-40 scale-[1.6] object-cover"
            />
            <div className="w-full flex flex-col items-start gap-2 self-end z-10">
              <h3 className="text-3xl text-fg-1">elegante et sophistiquee</h3>
              <p className="text-fg-3 font-gustavo text-base">
                Design raffine et ornements exclusifs pour une experience de
                vapotage distinguee et elegante
              </p>
            </div>
          </div>
          <div className="bento-item justify-end">
            <img
              src="/bento-b.png"
              alt="bento"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="w-[320px] flex flex-col items-start gap-2 self-center z-10">
              <h3 className="text-3xl text-fg-1">personnalisable</h3>
              <p className="text-fg-3 font-gustavo text-base">
                Ornements et accessoires premium pour creer une vapoteuse unique
                qui reflète votre style personnel
              </p>
            </div>
          </div>
          <div className="bento-item">
            <img
              src="/bento-bg-c.png"
              alt="bento"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src="/bento-c.png"
              alt="bento"
              className="bento-item-c-image absolute top-10 left-1/2 -translate-x-1/2 object-cover"
            />
            <div className="w-full flex flex-col items-start gap-2 self-end z-10">
              <h3 className="text-3xl text-fg-1">made in france</h3>
              <p className="text-fg-3 font-gustavo text-base">
                Savoir-faire français pour une experience de suçotage
                authentique et exceptionnelle
              </p>
            </div>
          </div>
          <div className="bento-item bg-white">
            <img
              src="/bento-bg-d.png"
              alt="bento"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src="/bento-d.png"
              alt="bento"
              className="bento-item-d-image absolute -bottom-12 -right-16 object-cover"
            />
            <div className="w-full flex flex-col items-start gap-2 z-10">
              <h3 className="text-3xl text-fg-1">innovante</h3>
              <p className="text-fg-3 font-gustavo text-base">
                Technologies de pointe offrant une experience de suçotage
                revolutionnaire et inegalee.
              </p>
            </div>
          </div>
          <div className="bento-item bg-[#EFF2FD]">
            <img
              src="/bento-e.png"
              alt="bento"
              className="absolute mt-16 inset-0 w-full h-full object-cover"
            />
            <div className="w-full flex flex-col items-start gap-2 z-10">
              <h3 className="text-3xl text-fg-1">savoureuse</h3>
              <p className="text-fg-3 font-gustavo text-base">
                Palette de saveurs exquises pour une experience de suçotage
                delicieusement satisfaisante et immersive.
              </p>
            </div>
          </div>
          <div className="bento-item bg-bg-3 hover:bg-white duration-300 transition-colors flex-col justify-between">
            <img src="/france-flag.svg" alt="france flag" className="w-10" />
            <div className="w-full flex flex-col items-start gap-2">
              <h3 className="text-3xl text-fg-1">hebergement 100% français</h3>
              <p className="text-fg-3 font-gustavo text-base">
                Notre site web est heberge en france grâce à notre partenaire
                o2switch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
