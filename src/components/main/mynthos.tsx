import React from "react";

export default function Mynthos() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="w-full max-w-3xl flex items-center justify-center gap-20 px-10 pt-40 pb-52">
        <img src="/mynthos.svg" alt="mynthos" className="w-full" />
        <div className="">
          <h3 className="text-6xl">
            le jus de <br />
            mynthos
          </h3>
          <button className="mt-4 mb-8 border-2 font-gustavo border-fg-2 text-fg-2 font-medium flex items-center py-2 px-8 cursor-pointer">
            Collaboration exclusive
          </button>
          <p className="text-fg-3 w-72 font-gustavo">
            Découvrez l&apos;exclusivité : la fusion inédite entre{" "}
            <span className="font-bold">Le Jus de Mynthos</span> et{" "}
            <span className="font-tartuffo">the french tototte®</span>, offrant
            un goût rare et recherché. Une collaboration qui révèle
            l&apos;essence de l&apos;excellence et de l&apos;originalité, à
            savourer sans plus attendre.
          </p>
        </div>
      </div>
    </div>
  );
}
