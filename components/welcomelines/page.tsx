import React from "react";
import { BackgroundLines } from "../background-lines";

export function BackgroundLinx() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col ">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        AI Powered, <br /> Online Tools Free.
      </h2>
      <p className="max-w-xl mx-auto text-xs md:text-xs text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
    </BackgroundLines>
  );
}
