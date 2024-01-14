import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollDownIcon from "@/components/icons/ScrollDownIcon";
import ProjectCard from "@/components/project/ProjectCard";

const projects = [
  {
    title: "Homeslice",
    secondaryTitle: "UX Research | UI Design",
    description:
      "Designing an app to give students a rich and immersive experience, reducing homesickness by fostering new cultural connections and shared celebrations within the community.",
    thumbnail: "/images/homeslice.png",
    colour: "spotlight",
    secondaryTitleColour: "#F2994A",
    link: "/project/homeslice",
  },
  {
    title: "Sugarwise",
    secondaryTitle: "UX Research | UI Design",
    description:
      "Designing an app to help spread awareness among students and educate them on what is healthy. Streamlining the decision-making process and guide users toward healthier food choices.",

    thumbnail: "/images/sugarwise.png",
    colour: "thn",
    secondaryTitleColour: "#6FCF97",
    link: "/project/sugarwise",
  },
  {
    title: "Homie",
    secondaryTitle: "UX Research | UI Design",
    description:
      "Designing an app to allow users to find a room and a roommate  and share their requirements with just a few steps. Modernizing the way users customize and share their housing preferences to find the ideal match in an outdated market. ",

    thumbnail: "/images/homie.png",
    colour: "stadiabt",
    secondaryTitleColour: "#A377FF",
    link: "/project/homie",
  },
];

const Work = () => {
  return (
    <main>
      <Header />
      <div className="section-hero">
        <div className="hero-fade">
          <div className="scroll-wrapper">
            <ScrollDownIcon />
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
                  <h2 className="mt-3 w-10/12 font-sans text-6xl font-bold">
                    <span className="text-whitesmoke-100">I </span>
                    <span className="shadow-text ">design</span>
                    <span className="text-whitesmoke-100">, </span>
                    <span className="shadow-text ">sketch</span>
                    <span className="text-whitesmoke-100"> &amp; </span>
                    <span className="shadow-text t">doodle</span>
                    <span className="text-whitesmoke-100">.</span>
                  </h2>
                  <p className="mt-12 w-10/12 text-xl font-normal text-white">
                    I&#39;m a passionate User Experience Designer based in
                    Indianapolis, Indiana with an experience in delivering
                    end-to-end UX/UI design for products and services. My design
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
          <h2 className="font-sans text-4xl font-bold">
            <span className="text-whitesmoke-100">I </span>
            <span className="shadow-text ">design</span>
            <span className="text-whitesmoke-100">, </span>
            <span className="shadow-text ">sketch</span>
            <span className="text-whitesmoke-100"> &amp; </span>
            <span className="shadow-text t">doodle</span>
            <span className="text-whitesmoke-100">.</span>
          </h2>
          <p className="mt-3 text-lg font-normal text-white">
            I&#39;m a passionate User Experience Designer based in Indianapolis,
            Indiana with an experience in delivering end-to-end UX/UI design for
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
      <div className="section-projects" id="section-projects">
        <div className="container-projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              id={index + 1}
              title={project.title}
              secondaryTitle={project.secondaryTitle}
              description={project.description}
              thumbnail={project.thumbnail}
              colour={project.colour as any}
              secondaryTitleColour={project.secondaryTitleColour}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Work;
