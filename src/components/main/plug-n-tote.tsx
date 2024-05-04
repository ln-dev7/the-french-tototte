import React from "react";

export default function PlugNTote() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="w-full max-w-3xl flex flex-col items-center justify-center px-10 py-10">
        <img src="/tototte.gif" alt="tototte" className="w-full" />
        <a
          href="#flavors"
          className="text-fg-2 py-2 px-10 font-gustavo mix-blend-multiply hover-link"
        >
          Découvrir les saveurs
        </a>
      </div>
    </div>
  );
}
