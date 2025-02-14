"use client";

import { useState, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { FiUploadCloud } from "react-icons/fi";
import { LuFileSymlink } from "react-icons/lu";
import { ImSpinner3 } from "react-icons/im";
import { MdDone } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";
import { BiError } from "react-icons/bi";
import ReactDropzone from "react-dropzone";
import loadFfmpeg from "@/utils/load-ffmpeg";
import { useEffect } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";

export default function VideoToMp3() {
  const { toast } = useToast();
  const [is_hover, setIsHover] = useState<boolean>(false);
  const [is_loaded, setIsLoaded] = useState<boolean>(false);
  const [is_converting, setIsConverting] = useState<boolean>(false);
  const [is_done, setIsDone] = useState<boolean>(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const ffmpegRef = useRef<FFmpeg | null>(null);

  const handleUpload = (files: File[]) => {
    if (files.length > 0) {
      setVideoFile(files[0]);
    }
  };

  const convertToMp3 = async () => {
    if (!videoFile || !ffmpegRef.current) return;

    setIsConverting(true);
    try {
      const ffmpeg = ffmpegRef.current;
      const inputFileName = "input-video";
      const outputFileName = "output-audio.mp3";

      // Write the video file to FFmpeg's file system
      await ffmpeg.writeFile(inputFileName, await fetchFile(videoFile));

      // Run FFmpeg command to convert video to MP3
      await ffmpeg.exec(["-i", inputFileName, "-q:a", "0", "-map", "a", outputFileName]);

      // Read the converted MP3 file
      const data = await ffmpeg.readFile(outputFileName);
      const url = URL.createObjectURL(new Blob([data], { type: "audio/mp3" }));
      setAudioUrl(url);
      setIsDone(true);
    } catch (error) {
      console.error("Conversion error:", error);
      toast({
        variant: "destructive",
        title: "Error converting video to MP3",
        description: "Please try again.",
        duration: 5000,
      });
    } finally {
      setIsConverting(false);
    }
  };

  const downloadAudio = () => {
    if (audioUrl) {
      const a = document.createElement("a");
      a.href = audioUrl;
      a.download = "converted-audio.mp3";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const reset = () => {
    setVideoFile(null);
    setAudioUrl(null);
    setIsDone(false);
  };

  const fetchFile = async (file: File): Promise<Uint8Array> => {
    return new Uint8Array(await file.arrayBuffer());
  };

  useEffect(() => {
    const load = async () => {
      const ffmpeg = await loadFfmpeg();
      ffmpegRef.current = ffmpeg;
      setIsLoaded(true);
    };
    load();
  }, []);

  return (
    <div className="space-y-6">
      {!videoFile ? (
        <ReactDropzone
          onDrop={handleUpload}
          onDragEnter={() => setIsHover(true)}
          onDragLeave={() => setIsHover(false)}
          accept={{ "video/*": [] }}
          onDropRejected={() => {
            toast({
              variant: "destructive",
              title: "Error uploading your file",
              description: "Only video files are allowed.",
              duration: 5000,
            });
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="bg-background h-72 rounded-3xl shadow-sm border-secondary border-2 border-dashed cursor-pointer flex items-center justify-center"
            >
              <input {...getInputProps()} />
              <div className="space-y-4 text-foreground">
                {is_hover ? (
                  <>
                    <div className="justify-center flex text-6xl">
                      <LuFileSymlink />
                    </div>
                    <h3 className="text-center font-medium text-2xl">
                      Yes, right there
                    </h3>
                  </>
                ) : (
                  <>
                    <div className="justify-center flex text-6xl">
                      <FiUploadCloud />
                    </div>
                    <h3 className="text-center font-medium text-2xl">
                      Click, or drop your video file here
                    </h3>
                  </>
                )}
              </div>
            </div>
          )}
        </ReactDropzone>
      ) : (
        <div className="w-full py-4 space-y-2 rounded-xl border h-fit px-4 flex flex-wrap lg:flex-nowrap items-center justify-between">
          <div className="flex gap-4 items-center">
            <span className="text-2xl text-orange-600">
              📹 {/* Video icon */}
            </span>
            <div className="flex items-center gap-1 w-96">
              <span className="text-md font-medium overflow-x-hidden">
                {videoFile.name}
              </span>
              <span className="text-muted-foreground text-sm">
                ({(videoFile.size / 1024 / 1024).toFixed(2)} MB)
              </span>
            </div>
          </div>

          {is_done ? (
            <button
              onClick={downloadAudio}
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <HiOutlineDownload />
              Download MP3
            </button>
          ) : (
            <button
              onClick={convertToMp3}
              disabled={!is_loaded || is_converting}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              {is_converting ? (
                <span className="animate-spin">
                  <ImSpinner3 />
                </span>
              ) : (
                "Convert to MP3"
              )}
            </button>
          )}
        </div>
      )}

      {is_done && (
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Convert Another File
        </button>
      )}
    </div>
  );
}