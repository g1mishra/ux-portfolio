"use client";

const ScrollDownIcon = () => {
  const handleScroll = () => {
    const element = document.getElementById("section-projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      className="icon-scroll-down animate-bounce cursor-pointer"
      onClick={handleScroll}
    >
      <path
        d="M24 44.1899L10 30.1899L12.1 28.0899L22.5 38.4899V4.18994H25.5V38.4899L35.9 28.0899L38 30.1899L24 44.1899Z"
        fill="#F2F2F2"
      />
    </svg>
  );
};

export default ScrollDownIcon;
