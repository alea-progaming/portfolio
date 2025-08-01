"use client";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const Item1 = () => {
  const MotionImage = motion(Image);
  const [hovered, setHovered] = useState<"think" | "design" | "code" | null>(
    null
  );
  const [selected, setSelected] = useState<"think" | "design" | "code" | null>(
    null
  );

  const imageMap = {
    think: {
      highlighted: assets.think_highlighted,
      notHighlighted: assets.think_notHighlighted,
    },
    design: {
      highlighted: assets.design_highlighted,
      notHighlighted: assets.design_notHighlighted,
    },
    code: {
      highlighted: assets.code_highlighted,
      notHighlighted: assets.code_notHighlighted,
    },
  };

  const current = hovered ?? selected;

  return (
    <div className="bg-black/15 text-white h-full rounded-2xl border-3 border-white/15">
      <div className="flex items-center justify-center p-6 gap-5">
        {/* Words + Icons */}
        <div className="font-kronaOne flex flex-col gap-6">
          {["think", "design", "code"].map((item) => (
            <div
              key={item}
              className={`flex items-center cursor-pointer transition-opacity duration-200 ${
                current === item ? "opacity-100" : "opacity-30"
              }`}
              onMouseEnter={() => setHovered(item as typeof hovered)}
              onMouseLeave={() => {
                setHovered(null);
                setSelected(item as typeof selected); // store the last hovered item
              }}
            >
              <span className="mr-3">
                <Image
                  src={
                    current === item
                      ? imageMap[item as keyof typeof imageMap].highlighted
                      : imageMap[item as keyof typeof imageMap].notHighlighted
                  }
                  alt={item}
                />
              </span>
              <p className="text-2xl capitalize">{item}.</p>
            </div>
          ))}
        </div>

        {/* Animation Display Box */}
        <div className="relative w-[400px] h-[230px] bg-black/50 rounded-lg border-black/15 border-1 overflow-hidden">
          {/* THINK animation */}
          {current === "think" && (
            <MotionImage
              src={assets.thinkPNG}
              alt="Think animation"
              width={500}
              height={500}
              initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute w-[90%] top-[5%] left-[5%]"
            />
          )}

          {/* DESIGN animation */}
          {current === "design" && (
            <div className="relative flex h-full justify-center items-center">
              <motion.div
                className="flex text-2xl gap-2"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
                initial="hidden"
                animate="show"
              >
                {["d", "e", "s", "i", "g", "n"].map((char, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      },
                    }}
                    className={`p-2 rounded-md shadow-md text-white ${
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
          )}

          {/* CODE animation */}
          {current === "code" && (
            <>
              <div className="flex items-center pl-2 gap-1 bg-purple-500 w-full h-8">
                <div className="w-4 h-4 rounded-full bg-[#ff605c]"></div>
                <div className="w-4 h-4 rounded-full bg-[#ffbd44]"></div>
                <div className="w-4 h-4 rounded-full bg-[#00ca4e]"></div>
              </div>
              <pre className="px-3 text-sm pt-2">
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
              </pre>
            </>
          )}
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="relative blur-2xl -z-10">
        <div className="absolute size-[150px] top-0 -left-15 bg-[#05C29F] rounded-full" />
        <div className="absolute size-[150px] -top-70 -right-20 bg-[#8E05C2] rounded-full" />
      </div>
    </div>
  );
};

export default Item1;
