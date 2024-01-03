import ArrowLinkIcon from "@/components/icons/ArrowLinkIcon";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="section-footer">
      <div className="container-footer">
        <div className="footer-top-wrapper">
          <div />
          <div className="footer-links-column-wrapper">
            <div className="footer-links-column">
              <div className="text-footer-links-overline">MAIN</div>
              <div className="footer-links-wrapper">
                <Link
                  href="/"
                  aria-current="page"
                  className="footer-link w-inline-block w--current"
                >
                  <div className="text-footer-link">Work</div>
                </Link>
                <Link href="/about" className="footer-link w-inline-block">
                  <div className="text-footer-link">Info</div>
                </Link>
              </div>
            </div>
            <div className="footer-links-column">
              <div className="text-footer-links-overline">CONTACT</div>
              <div className="footer-links-wrapper">
                <a
                  href="#linkedin"
                  target="_blank"
                  className="footer-link w-inline-block"
                >
                  <div className="text-footer-link">LinkedIn</div>
                  <ArrowLinkIcon className="icon-external" />
                </a>
                <a
                  href="#resume"
                  target="_blank"
                  className="footer-link w-inline-block"
                >
                  <div className="text-footer-link">Resume</div>
                  <ArrowLinkIcon className="icon-external" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
