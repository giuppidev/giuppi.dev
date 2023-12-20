import { getVideoPath } from "@/utils/video-streaming";

export const VideoPlayer = ({ videoId }: { videoId: string }) => {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src={`${getVideoPath(
          videoId
        )}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`}
        loading="lazy"
        style={{
          border: "none",
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
        }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};
