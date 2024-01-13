const Footer = () => {
  return (
    <div className="section-footer">
      <div className="container-footer">
        <div className="footer-top-wrapper">
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:gap-7">
            <h1 className="text-center text-xl font-medium leading-10 text-whitesmoke-100 text-opacity-80 sm:text-2xl md:text-[28px]">
              Thanks for stopping by!{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                className="ml-1 inline-block"
              >
                <path
                  d="M24.8212 7.39384C22.2212 0.487588 13.7712 3.57509 12.9993 7.02821C11.943 3.37196 3.69617 0.650087 1.17742 7.39384C-1.6257 14.9095 12.0243 21.6532 12.9993 22.7501C13.9743 21.8563 27.6243 14.7876 24.8212 7.39384Z"
                  fill="#FF5A79"
                />
              </svg>
            </h1>
            <p className="w-full text-center text-lg text-whitesmoke-100 underline sm:text-2xl">
              Interested in working together? I&apos;d love to hear from you.
            </p>
            <a
              className="whitespace-nowrap text-center text-base text-whitesmoke-100 sm:text-2xl"
              href="mailto:designwork.sampada@gmail.com"
            >
              designwork.sampada@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
