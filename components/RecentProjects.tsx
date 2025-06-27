import { projects } from "@/data";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { FaGithub } from "react-icons/fa";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-32 sm:py-10" id="projects">
      <h1 className="heading py-40 mt-[-200px] sm:mt-0 sm:py-10 lg:pb-20">
        A small selection of {""}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 lg:gap-x-24 lg:gap-y-16 sm:mt-10 md:gap-y-20 gap-y-32 mt-[-100px]">
        {projects.map(
          ({ id, title, des, img, iconLists, link, gitHubLink }) => (
            <div
              key={id}
              className="lg:min-w-[30.5rem] lg:min-h-[34.5rem] sm:h-[30rem] h-[25rem] flex flex-col items-center justify-between sm:w-96 w-[80vw] md:gap-y-10 gap-y-20"
            >
              {/* PinContainer for project content */}
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden h-[40vh] lg:h-[40vh] md:h-[20vh] sm:mt-0 mt-[-165px]">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-contain z-10"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 pb-3">
                  {title}
                </h1>
                <p className="lg:text-l lg:font-normal font-light text-sm line-clamp-4">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 sm:w-8 sm:h-8 flex justify-center items-center w-8 h-8"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2 sm:p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaArrowTrendUp className="ms-3" color="#cbacf9" />
                  </div>
                </div>
              </PinContainer>

              {/* MagicButton below PinContainer */}
              <a href={gitHubLink} className="mb-10 pb-3">
                <MagicButton
                  title="Github Repository"
                  icon={<FaGithub />}
                  position={"right"}
                />
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
