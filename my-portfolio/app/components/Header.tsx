"use client";
import { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
const Header = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "mikaela.programming@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    });
  };
  return (
    <>
      <section className="w-dvw h-dvh flex flex-col items-center justify-center gap-28 font-outfit">
        {/* // * Make this animated using GSAP */}
        <div className="relative text-center space-y-4 w-[70%] md:w-auto">
          <Image
            src={assets.designdevelop}
            alt="Design Develop"
          />
          <div className="absolute bg-[#0D0D0D] rounded-[50%] w-[120%] h-3 -bottom-12 left-1/2 -translate-x-1/2"></div>
        </div>
        <p className="font-kronaOne text-center max-w-[80%] md:w-auto">
          I design and develop cool and useful web applications. You ask and I
          shall deliver.
        </p>

        {/*  Call to action area */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:mikaela.programming@gmail.com"
            className="inline-flex items-center gap-2 border border-[#8e05c2] py-3 px-5 rounded-2xl"
          >
            Let's connect
            <span className="bg-[#8E05C2] p-1 rounded-full">
              <Image
                src={assets.arrowRight_white}
                alt="Arrow right"
              />
            </span>
          </a>
          <button
            onClick={handleCopy}
            className="inline-flex gap-2 cursor-pointer"
          >
            <Image
              src={assets.copy_white}
              alt="Copy email"
            />
            <p>{copied ? "Copied!" : "mikaela.programming@gmail.com"}</p>
          </button>
        </div>
      </section>
    </>
  );
};
export default Header;
