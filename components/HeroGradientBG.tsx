import React from "react";

interface HeroGradientBGProps {
  gradient: string;
  height: string;
  maxHeight?: string;
}

const HeroGradientBG: React.FC<HeroGradientBGProps> = ({
  gradient,
  height,
  maxHeight = "70vh",
}) => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: gradient,
        height: height,
        maxHeight: maxHeight,
      }}
    />
  );
};

export default HeroGradientBG;
