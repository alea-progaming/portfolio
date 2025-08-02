import React from "react";
import Image from "next/image";
import { skills, icons } from "@/assets/assets"; // Assuming your array is exported from this file

const Item2 = () => {
  return (
    <div className="bg-white/5 text-white rounded-2xl border-3 border-white/15 overflow-y-auto">
      <div className="ml-4 mt-5 mb-8">
        <span className="bg-[#8e05c2]/60 font-kronaOne rounded-full px-2 py-1">
          My Skills
        </span>
      </div>

      <div className="flex flex-wrap gap-4 p-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center gap-1 h-fit py-1.5 px-2.5 rounded-3xl border-2`}
            style={{
              borderColor: skill.color,
              boxShadow: `0 0 3px ${skill.color}`,
            }}
          >
            {skill.img ? (
              <Image src={skill.img} alt={skill.skills} className="size-4" />
            ) : (
              <div className="w-10 h-10 mb-2 bg-gray-500 rounded-full flex items-center justify-center">
                ❓
              </div>
            )}
            <span className="text-sm font-semibold">{skill.skills}</span>
          </div>
        ))}
      </div>
      <div className="relative">
        <div className="absolute z-10">
          {/* <Image
            src={icons.skills_anim}
            alt="skills animation"
            className="w-64 rounded-3xl"
          /> */}
        </div>
        <div className="absoulte bottom-0 left-0 blur-2xl size-[150px] bg-[#0554C2]"></div>
      </div>
    </div>
  );
};

export default Item2;
