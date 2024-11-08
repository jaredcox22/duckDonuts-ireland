import React, { useState } from "react";
import { Link } from "react-router-dom";
import DuckDonutsLogo from "/assets/images/NavbarImages/DuckDonutsLogo.png";

const Footer = () => {
  const [hovered, setHovered] = useState("");
  const footerOptions = [
    "menu",
    "contact us",
    "nutrition & allergy info",
  ];

  return (
    <footer className="bg-white w-full">
      <section className="flex relative">
        <div className="flex flex-col items-center justify-center px-20 py-10 mt-24 bg-sky-500 w-full">
          <div className="flex w-full h-full max-w-[76.05em]">
            <div className="w-[28%] flex items-center ">
              <Link to="/">
                <img
                  src={DuckDonutsLogo}
                  alt="Duck Donuts Logo"
                  className="h-[4.7rem] lg:h-[4.6rem]"
                />
              </Link>
            </div>
            <ul className="w-[54%] flex-wrap justify-start grid grid-cols-2 text-white font-bold text-lg">
              {footerOptions.map((option) => (
                <li
                  className="flex items-center hover:cursor-pointer py-2"
                  key={option}
                  onMouseEnter={() => {
                    setHovered(option);
                  }}
                  onMouseLeave={() => {
                    setHovered("");
                  }}
                >
                  <Link to={`/${option}`}>
                    <p
                      className="relative transition ease-in-out duration-7000"
                      style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}
                    >
                      {option}
                      <span
                        className={`absolute left-0 bottom-[-2.5px] w-full h-[3.5px] bg-current transition-opacity duration-700 ease-in-out ${
                          hovered === option ? "opacity-100" : "opacity-0"
                        }`}
                      ></span>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-[18%]"></div>
          </div>
        </div>
        <picture
          role="presentation"
          class="footer-duck"
          className="absolute bottom-0 right-[2%] w-[10%] h-full"
        >
          <img
            src="https://d2nmqj11l1ij0u.cloudfront.net//images/design/footer-duck.png"
            alt=""
            className="absolute w-full h-full object-contain object-bottom bg-contain bg-bottom bg-no-repeat"
          />
        </picture>
      </section>
      <section className="bg-black px-10 py-6 flex justify-between text-white items-center">
        <small>
          {/* make the year dynamic using todate and get the year from that */}
          <p className="pb-1">
            @ {new Date().getFullYear()} All rights reserved.
          </p>

          <nav class="flex justify-start">
            <a className="pr-6 underline hover:no-underline" href="/site-map/">
              Site Map
            </a>
            <a
              className="pr-6 underline hover:no-underline"
              href="/ada-notice/"
            >
              Accessibility
            </a>
            <a
              className="pr-6 underline hover:no-underline"
              href="/privacy-policy/"
            >
              Privacy Policy
            </a>
          </nav>
        </small>
        <a
          href="https://www.scorpion.co/franchises/"
          target="_blank"
          className="flex justify-end"
        >
          <img
            src="https://d2nmqj11l1ij0u.cloudfront.net//common/scorpion/logo/stack-gray.png"
            alt="Scorpion Internet Marketing Experts"
            className="w-1/2"
          />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
