import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col items-stretch bg-stone-950 pb-12">
      <div className="mb-[6166px] mt-7 flex w-full max-w-[1440px] flex-col self-center px-5 max-md:mb-10 max-md:max-w-full">
        <div className="ml-32 mt-96 flex items-start gap-5 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />
          <div className="self-stretch text-xl font-medium leading-6 text-white text-opacity-60">
            KICKOFF
          </div>
        </div>
        <div className="ml-32 mt-14 max-w-[593px] self-start text-lg font-medium leading-8 text-zinc-100 max-md:mt-10 max-md:max-w-full">
          <span className="text-xl">
            Before initiating the design process, we needed to answer some
            important questions.
          </span>
          <br />
          <ol>
            <li>
              <span className="text-2xl leading-[50px] text-zinc-100">
                Who is our target audience?{" "}
              </span>
            </li>
            <li>
              <span className="text-2xl leading-[50px] text-zinc-100">
                What is the reason for choosing them as the target audience?
              </span>
            </li>
            <li>
              <span className="text-2xl leading-[50px] text-zinc-100">
                How will the application help them with the problem?{" "}
              </span>
            </li>
            <li>
              <span className="text-2xl leading-[50px] text-zinc-100">
                What is the scope of this project?{" "}
              </span>{" "}
            </li>
          </ol>
          <br />
          <br />
          <span className="text-xl">
            We conducted eight observations at different locations to grasp
            people's eating habits. Subsequently, we conducted interviews to
            delve deeper into the subject, revealing a clear picture of how
            people tend to consume a significant amount of sugar.
          </span>
          <br />
        </div>{" "}
        <div className="mt-32 flex h-px w-[1100px] max-w-full shrink-0 flex-col self-center bg-zinc-100 bg-opacity-40 max-md:mt-10" />{" "}
        <div className="ml-28 mt-28 flex items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />{" "}
          <div className="justify-center text-xl font-medium leading-6 text-zinc-100 text-opacity-40">
            THE PROBLEM
          </div>
        </div>{" "}
        <div className="ml-28 mt-12 max-w-[520px] justify-center self-start text-2xl font-medium leading-[62px] tracking-normal text-zinc-100 max-md:mt-10 max-md:max-w-full">
          This went beyond ordinary sugar consumption.
        </div>{" "}
        <div className="mt-24 w-full max-w-[1189px] self-center max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex w-[55%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="justify-center text-xl font-medium leading-7 text-zinc-100 max-md:mt-10 max-md:max-w-full">
                Exploring the Sweetness Spectrum: Navigating Constraints in the
                Realm of Sweet Indulgence.
              </div>
            </div>{" "}
            <div className="ml-5 flex w-[45%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="text-xl leading-7 text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
                The younger generation, especially students, often struggle to
                maintain a diet that has a good amount of protein, fiber, and
                just sufficient carbohydrates and sugar, to put simply a healthy
                diet.{" "}
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="mr-16 mt-10 max-w-[520px] self-end text-xl leading-7 text-zinc-100 text-opacity-60 max-md:mr-2.5 max-md:max-w-full">
          Their busy schedules, limited time, and the omnipresence of
          sugar-packed, pre-packaged foods have created a scenario where
          excessive sugar consumption is the norm.
        </div>{" "}
        <div className="mr-16 mt-11 max-w-[519px] self-end text-xl leading-7 text-zinc-100 max-md:mr-2.5 max-md:mt-10 max-md:max-w-full">
          Therefore, we narrowed down our focus from young adults to university
          students.{" "}
          <span className="text-zinc-100">
            We aimed to pinpoint those among this group who genuinely desire to
            improve their dietary habits but lack the knowledge and guidance to
            do so effectively.
          </span>
        </div>{" "}
        <div className="ml-28 mt-20 flex items-center justify-between gap-5 self-start rounded-3xl bg-zinc-100 bg-opacity-0 px-11 py-9 max-md:mt-10 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c410bb44d55e47605f0cd2c0e5315a2bb19f2f113e0e22000e3e4f13e570f14?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
            className="my-auto aspect-square w-7 max-w-full shrink-0 overflow-hidden object-contain object-center"
          />{" "}
          <div className="shrink grow basis-auto justify-center self-stretch text-lg italic leading-7 text-zinc-100 max-md:max-w-full">
            “I try to limit my sugar intake, but{" "}
            <span className="text-zinc-100">
              I'm not sure how much sugar is in what I'm eating
            </span>
          </div>
        </div>{" "}
        <div className="ml-28 mt-6 flex items-center justify-between gap-5 self-start rounded-md bg-zinc-100 bg-opacity-0 px-11 py-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/418778b8ab7ff3d071a8227e647ea442fd666472b402abfb3cebb8d03eb7d1f1?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
            className="my-auto aspect-square w-7 max-w-full shrink-0 overflow-hidden object-contain object-center"
          />{" "}
          <div className="shrink grow basis-auto justify-center self-stretch text-lg italic leading-7 text-zinc-100 max-md:max-w-full">
            “I try to limit my sugar intake, but{" "}
            <span className="text-zinc-100">
              I'm not sure how much sugar is in what I'm eating
            </span>
          </div>
        </div>{" "}
        <div className="ml-28 mt-6 flex items-center justify-between gap-5 self-start rounded-md bg-zinc-100 bg-opacity-0 px-11 py-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/54beeb602d370d3a63be5646f01199ed0eedfe398303c84f7cad873d9edfb400?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
            className="my-auto aspect-square w-7 max-w-full shrink-0 overflow-hidden object-contain object-center"
          />{" "}
          <div className="shrink grow basis-auto justify-center self-stretch text-lg italic leading-7 text-zinc-100 max-md:max-w-full">
            &quot;In the sweetness,{" "}
            <span className="text-zinc-100">
              we might not notice how much sugar quietly adds up, impacting our
              health.
            </span>
          </div>
        </div>{" "}
        <div className="mt-24 h-px shrink-0 self-stretch max-md:mt-10 max-md:max-w-full" />{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5556086236723f08f87241411a8fc62853f0c4de2588226c848fb2ca99d5ebd7?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
          className="mt-10 aspect-square w-14 max-w-full items-center justify-center self-center overflow-hidden object-contain object-center"
        />{" "}
        <div className="mt-8 justify-center self-center whitespace-nowrap text-center text-xl font-medium leading-7 text-zinc-100 text-opacity-40">
          HOW MIGHT WE
        </div>{" "}
        <div className="mt-11 max-w-[1253px] justify-center self-center text-center text-4xl font-medium leading-[56px] text-zinc-100 max-md:mt-10 max-md:max-w-full">
          How might we tackle high sugar consumption for the students, who want
          to eat healthy food but struggles to find such food items?
        </div>{" "}
        <div className="ml-32 mt-60 flex items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />{" "}
          <div className="grow justify-center self-stretch whitespace-nowrap text-xl font-medium leading-6 text-zinc-100 text-opacity-40">
            USER RESEARCH
          </div>
        </div>{" "}
        <div className="ml-32 mt-11 max-w-[662px] self-start text-xl leading-7 text-zinc-100 max-md:mt-10 max-md:max-w-full">
          To better grasp the challenges of high sugar consumption in our target
          audience, we conducted one-on-one interviews. The 8 participants we
          interviewed exhibited varying degrees of homesickness during the
          initial weeks of college.
        </div>{" "}
        <div className="mr-36 mt-16 flex w-[684px] max-w-full flex-col items-start self-end rounded-3xl border border-solid border-stone-500 py-11 pl-12 pr-16 max-md:mr-2.5 max-md:mt-10 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ce24472274cc3167d463267e5c3e9b4380eda40b96a8eb652a5b92767c41545?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
            className="aspect-square w-[45px] max-w-full overflow-hidden object-contain object-center"
          />{" "}
          <div className="mt-9 justify-center self-stretch text-xl leading-6 text-zinc-100 max-md:max-w-full">
            Easy and quick access to nutritional data of the food item
          </div>{" "}
          <div className="mb-6 mt-7 self-stretch text-lg leading-7 text-zinc-100 max-md:max-w-full">
            When the user would be in a hurry and would not have time to go
            through the nutritional data they would{" "}
            <span className="text-zinc-100">
              need an easy and quick way to know about the nutritional values of
              the food items
            </span>
          </div>
        </div>{" "}
        <div className="mr-36 mt-8 flex w-[684px] max-w-full flex-col items-start self-end rounded-3xl border border-solid border-stone-500 py-11 pl-12 pr-20 max-md:mr-2.5 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9a54e4ecff399835c43f10ce1c769f707902ef4bd5fa3593fbe88f47c13b59a?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
            className="aspect-square w-[37px] max-w-full overflow-hidden object-contain object-center"
          />{" "}
          <div className="mt-11 justify-center self-stretch text-xl leading-6 text-zinc-100 max-md:mt-10 max-md:max-w-full">
            Tracking user’s sugar intake
          </div>{" "}
          <div className="mt-7 self-stretch text-lg leading-7 text-zinc-100 max-md:max-w-full">
            The user faces challenges in keeping track of their daily sugar
            intake and determining how much more they can consume. This becomes
            a cumbersome task, prompting the{" "}
            <span className="text-zinc-100">
              need for a convenient solution to monitor and manage their sugar
              consumption effectively
            </span>
          </div>
        </div>{" "}
        <div className="mr-36 mt-8 flex w-[684px] max-w-full flex-col items-start self-end rounded-3xl border border-solid border-stone-500 py-8 pl-12 pr-14 max-md:mr-2.5 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18c417aee5017996fb52e90090e64365a2b64c52bf3f3c4bc49b965afacdb995?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
            className="aspect-square w-[37px] max-w-full overflow-hidden object-contain object-center"
          />{" "}
          <div className="mt-11 justify-center self-stretch text-xl leading-6 text-zinc-100 max-md:mt-10 max-md:max-w-full">
            Unaware of dangers of sugar and healthier sugar alternatives
          </div>{" "}
          <div className="mt-7 self-stretch text-lg leading-7 text-zinc-100 max-md:max-w-full">
            The user lacks awareness of the potential harm caused by excessive
            sugar consumption and is unfamiliar with healthier alternatives.
            Consequently, they seek a solution to{" "}
            <span className="text-zinc-100">
              become more informed about the negative impacts of sugar and
              discover healthier choices for their well-being.
            </span>
          </div>
        </div>{" "}
        <div className="mt-40 flex w-[1059px] max-w-full items-start gap-0 self-center max-md:mt-10 max-md:flex-wrap">
          <div className="h-[647px] w-px shrink-0 self-start bg-stone-500" />{" "}
          <div className="mt-4 flex grow basis-[0%] flex-col items-center self-end max-md:max-w-full">
            <div className="flex w-[519px] max-w-full items-start justify-between gap-5 max-md:flex-wrap">
              <div className="text-lg leading-6 text-white">WEEK 1</div>{" "}
              <div className="self-stretch text-lg leading-6 text-white">
                WEEK 2
              </div>{" "}
              <div className="self-stretch text-lg leading-6 text-white">
                WEEK 3
              </div>{" "}
              <div className="text-lg leading-6 text-white">WEEK 4</div>
            </div>{" "}
            <div className="mt-16 self-stretch max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex w-[51%] flex-col items-stretch max-md:ml-0 max-md:w-full">
                  <div className="flex w-full flex-col items-start rounded-3xl border border-solid border-zinc-800 bg-zinc-900 py-6 pl-3.5 pr-20 max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/df385e2bf0bb46978c34be7aa21d28bb64a83cbe3c8a54565880aad4c4e0fa58?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
                      className="aspect-square w-[38px] max-w-full overflow-hidden object-contain object-center"
                    />{" "}
                    <div className="mt-5 text-lg leading-6 text-white">
                      Problem Framing Report
                    </div>
                  </div>
                </div>{" "}
                <div className="ml-5 flex w-[49%] flex-col items-stretch max-md:ml-0 max-md:w-full">
                  <div className="flex grow flex-col items-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/45c94797238d5c21b91332465129b82bb68a41b42f35ab167b280871b0e6c566?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
                      className="aspect-[0.52] w-[77px] max-w-full overflow-hidden object-contain object-center"
                    />{" "}
                    <div className="mt-8 flex flex-col items-start self-stretch rounded-3xl border border-solid border-zinc-800 bg-zinc-900 py-6 pl-4 pr-20 max-md:pr-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8c38e74fa7b0ad4ef6b6d830f1f63e069dcad2878340afa55250a2a55c621e7?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
                        className="aspect-square w-[38px] max-w-full overflow-hidden object-contain object-center"
                      />{" "}
                      <div className="mt-5 text-lg leading-6 text-white">
                        Design Exploration Report
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex grow basis-[0%] flex-col items-start self-stretch pb-12 max-md:max-w-full">
            <div className="flex w-full items-stretch justify-between gap-5 self-stretch max-md:max-w-full max-md:flex-wrap">
              <div className="h-[800px] w-px shrink-0 bg-stone-500" />{" "}
              <div className="mt-4 self-start text-lg leading-6 text-white">
                WEEK 5
              </div>{" "}
              <div className="mt-4 flex items-stretch justify-between gap-5 self-start">
                <div className="text-lg leading-6 text-white">WEEK 6</div>{" "}
                <div className="self-start text-lg leading-6 text-white">
                  WEEK 7
                </div>
              </div>
            </div>{" "}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0490f7ea22c2cd97759356e612280656f8c1728e50b3f451bdb2d86d1b39a7ab?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
              className="aspect-[0.44] w-[65px] max-w-full overflow-hidden object-contain object-center"
            />{" "}
            <div className="mb-28 mt-10 flex flex-col items-start self-stretch rounded-3xl border border-solid border-zinc-800 bg-zinc-900 pb-12 pl-4 pr-20 pt-6 max-md:mb-10 max-md:max-w-full max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0721895ee078abaafd1957c0f01e2c0a170f1ac0ba7ccb84aa82890bf6e3a60?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
                className="aspect-square w-[38px] max-w-full overflow-hidden object-contain object-center"
              />{" "}
              <div className="mt-5 whitespace-nowrap text-lg leading-6 text-white">
                Prototyping, Testing and Launching
              </div>
            </div>
          </div>{" "}
          <div className="h-[688px] w-px shrink-0 self-start bg-stone-500" />
        </div>{" "}
        <div className="mt-52 flex h-px w-[1276px] max-w-full shrink-0 flex-col self-center bg-zinc-100 bg-opacity-40 max-md:mt-10" />{" "}
        <div className="ml-28 mt-32 flex items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />{" "}
          <div className="grow justify-center self-stretch whitespace-nowrap text-xl font-medium leading-6 text-zinc-100 text-opacity-40">
            BRAINSTORMING AND IDEATION
          </div>
        </div>{" "}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/845dc5e9ed243874d601221d022fbb46d1c2d6fa659c2c031f4bd245f6c17ce6?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/845dc5e9ed243874d601221d022fbb46d1c2d6fa659c2c031f4bd245f6c17ce6?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/845dc5e9ed243874d601221d022fbb46d1c2d6fa659c2c031f4bd245f6c17ce6?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/845dc5e9ed243874d601221d022fbb46d1c2d6fa659c2c031f4bd245f6c17ce6?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/845dc5e9ed243874d601221d022fbb46d1c2d6fa659c2c031f4bd245f6c17ce6?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/845dc5e9ed243874d601221d022fbb46d1c2d6fa659c2c031f4bd245f6c17ce6?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/845dc5e9ed243874d601221d022fbb46d1c2d6fa659c2c031f4bd245f6c17ce6?apiKey=0a6b15d7691a40b885f9cbf59314b167&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/845dc5e9ed243874d601221d022fbb46d1c2d6fa659c2c031f4bd245f6c17ce6?apiKey=0a6b15d7691a40b885f9cbf59314b167&"
          className="mt-20 aspect-[2.07] w-full max-w-[1214px] self-center overflow-hidden object-contain object-center max-md:mt-10 max-md:max-w-full"
        />{" "}
        <div className="mt-52 flex h-px w-[1276px] max-w-full shrink-0 flex-col self-center bg-zinc-100 bg-opacity-40 max-md:mt-10" />{" "}
        <div className="ml-24 mt-28 flex items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />{" "}
          <div className="grow justify-center whitespace-nowrap text-xl font-medium leading-6 text-zinc-100 text-opacity-40">
            PROPOSED SOLUTION
          </div>
        </div>{" "}
        <div className="ml-24 mt-16 max-w-[618px] justify-center self-start text-xl font-medium leading-7 text-zinc-100 max-md:mt-10 max-md:max-w-full">
          Our solution 
          <span className="text-zinc-100">
            enables users to scan individual products at grocery stores{" "}
          </span>
          as students mainly rely on pre-packaged food available at the grocery
          stores. Upon scanning,{" "}
          <span className="text-zinc-100">
            the app displays vital information, such as total sugar content, and
            provides healthier alternatives for the scanned products.
          </span>
          <br />
          <br />
          Our goal is to simplify the process for students{" "}
          <span className="text-zinc-100">
            to educate them on maintaining the right balance in eating habits
          </span>
        </div>{" "}
        <div className="ml-24 mt-44 flex items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />{" "}
          <div className="justify-center text-xl font-medium leading-6 text-zinc-100 text-opacity-40">
            METHODS
          </div>
        </div>{" "}
        <div className="ml-24 mt-16 max-w-[621px] self-start text-xl font-medium leading-7 text-zinc-100 max-md:mt-10 max-md:max-w-full">
          <div _text="" />
        </div>{" "}
        <div className="mt-60 flex h-px w-[1276px] max-w-full shrink-0 flex-col self-center bg-zinc-100 bg-opacity-40 max-md:mt-10" />{" "}
        <div className="ml-24 mt-40 flex items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />{" "}
          <div className="grow justify-center whitespace-nowrap text-xl font-medium leading-6 text-zinc-100 text-opacity-40">
            KEY EVALUATION INSIGHTS
          </div>
        </div>{" "}
        <div className="ml-24 mt-16 max-w-[611px] self-start text-xl font-medium leading-7 text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
          Our evaluations included heuristic analysis as well as think-aloud
          sessions. They revealed important information on the scanning system.
        </div>{" "}
        <div className="mr-24 mt-16 flex items-start gap-5 self-end rounded-3xl bg-zinc-900 px-7 py-9 max-md:mr-2.5 max-md:mt-10 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="whitespace-nowrap text-xl leading-6 text-white">
            1.
          </div>{" "}
          <div className="shrink grow basis-auto self-stretch text-xl leading-7 text-white max-md:max-w-full">
            Participants expressed concerns about the lack of clear scanning
            instructions.
          </div>
        </div>{" "}
        <div className="mr-24 mt-6 flex items-start gap-4 self-end rounded-3xl bg-zinc-900 px-7 py-12 max-md:mr-2.5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="whitespace-nowrap text-xl leading-6 text-white">
            2.
          </div>{" "}
          <div className="shrink grow basis-auto self-stretch text-xl leading-6 text-white">
            Absence of clear and cancel the scan option.
          </div>
        </div>{" "}
        <div className="mr-24 mt-6 flex items-start gap-3.5 self-end rounded-3xl bg-zinc-900 px-7 py-9 max-md:mr-2.5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="whitespace-nowrap text-xl leading-6 text-white">
            3.
          </div>{" "}
          <div className="shrink grow basis-auto self-stretch text-xl leading-7 text-white max-md:max-w-full">
            Reminders for altering limits and notifying them when crossed.
          </div>
        </div>{" "}
        <div className="mt-44 flex h-px w-[1276px] max-w-full shrink-0 flex-col self-center bg-zinc-100 bg-opacity-40 max-md:mt-10" />{" "}
        <div className="ml-20 mt-28 flex items-start gap-4 self-start max-md:ml-2.5 max-md:mt-10">
          <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-zinc-100 shadow-sm" />{" "}
          <div className="w-full justify-center text-xl font-medium leading-6 text-zinc-100 text-opacity-40">
            FUTURE DIRECTIONS
          </div>
        </div>{" "}
        <div className="ml-20 mt-16 max-w-[596px] self-start text-xl font-medium leading-7 text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
           We plan to work with nutritionists to establish advanced nutritional
          criteria and dietary guidelines for the app to evaluate products based
          on various dietary preferences and restrictions helping us cater to a
          larger audience.
        </div>
      </div>
    </div>
  );
}
