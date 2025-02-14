import Video3gp from "@/components/videoconversion/VideoTo3gp/page";
import VideoToMp3 from "@/components/videoconversion/VideoToMp3/page";

export default function VideoConversions() {
  return (
    <>
    
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <Video3gp />
      <VideoToMp3/>
    </div>
    </>

  );
}
