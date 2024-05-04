import React from "react";

export default function Header() {
  return (
    <header className="fixed w-full top-0 flex items-center justify-center z-20">
      <div className="w-full max-w-screen-2xl flex items-center justify-between p-4">
        <div className="flex items-center justify-start w-[120px]">
          <img src="/icon.svg" alt="logo" className="w-8 h-8" />
        </div>
        <div className="flex items-center gap-4">
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
        <a href="#" className="bg-fg-2 font-gustavo text-bg-2 py-2 px-8 mix-blend-multiply">
          Achter
        </a>
      </div>
    </header>
  );
}
