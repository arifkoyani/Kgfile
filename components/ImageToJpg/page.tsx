"use client"

import React from "react";
import { useState  } from "react";

const ImageToJpgConverter = () => {
  const [image, setImage] = useState<File | null>(null);
  const [convertedUrl, setConvertedUrl] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      convertToJpg(file);
    }
  };

  const convertToJpg = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const jpgUrl = canvas.toDataURL("image/jpeg", 1.0);
          setConvertedUrl(jpgUrl);
        }
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-96 text-center">
      <h2 className="text-lg font-bold mb-2">Image to JPG Converter</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2" />
      {convertedUrl && (
        <div className="mt-4">
          <img src={convertedUrl} alt="Converted JPG" className="w-full h-auto mb-2" />
          <a
            href={convertedUrl}
            download="converted.jpg"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Download JPG
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageToJpgConverter;
