"use client";
import React, { useState, useEffect } from "react";
import ButtonLink from "./atoms/button-link";

export default function Header() {
  const [skipHero, setSkipHero] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY >= window.innerHeight) {
        setSkipHero(true);
      } else {
        setSkipHero(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 flex items-center justify-center z-50
    ${skipHero ? "header-gradient" : "bg-transparent"}
    `}
    >
      <div className="w-full max-w-screen-2xl flex items-center justify-between px-10 pt-6 pb-20">
        <div className="flex items-center justify-start w-[120px]">
          <img src="/icon.svg" alt="logo" className="w-8 h-8" />
        </div>
        <div className={`items-center gap-4  ${skipHero ? "hidden" : "flex"}`}>
          <a
            href="https://x.com/ln_dev7"
            className="underline underline-offset-2"
            target="_blank"
          >
            Code By LN
          </a>
          <a
            href="https://www.youtube.com/c/BastiUI"
            className="underline underline-offset-2"
            target="_blank"
          >
            Design By BastiUI
          </a>
        </div>
        <p
          className={`mix-blend-multiply text-2xl
          ${skipHero ? "block" : "hidden"}
        `}
        >
          the french tototte
        </p>
        <ButtonLink href="#choice">Acheter</ButtonLink>
      </div>
    </header>
  );
}
