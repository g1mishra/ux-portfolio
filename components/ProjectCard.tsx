import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description?: string;
  thumbnail?: string;
  colour: "stadiabt" | "thn" | "spotlight" | "rbc";
  link: string;
}

const ProjectCard = ({
  title,
  description,
  thumbnail,
  colour,
  link,
}: ProjectCardProps) => {
  return (
    <div className="project-card-outline">
      <div className="glare-item-top outer-edge"></div>
      <Link href={link} className="project-card w-inline-block min-h-[200px]">
        <div className="glare-item-top inner-edge"></div>
        <div className="projectcard-top">
          <div className="projectcard-title-row">
            <div className="text-projectcard-title">{title}</div>
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
          {/* <div className="text-projectcard-description">
                  <span className="text-projectcard-description-company">
                    Google, &#x27;23
                  </span>
                  — Giving a second life to over a million controllers.
                </div> */}
        </div>
        {/* <Image
                src=""
                loading="lazy"
                alt=""
                className="project-thumbnail"
                width={1000}
                height={1000}
              /> */}
        <div
          className={`project-card-colour ${colour} transition-colors duration-300 ease-in-out hover:opacity-100`}
        ></div>
      </Link>
    </div>
  );
};

export default ProjectCard;
