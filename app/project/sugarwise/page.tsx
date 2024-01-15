/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Divider from "@/components/Divider";
import HeroGradientBG from "@/components/HeroGradientBG";
import VideoRenderer from "@/components/VideoRender";
import ChallengeIcon from "@/components/icons/ChallengeIcon";
import OverviewSection from "@/components/project/OverviewSection";
import ProjectHero from "@/components/project/ProjectHero";
import Image from "next/image";

const problemRows = [
  {
    id: "1",
    text: [
      `“I try to limit my sugar intake, but `,
      `I'm not sure how much sugar is in what I'm eating `,
      `right now.”`,
    ],
  },
  {
    id: "2",
    text: [
      `“I try to limit my sugar intake, but `,
      `I'm not sure how much sugar is in what I'm eating `,
      `right now.”`,
    ],
  },
  {
    id: "3",
    text: [
      `“In the sweetness, `,
      `we might not notice how much sugar quietly adds up, impacting our health.`,
      `”`,
    ],
  },
];

const researchRows = [
  {
    imgSrc: "/icons/fluent_cube-quick-20-regular.png",
    title: "Easy and quick access to nutritional data of the food item",
    description: [
      "When the user would be in a hurry and would not have time to go through the nutritional data they would ",
      "need an easy and quick way to know about the nutritional values of the food items",
    ],
  },
  {
    imgSrc: "/icons/fluent-mdl2_issue-tracking-mirrored.png",
    title: "Tracking user’s sugar intake",
    description: [
      "The user faces challenges in keeping track of their daily sugar intake and determining how much more they can consume. This becomes a cumbersome task, prompting the ",
      "need for a convenient solution to monitor and manage their sugar consumption effectively",
    ],
  },
  {
    imgSrc: "/icons/jam_triangle-danger.png",
    title: "Unaware of dangers of sugar and healthier sugar alternatives",
    description: [
      "The user lacks awareness of the potential harm caused by excessive sugar consumption and is unfamiliar with healthier alternatives. Consequently, they seek a solution to ",
      "become more informed about the negative impacts of sugar and discover healthier choices for their well-being.",
    ],
  },
];

const videoRows = [
  {
    title: "Setting Daily Limit ",
    src: "/videos/sugarwise/Set-limit.mov",
    description: [
      "Empowering users to customize their daily sugar intake based on age and gender. Offering a personalized touch — users can also opt for a custom option to set a unique daily sugar limit that aligns perfectly with their individual preferences and health goals. This flexibility ensures a tailored and user-centric approach to managing sugar intake for a healthier lifestyle.",
    ],
  },
  {
    title: "Scanning a Product",
    src: "/videos/sugarwise/Scan-product.mov",
    description: [
      "Application offers a swift product scan feature that instantly reveals the sugar content. Beyond the quick scan, users receive a comprehensive product description, providing detailed insights into the item.",
      "Taking personalization to the next level, the app considers the user's previously entered personal details. It not only displays the sugar content but also breaks down the portion-wise intake tailored to the user's specific information.",
    ],
  },
  {
    title: "Scanning an Aisle",
    src: "/videos/sugarwise/Scan-Aisle.mov",
    description: [
      "Application provides a unique feature that enables users to scan entire aisles, identifying products with low sugar content. This functionality goes beyond individual product scans, offering a holistic view of healthier options within a given aisle.",
      "TUsers can quickly assess products and receive recommendations for healthier substitutes. This not only simplifies the process of making informed choices but also promotes a convenient way to opt for alternatives with lower sugar content.",
    ],
  },
];

const SugarwisePage = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-stretch bg-gray-100 pb-12">
      <HeroGradientBG
        gradient="linear-gradient(180deg, #58A65C -23.98%, rgba(16, 16, 16, 0.90) 71.56%)"
        height="636px"
        maxHeight="70vh"
      />
      <ProjectHero
        title="Sugarwise"
        bgImage="/sugarwise-hero.png"
        contents={[
          { name: "Overview", path: "#overview" },
          { name: "Kickoff", path: "#kickoff" },
          { name: "The problem", path: "#problems" },
          { name: "Research", path: "#research" },
          { name: "Brainstorming", path: "#brainstorming" },
          { name: "The solution", path: "#solution" },
          { name: "Evaluations", path: "#evaluations" },
          { name: "Final designs", path: "#final-designs" },
          { name: "Future directions", path: "#future-directions" },
        ]}
      />
      <div className="container mx-auto flex w-full max-w-[882px] flex-col items-center px-4 font-karla min-[1440px]:max-w-[1044px] min-[1920px]:max-w-[1440px]">
        <OverviewSection
          overview={[
            "Sugarwise is an Augmented Reality (AR) - based mobile application. It enable users to scan grocery products at the grocery stores and scans the vital information, such as sugar content and provides healthier alternatives for those scanned products.",
            "Sugarwise uses a user-friendly approach which is motivated to streamline the decision-making process and guide users toward healthier food choices. AR technology simplifies this process, making it more accessible and comprehensible to users, empowering them to make informed decisions about the nutritional content of their prospective food choices and ultimately making users aware.",
          ]}
          role="Product Designer"
          research="User Research, Interaction design, Visual design, Prototyping & Testing"
          team="Namitha Murali, Rutika Bangera, Saksham Rajput, Sampada Taralgatti"
          timeline="August - October 2023"
        />
        <div
          id="kickoff"
          className="mt-16 grid grid-cols-1 gap-10 md:mt-36 md:grid-cols-2"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
              <h3 className="self-stretch text-xl font-medium leading-6 text-whitesmoke-100 text-opacity-60">
                KICKOFF
              </h3>
            </div>
            <div className="mt-12 flex flex-col gap-8 self-start">
              <span className="text-lg text-whitesmoke-100 text-opacity-60 sm:text-xl">
                Before initiating the design process, we needed to answer some
                important questions.
              </span>
              <ol className="ml-[22.87px] flex list-decimal flex-col gap-3 text-xl md:ml-[27.44px] md:text-2xl">
                <li>
                  <span className="text-xl text-whitesmoke-100 3xl:text-2xl 3xl:leading-[50px]">
                    Who is our target audience?
                  </span>
                </li>
                <li>
                  <span className="text-xl text-whitesmoke-100 3xl:text-2xl 3xl:leading-[50px]">
                    What is the reason for choosing them as the target audience?
                  </span>
                </li>
                <li>
                  <span className="text-xl text-whitesmoke-100 3xl:text-2xl 3xl:leading-[50px]">
                    How will the application help them with the problem?
                  </span>
                </li>
                <li>
                  <span className="text-xl text-whitesmoke-100 3xl:text-2xl 3xl:leading-[50px]">
                    What is the scope of this project?
                  </span>
                </li>
              </ol>
              <span className="text-lg text-whitesmoke-100 text-opacity-60 sm:text-xl">
                We conducted eight observations at different locations to grasp
                people&apos;s eating habits. Subsequently, we conducted
                interviews to delve deeper into the subject, revealing a clear
                picture of how people tend to consume a significant amount of
                sugar.
              </span>
              <br />
            </div>
          </div>
          <div className="hidden flex-col items-stretch gap-6 max-md:ml-0 max-md:w-full md:flex" />
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
                  This went beyond ordinary sugar consumption.
                </span>
              </h4>
            </div>
          </div>
          <div />
          <div className="col-span-2 grid grid-cols-1 sm:gap-10 md:grid-cols-2">
            <p className="justify-center text-xl font-medium leading-[1.4] text-whitesmoke-100">
              Exploring the Sweetness Spectrum: Navigating Constraints in the
              Realm of Sweet Indulgence.
            </p>
            <div className="flex flex-col gap-8">
              <p className="text-xl leading-[1.35] text-whitesmoke-100 text-opacity-60 ">
                The younger generation, especially students, often struggle to
                maintain a diet that has a good amount of protein, fiber, and
                just sufficient carbohydrates and sugar, to put simply a healthy
                diet.
              </p>
              <p className=" text-xl leading-[1.35] text-whitesmoke-100 text-opacity-60">
                Their busy schedules, limited time, and the omnipresence of
                sugar-packed, pre-packaged foods have created a scenario where
                excessive sugar consumption is the norm.
              </p>
              <p className="text-xl leading-[1.35] text-whitesmoke-100">
                <span className="opacity-60">
                  Therefore, we narrowed down our focus from young adults to
                  university students.
                </span>{" "}
                We aimed to pinpoint those among this group who genuinely desire
                to improve their dietary habits but lack the knowledge and
                guidance to do so effectively.
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
                  className="shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1584_1835)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9987 2.3335C7.5552 2.3335 2.33203 7.55666 2.33203 14.0002C2.33203 20.4437 7.5552 25.6668 13.9987 25.6668C20.4422 25.6668 25.6654 20.4437 25.6654 14.0002C25.6654 7.55666 20.4422 2.3335 13.9987 2.3335ZM9.91537 11.0835C9.91537 10.5473 10.021 10.0163 10.2262 9.52087C10.4314 9.02546 10.7322 8.57532 11.1113 8.19614C11.4905 7.81697 11.9407 7.5162 12.4361 7.31099C12.9315 7.10578 13.4625 7.00016 13.9987 7.00016C14.5349 7.00016 15.0659 7.10578 15.5613 7.31099C16.0567 7.5162 16.5069 7.81697 16.8861 8.19614C17.2652 8.57532 17.566 9.02546 17.7712 9.52087C17.9764 10.0163 18.082 10.5473 18.082 11.0835C18.082 12.1665 17.6518 13.2051 16.8861 13.9708C16.1203 14.7366 15.0817 15.1668 13.9987 15.1668C12.9157 15.1668 11.8771 14.7366 11.1113 13.9708C10.3456 13.2051 9.91537 12.1665 9.91537 11.0835ZM21.2997 19.8148C20.4264 20.9134 19.3161 21.8004 18.0519 22.4097C16.7877 23.019 15.4021 23.3348 13.9987 23.3335C12.5953 23.3348 11.2097 23.019 9.9455 22.4097C8.68126 21.8004 7.57102 20.9134 6.6977 19.8148C8.58887 18.458 11.1695 17.5002 13.9987 17.5002C16.8279 17.5002 19.4085 18.458 21.2997 19.8148Z"
                      fill="#0D9212"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1584_1835">
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
          <ChallengeIcon color="#0D9212" />
          <p className="mt-6 justify-center self-center whitespace-nowrap text-center text-lg font-medium leading-7 text-whitesmoke-100 text-opacity-40 md:text-xl">
            HOW MIGHT WE
          </p>{" "}
          <p className="mt-6 justify-center self-center text-center text-lg font-medium !leading-[1.56] text-whitesmoke-100 max-md:max-w-full sm:text-2xl md:px-4 lg:px-8 3xl:text-3xl">
            How might we tackle high sugar consumption for the students, who
            want to eat healthy food but struggles to find such food items?
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
            To better grasp the challenges of high sugar consumption in our
            target audience, we conducted one-on-one interviews. The 8
            participants we interviewed exhibited varying degrees of
            homesickness during the initial weeks of college.
            <br />
          </p>
          <div className="ml-auto mt-20 flex w-full max-w-screen-sm flex-col items-center gap-10 max-md:mt-10 3xl:max-w-screen-md">
            {researchRows.map((item, index) => (
              <div
                className="flex flex-col items-start self-end rounded-2xl border border-solid border-stone-500 max-md:p-5 md:p-8"
                key={index}
              >
                <Image
                  width={index === 0 ? 45 : 37}
                  height={index === 0 ? 45 : 37}
                  loading="lazy"
                  alt="Icon"
                  src={item.imgSrc}
                  className="overflow-hidden object-contain object-center"
                />
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
              src="/sugarwise-research-calendar.png"
              alt="Research Calender"
              width={1058}
              height={800}
              className="object-contain object-center"
            />
          </div>
        </div>
        <Divider />
        <div id="brainstorming" className="flex w-full flex-col">
          <div className="mt-5 flex items-center gap-5 max-md:ml-2.5 md:ml-6 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              BRAINSTORMING AND IDEATION
            </h2>
          </div>
          <div className="mt-10 flex w-full items-center justify-center self-center overflow-hidden max-md:mb-5 md:mt-16">
            <Image
              loading="lazy"
              className="object-contain object-center"
              src="/sugarwise-brainstorming.png"
              width={1214}
              height={587}
              alt="EVALUATING THE ACTIVITY"
            />
          </div>
        </div>
        <Divider />
        <div
          id="solution"
          className="mt-24 flex flex-col items-start gap-4 self-start max-md:ml-2.5 max-md:mt-5 md:ml-6"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              PROPOSED SOLUTION
            </h2>
          </div>
          <p className="mt-8 w-full max-w-screen-sm text-xl font-medium leading-7 text-[rgba(242,242,242,0.60)] lg:max-w-screen-md">
            Our solution{" "}
            <span className="text-whitesmoke-100">
              enables users to scan individual products at grocery stores{" "}
            </span>
            as students mainly rely on pre-packaged food available at the
            grocery stores. Upon scanning,{" "}
            <span className="text-whitesmoke-100">
              the app displays vital information, such as total sugar content,
              and provides healthier alternatives for the scanned products.
            </span>
            <br />
            <br />
            Our goal is to simplify the process for students{" "}
            <span className="text-whitesmoke-100">
              to educate them on maintaining the right balance in eating habits
            </span>
          </p>{" "}
        </div>
        <div
          id="methods"
          className="mt-28 flex flex-col items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10 md:ml-6"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              METHODS
            </h2>
          </div>
          <p className="mt-8 w-full max-w-screen-sm text-xl font-medium leading-7 text-[rgba(242,242,242,0.60)] lg:max-w-screen-md">
            We conducted usability studies to identify and rectify system
            problems, tailoring the app to user expectations and requirements.{" "}
            <br />
            <br />
            We used a variety of evaluation methods,{" "}
            <span className="text-whitesmoke-100">
              including think-aloud sessions and heuristic evaluations
            </span>{" "}
            to gather valuable insights and identify opportunities for design
            enhancement.
            <br />
            <br />
            These methods helped us identify areas for improvement, answer
            questions about which aspects of the interaction were challenging
            for users, and determine what improvements they expected.
          </p>
        </div>
        <Divider className="mt-28" />
        <div
          id="evaluations"
          className="mt-28 flex w-full flex-col gap-4 max-md:ml-2.5 max-md:mt-5 md:ml-6"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              KEY EVALUATION INSIGHTS
            </h2>
          </div>
          <p className="mt-8 w-full max-w-screen-sm text-xl font-medium leading-7 text-[rgba(242,242,242,0.60)] lg:max-w-screen-md">
            Our evaluations included heuristic analysis as well as think-aloud
            sessions. They revealed important information on the scanning
            system.
          </p>

          <div className="mx-auto flex w-full flex-col gap-6 self-end">
            <div className="mt-16 flex w-full max-w-screen-sm items-start gap-5 self-end rounded-2xl bg-[#1A1A1A] px-7 py-9 max-md:mr-2.5 max-md:mt-10 max-md:max-w-full max-md:px-5 lg:max-w-screen-md">
              <p className="text-xl leading-6 text-white">1.</p>{" "}
              <p className="shrink grow basis-auto self-stretch text-xl leading-7 text-white max-md:max-w-full">
                Participants expressed concerns about the lack of clear scanning
                instructions.
              </p>
            </div>
            <div className="flex w-full max-w-screen-sm items-start gap-4 self-end rounded-2xl bg-[#1A1A1A] px-7 py-12 max-md:mr-2.5 max-md:max-w-full max-md:px-5 lg:max-w-screen-md">
              <p className="text-xl leading-6 text-white">2.</p>{" "}
              <p className="shrink grow basis-auto self-stretch text-xl leading-6 text-white">
                Absence of clear and cancel the scan option.
              </p>
            </div>
            <div className="flex w-full max-w-screen-sm items-start gap-3.5 self-end rounded-2xl bg-[#1A1A1A] px-7 py-9 max-md:mr-2.5 max-md:max-w-full max-md:px-5 lg:max-w-screen-md">
              <p className="text-xl leading-6 text-white">3.</p>{" "}
              <p className="shrink grow basis-auto self-stretch text-xl leading-7 text-white max-md:max-w-full">
                Reminders for altering limits and notifying them when crossed.
              </p>
            </div>
          </div>
        </div>

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
                      "linear-gradient(135deg, #3EB075 0%, rgba(105, 191, 112, 0.90) 111.38%)",
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
            href="https://www.figma.com/proto/di64HqGbQUdHiBZt5dzeCs/High-Sugar-Consumption?page-id=0%3A1&type=design&node-id=65-311&viewport=75%2C-103%2C0.09&t=3pfmlAeOTY9rvxMF-1&scaling=scale-down&starting-point-node-id=65%3A311&mode=design"
            className="mx-auto mt-8 rounded-lg px-7 py-3.5 text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 hover:bg-[linear-gradient(135deg,_#3EB075_0%,_rgba(105,_191,_112,_0.90)_111.38%)] hover:text-white"
            style={{
              border: "1px solid rgba(242, 242, 242, 0.60)",
            }}
          >
            Figma Protoytpe
          </a>
        </div>
        <Divider className="mt-28" />

        <div
          id="future-directions"
          className="mt-28 flex w-full flex-col gap-4 max-md:ml-2.5 max-md:mt-10 md:ml-6"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              FUTURE DIRECTIONS
            </h2>
          </div>
          <p className="mt-8 w-full text-xl font-medium leading-7 text-[rgba(242,242,242,0.60)]">
            We plan to work with nutritionists to establish advanced nutritional
            criteria and dietary guidelines for the app to evaluate products
            based on various dietary preferences and restrictions helping us
            cater to a larger audience.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </main>
  );
};

export default SugarwisePage;
