"use client";

import React, { useEffect, useRef } from "react";

interface VideoRenderProps extends React.HTMLAttributes<HTMLVideoElement> {
  src: string;
  type: string;
}

const VideoRenderer: React.FC<VideoRenderProps> = ({ src, type, ...rest }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const lazyVideo = videoRef.current;

    if (!lazyVideo) return;

    if ("IntersectionObserver" in window) {
      const lazyVideoObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((video) => {
            if (video.isIntersecting) {
              Array.from(lazyVideo.children).forEach((source) => {
                const videoSource = source as HTMLSourceElement;
                if (videoSource.tagName === "SOURCE") {
                  videoSource.src = videoSource.dataset.src || "";
                }
              });

              lazyVideo.load();
              lazyVideo.classList.remove("lazy");
              lazyVideoObserver.unobserve(lazyVideo);
            }
          });
        },
      );

      lazyVideoObserver.observe(lazyVideo);

      return () => {
        lazyVideoObserver.unobserve(lazyVideo);
      };
    }
  }, []);
  return (
    <video ref={videoRef} autoPlay loop {...rest} muted controls={false}>
      <source data-src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoRenderer;
