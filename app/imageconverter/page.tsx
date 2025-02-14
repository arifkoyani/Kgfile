"use client";

import Image from "next/image";
import { Tabs } from "../../components/tabs";
import ImageToPngConverter from "@/components/ImageConversion/ImgToPng/page";
import ImageToJpgConverter from "@/components/ImageConversion/ImageToJpg/page";
import ImageToJpegConverter from "@/components/ImageConversion/ImageToJpeg/page";
import ImageToGifConverter from "@/components/ImageConversion/ImageToGif/page";
import ImageToWebpConverter from "@/components/ImageConversion/ImageToWebp/page";
import ImageTifConverter from "@/components/ImageConversion/ImageTif/page";
import ImageSvgConverter from "@/components/ImageConversion/ImageSvg/page";

 function ImageConverter() {
  const tabs = [
    {
      title: "Image to PNG",
      value: "ImageToPngConverter",
      content: (
        <div className="w-full flex flex-col justify-center items-center gap-10 overflow-hidden relative h-full rounded-2xl  text-xs md:text-xs font-xs text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <ImageToPngConverter />
        </div>
      ),
    },
    {
      title: "Image To Jpg",
      value: "Image To Jpg",
      content: (
        <div className="w-full flex flex-col justify-center items-center gap-10 overflow-hidden relative h-full rounded-2xl  text-xs md:text-xs font-xs text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <ImageToJpgConverter />
        </div>
      ),
    },
    {
      title: "Image To Jpeg",
      value: "Image To Jpeg",
      content: (
        <div className="w-full flex flex-col justify-center items-center gap-10 overflow-hidden relative h-full rounded-2xl  text-xs md:text-xs font-xs text-white bg-gradient-to-br from-purple-700 to-violet-900">
  
          <ImageToJpegConverter/>
        </div>
      ),
    },
    {
      title: "Image To Gif",
      value: "Image To Gif",
      content: (
        <div className="w-full flex flex-col justify-center items-center gap-10 overflow-hidden relative h-full rounded-2xl  text-xs md:text-xs font-xs text-white bg-gradient-to-br from-purple-700 to-violet-900">
    
          <ImageToGifConverter />
        </div>
      ),
    },
    {
      title: "Image To Webp",
      value: "Image To Webp",
      content: (
        <div className="w-full flex flex-col justify-center items-center gap-10 overflow-hidden relative h-full rounded-2xl  text-xs md:text-xs font-xs text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <ImageToWebpConverter />
        </div>
      )},
      {
        title: "Image To Tif",
        value: "Image To Tif",
        content: (
          <div className="w-full flex flex-col justify-center items-center gap-10 overflow-hidden relative h-full rounded-2xl  text-xs md:text-xs font-xs text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <ImageTifConverter />
          </div>
        ),
      },
      {
        title: "Image To SVG",
        value: "Image To SVG",
        content: (
          <div className="w-full flex flex-col justify-center items-center gap-10 overflow-hidden relative h-full rounded-2xl  text-xs md:text-xs font-xs text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <ImageSvgConverter/>
          </div>
        ),
      }

  ];

  return (
    <div className=" h-screen text-xs md:h-screen [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-center justify-center">
      <Tabs tabs={tabs} />
    </div>
  );
}



export default ImageConverter
