"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ProjectHeroProps {
  title: string;
  contents: string[];
  onBackClick?: () => void;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  contents,
  onBackClick,
}) => {
  const router = useRouter();

  const updatedOnBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      router.back();
    }
  };

  return (
    <section className="z-10 flex h-screen w-full flex-col items-stretch px-4 pb-2 pt-12 md:px-12 xl:px-16">
      <button
        className="fixed z-50 flex max-w-max items-center justify-center gap-2.5 rounded-full border border-solid border-whitesmoke-400 border-opacity-0 bg-whitesmoke-500 px-7 py-4 font-inter backdrop-blur-[5px] md:px-[37px] md:py-[21px]"
        onClick={updatedOnBackClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M19.0546 12.0224L5.05471 12.0859M5.05471 12.0859L11.0819 18.0586M5.05471 12.0859L11.0274 6.05875"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-[22px] font-medium leading-5 tracking-tight text-whitesmoke-100">
          Back
        </p>
      </button>
      <h1
        style={{
          background:
            "linear-gradient(180deg, #F2F2F2 50%, rgba(0, 0, 0, 0.00) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow:
            "0px -5px 25px rgba(255, 255, 255, 0.25), 0px -5px 15px rgba(255, 90, 0, 0.15), 0px 5px 15px rgba(0, 87, 255, 0.20)",
        }}
        className="mt-16 text-center font-inter text-4xl font-medium leading-[88px] -tracking-[1px] md:text-6xl"
      >
        {title}
      </h1>
      <div className="fixed bottom-0 top-0  z-50 hidden flex-col justify-center gap-6 self-end md:flex">
        <div className="whitespace-nowrap text-lg leading-6 text-whitesmoke-100 ">
          CONTENTS
        </div>
        {contents.map((content, index) => (
          <div
            key={index}
            className="whitespace-nowrap text-base font-light leading-6 text-whitesmoke-100 text-opacity-60 xl:text-lg"
          >
            {content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectHero;
