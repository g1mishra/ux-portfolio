import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id?: number;
  title: string;
  secondaryTitle?: string;
  description?: string;
  thumbnail?: string;
  colour: "stadiabt" | "thn" | "spotlight" | "rbc";
  secondaryTitleColour?: string;
  link: string;
}

const ProjectCard = ({
  id,
  title,
  secondaryTitle,
  description,
  thumbnail,
  colour,
  secondaryTitleColour,
  link,
}: ProjectCardProps) => {
  return (
    <div className="project-card-outline">
      <div className="glare-item-top outer-edge"></div>
      <Link
        href={link}
        className="project-card w-inline-block max-h-[700px] min-h-[200px] w-full pb-9"
      >
        <div className="glare-item-top inner-edge"></div>
        <div className="projectcard-top z-10">
          <div className="projectcard-title-row">
            <h1 className="text-projectcard-title">{title}</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="icon-projectcard-arrow"
            >
              <path
                d="M28.05 35.9016L25.9 33.8016L34.3 25.4016H8V22.4016H34.3L25.85 13.9516L28 11.8516L40.05 23.9016L28.05 35.9016Z"
                fill="#F2F2F2"
              />
            </svg>
          </div>
        </div>
        <div className="flex h-full flex-col gap-6 sm:flex-row">
          <div className="flex w-full max-w-sm flex-col gap-5 sm:col-span-1 md:mt-10 2xl:mt-8 2xl:max-w-screen-sm 2xl:gap-9">
            <div className="flex items-center gap-5">
              <div className="h-3 w-3 shrink-0 rounded-md bg-whitesmoke-100 shadow-white20" />
              <span className="self-stretch text-base font-medium uppercase leading-6 text-whitesmoke-100 text-opacity-60 2xl:text-lg">
                Case Study {id}
              </span>
            </div>
            <h2
              className="mt-2 font-karla text-lg font-medium leading-none md:text-xl 2xl:text-[32px]"
              style={{ color: secondaryTitleColour }}
            >
              {secondaryTitle}
            </h2>
            <p className="w-full max-w-screen-sm font-karla text-base font-medium text-whitesmoke-100 text-opacity-80 sm:text-lg sm:leading-9 2xl:text-xl">
              {description}
            </p>
          </div>
          <div className="relative hidden w-full flex-1 items-center justify-center overflow-hidden sm:flex">
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={title}
                fill={true}
                className="object-contain"
              />
            ) : null}
          </div>
        </div>
        {/* <div
          className={`project-card-colour ${colour} transition-colors duration-300 ease-in-out hover:opacity-100`}
        /> */}
      </Link>
    </div>
  );
};

export default ProjectCard;
