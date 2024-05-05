import React from "react";
import Lines from "../atoms/lines";

export default function Presentation() {
  return (
    <div className="relative w-full flex items-center justify-center">
    <Lines />
      <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-52 px-10 pt-40 pb-40">
        <img
          src="/presentation.png"
          alt="presentation image"
          className="w-[700px] mt-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:rotate-45 transition-transform duration-300 ease-in-out"
        />
        <div className="w-full flex items-center justify-start">
          <div className="flex flex-col items-start">
            <h3 className="text-6xl">
              sucotez <br />
              sans <br />
              soucis
            </h3>
            <p className="text-fg-3 w-72 font-gustavo mt-6">
              La tototte offre une{" "}
              <span className="font-bold">autonomie impressionnante</span> de 50
              heures de suçotage grâce à sa batterie au lithium, assurant ainsi{" "}
              <span className="font-bold">
                des heures de plaisir ininterrompu
              </span>{" "}
              pour encore plus de confort et de tranquillité.
            </p>
          </div>
        </div>
        <div className="font-gustavo w-full flex items-center justify-end">
          <div className="flex flex-col items-start">
            <h3 className="text-6xl font-bold">50h</h3>
            <span className="block mt-2 mb-6">
              de suçotage Bluetooth sans interruption
            </span>
            <p className="text-fg-3 w-72">
              Grâce aux{" "}
              <span className="font-bold">technologies sans contact</span>{" "}
              profitez d’une recharge rapide sur son socle à induction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
