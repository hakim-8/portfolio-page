"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { FaCopy } from "react-icons/fa";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full sm:grid md:auto-rows-[18rem] sm:grid-cols-1 md:grid-cols-3 sm:gap-4 sm:max-w-7xl sm:mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("marchakim.m@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1] w-auto", // Added sm:w-auto to keep normal width for sm and larger, full width for smaller screens
        className
      )}
      style={{
        background: "rgb(3,1,35)",
        backgroundColor:
          "linear-gradient(90deg, rgba(3,1,35,1) 0%, rgba(9,9,121,1) 53%, rgba(13,87,154,1) 100%)",
      }}
    >
      <div className={`h-full w-full ${id === 6 && "flex justify-center"}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {id === 3 && (
            <div>
              <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 relative">
                {title}
              </div>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 relative">
                {description}
              </div>
            </div>
          )}
          {id === 6 && (
            <div>
              <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 relative lg:top-[-30px]">
                {title}
              </div>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 relative lg:left-[-100px]">
                {description}
              </div>
            </div>
          )}
          {id !== 3 && id !== 6 && (
            <div>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                {description}
              </div>
              <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                {title}
              </div>
            </div>
          )}

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-5 relative lg:top-[-30px]">
                {["React.js", "Next.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-3 lg:px-5 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 relative lg:top-[-30px]">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["AngularJS", "Python", "SQL"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-3 lg:px-5 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`relative lg:absolute lg:-bottom-5 right-0 lg:left-[-9px] left[-35px] md:left[-20px]`}
              >
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: "",
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
                <MagicButton
                  title={copied ? "Email copied" : "Copy my email"}
                  icon={<FaCopy />}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
