"use client";
import { motion } from "framer-motion";
import { icons } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const Item1 = () => {
  // wrap Image in motion to animate it with framer-motion
  const MotionImage = motion(Image);

  // tracks which item is being hovered
  const [hovered, setHovered] = useState<"think" | "design" | "code" | null>(
    null
  );

  // remembers the last hovered item when the mouse leaves
  const [selected, setSelected] = useState<"think" | "design" | "code" | null>(
    null
  );

  // dictionary object that maps each keyword to it's corresponding highlighted and non-highlighed containers
  const imageMap = {
    think: {
      highlighted: icons.think_highlighted,
      notHighlighted: icons.think_notHighlighted,
    },
    design: {
      highlighted: icons.design_highlighted,
      notHighlighted: icons.design_notHighlighted,
    },
    code: {
      highlighted: icons.code_highlighted,
      notHighlighted: icons.code_notHighlighted,
    },
  };

  // sets current to hovered else fallback to selected
  const current = hovered ?? selected;

  return (
    <div className="bg-black/15 text-white rounded-2xl border-3 border-white/15">
      <div className="flex items-center justify-center p-6 gap-5">
        {/* Words + Icons */}
        <div className="font-kronaOne flex flex-col gap-6">
          {/* 
            maps through objects making each one fade in and out whether it's active (opacity-100) or inactive (opacity-30)
          */}
          {["think", "design", "code"].map((item) => (
            <div
              key={item}
              className={`flex items-center cursor-pointer transition-opacity duration-200 ${
                // if current is hovered over an item, do this condition
                current === item ? "opacity-100" : "opacity-30"
              }`}
              // if the mouse entered the item, it will set the item as hovered (showing the animation and all)

              onMouseEnter={() => setHovered(item as typeof hovered)}
              // if the mouse leaves, make the hovered null and set the item as selected (showing the animation again)
              // * bookmark this because i dont want the animation to start from the beginning when the mouse leaves, it should just continue to how it was
              onMouseLeave={() => {
                setHovered(null);
                setSelected(item as typeof selected);
              }}
            >
              <span className="mr-3">
                <Image
                  // for the icons, if the items are hovered, highlight else dont
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
        {/* // * check if which item is current specifically hovered over and then show the display box it matches with  */}
        <div className="relative w-[400px] aspect-[16/9] bg-black/50 rounded-lg border-black/15 border-1 overflow-hidden">
          {/* THINK animation */}
          {current === "think" && (
            <MotionImage
              src={icons.thinkPNG}
              alt="Think animation"
              width={500}
              height={500}
              initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
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
                          damping: 15,
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
                  {`let code = 0
function lifeStartsAt() {
  if (code === 25) { 
    return "Get a life.";
  } else {
    code++; 
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
        <div className="absolute size-[150px] -top-10 -left-15 bg-[#05C29F] rounded-full" />
        <div className="absolute size-[150px] -top-70 -right-20 bg-[#8E05C2] rounded-full" />
      </div>
    </div>
  );
};

export default Item1;
