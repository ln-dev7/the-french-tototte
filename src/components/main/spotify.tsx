import React from "react";

export default function Spotify() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="w-full max-w-3xl flex flex-col items-center justify-center gap-16 px-10 py-20">
        <div className="border border-fg-1 rounded-lg overflow-hidden">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/spotify.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-full px-10 flex items-start justify-between">
          <h3 className="text-6xl shrink-0">
            sucotez <br /> vos titres <br /> preferes
          </h3>
          <div className="font-gustavo">
            <button className="border-2 border-fg-2 text-fg-2 font-medium flex items-center py-2 px-8 cursor-pointer">
              Spotify Connect{" "}®
            </button>
            <span className="text-fg-3 block mb-6 mt-2">
              En partenariat exclusif avec Spotify
            </span>
            <p className="text-fg-3 w-72">
              En connectant votre tototte à votre smartphone par la technologie
              bluetooth,{" "}
              <span className="font-bold">dégustez vos morceaux</span> et vos
              vidéos préférées directement dans votre bouche
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
