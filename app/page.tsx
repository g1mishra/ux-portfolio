import Header from "@/components/Header";
import ArrowLinkIcon from "@/components/icons/ArrowLinkIcon";
import ProjectCard from "@/components/project/ProjectCard";
import Link from "next/link";

const projects = [
  {
    title: "Homie",
    description: "A mobile app that helps you find roommates and housing.",
    thumbnail: "/images/homie.png",
    colour: "stadiabt",
    link: "/project/homie",
  },
  {
    title: "Homeslice",
    description: "A mobile app that helps you find roommates and housing.",
    thumbnail: "/images/homeslice.png",
    colour: "spotlight",
    link: "/project/homeslice",
  },
  {
    title: "Sugarwise",
    description: "A mobile app that helps you find roommates and housing.",
    thumbnail: "/images/sugarwise.png",
    colour: "thn",
    link: "/project/sugarwise",
  },
];

const Work = () => {
  return (
    <main>
      <Header />
      <div className="section-hero">
        <div className="hero-fade">
          <div className="scroll-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              className="icon-scroll-down animate-bounce"
            >
              <path
                d="M24 44.1899L10 30.1899L12.1 28.0899L22.5 38.4899V4.18994H25.5V38.4899L35.9 28.0899L38 30.1899L24 44.1899Z"
                fill="#F2F2F2"
              />
            </svg>
          </div>
        </div>
        <div className="container-hero-image">
          <div className="glare-item-top outer-edge"></div>
          <div className="window-outline">
            <div className="glare-item-top hero-inner"></div>
            <div className="window-main">
              <div className="shine-wrapper">
                <div className="shine-small"></div>
                <div className="shine-big"></div>
              </div>
              <div className="window-bar">
                <div className="window-dots-wrapper">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  className="icon-windowbar-plus"
                >
                  <path
                    d="M14.8646 26.2687V17.9354H6.53125V15.6644H14.8646V7.33105H17.1356V15.6644H25.4689V17.9354H17.1356V26.2687H14.8646Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </div>
              <div className="window-content">
                <div className="flex flex-col">
                  <h1 className="w-10/12 text-6xl font-bold leading-normal text-white">
                    Hi, I&#39;m Sampada
                  </h1>
                  <h2 className="mt-3 w-10/12 text-6xl font-bold">
                    <span className="text-whitesmoke-100">I </span>
                    <span className="shadow-text ">design</span>
                    <span className="text-whitesmoke-100">, </span>
                    <span className="shadow-text ">sketch</span>
                    <span className="text-whitesmoke-100"> &amp; </span>
                    <span className="shadow-text t">doodle</span>
                    <span className="text-whitesmoke-100">.</span>
                  </h2>
                  <p className="mt-8 w-10/12 text-2xl font-normal text-white">
                    I&#39;m a passionate User Experience Designer based in
                    Indianapolis, Indiana with an experience in delivering
                    end-to-end UX/UI design fro products and services. My design
                    journey is fueled by a profound passion for improving the
                    lives of others through design, and I am constantly seeking
                    to learn new things every day.
                  </p>
                </div>
                <div className="window-grain"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-gradient"></div>
        <div className="hero-noise"></div>
      </div>
      <div className="section-hero-portrait">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold leading-normal text-white">
            Hi, I&#39;m Sampada
          </h1>
          <h2 className="text-5xl font-bold">
            <span className="text-whitesmoke-100">I </span>
            <span className="shadow-text ">design</span>
            <span className="text-whitesmoke-100">, </span>
            <span className="shadow-text ">sketch</span>
            <span className="text-whitesmoke-100"> &amp; </span>
            <span className="shadow-text t">doodle</span>
            <span className="text-whitesmoke-100">.</span>
          </h2>
          <p className="mt-3 text-xl font-normal text-white">
            I&#39;m a passionate User Experience Designer based in Indianapolis,
            Indiana with an experience in delivering end-to-end UX/UI design fro
            products and services. My design journey is fueled by a profound
            passion for improving the lives of others through design, and I am
            constantly seeking to learn new things every day.
          </p>
        </div>
        <div className="divider-scroll-wrapper">
          <div className="hero-portrait-divider"></div>
          <div className="hero-portrait-scroll">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="49"
              viewBox="0 0 48 49"
              className="icon-scroll-down portrait animate-bounce"
              fill="none"
            >
              <path
                d="M24 44.1899L10 30.1899L12.1 28.0899L22.5 38.4899V4.18994H25.5V38.4899L35.9 28.0899L38 30.1899L24 44.1899Z"
                fill="#F2F2F2"
              />
            </svg>
            <div className="text-portrait-overline selected-work">
              Recent Work
            </div>
          </div>
        </div>
        <div className="hero-noise" />
      </div>
      <div className="section-projects">
        <div className="container-projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              colour={project.colour as any}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <div className="section-footer">
        <div className="container-footer">
          <div className="footer-top-wrapper">
            <div />
            <div className="footer-links-column-wrapper">
              <div className="footer-links-column">
                <div className="text-footer-links-overline">MAIN</div>
                <div className="footer-links-wrapper">
                  <Link
                    href="/"
                    aria-current="page"
                    className="footer-link w-inline-block w--current"
                  >
                    <div className="text-footer-link">Work</div>
                  </Link>
                  <Link href="/about" className="footer-link w-inline-block">
                    <div className="text-footer-link">Info</div>
                  </Link>
                </div>
              </div>
              <div className="footer-links-column">
                <div className="text-footer-links-overline">CONTACT</div>
                <div className="footer-links-wrapper">
                  <a
                    href="#linkedin"
                    target="_blank"
                    className="footer-link w-inline-block"
                  >
                    <div className="text-footer-link">LinkedIn</div>
                    <ArrowLinkIcon className="icon-external" />
                  </a>
                  <a
                    href="#resume"
                    target="_blank"
                    className="footer-link w-inline-block"
                  >
                    <div className="text-footer-link">Resume</div>
                    <ArrowLinkIcon className="icon-external" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-wrapper">
            <div className="footer-bottom-left">
              <div className="text-footer-copyright">
                © 2023. All Rights Reserved.
              </div>
              <div className="text-under-copyright">
                Made with love and Mango Green Teas (50% sugar, less ice).
              </div>
            </div>
            <div className="footer-bottom-right">
              <div className="text-last-updated">
                Last updated: 28/12/2023, 2:46:54 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Work;
