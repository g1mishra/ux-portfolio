/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Divider from "@/components/Divider";
import HeroGradientBG from "@/components/HeroGradientBG";
import VideoRenderer from "@/components/VideoRender";
import OverviewSection from "@/components/project/OverviewSection";
import ProjectHero from "@/components/project/ProjectHero";
import Image from "next/image";

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
    src: "/videos/homie/Challenge-1.mov",
  },
  {
    title: "CHALLENGE 2",
    subtitle: "Seamless exploration",
    description:
      "Before establishing a familiar navigation throughout the app, I had to decide what kind of navigation would work best for the user. I decided combine user’s needs and wants to improvise the user experience. Placing the navigation at the bottom and the main content at the centre of the screen allowed me to create a natural bridge between contents of the screen.",
    src: "/videos/homie/Challenge-2.mov",
  },
  {
    title: "CHALLENGE 3",
    subtitle: "Search history",
    description:
      "I wanted to allow users to explore their search history. It's cool for users to go back and see what places or profiles they've viewed so far, what type, and how long ago it was. It helps you get a better feel for what kind of places you've been viewing lately at a glance without having to go into your profile.",
    src: "/videos/homie/Challenge-3.mov",
  },
  {
    title: "CHALLENGE 4",
    subtitle: "What kind of people do you like to be around",
    description:
      'Ahh, the age-old question... "Which kind of people interests you?" or "What kind of people do you like to be around?" Answering this question is no longer an issue as users are able to easily share both the profiles and the housing details with one tap, allowing you to share with others exactly the perfect kind of place and roommate you can enjoy time with.',
    src: "/videos/homie/Challenge-4.mov",
  },
];

const starIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="37"
    viewBox="0 0 36 37"
    fill="none"
  >
    <g clipPath="url(#clip0_1584_1758)">
      <path
        d="M26.9891 6.52036L21.7782 2.61083C19.5384 0.930503 16.4584 0.930503 14.2186 2.61083L9.00769 6.52034L3.67924 10.2682C1.38904 11.879 0.43723 14.8083 1.34321 17.4577L3.4511 23.6217L5.36891 29.8475C6.1932 32.5235 8.68506 34.3339 11.4847 34.2909L17.9984 34.191L24.5121 34.2909C27.3118 34.3339 29.8037 32.5235 30.6279 29.8475L32.5458 23.6217L34.6536 17.4577C35.5596 14.8083 34.6078 11.879 32.3176 10.2682L26.9891 6.52036Z"
        fill="#A377FF"
        fillOpacity="0.1"
        stroke="#A377FF"
        strokeWidth="1.79951"
      />
      <path
        d="M15.7911 21.0343L16.8638 18.6865L19.2116 17.6084L16.8646 16.5366L15.7911 14.1879L14.7086 16.5366L12.3706 17.6084L14.7077 18.6865L15.7911 21.0343ZM15.7911 24.6456L13.5896 19.81L8.75391 17.6084L13.5883 15.4127L15.7911 10.5767L17.9885 15.4127L22.8282 17.6084L17.9872 19.81L15.7911 24.6456ZM23.728 27.2133L22.6379 24.7823L20.2067 23.6974L22.6379 22.5848L23.728 20.1762L24.8352 22.5848L27.2439 23.6974L24.8352 24.7823L23.728 27.2133Z"
        fill="#A377FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1584_1758">
        <rect
          width="35.9902"
          height="36.89"
          fill="white"
          transform="translate(0.00390625)"
        />
      </clipPath>
    </defs>
  </svg>
);

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
        bgImage="/homie-hero.png"
        contents={[
          { name: "Overview", path: "#overview" },
          { name: "Kickoff", path: "#kickoff" },
          { name: "Competitive Analysis", path: "#competitive-analysis" },
          { name: "Research", path: "#research" },
          { name: "Personas", path: "#personas" },
          { name: "Architecture", path: "#architecture" },
          { name: "Final designs", path: "#final-designs" },
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
              <p className="text-lg font-bold text-whitesmoke-100 sm:text-xl md:text-center 3xl:text-2xl">
                Create easy-to-understand customized feed for the users.
              </p>
              <p className="text-lg font-bold  text-whitesmoke-100 sm:text-xl md:text-center 3xl:text-2xl">
                Combine user’s need and wants to improvise the user experience.
              </p>
              <p className="text-lg font-bold  text-whitesmoke-100 sm:text-xl md:text-center 3xl:text-2xl">
                Allow users to dive into the places they’ve viewed or searched.
              </p>
              <p className="text-lg font-bold  text-whitesmoke-100 sm:text-xl md:text-center 3xl:text-2xl">
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
              <div className="flex h-3 w-3 shrink-0 rounded-md bg-whitesmoke-100 shadow-white20" />
              <h3 className="self-stretch text-xl font-medium leading-6 text-whitesmoke-100 text-opacity-60">
                KICKOFF
              </h3>
            </div>
            <div className="mt-10 flex flex-col gap-8 self-start max-md:mt-10">
              <h4 className="text-lg font-medium leading-8 text-opacity-60">
                <span className="leading-10 text-whitesmoke-100 sm:text-xl 3xl:text-[28px]">
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
            <div className="flex flex-col items-start gap-5 rounded-3xl border border-solid border-stone-500 px-6 py-8 max-md:max-w-full sm:px-8 md:gap-7">
              {starIcon}
              <p className="text-xl font-medium text-whitesmoke-100 3xl:text-2xl">
                Who is our primary user?
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 rounded-3xl border border-solid border-stone-500 px-6 py-8 max-md:max-w-full sm:px-8 md:gap-7">
              {starIcon}
              <p className="text-xl font-medium text-whitesmoke-100 3xl:text-2xl">
                What kind of goals do they have?
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 rounded-3xl border border-solid border-stone-500 px-6 py-8 max-md:max-w-full sm:px-8 md:gap-7">
              {starIcon}
              <p className="text-xl font-medium text-whitesmoke-100 3xl:text-2xl">
                How this application will help?
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 rounded-3xl border border-solid border-stone-500 px-6 py-8 max-md:max-w-full sm:px-8 md:gap-7">
              {starIcon}
              <p className="justify-center text-xl font-medium text-whitesmoke-100 3xl:text-2xl">
                What is the scope of this project?
              </p>
            </div>
          </div>
        </div>
        <Divider />
        <div id="competitive-analysis" className="flex w-full flex-col">
          <div className="mt-0 flex items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
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
              loading="lazy"
              className="max-h-[70vh] object-contain object-center 3xl:max-h-max"
              src="/competitive-analysis.png"
              width={1023}
              height={760}
              alt="COMPETITIVE ANALYSIS"
            />
          </div>
        </div>

        <Divider />

        <div id="research" className="flex w-full flex-col">
          <div className="mt-0 flex items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
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
              loading="lazy"
              className="object-contain object-center"
              src="/evaluating-the-activity.png"
              width={775}
              height={488}
              alt="EVALUATING THE ACTIVITY"
            />
          </div>
        </div>

        <Divider />

        <div className="flex w-full flex-col">
          <div className="mt-0 flex items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
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
              loading="lazy"
              className="max-h-[70vh] object-contain object-center"
              src="/prioritization-plotting.png"
              width={844}
              height={676}
              alt="PRIORITIZATION PLOTTING"
            />
          </div>
        </div>

        <Divider />

        <div id="personas" className="flex w-full flex-col">
          <div className="mt-0 flex items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              MEET THE USERS
            </h2>
          </div>
          <div className="mt-10 grid gap-10 md:mt-16 grid-cols-1  md:grid-cols-2">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex max-w-max flex-col justify-center p-6 mx-auto md:p-10"
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
                <ul className="ml-2 mt-3 list-disc self-center text-whitesmoke-100 text-opacity-60 sm:text-lg 2xl:mt-6 3xl:text-xl 3xl:leading-loose">
                  {user.frustrations.map((frustration, index) => (
                    <li key={index}>{frustration}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div id="architecture" className="flex w-full flex-col">
          <div className="mt-0 flex items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              INFORMATION ARCHITECTURE
            </h2>
          </div>

          <div className="mt-10 flex w-full md:mt-16">
            <Image
              loading="lazy"
              className="object-contain object-left"
              src="/information_architecture.png"
              width={1130}
              height={760}
              alt="PRIORITIZATION PLOTTING"
            />
          </div>
        </div>
        <Divider />
        <div id="final-designs" className="flex w-full flex-col">
          <div className="mt-10 flex w-full items-center gap-5 md:mt-16">
            <div className="flex h-3 w-3 shrink-0 rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              FINAL DESIGNS
            </h2>
          </div>

          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`mt-10 grid grid-cols-1 gap-9 max-md:mb-5 sm:grid-cols-2 ${
                index > 0 ? "md:mt-28" : "md:mt-16"
              }`}
            >
              <div className="flex flex-col justify-center">
                <h3
                  className={`whitespace-nowrap text-xl font-extrabold text-violet-400`}
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
              </div>
              <div className="flex w-full items-center justify-center self-center overflow-hidden">
                <VideoRenderer
                  src={challenge.src}
                  title={challenge.title}
                  type="video/mp4"
                  className="aspect-square min-h-[300px] xl:min-h-[650px]"
                />
              </div>
            </div>
          ))}

          <a
            target="_blank"
            href="https://www.figma.com/proto/hZqFWgZvk93y0pQtLXk73M/Homie?page-id=1%3A4&type=design&node-id=30-83&viewport=268%2C339%2C0.13&t=ZaGPHGrReM4hSGoP-1&scaling=scale-down&starting-point-node-id=30%3A83&mode=design"
            className="mx-auto max-w-max mt-8 rounded-lg px-7 py-3.5 text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 hover:bg-[linear-gradient(225deg,_#9293FF_0%,_#AC8FFF_38.14%,_#C48CFF_65.46%,_#DC89FF_100%)] hover:text-white"
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
            <div className="flex h-3 w-3 shrink-0 rounded-md bg-whitesmoke-100 shadow-white20" />
            <h2 className="grow self-stretch text-lg font-medium leading-6 text-whitesmoke-100 text-opacity-60 md:text-xl">
              TAKEAWAYS
            </h2>
          </div>

          <div className="mt-14 self-start text-xl font-medium leading-8 text-whitesmoke-100 text-opacity-60 max-md:mt-10">
            Being someone who was once in search for a room and roommate
            herself, working on Homie was incredibly rewarding. I got to
            experiment with some of the new Figma&apos;s features, and narrow
            down my design process. Although I was not able to fully flesh out
            other features and designs I wanted to within Homie due to time
            constraints, it&apos;s not to say I won&apos;t try to incorporate
            them in future projects down the line.
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomiePage;
