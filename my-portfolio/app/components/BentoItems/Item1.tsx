"use client";

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

  return (
    <div className="bg-black/15 text-white h-full rounded-2xl border-3 border-white/15">
      <div className="flex items-center justify-center p-6 gap-3">
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
        <div className="w-[400px] h-[230px] bg-black/50 rounded-lg border-black/15 border-3"></div>
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
