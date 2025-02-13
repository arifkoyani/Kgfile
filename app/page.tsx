"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./../components/aurora-background";
import Dropzone from "@/components/dropzone";
import ImageToPngConverter from "@/components/ImgToPng/page";
import TextSummarizer from "./textsummarizer/page";
import { BackgroundLinx } from "@/components/welcomelines/page";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="space-y-1 pb-0 bg-slate-100">
          {/* Title + Desc */}
          {/* <div className="space-y-0">
            <h1 className="text-3xl md:text-5xl font-medium text-center">
              Free Unlimited File Converter
            </h1>
            <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
              Unleash your creativity with Modifio – the ultimate online tool
              for unlimited and free multimedia conversion. Transform images,
              audio, and videos effortlessly, without restrictions. Start
              converting now and elevate your content like never before!
            </p>
          </div> */}

          {/* Upload Box */}
          <TextSummarizer/>
          {/* <Dropzone /> */}
          {/* <ImageToPngConverter/> */}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
