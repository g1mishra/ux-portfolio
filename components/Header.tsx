"use client";
import ArrowLinkIcon from "@/components/icons/ArrowLinkIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="section-nav">
        <div className="nav-bar">
          <div className="nav-left-wrapper">
            <div className="logo-block">
              <div className="logo-background" />
              <Link href="/" className="logo-text">
                <h1 className="text-logo">Sampada.</h1>
              </Link>
            </div>
          </div>
          <div className="nav-pill-wrapper">
            <div
              className={`nav-indicator-glow ${
                pathname === "/about" ? "info" : ""
              }`}
            />
            <div className="nav-pill">
              <Link href="/" className="nav-toggle work w-inline-block">
                <div className="text-nav-toggle ">Work</div>
              </Link>
              <Link href="/about" className="nav-toggle w-inline-block">
                <div className="text-nav-toggle ">Info</div>
              </Link>
              <div
                className={`nav-indicator-pill ${
                  pathname === "/about" ? "info" : ""
                }`}
              />
            </div>
          </div>
          <div className="nav-right-wrapper">
            <div className="chip-socials-wrapper">
              <a
                href="https://www.linkedin.com/in/sampada-taralgatti"
                target="_blank"
                className="chip-socials w-inline-block"
              >
                <div className="text-socialnav">LinkedIn</div>
                <ArrowLinkIcon className="icon-external" />
              </a>
              <a
                href="https://drive.google.com/file/d/1Jv3_PgDWvYsuknQ2GLdWAPF91y5rsmQU/view"
                target="_blank"
                className="chip-socials w-inline-block"
              >
                <div className="text-socialnav">Resume</div>
                <ArrowLinkIcon className="icon-external" />
              </a>
            </div>
            <p onClick={toggleMenu} className="nav-menu-button w-inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={!isOpen ? "icon-contact" : "icon-contact-close"}
                fill="none"
              >
                <path
                  d="M24 44.275c-2.808 0-5.445-.531-7.91-1.593-2.464-1.062-4.61-2.507-6.438-4.335-1.828-1.828-3.272-3.974-4.334-6.439-1.062-2.464-1.593-5.1-1.593-7.908 0-2.807.53-5.443 1.593-7.908 1.062-2.465 2.506-4.612 4.334-6.44 1.828-1.828 3.974-3.273 6.439-4.334 2.464-1.062 5.1-1.593 7.909-1.593 2.806 0 5.442.53 7.907 1.593 2.466 1.061 4.612 2.506 6.44 4.334 1.828 1.828 3.273 3.975 4.335 6.44 1.062 2.465 1.593 5.103 1.593 7.913v2.645c0 1.938-.675 3.553-2.023 4.844-1.349 1.291-3.009 1.937-4.98 1.937a7.062 7.062 0 0 1-3.466-.893 5.935 5.935 0 0 1-2.456-2.505 7.685 7.685 0 0 1-3.22 2.567 10.398 10.398 0 0 1-4.13.831c-2.635 0-4.874-.912-6.717-2.735-1.843-1.824-2.765-4.058-2.765-6.702 0-2.636.921-4.883 2.764-6.74 1.843-1.857 4.081-2.786 6.715-2.786 2.642 0 4.883.927 6.723 2.78 1.84 1.853 2.761 4.104 2.761 6.752v2.565c0 1.017.37 1.872 1.107 2.564.738.693 1.633 1.04 2.683 1.04a3.696 3.696 0 0 0 2.628-1.04c.734-.692 1.1-1.547 1.1-2.564V24c0-4.742-1.647-8.76-4.943-12.056C32.76 8.648 28.739 7 23.994 7c-4.73 0-8.744 1.65-12.044 4.95C8.65 15.25 7 19.266 7 24c0 4.74 1.648 8.76 4.944 12.056C15.24 39.352 19.258 41 24 41h10.7v3.275H24Zm.003-14.107c1.724 0 3.192-.596 4.401-1.79 1.21-1.192 1.814-2.65 1.814-4.373 0-1.756-.605-3.24-1.817-4.454-1.211-1.213-2.68-1.82-4.404-1.82-1.725 0-3.192.607-4.402 1.82-1.21 1.214-1.814 2.698-1.814 4.454 0 1.723.606 3.18 1.817 4.374 1.211 1.193 2.68 1.79 4.405 1.79Z"
                  fill="#F2F2F2"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={isOpen ? "icon-contact" : "icon-contact-close"}
                fill="none"
              >
                <path
                  d="m12.45 37.937-2.387-2.387L21.613 24l-11.55-11.55 2.386-2.386L24 21.614l11.55-11.55 2.387 2.386L26.386 24l11.55 11.55-2.386 2.387L24 26.387l-11.55 11.55Z"
                  fill="#F2F2F2"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div
        className="mobile-popup-menu"
        style={{
          display: isOpen ? "block" : "none",
          opacity: isOpen ? 1 : 0,
          transform: isOpen
            ? "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
            : "translate3d(36px, -24px, 0px) scale3d(0.5, 0.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <a
          href="https://www.linkedin.com/in/sampada-taralgatti"
          target="_blank"
          className="popup-menu-item w-inline-block"
        >
          <div className="text-popup-menu">LinkedIn</div>
          <ArrowLinkIcon className="icon-popup-external" />
        </a>
        <a
          href="https://drive.google.com/file/d/1Jv3_PgDWvYsuknQ2GLdWAPF91y5rsmQU/view"
          target="_blank"
          className="popup-menu-item w-inline-block"
        >
          <div className="text-popup-menu">Resume</div>
          <ArrowLinkIcon className="icon-popup-external" />
        </a>
      </div>
    </header>
  );
};

export default Header;
