import {
  Github,
  Instagram,
  Linkedin,
  Store,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import ButtonLink from "../atoms/button-link";

export default function Footer() {
  return (
    <footer className="relative w-full flex items-center justify-center bg-fg-1">
      <div className="z-20 w-full max-w-screen-2xl flex flex-col items-center justify-center px-10 py-14 gap-40">
        <div className="w-full flex items-center justify-end">
          <div className="w-[392px] flex flex-col items-center justify-center gap-12">
            <div className="w-full flex flex-col items-start gap-4">
              <h3 className="text-4xl text-white">votre panier est pret</h3>
              <p className="text-fg-3 font-gustavo text-base">
                Récapitulatif de votre commande
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4 text-white font-gustavo text-base">
              <div className="w-full flex items-center justify-between">
                <span>1 x thefrenchtototte</span>
                <span>99,00 €</span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span>1 x Pack Suçoteur Pro</span>
                <span>49,00 €</span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span>Livraison</span>
                <span>Offerte</span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span>Prix</span>
                <span>148,00 €</span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span>Retrait en magasin</span>
                <span>Tototte Store Lille</span>
              </div>
              <div className="w-full flex items-center justify-between">
                <span>Commandez avant 17h</span>
                <span className="flex">
                  Livrer à 59000
                  <Store size={18} className="ml-2" />
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-4">
              <ButtonLink
                href="https://lndev.me"
                className="w-full text-[15px] text-center"
              >
                Ajouter au Panier
              </ButtonLink>
              <p className="font-gustavo text-fg-3 text-xxs text-justify">
                The French Tototte est couverte par une garantie limitée contre
                les défauts de fabrication pour une période de 2 mois à compter
                de la date d&apos;achat. Cette garantie ne couvre pas les
                dommages causés par une mauvaise utilisation, une négligence ou
                une modification non autorisée du produit. Dans les limites
                permises par la loi, thefrenchtototte décline toute
                responsabilité pour les dommages directs, indirects, spéciaux,
                accidentels ou consécutifs découlant de l&apos;utilisation ou de
                l&apos;incapacité d&apos;utiliser thefrenchtototte, même si
                thefrenchtototte a été informée de la possibilité de tels
                dommages. En utilisant thefrenchtototte, l&apos;utilisateur
                consent à la collecte et à l&apos;utilisation de ses données
                conformément à la politique de confidentialité de
                thefrenchtototte. Les informations collectées peuvent inclure,
                mais ne sont pas limitées à, des données d&apos;utilisation, des
                informations de localisation et des données personnelles, telles
                que définies dans ladite politique de confidentialité.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <div className="text-fg-3 flex items-center gap-2">
            <a
              href="https://github.com/ln-dev7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="http://x.com/ln_dev7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="http://linkedin.com/in/lndev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="http://instagra.com/ln_dev7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="http://youtube.com/c/LNDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube />
            </a>
          </div>
          <div className="w-full flex items-center gap-4">
            <h3 className="text-4xl text-fg-3 shrink-0">
              the french tototte &copy;
            </h3>
            <div className="w-full flex flex-col items-start gap-0 font-gustavo text-xs text-fg-3">
              <p>
                Copyright © 2024 TheFrenchTototte. Tous droits réservés —
                Utilisation des cookies — Mention légales.
              </p>
              <p>
                Sur une idée originale d’Antoine Daniel, concept art par Tera
                Silver, 3D par Aurélien Thomas, logo par Baloprisonnier, 3D
                print par Lunath & Packaging par Illusion
              </p>
            </div>
            <a
              href="http://github.com/the-french-tototte"
              className="underline underline-offset-2 text-white"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <img
        src="/icon-big.svg"
        alt="logo"
        className="w-96 absolute bottom-0 left-0"
      />
    </footer>
  );
}
