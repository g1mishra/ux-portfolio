import Footer from "@/components/Footer";
import Header from "@/components/Header";

const AboutPage = () => {
  return (
    <>
      <main className="container mx-auto min-h-screen w-full">
        <Header />
        <div className="flex flex-col items-center py-12">
          <div className="flex w-full flex-col items-end max-md:max-w-full">
            <div className="mt-56 self-stretch max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex w-1/2 flex-col items-stretch max-md:ml-0 max-md:w-full">
                  <div className="mt-3 flex flex-col items-stretch px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="text-6xl font-bold text-white max-md:max-w-full max-md:text-4xl">
                      Doodler, Pizza <br />
                      Aficionado, & UX Designer
                    </div>
                    <div className="mt-16 text-2xl font-medium leading-8 text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full">
                      Hello! I&apos;m Sampada, a Computer Engineer turned UX/UI
                      Designer.
                      <br />
                      <br />
                      I&apos;ve always been interested in designing and have
                      admired how thoughtful design has the power to change the
                      world. Whether it&apos;s through simplifying one
                      interaction or giving users an opportunity to view things
                      through a new lens.
                      <br />
                      <br />
                      One of the things that really drives me day to day is I
                      like learning new things. I think the more experience I
                      gain, the more I realize how little I actually know and
                      how much more there is to learn.
                      <br />I love working on the projects that make people
                      happy and solve their problems.
                      <br />
                      <br />
                      When I&apos;m not designing, you can find me drawing or
                      doodling, scrolling through my Pinterest feed, listening
                      to music or creating yet another Spotify playlist.
                      <br />
                    </div>
                  </div>
                </div>
                <div className="ml-5 flex w-1/2 flex-col items-stretch max-md:ml-0 max-md:w-full">
                  <div className="flex w-full grow flex-col items-stretch justify-center rounded-[36px] bg-zinc-100 bg-opacity-0 shadow-2xl max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col items-stretch justify-center rounded-[35px] border border-solid border-zinc-100 border-opacity-10 p-3 max-md:max-w-full">
                      <div className="flex h-[960px] shrink-0 flex-col rounded-3xl border border-solid border-neutral-700 max-md:max-w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-10 mt-28 flex w-[657px] max-w-full flex-col items-stretch justify-center self-start rounded-[36px] bg-zinc-100 bg-opacity-0 shadow-2xl max-md:mt-10">
              <div className="flex flex-col items-stretch justify-center rounded-[35px] border border-solid border-zinc-100 border-opacity-10 p-3 max-md:max-w-full">
                <div className="flex h-[960px] shrink-0 flex-col rounded-3xl border border-solid border-neutral-700 max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
