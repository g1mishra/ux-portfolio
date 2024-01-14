"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import ScrollLink from "../ScrollLink";
import Image from "next/image";

interface ProjectHeroProps {
  title: string;
  bgImage?: string;
  contents: { name: string; path: string }[];
  onBackClick?: () => void;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  contents,
  onBackClick,
  bgImage,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeContent, setActiveContent] = useState<number | null>(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const activeIndex = contents.findIndex((content) => {
      const element = document.getElementById(content.path.slice(1));

      if (element) {
        // Check if the element is in the viewport
        const elementRect = element.getBoundingClientRect();
        return (
          elementRect.top <= window.innerHeight / 2 &&
          elementRect.bottom >= window.innerHeight / 2
        );
      }

      return false;
    });

    setActiveContent(activeIndex);
  }, [contents]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const handleRouteChange = () => {
      const hash = pathname.split("#")[1];
      const activeIndex = contents.findIndex(
        (content) => content.path === `#${hash?.toLowerCase()}`,
      );
      setActiveContent(activeIndex);
    };
    handleRouteChange();
  }, [contents, pathname]);

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
        className="3xl:px-8 3xl:py-4 fixed z-50 flex max-w-max items-center justify-center gap-2.5 rounded-full border border-solid border-whitesmoke-400 border-opacity-0 bg-whitesmoke-500 px-5 py-2.5 font-inter backdrop-blur-[5px]"
        onClick={updatedOnBackClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          className="3xl:h-6 3xl:w-6 h-5 w-5"
        >
          <path
            d="M19.0546 12.0224L5.05471 12.0859M5.05471 12.0859L11.0819 18.0586M5.05471 12.0859L11.0274 6.05875"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="3xl:text-[22px] text-lg font-medium leading-5 tracking-tight text-whitesmoke-100">
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

      {bgImage ? (
        <div className="relative flex h-full w-full items-baseline justify-center overflow-hidden object-contain">
          <Image
            src={bgImage}
            alt="Project Image"
            priority
            fill
            className="object-contain object-top"
          />
        </div>
      ) : null}

      <div className="fixed bottom-0 right-7 top-0  z-50 hidden flex-col justify-center gap-6 self-end xl:flex">
        <div className="whitespace-nowrap text-lg leading-6 text-whitesmoke-100 ">
          CONTENTS
        </div>
        {contents.map((content, index) => (
          <ScrollLink
            key={index}
            href={content.path}
            style={{
              color:
                activeContent === index ? "white" : "rgba(242, 242, 242, 0.60)",
            }}
            className={`cursor-pointer whitespace-nowrap text-base font-light  leading-6 text-opacity-60`}
          >
            {content.name}
          </ScrollLink>
        ))}
      </div>
    </section>
  );
};

export default ProjectHero;
