/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import HeroGradientBG from "@/components/HeroGradientBG";
import OverviewSection from "@/components/project/OverviewSection";
import ProjectHero from "@/components/project/ProjectHero";
import Image from "next/image";
import { Fragment } from "react";

const users = [
  {
    name: "Rahul Nikam",
    age: 28,
    occupation: "Software Engineer",
    frustrations: [
      "He lives alone in a 2BHK apartment.",
      "Bored and tired of living alone.",
      "Finds searching a roommate difficult.",
    ],
    imageUrl: "/users/user2.jpeg",
    imageWidth: 480,
    imageHeight: 317,
  },
  {
    name: "Naina Gupta",
    age: 22,
    occupation: "Student",
    frustrations: [
      "She lives far from her university.",
      "Needs a roommate to share expense.",
      "Finds searching a roommate difficult.",
    ],
    imageUrl: "/users/user1.jpeg",
    imageWidth: 381,
    imageHeight: 480,
  },
];

const challenges = [
  {
    title: "CHALLENGE 1",
    subtitle: "Comprehending the data",
    description:
      "Creating easy-to-understand customized feed for users was a goal that helped drive this project as far as it did. A lot of the time, users don't know how to search, find or comprehend the data that apps throw at them. I solved this issue by giving user options to add his interests, personality traits and living habits.",
    marginTop: "mt-10",
  },
  {
    title: "CHALLENGE 2",
    subtitle: "Seamless exploration",
    description:
      "Before establishing a familiar navigation throughout the app, I had to decide what kind of navigation would work best for the user. I decided combine user’s needs and wants to improvise the user experience. Placing the navigation at the bottom and the main content at the centre of the screen allowed me to create a natural bridge between contents of the screen.",
    marginTop: "mt-[515px]",
  },
  {
    title: "CHALLENGE 3",
    subtitle: "Search history",
    description:
      "I wanted to allow users to explore their search history. It's cool for users to go back and see what places or profiles they've viewed so far, what type, and how long ago it was. It helps you get a better feel for what kind of places you've been viewing lately at a glance without having to go into your profile.",
    marginTop: "mt-[501px]",
  },
  {
    title: "CHALLENGE 4",
    subtitle: "What kind of people do you like to be around",
    description:
      'Ahh, the age-old question... "Which kind of people interests you?" or "What kind of people do you like to be around?" Answering this question is no longer an issue as users are able to easily share both the profiles and the housing details with one tap, allowing you to share with others exactly the perfect kind of place and roommate you can enjoy time with.',
    marginTop: "mt-[531px]",
  },
];

function HomiePage() {
  return (
    <main className="relative flex flex-col items-center bg-gray-100 pb-12">
      <HeroGradientBG
        gradient="linear-gradient(180deg, #2E2463 -20.99%, #512E8A -4.7%, rgba(16, 16, 16, 0.80) 89.5%)"
        height="636px"
        maxHeight="70vh"
      />
      <ProjectHero
        title="Homie"
        contents={[
          { name: "Overview", path: "#overview" },
          { name: "Kickoff", path: "#kickoff" },
          { name: "Research", path: "#research" },
          { name: "Architecture", path: "#architecture" },
          { name: "Wireframing", path: "#wireframing" },
          { name: "Prototyping", path: "#prototyping" },
          { name: "Final designs", path: "#final-designs" },
          { name: "Style guide", path: "#style-guide" },
          { name: "Takeaway", path: "#takeaway" },
        ]}
      />

      <div className="container mx-auto flex w-full max-w-[882px] flex-col items-center px-4 min-[1440px]:max-w-[1044px] min-[1920px]:max-w-[1440px]">
        <OverviewSection
          overview={[
            "Homie simplifies room and roommate discovery, modernizing the way users customize and share their housing preferences to find the ideal match in an outdated market.",
            "Homie is a room discovery service that primarily allows users to find a room and a roommate and share their requirements with just a few steps. With existing applications, sharing of housing details and personalizing their requirements for a perfect roommate and a room is either non-existent, very limited, or extremely outdated. Homie aims to assist potential users who are looking for rooms and ideal roommates for themselves.",
          ]}
          role="Product Designer"
          research="User Research, Interaction design, Visual design, Prototyping & Testing"
          timeline="March - May 2022"
        >
          <div
            style={{
              borderRadius: "32px",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(163, 119, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(242, 242, 242, 0.04)",
              boxShadow: "0px 40px 100px 0px rgba(0, 0, 0, 0.40)",
            }}
            className="mt-12 flex w-full flex-col items-center justify-center self-start rounded-[32px] px-16 py-12 max-md:px-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                d="M54.6004 27.9999C54.6004 13.3091 42.6912 1.3999 28.0004 1.3999C13.3096 1.3999 1.40039 13.3091 1.40039 27.9999C1.40039 42.6907 13.3096 54.5999 28.0004 54.5999C42.6912 54.5999 54.6004 42.6907 54.6004 27.9999Z"
                fill="url(#paint0_radial_1582_1685)"
                fillOpacity="0.2"
              />
              <path
                d="M12.418 39.3088L28.0022 12.3823L43.5863 39.3088H12.418ZM16.4012 37.0079H39.6031L28.0022 16.9757L16.4012 37.0079ZM28.1482 35.0882C28.4507 35.0882 28.7059 34.9822 28.9137 34.7702C29.1216 34.5583 29.2256 34.3011 29.2256 33.9986C29.2256 33.6962 29.1196 33.4423 28.9077 33.2372C28.6956 33.0321 28.4384 32.9297 28.136 32.9297C27.8335 32.9297 27.5784 33.0342 27.3705 33.2434C27.1626 33.4526 27.0586 33.7085 27.0586 34.0109C27.0586 34.3133 27.1645 34.5685 27.3766 34.7764C27.5886 34.9843 27.8458 35.0882 28.1482 35.0882ZM27.0922 31.22H29.1922V23.4469H27.0922V31.22Z"
                fill="#A377FF"
              />
              <path
                d="M54.6004 27.9999C54.6004 13.3091 42.6912 1.3999 28.0004 1.3999C13.3096 1.3999 1.40039 13.3091 1.40039 27.9999C1.40039 42.6907 13.3096 54.5999 28.0004 54.5999C42.6912 54.5999 54.6004 42.6907 54.6004 27.9999Z"
                stroke="url(#paint1_linear_1582_1685)"
                strokeWidth="2.8"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_1582_1685"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(28.0004 27.9999) rotate(90) scale(26.6)"
                >
                  <stop stopColor="#A377FF" />
                  <stop offset="1" stopColor="#A377FF" stopOpacity="0" />
                </radialGradient>
                <linearGradient
                  id="paint1_linear_1582_1685"
                  x1="28.0004"
                  y1="-9.77148e-05"
                  x2="28.0004"
                  y2="55.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A377FF" />
                  <stop offset="1" stopColor="#A377FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="mt-4 justify-center self-center text-sm font-medium leading-5 tracking-[2px] text-whitesmoke-100 text-opacity-60">
              CHALLENGES
            </div>
            <div className="mb-4 mt-10 flex flex-col gap-[25px] text-center">
              <p className="text-lg font-bold text-whitesmoke-100 md:text-center md:text-2xl">
                Create easy-to-understand customized feed for the users.
              </p>
              <p className="text-lg font-bold  text-whitesmoke-100 md:text-center md:text-2xl">
                Combine user’s need and wants to improvise the user experience.
              </p>
              <p className="text-lg font-bold  text-whitesmoke-100 md:text-center md:text-2xl">
                Allow users to dive into the places they’ve viewed or searched.
              </p>
              <p className="text-lg font-bold  text-whitesmoke-100 md:text-center md:text-2xl">
                Bridge gap between users sharing a similar interests.
              </p>
            </div>
          </div>
        </OverviewSection>

        <div
          id="kickoff"
          className="mt-16 grid grid-cols-1 gap-10 md:mt-36 md:grid-cols-2 md:gap-20"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
              <h3 className="self-stretch text-xl font-medium leading-6 text-white text-opacity-60">
                KICKOFF
              </h3>
            </div>
            <div className="mt-12 flex flex-col gap-10 self-start max-md:mt-10 md:gap-16">
              <h4 className="text-xl font-medium leading-8 text-opacity-60">
                <span className="leading-10 text-whitesmoke-100 sm:text-2xl md:text-[28px]">
                  Starting off, I asked myself a few initial questions.
                </span>
              </h4>
              <span className="text-lg text-whitesmoke-600 md:text-xl">
                After interviewing four participants to establish archetypes
                later on, it became evident that the goals they wanted to
                accomplish all fell within the same categories; finding out more
                about their life habits & identifying more of the surrounding
                they like.
              </span>
            </div>
          </div>
          <div className="ml-5 flex flex-col items-stretch gap-6 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start gap-5 rounded-3xl border border-solid border-stone-500 px-6 py-10 max-md:max-w-full md:gap-10 md:px-11">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71e108884d55dd635c56fe823b69533f298e1644680eb0c6fcaa747ea460299f?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
                className="aspect-[0.97] w-9 max-w-full overflow-hidden object-contain object-center"
              />
              <p className="text-2xl font-medium text-whitesmoke-100">
                Who is our primary user?
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 rounded-3xl border border-solid border-stone-500 px-6 py-10 max-md:max-w-full md:gap-10 md:px-11">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/639ea04300daebaa465dfc4829d43dfa282b75e128388756ffecd82354850a63?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
                className="aspect-[0.97] w-9 max-w-full items-center justify-center overflow-hidden object-contain object-center"
              />
              <p className="text-2xl font-medium text-whitesmoke-100">
                What kind of goals do they have?
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 rounded-3xl border border-solid border-stone-500 px-6 py-10 max-md:max-w-full md:gap-10 md:px-11">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6689d76d74cc53b854d1cc1a3160a21125d1a50e64519ffd167e3d58d5dfe870?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
                className="aspect-[0.97] w-9 max-w-full items-center justify-center overflow-hidden object-contain object-center"
              />
              <p className="text-2xl font-medium text-whitesmoke-100">
                How this application will help?
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 rounded-3xl border border-solid border-stone-500 px-6 py-10 max-md:max-w-full md:gap-10 md:px-11">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f4df362cadb361158aba2a2f8d77e511b8483d3a368e3f958150363bb2fbb09?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
                className="aspect-[0.97] w-9 max-w-full items-center justify-center overflow-hidden object-contain object-center"
              />
              <p className="justify-center text-2xl font-medium leading-[49.92px] text-whitesmoke-100">
                What is the scope of this project?
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 h-[1px] w-full bg-dimgray max-md:my-10" />
        <div id="research" className="flex w-full flex-col">
          <div className="mt-0 flex items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-white text-opacity-60 md:text-xl">
              COMPETITIVE ANALYSIS
            </h2>
          </div>
          <p className="mt-12 self-start text-lg font-medium leading-8 text-neutral-400 max-md:mt-10 md:text-xl">
            In order to construct a concise and solid foundation for Homie, I
            had to venture out and see what the prominent room and roommate
            finding applications were already doing and what user goals they
            were not reaching. I evaluated several features deemed vital from
            user surveys and identified which ones Homie could capitalize on to
            have a leg up over other applications.
            <br />
            <br />I found that only one of the three main competitors offered
            user profiles and room management options for users. Even then,
            Zolo&apos;s room managing feature is incredibly limited and their
            “schedule a free visit” is only available at certain points
            throughout the year.
            <br />
            <br />
            Commonfloor houses both user profiles and real-time customer
            service, but fails to communicate to users how their requirements
            and choices should be preferred.
            <br />
          </p>
          <div className="mt-10 flex w-full items-center justify-center md:mt-16">
            <Image
              className="object-contain object-center"
              src="/competitive-analysis.png"
              width={1023}
              height={760}
              alt="COMPETITIVE ANALYSIS"
            />
          </div>
        </div>

        <div className="mt-20 h-[1px] w-full bg-dimgray max-md:my-10" />

        <div id="architecture" className="flex w-full flex-col">
          <div className="mt-0 flex items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-white text-opacity-60 md:text-xl">
              EVALUATING THE ACTIVITY
            </h2>
          </div>
          <p className="mt-12 self-start text-lg font-medium leading-normal text-neutral-400 max-md:mt-10 md:text-xl">
            Just how popular is finding a room and a roommate in general?
            According to research, across all platforms including Zolo, PGO
            Community, Commonfloor and more, close to 1.2 billion users search
            for rooms in 2017 alone. Even though the graph has shown a sudden
            drop due to pandemic and work from home scenario, still the services
            have picked up a great elevation. Paying guests services are
            projected to be used by close to 1.4 billion users in 2022.
            <br />
            <br />
            With this in mind, it became clear that people&apos;s need for
            finding a room and a roommate isn&apos;t going anywhere, anytime
            soon.
            <br />
          </p>
          <div className="mt-10 flex w-full items-center justify-center md:mt-16">
            <Image
              className="object-contain object-center"
              src="/evaluating-the-activity.png"
              width={775}
              height={488}
              alt="EVALUATING THE ACTIVITY"
            />
          </div>
        </div>

        <div className="mt-20 h-[1px] w-full bg-dimgray max-md:my-10" />

        <div id="wireframing" className="flex w-full flex-col">
          <div className="mt-0 flex items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-white text-opacity-60 md:text-xl">
              PRIORITIZATION PLOTTING
            </h2>
          </div>
          <p className="mt-12 self-start text-lg font-medium leading-normal text-neutral-400 max-md:mt-10 md:text-xl">
            Plotting a list of the possible features onto a graph helped narrow
            down what was absolutely crucial for delivering the mvp and would
            could be built upon further down the road. A big draw of using this
            application is to be able to personalize and share with others how
            you want your room and roommate to be and who do you want to
            contact. We can help users reach this goal by creating what is
            essentially a business card for each user, but for music instead.
            <br />
          </p>

          <div className="mx-auto mt-10 flex items-center justify-center rounded-21xl border-2 border-darkslategray p-8 md:mt-16">
            <Image
              className="object-contain object-center"
              src="/prioritization-plotting.png"
              width={844}
              height={676}
              alt="PRIORITIZATION PLOTTING"
            />
          </div>
        </div>

        <div className="mt-20 h-[1px] w-full bg-dimgray max-md:my-10" />

        <div id="prototyping" className="flex w-full flex-col">
          <div className="mt-0 flex items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-white text-opacity-60 md:text-xl">
              MEET THE USERS
            </h2>
          </div>
          <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-2">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex max-w-max flex-col justify-center p-6 md:mx-auto md:p-10"
                style={{
                  borderRadius: "40px",
                  border: "2px solid #303030",
                  background: "rgba(242, 242, 242, 0.04)",
                  boxShadow: "0px 40px 100px 0px rgba(0, 0, 0, 0.40)",
                }}
              >
                <Image
                  loading="lazy"
                  src={user.imageUrl}
                  width={user.imageWidth}
                  height={user.imageHeight}
                  alt={user.name}
                  className="h-36 w-36 self-center overflow-hidden rounded-full object-cover object-center"
                />
                <span className="mt-6 self-center text-xl font-extrabold text-violet-400 md:mt-9">
                  {index === 0 ? "PRIMARY" : "SECONDARY"}
                </span>
                <p className="mt-2.5 self-center text-xl font-medium text-whitesmoke-100 sm:text-2xl md:mt-9">
                  {user.name}, {user.age}
                  <br />
                </p>
                <p className="mt-2.5 self-center text-lg font-light text-whitesmoke-100 sm:text-xl">
                  {user.occupation}
                </p>
                <p className="mt-3 self-center text-xl font-medium text-whitesmoke-100 md:mt-6 md:text-2xl">
                  Frustrations
                </p>
                <ul className="mt-3 list-inside list-disc self-center leading-relaxed text-whitesmoke-100 text-opacity-60 sm:text-lg md:mt-6 md:text-xl md:leading-loose">
                  {user.frustrations.map((frustration, index) => (
                    <li key={index}>{frustration}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 h-[1px] w-full bg-dimgray max-md:my-10" />

        <div id="final-designs" className="flex w-full flex-col">
          <div className="mt-0 flex items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-white text-opacity-60 md:text-xl">
              INFORMATION ARCHITECTURE
            </h2>
          </div>

          <div className="mt-10 flex w-full md:mt-16">
            <Image
              className="object-contain object-left"
              src="/information_architecture.png"
              width={1130}
              height={760}
              alt="PRIORITIZATION PLOTTING"
            />
          </div>

          <div
            className="mt-10 flex w-full flex-col items-center justify-center md:mt-16"
            style={{
              borderRadius: "32px",
              background:
                "radial-gradient(1077.21% 48.8% at 50% 50%, rgba(163, 119, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 84.24%), rgba(242, 242, 242, 0.04)",
              boxShadow: "0px 40px 100px 0px rgba(0, 0, 0, 0.40)",
            }}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cdd5376755d7c380d3322e23508fb09914e14ddbdda9fe0413999dbfd101509?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
              className="mt-16 aspect-square w-14 max-w-full items-center justify-center self-center overflow-hidden object-contain object-center max-md:mt-10"
            />
            <div className="mb-5 mt-6 justify-center self-center text-sm font-medium leading-5 tracking-[2px] text-whitesmoke-100 text-opacity-60">
              FINAL DESIGNS
            </div>
          </div>
        </div>
        <div id="style-guide" className="flex w-full flex-col">
          <div className="mt-10 flex w-full items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-white text-opacity-60 md:text-xl">
              FINAL DESIGNS
            </h2>
          </div>

          {challenges.map((challenge, index) => (
            <Fragment key={index}>
              <h3
                className={`self-start text-xl font-extrabold text-violet-400 ${challenge.marginTop}`}
              >
                {challenge.title}
              </h3>
              <h5 className="mt-5 w-64 self-start text-xl font-medium leading-8 text-whitesmoke-100">
                {challenge.subtitle}
              </h5>
              <p
                className={`mt-10 self-start text-xl font-medium leading-8 text-whitesmoke-100 text-opacity-60 md:max-w-screen-sm`}
              >
                {challenge.description}
              </p>
            </Fragment>
          ))}
        </div>

        <div className="mt-20 h-[1px] w-full bg-dimgray max-md:my-10" />

        <div id="takeaway" className="flex w-full flex-col">
          <div className="mt-0 flex w-full items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-white text-opacity-60 md:text-xl">
              TAKEAWAYS
            </h2>
          </div>

          <div className="mt-14 max-w-[993px] self-start text-xl font-medium leading-8 text-whitesmoke-100 text-opacity-60 max-md:mt-10">
            Being someone who was once in search for a room and roommate
            herself, working on Homie was incredibly rewarding. I got to
            experiment with some of the new Figma&apos;s features, and narrow
            down my design process. Although I was not able to fully flesh out
            other features and designs I wanted to within Homie due to time
            constraints, it&apos;s not to say I won&apos;t try to incorporate
            them in future projects down the line.
            <br />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomiePage;
