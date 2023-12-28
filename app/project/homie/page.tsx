/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import HeroGradientBG from "@/components/HeroGradientBG";
import OverviewSection from "@/components/project/OverviewSection";
import ProjectHero from "@/components/project/ProjectHero";
import * as React from "react";

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
          "Overview",
          "Kickoff",
          "Research",
          "Architecture",
          "Wireframing",
          "Prototyping",
          "Final designs",
          "Style guide",
          "Takeaway",
        ]}
      />

      <div className="container mx-auto flex flex-col items-center px-4 md:px-16">
        <OverviewSection
          overview={[
            "Homie simplifies room and roommate discovery, modernizing the way users customize and share their housing preferences to find the ideal match in an outdated market.",
            "Homie is a room discovery service that primarily allows users to find a room and a roommate and share their requirements with just a few steps. With existing applications, sharing of housing details and personalizing their requirements for a perfect roommate and a room is either non-existent, very limited, or extremely outdated. Homie aims to assist potential users who are looking for rooms and ideal roommates for themselves.",
          ]}
          role="Product Designer"
          research="User Research, Interaction design, Visual design, Prototyping & Testing"
          timeline="March - May 2022"
        />
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
              fill-opacity="0.2"
            />
            <path
              d="M12.418 39.3088L28.0022 12.3823L43.5863 39.3088H12.418ZM16.4012 37.0079H39.6031L28.0022 16.9757L16.4012 37.0079ZM28.1482 35.0882C28.4507 35.0882 28.7059 34.9822 28.9137 34.7702C29.1216 34.5583 29.2256 34.3011 29.2256 33.9986C29.2256 33.6962 29.1196 33.4423 28.9077 33.2372C28.6956 33.0321 28.4384 32.9297 28.136 32.9297C27.8335 32.9297 27.5784 33.0342 27.3705 33.2434C27.1626 33.4526 27.0586 33.7085 27.0586 34.0109C27.0586 34.3133 27.1645 34.5685 27.3766 34.7764C27.5886 34.9843 27.8458 35.0882 28.1482 35.0882ZM27.0922 31.22H29.1922V23.4469H27.0922V31.22Z"
              fill="#A377FF"
            />
            <path
              d="M54.6004 27.9999C54.6004 13.3091 42.6912 1.3999 28.0004 1.3999C13.3096 1.3999 1.40039 13.3091 1.40039 27.9999C1.40039 42.6907 13.3096 54.5999 28.0004 54.5999C42.6912 54.5999 54.6004 42.6907 54.6004 27.9999Z"
              stroke="url(#paint1_linear_1582_1685)"
              stroke-width="2.8"
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
                <stop stop-color="#A377FF" />
                <stop offset="1" stop-color="#A377FF" stop-opacity="0" />
              </radialGradient>
              <linearGradient
                id="paint1_linear_1582_1685"
                x1="28.0004"
                y1="-9.77148e-05"
                x2="28.0004"
                y2="55.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A377FF" />
                <stop offset="1" stop-color="#A377FF" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="mt-4 justify-center self-center whitespace-nowrap text-sm font-medium leading-5 tracking-[2px] text-zinc-100 text-opacity-60">
            CHALLENGES
          </div>
          <div className="mt-10 mb-4 flex flex-col gap-[25px]">
            <p className="text-lg font-bold leading-10 text-whitesmoke-100 md:text-center md:text-2xl">
              Create easy-to-understand customized feed for the users.
            </p>
            <p className="text-lg font-bold leading-10  text-whitesmoke-100 md:text-center md:text-2xl">
              Combine user’s need and wants to improvise the user experience.
            </p>
            <p className="text-lg font-bold leading-10  text-whitesmoke-100 md:text-center md:text-2xl">
              Allow users to dive into the places they’ve viewed or searched.
            </p>
            <p className="text-lg font-bold leading-10  text-whitesmoke-100 md:text-center md:text-2xl">
              Bridge gap between users sharing a similar interests.
            </p>
          </div>
        </div>
        <div className="ml-7 mt-36 flex items-start gap-5 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="self-stretch text-xl font-medium leading-6 text-white text-opacity-60">
            KICKOFF
          </div>
        </div>
        <div className="ml-5 mt-12 w-[1092px] max-w-full self-start max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex w-[49%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="text-lg font-medium leading-8 text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
                <span className="text-3xl leading-10 text-zinc-100">
                  Starting off, I asked myself a few initial questions.
                </span>
                <br />
                <br />
                <br />
                <span className="text-xl">
                  After interviewing four participants to establish archetypes
                  later on, it became evident that the goals they wanted to
                  accomplish all fell within the same categories; finding out
                  more about their life habits & identifying more of the
                  surrounding they like.
                </span>
                <br />
              </div>
            </div>
            <div className="ml-5 flex w-[51%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="flex grow flex-col items-stretch max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-start rounded-3xl border border-solid border-stone-500 py-10 pl-11 pr-20 max-md:max-w-full max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/71e108884d55dd635c56fe823b69533f298e1644680eb0c6fcaa747ea460299f?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
                    className="aspect-[0.97] w-9 max-w-full overflow-hidden object-contain object-center"
                  />
                  <div className="mt-12 justify-center text-2xl font-medium leading-[49.92px] text-zinc-100 max-md:mt-10">
                    Who is our primary user?
                  </div>
                </div>
                <div className="mt-6 flex flex-col items-start rounded-3xl border border-solid border-stone-500 py-10 pl-11 pr-20 max-md:max-w-full max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/639ea04300daebaa465dfc4829d43dfa282b75e128388756ffecd82354850a63?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
                    className="aspect-[0.97] w-9 max-w-full items-center justify-center overflow-hidden object-contain object-center"
                  />
                  <div className="mt-12 justify-center text-2xl font-medium leading-[49.92px] text-zinc-100 max-md:mt-10">
                    What kind of goals do they have?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-48 mt-8 flex w-[511px] max-w-full flex-col items-start self-end rounded-3xl border border-solid border-stone-500 py-10 pl-11 pr-20 max-md:mr-2.5 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6689d76d74cc53b854d1cc1a3160a21125d1a50e64519ffd167e3d58d5dfe870?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
            className="aspect-[0.97] w-9 max-w-full items-center justify-center overflow-hidden object-contain object-center"
          />
          <div className="mt-12 justify-center text-2xl font-medium leading-[49.92px] text-zinc-100 max-md:mt-10">
            How this application will help?
          </div>
        </div>
        <div className="mr-48 mt-8 flex w-[511px] max-w-full flex-col items-start self-end rounded-3xl border border-solid border-stone-500 py-10 pl-11 pr-20 max-md:mr-2.5 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f4df362cadb361158aba2a2f8d77e511b8483d3a368e3f958150363bb2fbb09?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
            className="aspect-[0.97] w-9 max-w-full items-center justify-center overflow-hidden object-contain object-center"
          />
          <div className="mt-12 justify-center text-2xl font-medium leading-[49.92px] text-zinc-100 max-md:mt-10">
            What is the scope of this project?
          </div>
        </div>
        <div className="ml-4 mt-32 h-[5px] w-[1100px] max-w-full shrink-0 self-start bg-stone-500 max-md:mt-10" />
        <div className="ml-7 mt-28 flex items-start gap-5 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="grow self-stretch whitespace-nowrap text-xl font-medium leading-6 text-white text-opacity-60">
            COMPETITIVE ANALYSIS
          </div>
        </div>
        <div className="ml-7 mt-14 max-w-[1079px] self-start text-xl font-medium leading-8 text-neutral-400 max-md:mt-10 max-md:max-w-full">
          In order to construct a concise and solid foundation for Homie, I had
          to venture out and see what the prominent room and roommate finding
          applications were already doing and what user goals they were not
          reaching. I evaluated several features deemed vital from user surveys
          and identified which ones Homie could capitalize on to have a leg up
          over other applications.
          <br />
          <br />I found that only one of the three main competitors offered user
          profiles and room management options for users. Even then, Zolo&apos;s
          room managing feature is incredibly limited and their “schedule a free
          visit” is only available at certain points throughout the year.
          <br />
          <br />
          Commonfloor houses both user profiles and real-time customer service,
          but fails to communicate to users how their requirements and choices
          should be preferred.
          <br />
        </div>
        <div className="ml-20 mt-32 flex w-[703px] max-w-full items-stretch gap-4 self-center max-md:mt-10 max-md:flex-wrap">
          <div className="flex grow basis-[0%] flex-col items-center justify-center rounded-3xl border-2 border-solid border-zinc-800 px-16 py-6 max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d1cbaae40af3d22e996db14e8e226fa51f0d696e49af638e3f67fee65c75850?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d1cbaae40af3d22e996db14e8e226fa51f0d696e49af638e3f67fee65c75850?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d1cbaae40af3d22e996db14e8e226fa51f0d696e49af638e3f67fee65c75850?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d1cbaae40af3d22e996db14e8e226fa51f0d696e49af638e3f67fee65c75850?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d1cbaae40af3d22e996db14e8e226fa51f0d696e49af638e3f67fee65c75850?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d1cbaae40af3d22e996db14e8e226fa51f0d696e49af638e3f67fee65c75850?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d1cbaae40af3d22e996db14e8e226fa51f0d696e49af638e3f67fee65c75850?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d1cbaae40af3d22e996db14e8e226fa51f0d696e49af638e3f67fee65c75850?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
              className="aspect-[2.2] w-[97px] overflow-hidden object-contain object-center"
            />
          </div>
          <div className="flex grow basis-[0%] flex-col items-center justify-center rounded-3xl border-2 border-solid border-zinc-800 px-16 py-7 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fd75f5f560d713e786906c48ba26f5cc25486b7a7f435a0486846844f156b65?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
              className="aspect-[1.93] w-[79px] max-w-full overflow-hidden object-contain object-center"
            />
          </div>
          <div className="flex grow basis-[0%] flex-col items-center justify-center rounded-3xl border-2 border-solid border-zinc-800 px-16 py-7 max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c89339ba2caff5c8e448d216435690a778ea14f28a192f6f9df6c082ae53bb20?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c89339ba2caff5c8e448d216435690a778ea14f28a192f6f9df6c082ae53bb20?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c89339ba2caff5c8e448d216435690a778ea14f28a192f6f9df6c082ae53bb20?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c89339ba2caff5c8e448d216435690a778ea14f28a192f6f9df6c082ae53bb20?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c89339ba2caff5c8e448d216435690a778ea14f28a192f6f9df6c082ae53bb20?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c89339ba2caff5c8e448d216435690a778ea14f28a192f6f9df6c082ae53bb20?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c89339ba2caff5c8e448d216435690a778ea14f28a192f6f9df6c082ae53bb20?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c89339ba2caff5c8e448d216435690a778ea14f28a192f6f9df6c082ae53bb20?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
              className="aspect-[2.63] w-[100px] overflow-hidden object-contain object-center"
            />
          </div>
        </div>
        <div className="ml-14 mt-4 flex w-[1023px] max-w-full items-stretch gap-5 self-start max-md:flex-wrap">
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-zinc-800 px-16 py-10 text-xl font-medium leading-6 text-zinc-100 max-md:px-5">
            Customized Feed
          </div>
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-violet-400 px-16 py-10 text-2xl font-bold leading-6 text-violet-400 max-md:px-5">
            Yes
          </div>
          <div className="flex h-[94px] w-[223px] shrink-0 flex-col rounded-3xl border-2 border-solid border-zinc-800" />
          <div className="flex h-[94px] w-[223px] shrink-0 flex-col rounded-3xl border-2 border-solid border-zinc-800" />
        </div>
        <div className="ml-14 mt-4 flex w-[1023px] max-w-full items-stretch gap-5 self-start max-md:flex-wrap">
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-zinc-800 px-16 py-10 text-xl font-medium leading-6 text-zinc-100 max-md:px-5">
            Schedule free visit
          </div>
          <div className="flex h-[94px] w-[223px] shrink-0 flex-col rounded-3xl border-2 border-solid border-zinc-800" />
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-violet-400 px-16 py-10 text-2xl font-bold leading-6 text-violet-400 max-md:px-5">
            Yes
          </div>
          <div className="flex h-[94px] w-[223px] shrink-0 flex-col rounded-3xl border-2 border-solid border-zinc-800" />
        </div>
        <div className="ml-14 mt-4 flex w-[1023px] max-w-full items-stretch gap-5 self-start max-md:flex-wrap">
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-zinc-800 px-16 py-10 text-xl font-medium leading-6 text-zinc-100 max-md:px-5">
            Modern UI
          </div>
          <div className="flex h-[94px] w-[223px] shrink-0 flex-col rounded-3xl border-2 border-solid border-zinc-800" />
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-violet-400 px-16 py-10 text-2xl font-bold leading-6 text-violet-400 max-md:px-5">
            Yes
          </div>
          <div className="flex h-[94px] w-[223px] shrink-0 flex-col rounded-3xl border-2 border-solid border-zinc-800" />
        </div>
        <div className="ml-14 mt-4 flex w-[1023px] max-w-full items-stretch gap-5 self-start max-md:flex-wrap">
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-zinc-800 px-16 py-10 text-xl font-medium leading-6 text-zinc-100 max-md:px-5">
            User profile
          </div>
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-violet-400 px-16 py-10 text-2xl font-bold leading-6 text-violet-400 max-md:px-5">
            Yes
          </div>
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-violet-400 px-16 py-10 text-2xl font-bold leading-6 text-violet-400 max-md:px-5">
            Yes
          </div>
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-violet-400 px-16 py-10 text-2xl font-bold leading-6 text-violet-400 max-md:px-5">
            Yes
          </div>
        </div>
        <div className="ml-14 mt-4 flex w-[1023px] max-w-full items-stretch gap-5 self-start max-md:flex-wrap">
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-zinc-800 px-16 py-10 text-xl font-medium leading-6 text-zinc-100 max-md:px-5">
            Room manager
          </div>
          <div className="flex h-[94px] w-[223px] shrink-0 flex-col rounded-3xl border-2 border-solid border-zinc-800" />
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-violet-400 px-16 py-10 text-2xl font-bold leading-6 text-violet-400 max-md:px-5">
            Yes
          </div>
          <div className="flex h-[94px] w-[223px] shrink-0 flex-col rounded-3xl border-2 border-solid border-zinc-800" />
        </div>
        <div className="ml-14 mt-4 flex w-[1023px] max-w-full items-stretch gap-5 self-start max-md:flex-wrap">
          <div className="grow items-stretch justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-zinc-800 py-10 pl-6 pr-7 text-xl font-medium leading-6 text-zinc-100 max-md:px-5">
            Real time customer service
          </div>
          <div className="flex h-[94px] w-[223px] shrink-0 flex-col rounded-3xl border-2 border-solid border-zinc-800" />
          <div className="flex h-[94px] w-[223px] shrink-0 flex-col rounded-3xl border-2 border-solid border-zinc-800" />
          <div className="grow items-center justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-violet-400 px-16 py-10 text-2xl font-bold leading-6 text-violet-400 max-md:px-5">
            Yes
          </div>
        </div>
        <div className="ml-4 mt-32 h-[5px] w-[1100px] max-w-full shrink-0 self-start bg-stone-500 max-md:mt-10" />
        <div className="ml-7 mt-32 flex items-start gap-5 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="grow self-stretch whitespace-nowrap text-xl font-medium leading-6 text-white text-opacity-60">
            EVALUATING THE ACTIVITY
          </div>
        </div>
        <div className="ml-6 mt-14 max-w-[1083px] self-start text-xl font-medium leading-8 text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
          Just how popular is finding a room and a roommate in general?
          According to research, across all platforms including Zolo, PGO
          Community, Commonfloor and more, close to 1.2 billion users search for
          rooms in 2017 alone. Even though the graph has shown a sudden drop due
          to pandemic and work from home scenario, still the services have
          picked up a great elevation. Paying guests services are projected to
          be used by close to 1.4 billion users in 2022.
          <br />
          <br />
          With this in mind, it became clear that people&apos;s need for finding
          a room and a roommate isn&apos;t going anywhere, anytime soon.
          <br />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b765b96680be539da475e265e7bf5baa2c757ee6814982acac87f235170e9b7?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
          className="mt-24 aspect-[1.58] w-[775px] max-w-full self-center overflow-hidden object-contain object-center max-md:mt-10"
        />
        <div className="ml-4 mt-32 h-[5px] w-[1100px] max-w-full shrink-0 self-start bg-stone-500 max-md:mt-10" />
        <div className="ml-7 mt-32 flex items-start gap-5 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="grow self-stretch whitespace-nowrap text-xl font-medium leading-6 text-white text-opacity-60">
            PRIORITIZATION PLOTTING
          </div>
        </div>
        <div className="ml-6 mt-14 max-w-[1087px] self-start text-xl font-medium leading-8 text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
          Plotting a list of the possible features onto a graph helped narrow
          down what was absolutely crucial for delivering the mvp and would
          could be built upon further down the road. A big draw of using this
          application is to be able to personalize and share with others how you
          want your room and roommate to be and who do you want to contact. We
          can help users reach this goal by creating what is essentially a
          business card for each user, but for music instead.
          <br />
        </div>
        <div className="ml-5 mt-16 flex w-[1091px] max-w-full flex-col items-center self-start rounded-[40px] border-2 border-solid border-zinc-800 px-20 py-12 max-md:mt-10 max-md:px-5">
          <div className="mt-20 flex w-[496px] max-w-full flex-col items-center max-md:mt-10">
            <div className="whitespace-nowrap text-lg font-bold leading-6 text-neutral-400">
              HIGH PRIORITY
            </div>
            <div className="mt-32 flex flex-col items-end self-start max-md:mt-10">
              <div className="whitespace-nowrap text-lg font-medium leading-6 text-neutral-400">
                sharing
              </div>
              <div className="mt-8 self-stretch whitespace-nowrap text-lg font-medium leading-6 text-neutral-400">
                advance filtering
              </div>
            </div>
            <div className="z-[1] mt-0 flex flex-col items-stretch self-end">
              <div className="text-lg font-medium leading-6 text-neutral-400">
                personalization
              </div>
              <div className="mt-8 whitespace-nowrap text-lg font-medium leading-6 text-neutral-400">
                profile / calling card
              </div>
            </div>
          </div>
          <div className="mb-12 mt-28 flex w-[842px] max-w-full flex-col max-md:my-10">
            <div className="z-[1] self-stretch text-lg font-bold leading-6 text-neutral-400 max-md:max-w-full">
              LOW EFFORT
            </div>
            <div className="-mt-3 self-end whitespace-nowrap text-lg font-bold leading-6 text-neutral-400">
              HIGH EFFORT
            </div>
            <div className="ml-44 mt-20 flex flex-col items-end self-start max-md:ml-2.5 max-md:mt-10">
              <div className="self-stretch whitespace-nowrap text-lg font-medium leading-6 text-neutral-400">
                security measures
              </div>
              <div className="mt-8 whitespace-nowrap text-lg font-medium leading-6 text-neutral-400">
                messaging
              </div>
              <div className="mt-8 self-stretch whitespace-nowrap text-lg font-medium leading-6 text-neutral-400">
                push notification
              </div>
            </div>
            <div className="z-[1] mr-32 mt-0 flex flex-col items-stretch self-end max-md:mr-2.5">
              <div className="text-lg font-medium leading-6 text-neutral-400">
                search
              </div>
              <div className="mt-9 text-lg font-medium leading-6 text-neutral-400">
                managing
              </div>
              <div className="mt-8 whitespace-nowrap text-lg font-medium leading-6 text-neutral-400">
                social media integration
              </div>
            </div>
            <div className="mt-32 self-center whitespace-nowrap text-lg font-bold leading-6 text-neutral-400 max-md:mt-10">
              LOW PRIORITY
            </div>
          </div>
        </div>
        <div className="ml-4 mt-32 h-[5px] w-[1100px] max-w-full shrink-0 self-start bg-stone-500 max-md:mt-10" />
        <div className="ml-7 mt-32 flex items-start gap-5 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="text-xl font-medium leading-6 text-white text-opacity-60">
            MEET THE USERS
          </div>
        </div>
        <div className="ml-24 mt-36 w-[935px] max-w-full self-start max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex w-[57%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="flex grow flex-col max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0dcabec168550440e002b55c7a5beaf094a96eb3eae206eb1ec5836cb8af519a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dcabec168550440e002b55c7a5beaf094a96eb3eae206eb1ec5836cb8af519a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dcabec168550440e002b55c7a5beaf094a96eb3eae206eb1ec5836cb8af519a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dcabec168550440e002b55c7a5beaf094a96eb3eae206eb1ec5836cb8af519a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dcabec168550440e002b55c7a5beaf094a96eb3eae206eb1ec5836cb8af519a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dcabec168550440e002b55c7a5beaf094a96eb3eae206eb1ec5836cb8af519a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dcabec168550440e002b55c7a5beaf094a96eb3eae206eb1ec5836cb8af519a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dcabec168550440e002b55c7a5beaf094a96eb3eae206eb1ec5836cb8af519a?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
                  className="aspect-square w-36 max-w-full self-center overflow-hidden rounded-[50%] object-contain object-center"
                />
                <div className="mt-9 self-center whitespace-nowrap text-xl font-extrabold text-violet-400">
                  PRIMARY
                </div>
                <div className="mt-9 text-2xl font-medium text-zinc-100">
                  Rahul Nikam, 28
                  <br />
                </div>
                <div className="mt-3.5 self-center whitespace-nowrap text-xl font-light text-zinc-100">
                  Software Engineer
                </div>
                <div className="mt-12 self-center whitespace-nowrap text-2xl font-medium text-zinc-100 max-md:mt-10">
                  Frustrations
                </div>
                <div className="mt-12 self-stretch text-xl leading-10 text-zinc-100 text-opacity-60 max-md:mt-10">
                  He lives alone in a 2BHK apartment. <br />
                  Bored and tired of living alone.
                  <br />
                  Finds searching a roommate difficult.
                </div>
              </div>
            </div>
            <div className="ml-5 flex w-[43%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="flex grow flex-col max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf670aa4063f3102c0c04727b48f9439c562200180960be1e8c280b1f419b90a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf670aa4063f3102c0c04727b48f9439c562200180960be1e8c280b1f419b90a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf670aa4063f3102c0c04727b48f9439c562200180960be1e8c280b1f419b90a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf670aa4063f3102c0c04727b48f9439c562200180960be1e8c280b1f419b90a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf670aa4063f3102c0c04727b48f9439c562200180960be1e8c280b1f419b90a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf670aa4063f3102c0c04727b48f9439c562200180960be1e8c280b1f419b90a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf670aa4063f3102c0c04727b48f9439c562200180960be1e8c280b1f419b90a?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf670aa4063f3102c0c04727b48f9439c562200180960be1e8c280b1f419b90a?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
                  className="aspect-square w-36 max-w-full self-center overflow-hidden rounded-[50%] object-contain object-center"
                />
                <div className="mt-9 self-center whitespace-nowrap text-xl font-extrabold text-violet-400">
                  SECONDARY
                </div>
                <div className="mt-9 text-2xl font-medium text-zinc-100">
                  Naina Gupta, 22
                  <br />
                </div>
                <div className="mt-2.5 self-center whitespace-nowrap text-xl font-light text-zinc-100">
                  Student
                </div>
                <div className="mt-14 self-center whitespace-nowrap text-2xl font-medium text-zinc-100 max-md:mt-10">
                  Frustrations
                </div>
                <div className="mt-12 self-stretch text-xl leading-10 text-zinc-100 text-opacity-60 max-md:mt-10">
                  She lives far from her university. <br />
                  Needs a roommate to share expense.
                  <br />
                  Finds searching a roommate difficult.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-4 mt-64 h-[5px] w-[1100px] max-w-full shrink-0 self-start bg-stone-500 max-md:mt-10" />
        <div className="ml-7 mt-32 flex items-start gap-5 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="grow self-stretch whitespace-nowrap text-xl font-medium leading-6 text-white text-opacity-60">
            INFORMATION ARCHITECTURE
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce7c6ddccb1a22992364caef8708dfae0070d328af1f3cf2e64529d1c14fafd?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
          className="mt-24 aspect-[1.49] w-[1130px] max-w-full self-start overflow-hidden object-contain object-center max-md:mt-10"
        />
        <div className="ml-7 mt-36 flex w-[1076px] max-w-full flex-col items-stretch self-start rounded-[32px] pb-12 shadow-2xl max-md:mt-10">
          <div className="flex h-px shrink-0 flex-col max-md:max-w-full" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cdd5376755d7c380d3322e23508fb09914e14ddbdda9fe0413999dbfd101509?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
            className="mt-16 aspect-square w-14 max-w-full items-center justify-center self-center overflow-hidden object-contain object-center max-md:mt-10"
          />
          <div className="mb-5 mt-6 justify-center self-center whitespace-nowrap text-sm font-medium leading-5 tracking-[2px] text-zinc-100 text-opacity-60">
            FINAL DESIGNS
          </div>
        </div>
        <div className="ml-7 mt-32 flex items-start gap-5 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="text-xl font-medium leading-6 text-white text-opacity-60">
            FINAL DESIGNS
          </div>
        </div>
        <div className="ml-7 mt-24 self-start whitespace-nowrap text-xl font-extrabold text-violet-400 max-md:ml-2.5 max-md:mt-10">
          CHALLENGE 1
        </div>
        <div className="ml-7 mt-5 self-start whitespace-nowrap text-xl font-medium leading-8 text-zinc-100 max-md:ml-2.5">
          Comprehending the data
        </div>
        <div className="ml-7 mt-10 max-w-[518px] self-start text-xl font-medium leading-8 text-zinc-100 text-opacity-60 max-md:max-w-full">
          Creating easy-to-understand customized feed for users was a goal that
          helped drive this project as far as it did. A lot of the time, users
          don&apos;t know how to search, find or comprehend the data that apps
          throw at them. I solved this issue by giving user options to add his
          interests, personality traits and living habits.
          <br />
        </div>
        <div className="ml-7 mt-[515px] self-start whitespace-nowrap text-xl font-extrabold text-violet-400 max-md:ml-2.5 max-md:mt-10">
          CHALLENGE 2
        </div>
        <div className="ml-7 mt-5 w-64 self-start text-xl font-medium leading-8 text-zinc-100 max-md:ml-2.5">
          Seamless exploration
        </div>
        <div className="ml-7 mt-10 max-w-[516px] self-start text-xl font-medium leading-8 text-zinc-100 text-opacity-60 max-md:max-w-full">
          Before establishing a familiar navigation throughout the app, I had to
          decide what kind of navigation would work best for the user. I decided
          combine user’s needs and wants to improvise the user experience.
          Placing the navigation at the bottom and the main content at centre of
          the screen allowed me to create a natural bridge between contents of
          the screen.
          <br />
        </div>
        <div className="ml-7 mt-[501px] self-start whitespace-nowrap text-xl font-extrabold text-violet-400 max-md:ml-2.5 max-md:mt-10">
          CHALLENGE 3
        </div>
        <div className="ml-7 mt-5 w-64 self-start text-xl font-medium leading-8 text-zinc-100 max-md:ml-2.5">
          Search history
        </div>
        <div className="ml-7 mt-10 max-w-[510px] self-start text-xl font-medium leading-8 text-zinc-100 text-opacity-60 max-md:max-w-full">
          I wanted to allow users to explore their search history. It&apos;s
          cool for users to go back and see what places or profiles they&apos;ve
          viewed so far, what type, and how long ago it was. It helps you get a
          better feel for what kind of places you&apos;ve been viewing lately at
          a glance without having to go into your profile.
          <br />
        </div>
        <div className="ml-7 mt-[531px] self-start whitespace-nowrap text-xl font-extrabold text-violet-400 max-md:ml-2.5 max-md:mt-10">
          CHALLENGE 4
        </div>
        <div className="ml-7 mt-5 self-start text-xl font-medium leading-8 text-zinc-100 max-md:max-w-full">
          “What kind of people do you like to be around”
        </div>
        <div className="ml-7 mt-10 max-w-[513px] self-start text-xl font-medium leading-8 text-zinc-100 text-opacity-60 max-md:max-w-full">
          Ahh, the age old question... &quot;Which kind of people interests
          you?&quot; or &quot;What kind of people do you like to be
          around?&quot; Answering this question is no longer an issue as users
          are able to easily share both the profiles and the housing details
          with one tap, allowing you to share with others exactly the perfect
          kind of place and roommate you can enjoy time with.
          <br />
        </div>
        <div className="ml-4 mt-[597px] flex h-px w-[1100px] max-w-full shrink-0 flex-col self-start bg-zinc-100 bg-opacity-20 max-md:mt-10" />
        <div className="ml-7 mt-32 flex items-start gap-5 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="text-xl font-medium leading-6 text-white text-opacity-60">
            TAKEAWAYS
          </div>
        </div>
        <div className="ml-16 mt-14 max-w-[993px] self-start text-xl font-medium leading-8 text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
          Being someone who was once in search for a room and roommate herself,
          working on Homie was incredibly rewarding. I got to experiment with
          some of the new Figma&apos;s features, and narrow down my design
          process. Although I was not able to fully flesh out other features and
          designs I wanted to within Homie due to time constraints, it&apos;s
          not to say I won&apos;t try to incorporate them in future projects
          down the line.
          <br />
        </div>
      </div>
    </main>
  );
}

export default HomiePage;
