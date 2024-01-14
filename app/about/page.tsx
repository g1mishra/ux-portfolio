import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <main className="container mx-auto flex w-full max-w-[882px] flex-col items-center px-4 min-[1440px]:max-w-[1044px] min-[1920px]:max-w-[1440px]">
        <Header />
        <div className="flex flex-col items-center py-12">
          <div className="flex w-full flex-col items-end max-md:max-w-full">
            <div className="mt-28 flex w-full flex-col self-center p-4  max-md:max-w-full md:mt-44">
              <div className="flex items-center gap-5 ">
                <div className="flex h-3 w-3 shrink-0 flex-col rounded-md bg-whitesmoke-100 shadow-white20" />
                <h1 className="grow self-stretch text-base font-medium leading-6 text-whitesmoke-100 text-opacity-60 2xl:text-xl">
                  ABOUT ME
                </h1>
              </div>
              <p className="mt-8 max-w-screen-lg font-karla text-3xl font-bold leading-relaxed text-white md:text-4xl xl:text-5xl 2xl:text-6xl">
                Design is much more than{" "}
                <span
                  className="font-inter font-medium"
                  style={{
                    background:
                      "linear-gradient(180deg, #F2F2F2 50%, rgba(0, 0, 0, 0.00) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: `0px -5px 25px rgba(255, 255, 255, 0.25), 0px -5px 15px rgba(255, 90, 0, 0.15), 0px 5px 15px rgba(0, 87, 255, 0.20)`,
                    letterSpacing: "-1px",
                  }}
                >
                  just a piece of art.
                </span>
              </p>
              <div className="mt-12 self-stretch max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex w-6/12 flex-col items-stretch max-md:ml-0 max-md:w-full">
                    <div className="flex grow flex-col items-stretch max-md:mt-10 max-md:max-w-full">
                      <div
                        style={{
                          borderRadius: "36px",
                          border: "1px solid #3D3D3D",
                          background:
                            "linear-gradient(195deg, #252525 0%, #101010 100%)",
                        }}
                        className="flex flex-col items-stretch justify-center  bg-opacity-0 shadow-2xl max-md:max-w-full"
                      >
                        <div className="flex flex-col items-stretch justify-center rounded-[35px] border border-solid border-zinc-100 border-opacity-10 p-3 max-md:max-w-full">
                          <div className="flex shrink-0 flex-col overflow-hidden rounded-3xl border border-solid border-neutral-700 max-md:max-w-full">
                            <Image
                              src="/images/me/IMG_0277.jpg"
                              width={855}
                              height={960}
                              className="object-contain"
                              alt="Sampada"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-16 flex flex-col items-stretch max-md:mt-10 max-md:max-w-full md:pl-3 md:pr-14">
                        <h3 className=" text-xl font-medium leading-10 text-zinc-100 max-md:max-w-full xl:text-2xl 2xl:text-3xl">
                          My background
                        </h3>
                        <p className="mt-12 text-lg font-medium leading-8 text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full xl:text-xl 2xl:text-2xl">
                          Hello! I&apos;m Sampada, a Computer Engineer turned
                          UX/UI Designer.
                        </p>{" "}
                        <p className="mt-12  text-lg font-medium leading-8 text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full xl:text-xl 2xl:text-2xl">
                          I&apos;ve always been interested in designing and have
                          admired how thoughtful design has the power to change
                          the world. Whether it&apos;s through simplifying one
                          interaction or giving users an opportunity to view
                          things through a new lens.
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-5 flex w-6/12 flex-col items-stretch max-md:ml-0 max-md:w-full">
                    <div className="my-auto flex flex-col items-start max-md:mt-10 max-md:max-w-full sm:px-5">
                      <h3 className="max-w-full text-xl font-medium leading-10 text-zinc-100 text-opacity-80 xl:text-2xl 2xl:text-3xl">
                        This is me — alongside some clicks from my recent trip
                        to New York.
                      </h3>{" "}
                      <div
                        className="mt-24 flex flex-col items-stretch justify-center self-stretch  bg-opacity-0 shadow-2xl max-md:mt-10 max-md:max-w-full"
                        style={{
                          borderRadius: "36px",
                          border: "1px solid #3D3D3D",
                          background:
                            "linear-gradient(195deg, #252525 0%, #101010 100%)",
                        }}
                      >
                        <div className="flex flex-col items-stretch justify-center rounded-[35px] border border-solid border-zinc-100 border-opacity-10 p-3 max-md:max-w-full">
                          <div className="flex shrink-0 flex-col overflow-hidden rounded-3xl border border-solid border-neutral-700 max-md:max-w-full">
                            <Image
                              src="/images/me/IMG_0622.jpg"
                              width={855}
                              height={960}
                              className="object-contain"
                              alt="Sampada"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 self-stretch max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex w-6/12 flex-col items-stretch max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-stretch max-md:mt-10 max-md:max-w-full">
                      <div
                        style={{
                          borderRadius: "36px",
                          border: "1px solid #3D3D3D",
                          background:
                            "linear-gradient(195deg, #252525 0%, #101010 100%)",
                        }}
                        className="flex flex-col items-stretch justify-center  bg-opacity-0 max-md:max-w-full"
                      >
                        <div className="flex flex-col items-stretch justify-center rounded-[35px] border border-solid border-zinc-100 border-opacity-10 p-3 max-md:max-w-full">
                          <div className="flex shrink-0 flex-col overflow-hidden rounded-3xl border border-solid border-neutral-700 max-md:max-w-full">
                            <Image
                              src="/images/me/IMG_1311.jpg"
                              width={855}
                              height={960}
                              className="object-contain"
                              alt="Sampada"
                            />
                          </div>
                        </div>
                      </div>{" "}
                      <div className="mt-24 flex flex-col items-stretch max-md:mt-10 max-md:max-w-full sm:pr-5 md:pl-3 md:pr-12">
                        <h3 className="text-xl font-medium leading-10 text-zinc-100 max-md:max-w-full xl:text-2xl 2xl:text-3xl">
                          When I’m not designing,
                        </h3>{" "}
                        <p className="mt-12 text-lg font-medium leading-8 text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full xl:text-xl 2xl:text-2xl">
                          I’m probably drawing or doodling, scrolling through my
                          Pinterest feed, listening to music or creating yet
                          another Spotify playlist.
                          <br />
                          <br />
                          Other than that, you’ll find me watching thriller and
                          mystery movie or a rom-com kdrama or maybe an anime{" "}
                          {";)"}
                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-5 flex w-6/12 flex-col items-stretch max-md:ml-0 max-md:w-full">
                    <div className="mt-6 flex grow flex-col items-stretch max-md:mt-10 max-md:max-w-full">
                      <div className="flex flex-col items-stretch max-md:max-w-full sm:pr-5 md:pl-3 md:pr-14">
                        <h3 className="text-xl font-medium leading-10 text-zinc-100 max-md:max-w-full xl:text-2xl 2xl:text-3xl">
                          But, there’s more to it.
                        </h3>{" "}
                        <p className="mt-12 text-lg font-medium leading-8 text-zinc-100 text-opacity-60 max-md:mt-10 max-md:max-w-full xl:text-xl 2xl:text-2xl">
                          One of the things that really drives me day to day is
                          I like learning new things. I think the more
                          experience I gain, the more I realize how little I
                          actually know and how much more there is to learn.
                          <br />
                          <br />I love working on the projects that make people
                          happy and solve their problems.
                        </p>
                      </div>{" "}
                      <div
                        style={{
                          borderRadius: "36px",
                          border: "1px solid #3D3D3D",
                          background:
                            "linear-gradient(195deg, #252525 0%, #101010 100%)",
                        }}
                        className="mt-24 flex flex-col items-stretch justify-center  bg-opacity-0 shadow-2xl max-md:mt-10 max-md:max-w-full"
                      >
                        <div className="flex flex-col items-stretch justify-center rounded-[35px] border border-solid border-zinc-100 border-opacity-10 p-3 max-md:max-w-full">
                          <div className="flex shrink-0 flex-col overflow-hidden rounded-3xl border border-solid border-neutral-700 max-md:max-w-full">
                            <Image
                              src="/images/me/IMG_1442.jpg"
                              width={855}
                              height={960}
                              className="object-contain"
                              alt="Sampada"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
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
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
