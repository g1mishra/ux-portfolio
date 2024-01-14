import React from "react";

interface VideoRenderProps extends React.HTMLAttributes<HTMLVideoElement> {
  src: string;
  type: string;
}

const VideoRenderer: React.FC<VideoRenderProps> = ({ src, type, ...rest }) => {
  return (
    <video autoPlay loop {...rest} muted controls={false}>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoRenderer;
