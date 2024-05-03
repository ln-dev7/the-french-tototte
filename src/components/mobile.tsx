import React from "react";

export default function Mobile() {
  return (
    <main className="w-full flex flex-col items-center gap-8 justify-center min-h-screen bg-bg-blue p-4">
      <img src="/logo.svg" alt="logo" className="w-28" />
      <div className="flex flex-col items-center gap-2">
        <p className="font-gustavo text-center">
          Frérot, j&apos;ai eu la flemme de faire le design pour mobile, mais
          t&apos;inquiète, ça va arriver un jour.
        </p>
        <p className="font-gustavo text-center">
          Entre temps, tu peux toujours visiter le site sur un ordinateur 😉
        </p>
        <p className="font-gustavo text-center">
          Ou alors contribuer sur{" "}
          <a
            href="https://github.com/ln-dev7/the-french-tototte"
            className="underline underline-offset-2 font-bold"
            target="_blank"
          >
            GitHub
          </a>{" "}
          pour m&apos;aider à le faire plus vite 😇
        </p>
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
    </main>
  );
}
