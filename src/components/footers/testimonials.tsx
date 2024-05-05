import { Twitch, Youtube } from "lucide-react";
import React from "react";

export default function Testimonials() {
  return (
    <div className="relative w-full flex items-center justify-center gradient-testimonials ">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-52 px-10 pt-20 pb-44">
        <div className="flex flex-col items-center">
          <h3 className="text-6xl text-center">
            ils ont sucote, <br />
            ils ont adore
          </h3>
          <p className="text-fg-3 w-[450px] font-gustavo text-center mt-2">
            Nos totottes sont utilisées par les plus grands de ce monde et si
            vous voulez mon avis ce n’est pas un hasard
          </p>
        </div>
        <div className="w-full flex items-center justify-between gap-20">
          <div className="h-[600px] flex justify-center items-center w-full">
            <div className="w-full flex flex-col items-start gap-4">
              <div className="rounded-full w-44 h-44 flex items-center justify-center overflow-hidden">
                <img
                  src="/testimonial-1.png"
                  alt="testimonial"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start gap-2 text-fg-1">
                <h4 className="text-xl">/Baghera Jones</h4>
                <div className="font-gustavo flex items-center justify-start gap-2">
                  <Twitch size={20} />
                  <span className="font-medium">Streamer</span>
                </div>
              </div>
              <p className="font-gustavo text-fg-3">
                J’ai arrêté de vape depuis que j’ai découvert{" "}
                <span className="font-tartuffo text-fg-1">
                  the french tototte®
                </span>
              </p>
            </div>
          </div>
          <div className="h-[600px] flex justify-center items-end w-full">
            <div className="w-full flex flex-col items-start gap-4">
              <div className="rounded-full w-44 h-44 flex items-center justify-center overflow-hidden">
                <img
                  src="/testimonial-2.png"
                  alt="testimonial"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start gap-2 text-fg-1">
                <h4 className="text-xl">/Joueur_du_Grenier</h4>
                <div className="font-gustavo flex items-center justify-start gap-2">
                  <Youtube size={20} />
                  <span className="font-medium">Youtuber</span>
                </div>
              </div>
              <p className="font-gustavo text-fg-3">
                J’ai commandé un pack pour toute la famille et même mon fils
                Légolas San Goku adore sa{" "}
                <span className="font-tartuffo text-fg-1">
                  the french tototte®
                </span>
              </p>
            </div>
          </div>
          <div className="h-[600px] flex justify-center items-start w-full">
            <div className="w-full flex flex-col items-start gap-4">
              <div className="rounded-full w-44 h-44 flex items-center justify-center overflow-hidden">
                <img
                  src="/testimonial-3.png"
                  alt="testimonial"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start gap-2 text-fg-1">
                <h4 className="text-xl">/Etoiles</h4>
                <div className="font-gustavo flex items-center justify-start gap-2">
                  <Twitch size={20} />
                  <span className="font-medium">Streamer</span>
                </div>
              </div>
              <p className="font-gustavo text-fg-3">
                Grâce à{" "}
                <span className="font-tartuffo text-fg-1">
                  the french tototte®
                </span>{" "}
                je régule mon taux d’insuline parfaitement et je n’achète plus
                de saumon ni de nutella !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
