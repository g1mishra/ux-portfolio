/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Divider from "@/components/Divider";
import HeroGradientBG from "@/components/HeroGradientBG";
import ChallengeIcon from "@/components/icons/ChallengeIcon";
import OverviewSection from "@/components/project/OverviewSection";
import ProjectHero from "@/components/project/ProjectHero";
import Image from "next/image";

import VideoRenderer from "@/components/VideoRender";
import { Icon1, Icon2, Icon3, Icon4 } from "./ResearchIcons";

const problemRows = [
  {
    id: "1",
    text: [
      `“The struggle is not just in understanding their culture `,
      `but in preserving mine. `,
      `Sometimes, I feel so lost and start missing my home.”`,
    ],
  },
  {
    id: "2",
    text: [
      `“Getting used to the States was tough; It took a really good amount of time to `,
      `adjust to the cultural shift`,
      `, and at moments.”`,
    ],
  },
  {
    id: "3",
    text: [
      `“`,
      `Adapting to life here was a bit of a challenge`,
      ` it’s hard that you feel that you are at home until you are.”`,
    ],
  },
];

const researchRows = [
  {
    icon: <Icon1 />,
    title: "Lack of support system",
    description: [
      "When students have a strong support network, they often experience a smoother transition. The design solution should aim at helping students feel ",
      "connected to their friends, and form a support network to abate homesickness.",
    ],
  },
  {
    icon: <Icon2 />,
    title: "Cultural Differences",
    description: [
      "Participants experienced how when they were immersed in a new culture that differed from their own, which led to a sense of confusion and an overall feeling of being disconnected. In order to ",
      "foster a more inclusive environment, ",
      "we aim to focus on bridging the cultural gaps.",
    ],
  },
  {
    icon: <Icon3 />,
    title: "Inability to Engage in Familiar Activities",
    description: [
      "Events that are an integral part of one’s life back home does lead to a longing for those familiar experiences. This issue is exacerbated by participants having hectic and busy schedules. A proper ",
      "management system ",
      "should be adopted as an important objective.",
    ],
  },
  {
    icon: <Icon4 />,
    title: "Transition to Living Independently",
    description: [
      "We have to focus on ",
      "building a community",
      ". The design intervention should try to help the students connect and share their experiences and support each other.",
    ],
  },
];

const videoRows = [
  {
    title: "Profile Building",
    src: "/videos/homeslice/Profile-building.mov",
    description: [
      "Ensuring a secure and user-friendly sign-up process. Upon registration, users embark on a journey to craft a personalized profile, tailoring their feed to align seamlessly with their interests.",
      "Commitment to security is woven into every step. As users build their profiles, we prioritize the authenticity of their information, fostering a reassuring sense of safety and confidence.",
    ],
  },
  {
    title: "Creating a Post",
    src: "/videos/homeslice/Create-post.mov",
    description: [
      "Streamlining the post creation process for students to connect with families is our focus. Prioritizing simplicity, ensuring an easy and efficient way for students to engage with these families.",
      "In addition, following cultural guidelines, ensuring that all events and traditions align with the rules and cultural needs.Committing to a respectful and inclusive approach to fostering connections between students and families.",
    ],
  },
  {
    title: "Private Event",
    src: "/videos/homeslice/Private-event.mov",
    description: [
      "Organizing a curated event with limited capacity and tailored guidelines according to the host's preferences.  Ensuring a smooth and interactive process for participants to connect with hosts and enhance their event experience.",
      "To join the event, participants can send a quick request to the host and patiently await approval. A convenient chat option is available to facilitate communication, allowing attendees to seek clarification and gather additional details from the event owner.",
    ],
  },

  {
    title: "Public Event",
    src: "/videos/homeslice/Public-event.mov",
    description: [
      "Welcoming everyone to join an inclusive event where capacity is not a limiting factor. Embracing a first-come, first-served basis, the event promises a plethora of entertainment for all participants.",
      "Moreover, participants have the option to save events for future registration, providing flexibility and convenience.  Ensuring that individuals can easily engage with and register for events that they are interested in at their own pace.",
    ],
  },
];

function HomeslicePage() {
  return (
    <main className="relative flex flex-col items-stretch bg-gray-100 pb-12">
      <HeroGradientBG
        gradient="linear-gradient(180deg, #2E2463 -20.99%, #A55900 -4.7%, rgba(16, 16, 16, 0.80) 89.5%)"
        height="636px"
        maxHeight="70vh"
      />
      <ProjectHero
        title="Homeslice"
        bgImage="/homeslice-hero.png"
        contents={[
          { name: "Overview", path: "#overview" },
          { name: "Kickoff", path: "#kickoff" },
          { name: "The Problem", path: "#problems" },
          { name: "Research", path: "#research" },
          { name: "Brainstorming", path: "#brainstorming" },
          { name: "Proposed Solution", path: "#proposed-solution" },
          { name: "Evaluations", path: "#evaluations" },
          { name: "Final Designs", path: "#final-designs" },
          { name: "Takeaway", path: "#takeaway" },
        ]}
      />
      <div className="container mx-auto flex w-full max-w-[882px] flex-col items-center px-4 font-karla min-[1440px]:max-w-[1044px] min-[1920px]:max-w-[1440px]">
        <OverviewSection
          overview={[
            "Homeslice is a community-driven platform that connects students with local families or individuals who are keen to share their cultural traditions.",
            "An intuitive and user-friendly interface, empowering students to connect with families open to hosting them for cultural celebrations. This aims to provide an immersive and enriching experience, effectively alleviating homesickness by fostering new cultural immersion and shared celebrations with a community.",
          ]}
          role="Product Designer"
          team="Avishkar Shinde, Ravleen Matharu, Saksham Rajput, Sampada Taralgatti"
          research="User Research, Interaction design, Visual design, Prototyping & Testing"
          timeline="Nov - Dec 2023"
        />
        <div
          id="kickoff"
          className="mt-16 grid grid-cols-1 gap-10 md:mt-36 md:grid-cols-2"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
              <h3 className="self-stretch text-xl font-medium leading-6 text-white text-opacity-60">
                KICKOFF
              </h3>
            </div>
            <div className="mt-12 flex flex-col gap-8 self-start">
              <span className="text-lg text-whitesmoke-100 text-opacity-60 sm:text-xl">
                The design journey was initiated by addressing these questions
                first:
              </span>
              <ol className="ml-[22.87px] flex list-decimal flex-col gap-3 text-xl md:ml-[27.44px] md:text-2xl">
                <li>
                  <span className="text-xl text-whitesmoke-100 3xl:text-2xl 3xl:leading-[50px]">
                    Who is our target audience?
                  </span>
                </li>
                <li>
                  <span className="text-xl text-whitesmoke-100 3xl:text-2xl 3xl:leading-[50px]">
                    Why only them?
                  </span>
                </li>
                <li>
                  <span className="text-xl text-whitesmoke-100 3xl:text-2xl 3xl:leading-[50px]">
                    How is the problem affecting the target audience?
                  </span>
                </li>
                <li>
                  <span className="text-xl text-whitesmoke-100 3xl:text-2xl 3xl:leading-[50px]">
                    What are the effects of the problem on the target audience?
                  </span>
                </li>
              </ol>
              <span className="text-lg text-whitesmoke-100 text-opacity-60 sm:text-xl">
                After conducting surveys and one-on-one interviews to understand
                the problem, it became evident that cultural shock played a
                major factor in inducing the feeling of homesickness.
              </span>
              <br />
            </div>
          </div>
        </div>
        <Divider />
        <div
          id="problems"
          className="mt-5 grid grid-cols-1 gap-y-10 md:mt-20 md:grid-cols-2"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
              <h3 className="self-stretch text-xl font-medium leading-6 text-whitesmoke-100 text-opacity-60">
                THE PROBLEM
              </h3>
            </div>
            <div className="mt-12 flex flex-col gap-10 self-start max-md:mt-10 md:gap-16">
              <h4
                className="text-xl font-medium leading-8 text-opacity-60"
                style={{
                  textShadow:
                    "0px 5px 15px rgba(0, 87, 255, 0.25), 0px -6px 15px rgba(13, 146, 18, 0.10), 0px 0px 20px rgba(255, 255, 255, 0.20)",
                }}
              >
                <span className="text-lg leading-10 text-whitesmoke-100 sm:text-xl md:text-2xl">
                  This wasn’t just a typical loneliness.
                </span>
              </h4>
            </div>
          </div>
          <div />
          <div className="col-span-2 mt-6 grid grid-cols-1 sm:gap-10 md:grid-cols-2">
            <p className="justify-center text-xl font-medium leading-[1.4] text-whitesmoke-100">
              Navigating the Emotional Maze : A Tangle of Homesickness
              Constraints
            </p>
            <div className="flex flex-col gap-8">
              <p className="text-xl leading-[1.35] text-whitesmoke-100 text-opacity-60 ">
                Being away from the family, transitioning to a new environment,
                cultural norms and lack of support system were some of the
                factors which led to homesickness among international students.
              </p>
              <p className=" text-xl leading-[1.35] text-whitesmoke-100">
                <span className="text-whitesmoke-100 text-opacity-60">
                  One major factor contributing to homesickness among Indian
                  international students, distinct from some other international
                  students,
                </span>{" "}
                was the deeply rooted family-centric Indian culture. In many
                Indian families, members often live together, and the concept of
                extended families is prevalent.
                <br />
                <br />
                <span className="text-whitesmoke-100 text-opacity-60">
                  When Indian students move abroad for education, they face a
                  more significant emotional gap due to the strong familial
                  connections they are accustomed to.
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {problemRows.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center gap-5 rounded-3xl bg-whitesmoke-400 px-6 py-4 max-sm:flex-wrap sm:px-10 sm:py-9"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1464_358)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9987 2.3335C7.5552 2.3335 2.33203 7.55666 2.33203 14.0002C2.33203 20.4437 7.5552 25.6668 13.9987 25.6668C20.4422 25.6668 25.6654 20.4437 25.6654 14.0002C25.6654 7.55666 20.4422 2.3335 13.9987 2.3335ZM9.91537 11.0835C9.91537 10.5473 10.021 10.0163 10.2262 9.52087C10.4314 9.02546 10.7322 8.57532 11.1113 8.19614C11.4905 7.81697 11.9407 7.5162 12.4361 7.31099C12.9315 7.10578 13.4625 7.00016 13.9987 7.00016C14.5349 7.00016 15.0659 7.10578 15.5613 7.31099C16.0567 7.5162 16.5069 7.81697 16.8861 8.19614C17.2652 8.57532 17.566 9.02546 17.7712 9.52087C17.9764 10.0163 18.082 10.5473 18.082 11.0835C18.082 12.1665 17.6518 13.2051 16.8861 13.9708C16.1203 14.7366 15.0817 15.1668 13.9987 15.1668C12.9157 15.1668 11.8771 14.7366 11.1113 13.9708C10.3456 13.2051 9.91537 12.1665 9.91537 11.0835ZM21.2997 19.8148C20.4264 20.9134 19.3161 21.8004 18.0519 22.4097C16.7877 23.019 15.4021 23.3348 13.9987 23.3335C12.5953 23.3348 11.2097 23.019 9.9455 22.4097C8.68126 21.8004 7.57102 20.9134 6.6977 19.8148C8.58887 18.458 11.1695 17.5002 13.9987 17.5002C16.8279 17.5002 19.4085 18.458 21.2997 19.8148Z"
                      fill="#D47F22"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1464_358">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="shrink grow basis-auto justify-center self-stretch text-lg italic leading-7 text-whitesmoke-100">
                  {item.text.map((_text, index) => {
                    if (index % 2 === 0) {
                      return (
                        <span
                          style={{
                            color: "rgba(242, 242, 242, 0.60)",
                            textShadow:
                              "0px 0px 10px rgba(242, 242, 242, 0.40)",
                          }}
                          key={index}
                        >
                          {_text}
                        </span>
                      );
                    }
                    return <span key={index}>{_text}</span>;
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mt-20 flex w-full flex-col items-center bg-dimgray p-8 max-md:my-10 md:p-14"
          style={{
            borderRadius: "32px",
            background:
              "radial-gradient(683.88% 39.03% at 50% 50%, rgba(13, 146, 18, 0.04) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(217, 217, 217, 0.10)",
            boxShadow: "0px 40px 100px 0px rgba(0, 0, 0, 0.40)",
          }}
        >
          <ChallengeIcon color="#FF800A" />
          <p className="mt-6 justify-center self-center whitespace-nowrap text-center text-lg font-medium leading-7 text-whitesmoke-100 text-opacity-40 md:text-xl">
            HOW MIGHT WE
          </p>{" "}
          <p className="mt-6 justify-center self-center text-center text-lg font-medium leading-[1.56] text-whitesmoke-100 max-md:max-w-full sm:text-2xl md:px-4 lg:px-8 3xl:text-3xl">
            How might we alleviate the impact of homesickness created by
            cultural shock on Indian international students?
          </p>{" "}
        </div>
        <div id="research" className="my-10 flex w-full flex-col md:my-20">
          <div className="flex items-center gap-5">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              USER RESEARCH
            </h2>
          </div>
          <p className="mt-12 w-full max-w-screen-sm self-start text-lg font-medium leading-normal text-neutral-400 max-md:mt-10 md:text-xl lg:max-w-screen-md">
            To better grasp the challenges of homesickness in our target
            audience, we conducted one-on-one interviews. The 8 participants we
            interviewed exhibited varying degrees of homesickness during the
            initial weeks of college.
            <br />
          </p>
          <div className="ml-auto mt-20 flex w-full max-w-screen-sm flex-col items-center gap-10 max-md:mt-10 3xl:max-w-screen-md">
            {researchRows.map((item, index) => (
              <div
                className="flex flex-col items-start self-end rounded-2xl border border-solid border-stone-500 max-md:p-5 md:p-8"
                key={index}
              >
                {item.icon}
                <div className="mt-7 justify-center self-stretch text-xl leading-tight text-whitesmoke-100 max-md:max-w-full">
                  {item.title}
                </div>
                <div className="mt-5 self-stretch text-lg leading-[1.44] text-whitesmoke-100 max-md:max-w-full">
                  {item.description.map((_text, index) => {
                    if (index % 2 === 0) {
                      return (
                        <span
                          style={{
                            color: "rgba(242, 242, 242, 0.60)",
                          }}
                          key={index}
                        >
                          {_text}
                        </span>
                      );
                    }
                    return <span key={index}>{_text}</span>;
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 flex w-full items-center justify-center self-center overflow-hidden max-md:mb-5 md:mt-32">
            <Image
              loading="lazy"
              src="/homeslice-research-calender.png"
              alt="Research Calender"
              width={1058}
              height={800}
              className="object-contain object-center"
            />
          </div>
        </div>
        <Divider />
        <div id="brainstorming" className="flex w-full flex-col">
          <div className="mt-5 flex items-center gap-5 md:ml-6 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              BRAINSTORMING AND IDEATION
            </h2>
          </div>
          <div className="mt-10 flex w-full items-center justify-center self-center overflow-hidden max-md:mb-5 max-md:mt-10 md:mt-16">
            <Image
              loading="lazy"
              className="object-contain object-center"
              src="/homeslice-brainstorming.png"
              width={1125}
              height={1112}
              alt="EVALUATING THE ACTIVITY"
            />
          </div>
        </div>
        <Divider />
        <div
          id="proposed-solution"
          className="mt-24 flex w-full flex-col items-start gap-4 self-start max-md:mt-5 md:ml-6"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              PROPOSED SOLUTION
            </h2>
          </div>
          <p className="mt-8 w-full max-w-screen-sm text-xl font-medium leading-7 text-[rgba(242,242,242,0.60)] lg:max-w-screen-md">
            Our solution is a user-friendly platform that{" "}
            <span className="text-whitesmoke-100">
              connects students with local families willing to share their
              cultural traditions.
            </span>
            <br />
            <br />
            Our goal is to simplify the process for students to connect with
            these families, who can host them for cultural celebrations. In
            return, students have the opportunity to invite these families to
            join in their own cultural festivals.
          </p>
          <div className="mt-12 flex flex-col gap-10 self-start max-md:mt-10 md:gap-16">
            <h4
              className="text-xl font-medium leading-8 text-opacity-60"
              style={{
                textShadow:
                  "0px 5px 15px rgba(0, 87, 255, 0.25), 0px -6px 15px rgba(13, 146, 18, 0.10), 0px 0px 20px rgba(255, 255, 255, 0.20)",
              }}
            >
              <span className="text-lg leading-10 text-whitesmoke-100 sm:text-xl md:text-2xl">
                Our application facilitates two flows
              </span>
            </h4>
          </div>

          <div className="mt-9 flex w-full max-w-screen-sm flex-col gap-6 self-end rounded-3xl bg-[#1A1A1A] p-5 md:p-10 lg:max-w-screen-md">
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="shrink-0 "
              >
                <path
                  d="M14.333 29.266c-1.6-.2-3.094-.677-4.483-1.433a12.834 12.834 0 0 1-3.6-2.883 13.306 13.306 0 0 1-2.383-4.034C3.289 19.394 3 17.756 3 16c0-1.956.461-3.822 1.383-5.6A16.34 16.34 0 0 1 8.1 5.666H4.033v-2h7.634V11.3h-2V7a13.06 13.06 0 0 0-3.4 4.05C5.422 12.616 5 14.266 5 16c0 2.933.889 5.439 2.667 7.516 1.777 2.078 4 3.317 6.666 3.717v2.033Zm-.233-7.6L8.933 16.5l1.4-1.4 3.767 3.766 7.567-7.566 1.4 1.4-8.967 8.966Zm6.233 6.667V20.7h2V25a13.511 13.511 0 0 0 3.4-4.067A10.192 10.192 0 0 0 27 16c0-2.934-.889-5.44-2.667-7.517-1.777-2.078-4-3.317-6.666-3.717V2.733c3.244.4 5.944 1.833 8.1 4.3C27.922 9.5 29 12.49 29 16c0 1.955-.461 3.822-1.383 5.6a16.34 16.34 0 0 1-3.717 4.733h4.067v2h-7.634Z"
                  fill="#F2F2F2"
                />
              </svg>
              <h5 className="text-xl leading-6 text-white">
                Hosting an event or a party
              </h5>
            </div>
            <div className="flex items-center gap-5">
              <span className="block w-8 shrink-0" />
              <p className="mt-5 text-lg leading-6 text-whitesmoke-100 text-opacity-60">
                The user will start by signing up and establishing his
                personalized profile. Once the profile is set, he can
                effortlessly create a post to share details of his upcoming
                party or event.
              </p>
            </div>
          </div>
          <div className="mt-6 flex w-full max-w-screen-sm flex-col gap-6 self-end rounded-3xl bg-[#1A1A1A] p-5 md:p-10 lg:max-w-screen-md">
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="shrink-0 "
              >
                <path
                  d="M14.333 29.266c-1.6-.2-3.094-.677-4.483-1.433a12.834 12.834 0 0 1-3.6-2.883 13.306 13.306 0 0 1-2.383-4.034C3.289 19.394 3 17.756 3 16c0-1.956.461-3.822 1.383-5.6A16.34 16.34 0 0 1 8.1 5.666H4.033v-2h7.634V11.3h-2V7a13.06 13.06 0 0 0-3.4 4.05C5.422 12.616 5 14.266 5 16c0 2.933.889 5.439 2.667 7.516 1.777 2.078 4 3.317 6.666 3.717v2.033Zm-.233-7.6L8.933 16.5l1.4-1.4 3.767 3.766 7.567-7.566 1.4 1.4-8.967 8.966Zm6.233 6.667V20.7h2V25a13.511 13.511 0 0 0 3.4-4.067A10.192 10.192 0 0 0 27 16c0-2.934-.889-5.44-2.667-7.517-1.777-2.078-4-3.317-6.666-3.717V2.733c3.244.4 5.944 1.833 8.1 4.3C27.922 9.5 29 12.49 29 16c0 1.955-.461 3.822-1.383 5.6a16.34 16.34 0 0 1-3.717 4.733h4.067v2h-7.634Z"
                  fill="#F2F2F2"
                />
              </svg>
              <h5 className="text-xl leading-6 text-white">
                Joining an event or attending an event
              </h5>
            </div>
            <div className="flex items-center gap-5">
              <span className="block w-8 shrink-0" />
              <p className="mt-5 text-lg leading-6 text-whitesmoke-100 text-opacity-60">
                The user will begin his journey by signing up. Once the signup
                process is completed, they can explore a variety of events on
                the homescreen. From there, they can simply choose the one that
                resonates with them and join.
              </p>
            </div>
          </div>
        </div>
        <Divider />
        <div
          id="evaluations"
          className="mt-28 flex w-full flex-col gap-4 max-md:ml-2.5 max-md:mt-5 md:ml-6"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              PRODUCT EVALUATIONS
            </h2>
          </div>
          <div className="mt-10 flex w-full flex-col gap-6 self-start md:mt-12 ">
            <h4
              className="text-xl font-medium leading-8 text-opacity-60"
              style={{
                textShadow:
                  "0px 5px 15px rgba(0, 87, 255, 0.25), 0px -6px 15px rgba(13, 146, 18, 0.10), 0px 0px 20px rgba(255, 255, 255, 0.20)",
              }}
            >
              <span className="font-karla text-lg leading-10 text-whitesmoke-100 sm:text-xl md:text-2xl">
                User Evaluations
              </span>
            </h4>
            <p className="w-full max-w-screen-sm text-xl font-medium leading-7 text-whitesmoke-100 opacity-60">
              To gain insights into how potential users interact with our
              solution, we performed usability testing with four individuals who
              have either experienced homesickness in the past and are currently
              feeling it. <br />
              <br />
              We assessed the system&apos;s user-friendliness by having
              participants explore the application and complete specific tasks.
            </p>
          </div>
          <div className="flex w-full flex-col gap-6 self-end">
            <div className="flex w-full max-w-screen-sm items-start gap-5 self-end rounded-2xl bg-[#1A1A1A] px-7 py-9 max-md:mr-2.5 max-md:mt-10 max-md:max-w-full max-md:px-5">
              <span className="text-xl leading-7">1.</span>
              <p className="text-xl leading-7 text-white">
                As a new user on the application, complete the signup process.
              </p>
            </div>
            <div className="flex w-full max-w-screen-sm items-start gap-4 self-end rounded-2xl bg-[#1A1A1A] px-7 py-9 max-md:mr-2.5 max-md:max-w-full max-md:px-5">
              <span className="text-xl leading-7">2.</span>
              <p className="text-xl leading-6 text-white">
                Complete the flow for hosting an event
              </p>
            </div>
            <div className="flex w-full max-w-screen-sm items-start gap-3.5 self-end rounded-2xl bg-[#1A1A1A] px-7 py-9 max-md:mr-2.5 max-md:max-w-full max-md:px-5">
              <span className="text-xl leading-7">3.</span>
              <p className="text-xl leading-7 text-white">
                Register for a private event
              </p>
            </div>
            <div className="flex w-full max-w-screen-sm items-start gap-5 self-end rounded-2xl bg-[#1A1A1A] px-7 py-9 max-md:mr-2.5 max-md:max-w-full max-md:px-5">
              <span className="text-xl leading-7">4.</span>
              <p className="text-xl leading-6 text-white">
                Join an event of your choice
              </p>
            </div>
          </div>
          <div className="mt-10 flex w-full flex-col gap-6 self-start md:mt-12 ">
            <h4
              className="text-xl font-medium leading-8 text-opacity-60"
              style={{
                textShadow:
                  "0px 5px 15px rgba(0, 87, 255, 0.25), 0px -6px 15px rgba(13, 146, 18, 0.10), 0px 0px 20px rgba(255, 255, 255, 0.20)",
              }}
            >
              <span className="font-karla text-lg leading-10 text-whitesmoke-100 sm:text-xl md:text-2xl">
                Expert Evaluations
              </span>
            </h4>
            <p className="w-full max-w-screen-sm text-xl font-medium leading-7 text-whitesmoke-100 opacity-60">
              We asked four professionals to assess our app. We evaluated our
              app using experts in the area of human-computer interaction (HCI).{" "}
              <br />
              <br />
              Our expertise included a Lead UX Designer, a Design Consultant,
              and two second-year master&apos;s students in the discipline of
              HCI. After providing a quick overview of the app&apos;s idea, we
              asked participants to complete four tasks, as a part of the
              evaluation
            </p>
          </div>
          <div className="flex w-full flex-col gap-6 self-end">
            <div className="flex w-full max-w-screen-sm items-start gap-5 self-end rounded-2xl bg-[#1A1A1A] px-7 py-9 max-md:mr-2.5 max-md:mt-10 max-md:max-w-full max-md:px-5">
              <span className="text-xl leading-7">1.</span>
              <p className="text-xl leading-7 text-white">
                As a new user, register in the application. the signup process.
              </p>
            </div>
            <div className="flex w-full max-w-screen-sm items-start gap-4 self-end rounded-2xl bg-[#1A1A1A] px-7 py-9 max-md:mr-2.5 max-md:max-w-full max-md:px-5">
              <span className="text-xl leading-7">2.</span>
              <p className="text-xl leading-7 text-white">
                Join a private event in the application
              </p>
            </div>
            <div className="flex w-full max-w-screen-sm items-start gap-3.5 self-end rounded-2xl bg-[#1A1A1A] px-7 py-9 max-md:mr-2.5 max-md:max-w-full max-md:px-5">
              <span className="text-xl leading-7">3.</span>
              <p className="text-xl leading-7 text-white">
                Host an event by creating a post in the application.
              </p>
            </div>
            <div className="flex w-full max-w-screen-sm items-start gap-5 self-end rounded-2xl bg-[#1A1A1A] px-7 py-9 max-md:mr-2.5 max-md:max-w-full max-md:px-5">
              <span className="text-xl leading-7">4.</span>
              <p className="text-xl leading-7 text-white">
                Accept an event invite.
              </p>
            </div>
          </div>
          <h4
            style={{
              textShadow:
                "0px 5px 15px rgba(0, 87, 255, 0.25), 0px -6px 15px rgba(255, 90, 0, 0.10), 0px 0px 20px rgba(255, 255, 255, 0.20)",
            }}
            className="mt-32  text-center text-2xl font-medium leading-relaxed 2xl:leading-[62px] tracking-normal text-whitesmoke-100 max-md:mt-10 max-md:max-w-full"
          >
            The performance breakdown of each task, by each expert, is
            illustrated below
          </h4>{" "}
          <div className="my-10 flex w-full items-center justify-center self-center md:my-16">
            <Image
              loading="lazy"
              className="object-contain object-center"
              src="/homeslice-tasks-breakdown.png"
              width={752}
              height={404}
              alt="EVALUATING THE ACTIVITY"
            />
          </div>
        </div>

        <br />
        <br />
        <Divider />
        <div id="final-designs" className="flex w-full flex-col">
          <div className="mt-10 flex w-full flex-wrap items-center justify-between gap-5 md:mt-16">
            <h2>
              <span className="mr-5 inline-block h-3 w-3 shrink-0 rounded-md bg-whitesmoke-100 shadow-white20" />
              <span className="grow self-stretch text-lg font-medium leading-6 text-white text-opacity-60 md:text-xl">
                FINAL DESIGNS
              </span>
            </h2>
          </div>
          {videoRows.map((video, index) => (
            <div
              key={index}
              className={`mt-10 grid grid-cols-1 gap-9 max-md:mb-5 sm:grid-cols-2 ${
                index > 0 ? "md:mt-28" : "md:mt-16"
              }`}
            >
              <div className="flex flex-col justify-center">
                <h3
                  style={{
                    background:
                      "linear-gradient(92deg, #FF5A00 2.29%, #FF9A00 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className={`whitespace-nowrap text-xl font-extrabold`}
                >
                  {video.title}
                </h3>
                <ul className="ml-[22.87px]  list-disc text-xl font-medium leading-8 text-whitesmoke-100 text-opacity-60 md:ml-[27.44px]">
                  {video.description.map((item, index) => (
                    <li key={index} className="mt-5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full items-center justify-center self-center overflow-hidden">
                <VideoRenderer
                  src={video.src}
                  title={video.title}
                  type="video/mp4"
                  className="aspect-square min-h-[300px]"
                />
              </div>
            </div>
          ))}
          <a
            target="_blank"
            href="https://www.figma.com/proto/AyT4qNVov6i3a7U4oRhz2d/Homesickness?page-id=166%3A414&type=design&node-id=256-1414&viewport=849%2C-396%2C0.18&t=ZvLWMo5syYqX1fw3-1&scaling=scale-down&starting-point-node-id=256%3A1414&mode=design"
            className="mx-auto mt-8 rounded-lg px-7 py-3.5 text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 hover:bg-[linear-gradient(92deg,_#FF5A00_2.29%,_#FF9A00_100%)] hover:text-white"
            style={{
              border: "1px solid rgba(242, 242, 242, 0.60)",
            }}
          >
            Figma Protoytpe
          </a>
        </div>

        <Divider />
        <div id="takeaway" className="flex w-full flex-col">
          <div className="mt-0 flex w-full items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-white text-opacity-60 md:text-xl">
              TAKEAWAYS
            </h2>
          </div>

          <div className="mt-14 self-start text-xl font-medium leading-8 text-whitesmoke-100 text-opacity-60 max-md:mt-10">
            We plan to assess how new features impact user engagement and
            completion rates for event postings. Simultaneously, we aim to
            iterate design based on user feedback, focusing on enhancing the
            user experience. Additionally, we plan to test social connection
            features to build a stronger sense of community within the
            application. Continuous refinement through iterative design and user
            interaction is key to our approach.
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <br />
        <br />
      </div>
    </main>
  );
}

export default HomeslicePage;
