import React from "react";

interface VideoRenderProps {
  src: string;
  type: string;
}

const VideoRender: React.FC<VideoRenderProps> = ({ src, type }) => {
  return (
    <video autoPlay muted controls={false}>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoRender;
