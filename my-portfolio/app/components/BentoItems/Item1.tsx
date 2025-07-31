"use client";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const Item1 = () => {
  const [highlighted, setHighlighted] = useState<
    "think" | "design" | "code" | null
  >(null);

  const toggleHighlight = (item: "think" | "design" | "code") => {
    setHighlighted((prev) => (prev === item ? null : item));
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="bg-black/15 text-white h-full rounded-2xl border-3 border-white/15">
      <div className="flex items-center justify-center p-6 gap-5">
        <div className="font-kronaOne flex flex-col gap-6">
          <div
            className={`flex items-center cursor-pointer ${
              highlighted === "think" ? "opacity-100" : "opacity-30"
            }`}
            onClick={() => toggleHighlight("think")}
          >
            <span>
              <Image
                src={
                  highlighted === "think"
                    ? assets.think_highlighted
                    : assets.think_notHighlighted
                }
                alt="think"
                className="mr-3"
              />
            </span>
            <p className="text-2xl">Think.</p>
          </div>
          <div
            className={`flex items-center cursor-pointer ${
              highlighted === "design" ? "opacity-100" : "opacity-30"
            }`}
            onClick={() => toggleHighlight("design")}
          >
            <span>
              <Image
                src={
                  highlighted === "design"
                    ? assets.design_highlighted
                    : assets.design_notHighlighted
                }
                alt="design"
                className="mr-3"
              />
            </span>
            <p className="text-2xl">Design.</p>
          </div>
          <div
            className={`flex items-center cursor-pointer ${
              highlighted === "code" ? "opacity-100" : "opacity-30"
            }`}
            onClick={() => toggleHighlight("code")}
          >
            <span>
              <Image
                src={
                  highlighted === "code"
                    ? assets.code_highlighted
                    : assets.code_notHighlighted
                }
                alt="code"
                className="mr-3"
              />
            </span>
            <p className="text-2xl">Code.</p>
          </div>
        </div>
        <div className="relative w-[400px] h-[230px] bg-black/50 rounded-lg border-black/15 border-1 overflow-hidden">
          {/* THINK animation container*/}
          {/* <MotionImage
            src={assets.thinkPNG}
            alt="Think animation"
            width={500}
            height={500}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: [1, 0.8, 0.3, 0.8, 0.5, 1] }}
            transition={{ duration: 1 }}
            className="absolute w-[90%] top-[5%] left-[5%]"
          /> */}

          {/* DESIGN animation container */}
          <div className="relative flex h-full justify-center items-center">
            <motion.div
              className="flex text-2xl gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {["d", "e", "s", "i", "g", "n"].map((char, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-2 rounded-md  ${
                    [
                      "bg-red-500",
                      "bg-orange-500",
                      "bg-yellow-500",
                      "bg-green-500",
                      "bg-blue-500",
                      "bg-violet-500",
                    ][index]
                  }`}
                >
                  {char}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CODE animation container*/}
          {/* <div className="flex items-center pl-2 gap-1 bg-purple-500 w-full h-8">
            <div className="w-4 h-4 rounded-full bg-[#ff605c]"></div>
            <div className="w-4 h-4 rounded-full bg-[#ffbd44]"></div>
            <div className="w-4 h-4 rounded-full bg-[#00ca4e]"></div>
          </div>
          <pre className="px-3">
            <code>
              {`let count = 0
  function lifeStartsAt() {
    if (count === 25) { 
      return "Get a life.";
    } else {
      count++; 
    }
}`}
            </code>
          </pre> */}
        </div>
      </div>
      <div className="relative blur-2xl -z-10">
        {/* Blobs */}
        <div className="absolute size-[150px] top-0 -left-15 bg-[#05C29F] rounded-full" />
        <div className="absolute size-[150px] -top-70 -right-20 bg-[#8E05C2] rounded-full" />
      </div>
    </div>
  );
};
export default Item1;
