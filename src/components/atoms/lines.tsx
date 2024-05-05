import React from "react";

export default function Lines({ className }: { className?: string }) {
  return (
    <div
      className={`absolute w-full flex items-center justify-center h-full opacity-20 mix-blend-difference
    ${className}
    `}
    >
      <div className="w-full h-full max-w-screen-2xl flex items-center justify-between px-10">
        <div className="bg-[#3E4451] w-[1px] h-full"></div>
        <div className="bg-[#3E4451] w-[1px] h-full"></div>
        <div className="bg-[#3E4451] w-[1px] h-full"></div>
        <div className="bg-[#3E4451] w-[1px] h-full"></div>
        <div className="bg-[#3E4451] w-[1px] h-full"></div>
      </div>
    </div>
  );
}
