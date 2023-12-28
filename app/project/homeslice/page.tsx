/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import HeroGradientBG from "@/components/HeroGradientBG";
import OverviewSection from "@/components/project/OverviewSection";
import ProjectHero from "@/components/project/ProjectHero";
import React from "react";

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
      <div className="container mx-auto flex flex-col items-center px-4">
        <OverviewSection
          overview={[
            "Homeslice is a community-driven platform that connects students with local families or individuals who are keen to share their cultural traditions.",
            "An intuitive and user-friendly interface, empowering students to connect with families open to hosting them for cultural celebrations. This aims to provide an immersive and enriching experience, effectively alleviating homesickness by fostering new cultural immersion and shared celebrations with a community.",
          ]}
          role="Product Designer"
          research="User Research, Interaction design, Visual design, Prototyping & Testing"
          timeline="Nov - Dec 2023"
        />
        <div className="ml-28 mt-28 flex items-start gap-5 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="self-stretch text-xl font-medium leading-6 text-white text-opacity-60">
            KICKOFF
          </div>
        </div>
        <div className="ml-28 mt-14 max-w-[591px] self-start text-lg font-medium leading-8 text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
          <span className="text-xl">
            The design journey was initiated by addressing these questions
            first:
          </span>
          <br />
          <ol>
            <li>
              <span className="text-2xl leading-[50px] text-whitesmoke-100">
                Who is our target audience?
              </span>
            </li>
            <li>
              <span className="text-2xl leading-[50px] text-whitesmoke-100">
                Why only them?{" "}
              </span>
            </li>
            <li>
              <span className="text-2xl leading-[50px] text-whitesmoke-100">
                How is the problem affecting the target audience?
              </span>
            </li>
            <li>
              <span className="text-2xl leading-[50px] text-whitesmoke-100">
                What are the effects of the problem on the target audience?
              </span>
            </li>
          </ol>
          <br />
          <span className="text-xl">
            After conducting surveys and one-on-one interviews to understand the
            problem, it became evident that cultural shock played a major factor
            in inducing the feeling of homesickness.{" "}
          </span>
          <br />
        </div>
        <div className="mt-28 flex h-px w-[1276px] max-w-full shrink-0 flex-col self-center bg-zinc-100 bg-opacity-40 max-md:mt-10" />
        <div className="ml-28 mt-28 flex items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="justify-center text-xl font-medium leading-6 text-whitesmoke-100 text-opacity-40">
            THE PROBLEM
          </div>
        </div>
        <div className="ml-28 mt-12 max-w-[475px] justify-center self-start text-2xl font-medium leading-[62px] tracking-normal text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
          This wasn’t just a typical loneliness.
        </div>
        <div className="mt-24 flex w-full max-w-[1211px] items-start justify-between gap-5 self-center max-md:mt-10 max-md:max-w-full max-md:flex-wrap">
          <div className="shrink grow basis-auto justify-center text-xl font-medium leading-7 text-whitesmoke-100">
            Navigating the Emotional Maze : A Tangle of Homesickness Constraints
          </div>
          <div className="shrink grow basis-auto justify-center self-stretch text-xl leading-7 text-whitesmoke-100 text-opacity-60 max-md:max-w-full">
            Being away from the family, transitioning to a new environment,
            cultural norms and lack of support system were some of the factors
            which led to homesickness among international students.
          </div>
        </div>
        <div className="mr-20 mt-14 max-w-[517px] justify-center self-end text-xl leading-7 text-white max-md:mr-2.5 max-md:mt-10 max-md:max-w-full">
          {/* <div _text="" /> */}
        </div>
        <div className="ml-28 mt-16 flex items-center justify-between gap-5 self-start rounded-3xl bg-zinc-100 bg-opacity-0 px-11 py-9 max-md:mt-10 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c38268bec2fccd1f83c3654ca15f4de60ff56dfd96981269c6db2cf05f73cac?"
            className="my-auto aspect-square w-7 max-w-full shrink-0 overflow-hidden object-contain object-center"
          />
          <div className="shrink grow basis-auto justify-center self-stretch text-lg italic leading-7 text-whitesmoke-100 text-opacity-90 max-md:max-w-full">
            <span className="text-whitesmoke-100">
              &quot;The struggle is not just in understanding their culture{" "}
            </span>
            but in preserving mine.{" "}
            <span className="text-whitesmoke-100">
              Sometimes, I feel so lost and start missing my home.”
            </span>
          </div>
        </div>
        <div className="ml-28 mt-6 flex items-center justify-between gap-5 self-start rounded-3xl bg-zinc-100 bg-opacity-0 px-11 py-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/31092e19c1677237dcf3d269b67649d60547aec66e16615ef2522c1b8bc7a443?"
            className="my-auto aspect-square w-7 max-w-full shrink-0 overflow-hidden object-contain object-center"
          />
          <div className="shrink grow basis-auto justify-center self-stretch text-lg italic leading-7 text-white max-md:max-w-full">
            &quot;Getting used to the States was tough; It took a really good
            amount of time to{" "}
            <span className="text-white">adjust to the cultural shift</span>
          </div>
        </div>
        <div className="ml-28 mt-6 flex items-center justify-between gap-5 self-start rounded-3xl bg-zinc-100 bg-opacity-0 px-11 py-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c5e2c74df66ec9247f9e2769a499bfdc978cfe0a117a0852fae5a5fb889dae?"
            className="my-auto aspect-square w-7 max-w-full shrink-0 overflow-hidden object-contain object-center"
          />
          <div className="shrink grow basis-auto justify-center self-stretch text-lg italic leading-7 text-white max-md:max-w-full">
            &quot;
            <span className="text-white">
              Adapting to life here was a bit of a challenge
            </span>
          </div>
        </div>
        <div className="mt-24 h-px shrink-0 self-stretch max-md:mt-10 max-md:max-w-full" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f7f8c543f905e52054013b199e0befeff16442622e4de2bd83f9a40548b4e65?"
          className="mt-10 aspect-square w-14 max-w-full items-center justify-center self-center overflow-hidden object-contain object-center"
        />
        {/* <div className="mt-8 justify-center self-center whitespace-nowrap text-center text-xl font-medium leading-7 text-whitesmoke-100 text-opacity-40">
          HOW MIGHT WE
        </div>
        <div className="mt-11 max-w-[1180px] justify-center self-center text-center text-4xl font-medium leading-[56px] text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
          How might we alleviate the impact of homesickness created by cultural
          shock on Indian international students?
        </div>
        <div className="ml-28 mt-64 flex items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="grow justify-center self-stretch whitespace-nowrap text-xl font-medium leading-6 text-whitesmoke-100 text-opacity-40">
            USER RESEARCH
          </div>
        </div>
        <div className="ml-28 mt-11 max-w-[673px] self-start text-xl leading-7 text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
          To better grasp the challenges of homesickness in our target audience,
          we conducted one-on-one interviews. The 8 participants we interviewed
          exhibited varying degrees of homesickness during the initial weeks of
          college.
        </div>
        <div className="mr-40 mt-16 flex w-[684px] max-w-full flex-col items-start self-end rounded-3xl border border-solid border-stone-500 py-11 pl-8 pr-16 max-md:mr-2.5 max-md:mt-10 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e9301300d13bc69c47afc1eb751e47fd6a841e2e49e2510f64f7a4fe9b26475?"
            className="aspect-square w-9 max-w-full overflow-hidden object-contain object-center"
          />
          <div className="mt-11 justify-center self-stretch text-xl leading-6 text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
            Lack of support system
          </div>
          <div className="mt-7 self-stretch text-lg leading-7 text-whitesmoke-100 max-md:max-w-full">
            When students have a strong support network, they often experience a
            smoother transition. The design solution should aim at helping
            students feel{" "}
            <span className="text-whitesmoke-100">
              connected to their friends, and form a support network to abate
              homesickness.
            </span>
            <br />
          </div>
        </div>
        <div className="mr-40 mt-8 flex w-[684px] max-w-full flex-col items-start self-end rounded-3xl border border-solid border-stone-500 py-11 pl-8 pr-14 max-md:mr-2.5 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/392e8bd2e19cf1f281faa765986bcda09e01590c316f96e8b7c5dfa9ee52e4d5?"
            className="aspect-square w-9 max-w-full overflow-hidden object-contain object-center"
          />
          <div className="mt-11 justify-center self-stretch text-xl leading-6 text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
            Cultural Differences
          </div>
          <div className="mt-8 self-stretch text-lg leading-7 text-whitesmoke-100 max-md:max-w-full">
            <div />
          </div>
        </div>
        <div className="mr-40 mt-8 flex w-[684px] max-w-full flex-col items-start self-end rounded-3xl border border-solid border-stone-500 py-11 pl-8 pr-20 max-md:mr-2.5 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e2fe97b562523ad5ca1aa2202c0610f25b7f716a2b4803422ef115e5083caee?"
            className="aspect-square w-9 max-w-full overflow-hidden object-contain object-center"
          />
          <div className="mt-11 justify-center self-stretch text-xl leading-6 text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
            Inability to Engage in Familiar Activities
          </div>
          <div className="mt-7 self-stretch text-lg leading-7 text-whitesmoke-100 max-md:max-w-full">
            <div />
          </div>
        </div>
        <div className="mr-40 mt-8 flex w-[684px] max-w-full flex-col items-start self-end rounded-3xl border border-solid border-stone-500 py-11 pl-8 pr-16 max-md:mr-2.5 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff7cdb25569e35716dbdc7a9c1d534f92ed13e904a3c6d6515d08248477f9dc5?"
            className="aspect-square w-9 max-w-full overflow-hidden object-contain object-center"
          />
          <div className="mt-11 justify-center self-stretch text-xl leading-6 text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
            Transition to Living Independently
          </div>
          <div className="mb-7 mt-7 self-stretch text-lg leading-7 text-whitesmoke-100 max-md:max-w-full">
            <div />
          </div>
        </div>
        <div className="mt-40 w-[1059px] max-w-full self-center max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex w-[57%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="flex items-stretch gap-px max-md:max-w-full max-md:flex-wrap">
                <div className="h-[647px] w-px shrink-0 bg-stone-500" />
                <div className="mt-4 flex flex-col items-center self-start max-md:max-w-full">
                  <div className="flex w-[519px] max-w-full items-start justify-between gap-5 max-md:flex-wrap">
                    <div className="text-lg leading-6 text-white">WEEK 1</div>
                    <div className="self-stretch text-lg leading-6 text-white">
                      WEEK 2
                    </div>
                    <div className="self-stretch text-lg leading-6 text-white">
                      WEEK 3
                    </div>
                    <div className="text-lg leading-6 text-white">WEEK 4</div>
                  </div>
                  <div className="mt-16 flex w-[155px] max-w-full flex-col items-start self-start rounded-3xl border border-solid border-zinc-800 bg-zinc-900 py-6 pl-3.5 max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/df385e2bf0bb46978c34be7aa21d28bb64a83cbe3c8a54565880aad4c4e0fa58?"
                      className="aspect-square w-[38px] max-w-full overflow-hidden object-contain object-center"
                    />
                    <div className="mt-5 text-lg leading-6 text-white">
                      Domain Space and Requirements Gathering
                    </div>
                  </div>
                  <div className="mt-8 flex w-[448px] max-w-full flex-col items-start self-end">
                    <div className="flex w-[155px] max-w-full flex-col items-start rounded-3xl border border-solid border-zinc-800 bg-zinc-900 py-6 pl-4">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8c38e74fa7b0ad4ef6b6d830f1f63e069dcad2878340afa55250a2a55c621e7?"
                        className="aspect-square w-[38px] max-w-full overflow-hidden object-contain object-center"
                      />
                      <div className="mt-5 text-lg leading-6 text-white">
                        Explorative Design and Rapid Ideation
                      </div>
                    </div>
                    <div className="mt-8 flex w-[295px] max-w-full flex-col items-start self-end rounded-3xl border border-solid border-zinc-800 bg-zinc-900 py-6 pl-4 pr-14 max-md:pr-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2056b4564d4cc61280a60146b795c0404cad51c2e49c1ae2ddd96bf4ed1185da?"
                        className="aspect-square w-[38px] max-w-full overflow-hidden object-contain object-center"
                      />
                      <div className="mt-5 self-stretch text-lg leading-6 text-white">
                        Sketching , Prototyping and Internal Walkthrough
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-5 flex w-[43%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="flex grow items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                <div className="h-[800px] w-px shrink-0 bg-stone-500" />
                <div className="mt-4 flex flex-col items-center self-start max-md:max-w-full">
                  <div className="flex w-[359px] max-w-full items-stretch justify-between gap-5">
                    <div className="self-start text-lg leading-6 text-white">
                      WEEK 5
                    </div>
                    <div className="text-lg leading-6 text-white">WEEK 6</div>
                    <div className="self-start text-lg leading-6 text-white">
                      WEEK 7
                    </div>
                  </div>
                  <div className="mt-[588px] flex flex-col items-start self-stretch rounded-3xl border border-solid border-zinc-800 bg-zinc-900 pb-11 pl-6 pr-20 pt-6 max-md:mt-10 max-md:max-w-full max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/45156154064a94a27a3032ad7808dc97a68cffaba2fe35d5415d76b0f7b08db6?"
                      className="aspect-square w-[38px] max-w-full overflow-hidden object-contain object-center"
                    />
                    <div className="mt-6 text-lg leading-6 text-white">
                      Testing , Refining and Launching
                    </div>
                  </div>
                </div>
                <div className="h-[688px] w-px shrink-0 self-start bg-stone-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 flex h-px w-[1276px] max-w-full shrink-0 flex-col self-center bg-zinc-100 bg-opacity-40 max-md:mt-10" />
        <div className="ml-28 mt-32 flex items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="grow justify-center self-stretch whitespace-nowrap text-xl font-medium leading-6 text-whitesmoke-100 text-opacity-40">
            BRAINSTORMING AND IDEATION
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="..."
          className="mt-24 aspect-[1.01] w-[1125px] max-w-full self-center overflow-hidden object-contain object-center max-md:mt-10"
        />
        <div className="mt-36 flex h-px w-[1276px] max-w-full shrink-0 flex-col self-center bg-zinc-100 bg-opacity-40 max-md:mt-10" />
        <div className="ml-28 mt-28 flex items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="grow justify-center self-stretch whitespace-nowrap text-xl font-medium leading-6 text-whitesmoke-100 text-opacity-40">
            PROPOSED SOLUTION
          </div>
        </div>
        <div className="ml-28 mt-16 max-w-[592px] justify-center self-start text-xl font-medium leading-7 text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
          <div />
        </div>
        <div className="ml-28 mt-20 max-w-[475px] justify-center self-start text-2xl font-medium leading-[62px] tracking-normal text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
          Our application facilitates two flows
        </div>
        <div className="mr-24 mt-7 flex w-[684px] max-w-full flex-col items-start self-end rounded-3xl bg-zinc-900 py-11 pl-12 pr-20 max-md:mr-2.5 max-md:px-5">
          <div className="flex items-stretch justify-between gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee441da99d89e8c8e54c83012ca89ec2143669ebf61fa4b9265b8f49e0d3962e?"
              className="aspect-square w-8 max-w-full shrink-0 items-center justify-center overflow-hidden object-contain object-center"
            />
            <div className="mt-2.5 grow self-start whitespace-nowrap text-xl leading-6 text-white">
              Hosting an event or a party
            </div>
          </div>
          <div className="mt-11 w-[501px] max-w-full self-end text-lg leading-6 text-whitesmoke-100 text-opacity-60 max-md:mt-10">
            The user will start by signing up and establishing his personalized
            profile. Once the profile is set, he can effortlessly create a post
            to share details of his upcoming party or event.
          </div>
        </div>
        <div className="mr-20 mt-9 flex w-[684px] max-w-full flex-col items-stretch self-end rounded-3xl bg-zinc-900 py-11 pl-12 pr-20 max-md:mr-2.5 max-md:px-5">
          <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0763bdba66e0782492ef12e8740b1621d474919cbc37b529acab70b6bca15de9?"
              className="aspect-square w-8 max-w-full shrink-0 items-center justify-center overflow-hidden object-contain object-center"
            />
            <div className="mt-2.5 shrink grow basis-auto self-start text-xl leading-6 text-white max-md:max-w-full">
              Joining an event or attending an event
            </div>
          </div>
          <div className="mt-11 w-[501px] max-w-full self-end text-lg leading-6 text-whitesmoke-100 text-opacity-60 max-md:mt-10">
            The user will begin his journey by signing up. Once the signup
            process is completed, they can explore a variety of events on the
            homescreen. From there, they can simply choose the one that
            resonates with them and join.
          </div>
        </div>
        <div className="mt-52 flex h-px w-[1276px] max-w-full shrink-0 flex-col self-center bg-zinc-100 bg-opacity-40 max-md:mt-10" />
        <div className="ml-28 mt-28 flex items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="grow justify-center self-stretch whitespace-nowrap text-xl font-medium leading-6 text-whitesmoke-100 text-opacity-40">
            PRODUCT EVALUATIONS
          </div>
        </div>
        <div className="ml-28 mt-14 max-w-[475px] justify-center self-start text-2xl font-medium leading-[62px] tracking-normal text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
          User Evaluations
        </div>
        <div className="mt-7 w-full max-w-[1224px] self-center max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex w-[45%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="justify-center text-xl font-medium leading-7 text-whitesmoke-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
                To gain insights into how potential users interact with our
                solution, we performed usability testing with four individuals
                who have either experienced homesickness in the past and are
                currently feeling it. <br />
                <br />
                We assessed the system&apos;s user-friendliness by having
                participants explore the application and complete specific
                tasks.
              </div>
            </div>{" "}
            <div className="ml-5 flex w-[55%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="mt-40 flex w-full grow items-start justify-between gap-5 rounded-3xl bg-zinc-900 px-7 py-9 max-md:mt-10 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="whitespace-nowrap text-xl leading-6 text-white">
                  1.
                </div>{" "}
                <div className="shrink grow basis-auto self-stretch text-xl leading-6 text-white max-md:max-w-full">
                  As a new user on the application, complete the signup process.
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="mr-16 mt-6 flex items-start gap-4 self-end rounded-3xl bg-zinc-900 px-7 py-12 max-md:mr-2.5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="whitespace-nowrap text-xl leading-6 text-white">
            2.
          </div>{" "}
          <div className="shrink grow basis-auto self-stretch text-xl leading-6 text-white">
            Complete the flow for hosting an event
          </div>
        </div>{" "}
        <div className="mr-16 mt-6 flex items-start gap-4 self-end rounded-3xl bg-zinc-900 px-7 py-12 max-md:mr-2.5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="whitespace-nowrap text-xl leading-6 text-white">
            3.
          </div>{" "}
          <div className="shrink grow basis-auto self-stretch text-xl leading-6 text-white">
            Register for a private event
          </div>
        </div>{" "}
        <div className="mr-16 mt-6 flex items-start gap-4 self-end rounded-3xl bg-zinc-900 px-7 py-12 max-md:mr-2.5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="whitespace-nowrap text-xl leading-6 text-white">
            4.
          </div>{" "}
          <div className="shrink grow basis-auto self-stretch text-xl leading-6 text-white">
            Join an event of your choice
          </div>
        </div>{" "}
        <div className="ml-28 mt-24 max-w-[475px] justify-center self-start text-2xl font-medium leading-[62px] tracking-normal text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
          Expert Evaluations
        </div>{" "}
        <div className="mt-5 w-full max-w-[1224px] self-center max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex w-[45%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="justify-center text-xl font-medium leading-7 text-whitesmoke-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
                We asked four professionals to assess our app. We evaluated our
                app using experts in the area of human-computer interaction
                (HCI). <br />
                <br />
                Our expertise included a Lead UX Designer, a Design Consultant,
                and two second-year master&apos;s students in the discipline of
                HCI. After providing a quick overview of the app&apos;s idea, we
                asked participants to complete four tasks, as a part of the
                evaluation
              </div>
            </div>{" "}
            <div className="ml-5 flex w-[55%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="mt-44 flex w-full grow items-start justify-between gap-5 rounded-3xl bg-zinc-900 px-7 py-12 max-md:mt-10 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="whitespace-nowrap text-xl leading-6 text-white">
                  1.
                </div>{" "}
                <div className="shrink grow basis-auto self-stretch text-xl leading-6 text-white">
                   As a new user, register in the application.
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="mr-16 mt-6 flex items-start gap-4 self-end rounded-3xl bg-zinc-900 px-7 py-12 max-md:mr-2.5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="whitespace-nowrap text-xl leading-6 text-white">
            2.
          </div>{" "}
          <div className="shrink grow basis-auto self-stretch text-xl leading-6 text-white">
            Join a private event in the application
          </div>
        </div>{" "}
        <div className="mr-16 mt-6 flex items-start gap-4 self-end rounded-3xl bg-zinc-900 px-7 py-12 max-md:mr-2.5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="whitespace-nowrap text-xl leading-6 text-white">
            3.
          </div>{" "}
          <div className="shrink grow basis-auto self-stretch text-xl leading-6 text-white max-md:max-w-full">
            Host an event by creating a post in the application.
          </div>
        </div>{" "}
        <div className="mr-16 mt-6 flex items-start gap-4 self-end rounded-3xl bg-zinc-900 px-7 py-12 max-md:mr-2.5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="whitespace-nowrap text-xl leading-6 text-white">
            4.
          </div>{" "}
          <div className="w-full self-stretch text-xl leading-6 text-white">
            Accept an event invite.
          </div>
        </div>{" "}
        <div className="mt-32 max-w-[999px] justify-center self-center text-center text-2xl font-medium leading-[62px] tracking-normal text-whitesmoke-100 max-md:mt-10 max-md:max-w-full">
          The performance breakdown of each task, by each expert, is illustrated
          below
        </div>{" "}
        <div className="mt-16 w-[753px] max-w-full self-center max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex w-[37%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="flex grow items-stretch justify-between gap-5 max-md:mt-10">
                <div className="h-[404px] w-px shrink-0 bg-stone-500" />{" "}
                <div className="mt-4 flex grow basis-[0%] flex-col items-stretch self-start">
                  <div className="whitespace-nowrap text-lg leading-6 text-white">
                    EXPERTS
                  </div>{" "}
                  <div className="mt-14 whitespace-nowrap text-center text-lg font-medium leading-6 text-white max-md:mt-10">
                    Expert - 1
                  </div>{" "}
                  <div className="mt-16 whitespace-nowrap text-center text-lg font-medium leading-6 text-white max-md:mt-10">
                    Expert - 2
                  </div>{" "}
                  <div className="mt-16 whitespace-nowrap text-center text-lg font-medium leading-6 text-white max-md:mt-10">
                    Expert - 3
                  </div>{" "}
                  <div className="mt-16 whitespace-nowrap text-center text-lg font-medium leading-6 text-white max-md:mt-10">
                    Expert - 4
                  </div>
                </div>{" "}
                <div className="h-[404px] w-px shrink-0 bg-stone-500" />{" "}
                <div className="mt-4 flex grow basis-[0%] flex-col items-stretch self-start">
                  <div className="whitespace-nowrap text-lg leading-6 text-white">
                    TASK - 1
                  </div>{" "}
                  <div className="mt-14 whitespace-nowrap text-center text-lg font-bold leading-6 text-amber-600 max-md:mt-10">
                    SUCESS
                  </div>{" "}
                  <div className="mt-16 whitespace-nowrap text-center text-lg font-bold leading-6 text-amber-600 max-md:mt-10">
                    SUCESS
                  </div>{" "}
                  <div className="mt-16 whitespace-nowrap text-center text-lg font-bold leading-6 text-amber-600 max-md:mt-10">
                    SUCESS
                  </div>{" "}
                  <div className="mt-16 whitespace-nowrap text-center text-lg font-bold leading-6 text-amber-600 max-md:mt-10">
                    SUCESS
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="ml-5 flex w-[63%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="flex grow items-start justify-between gap-0 max-md:mt-10 max-md:max-w-full max-md:flex-wrap">
                <div className="h-[404px] w-px shrink-0 self-stretch bg-stone-500" />{" "}
                <div className="mt-4 flex grow basis-[0%] flex-col items-stretch self-start">
                  <div className="self-center whitespace-nowrap text-lg leading-6 text-white">
                    TASK - 2
                  </div>{" "}
                  <div className="mt-14 self-center whitespace-nowrap text-center text-lg font-bold leading-6 text-amber-600 max-md:mt-10">
                    SUCESS
                  </div>{" "}
                  <div className="mt-16 self-center whitespace-nowrap text-center text-lg font-bold leading-6 text-amber-600 max-md:mt-10">
                    SUCESS
                  </div>{" "}
                  <div className="mt-14 items-stretch justify-center whitespace-nowrap border border-solid border-zinc-800 bg-zinc-900 px-11 py-5 text-center text-lg font-medium leading-6 text-whitesmoke-100 max-md:mt-10 max-md:px-5">
                    FAILURE
                  </div>{" "}
                  <div className="mt-7 items-stretch justify-center whitespace-nowrap border border-solid border-zinc-800 bg-zinc-900 px-11 py-5 text-center text-lg font-medium leading-6 text-whitesmoke-100 max-md:px-5">
                    FAILURE
                  </div>
                </div>{" "}
                <div className="h-[404px] w-px shrink-0 self-stretch bg-stone-500" />{" "}
                <div className="flex grow basis-[0%] flex-col items-stretch self-stretch pb-12">
                  <div className="z-[1] flex items-stretch justify-between gap-5 pr-10 max-md:pr-5">
                    <div className="mt-4 flex grow basis-[0%] flex-col items-stretch self-start">
                      <div className="whitespace-nowrap text-lg leading-6 text-white">
                        TASK - 3
                      </div>{" "}
                      <div className="mt-14 whitespace-nowrap text-center text-lg font-bold leading-6 text-amber-600 max-md:mt-10">
                        SUCESS
                      </div>{" "}
                      <div className="mt-16 whitespace-nowrap text-center text-lg font-bold leading-6 text-amber-600 max-md:mt-10">
                        SUCESS
                      </div>{" "}
                      <div className="mt-16 whitespace-nowrap text-center text-lg font-bold leading-6 text-amber-600 max-md:mt-10">
                        SUCESS
                      </div>
                    </div>{" "}
                    <div className="h-[404px] w-px shrink-0 bg-stone-500" />{" "}
                    <div className="mt-4 flex grow basis-[0%] flex-col items-stretch self-start">
                      <div className="whitespace-nowrap text-lg leading-6 text-white">
                        TASK - 4
                      </div>{" "}
                      <div className="mt-14 whitespace-nowrap text-center text-lg font-bold leading-6 text-amber-600 max-md:mt-10">
                        SUCESS
                      </div>{" "}
                      <div className="mt-16 whitespace-nowrap text-center text-lg font-bold leading-6 text-amber-600 max-md:mt-10">
                        SUCESS
                      </div>{" "}
                      <div className="mt-16 whitespace-nowrap text-center text-lg font-bold leading-6 text-amber-600 max-md:mt-10">
                        SUCESS
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex items-center justify-between gap-5">
                    <div className="my-auto text-center text-lg font-bold leading-6 text-amber-600">
                      SUCESS
                    </div>{" "}
                    <div className="grow items-stretch justify-center self-stretch whitespace-nowrap border border-solid border-zinc-800 bg-zinc-900 px-11 py-5 text-center text-lg font-medium leading-6 text-whitesmoke-100 max-md:px-5">
                      FAILURE
                    </div>
                  </div>
                </div>{" "}
                <div className="h-[404px] w-px shrink-0 self-stretch bg-stone-500" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}

export default HomeslicePage;
