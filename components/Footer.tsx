"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import {
  FaCopyright,
  FaGithub,
  FaInfoCircle,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="w-full pt-20" id="contact">
      <div className="w-full absolute left-0 -bottom-1 max-h-30">
        <img
          src="footer-grid.svg"
          alt="grid"
          className="w-full h-full overflow-hidden opcaity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take your{" "}
          <span className="text-purple">digital presence</span> to the next
          level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let us discuss how I can help you achieve
          your goals.
        </p>
        <div className="flex flex-row gap-10">
          <a href="mailto:marchakim.m@gmail.com">
            <MagicButton
              title="Lets get in touch"
              icon={<FaLocationArrow />}
              position={"right"}
            />
          </a>
          <a href="https://www.linkedin.com/in/marc-hakim-mwai-99b937336/">
            <MagicButton
              title="My LinkedIn Profile"
              icon={<FaLinkedin />}
              position={"right"}
            />
          </a>
        </div>
        <p className="mt-16 md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Hakim
        </p>
      </div>
    </footer>
  );
};
