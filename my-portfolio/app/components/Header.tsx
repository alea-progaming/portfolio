"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";

const circles = [
  { id: 1, size: 90, color: "#0D6EFD", x: "5%", y: "20%" },
  { id: 2, size: 60, color: "#A020F0", x: "10%", y: "10%" },
  { id: 3, size: 30, color: "#20C997", x: "15%", y: "60%" },
  { id: 4, size: 20, color: "#FFF", x: "25%", y: "75%" },
  { id: 5, size: 40, color: "#A020F0", x: "80%", y: "20%" },
  { id: 6, size: 30, color: "#20C997", x: "90%", y: "10%" },
  { id: 7, size: 25, color: "#FFF", x: "88%", y: "50%" },
  { id: 8, size: 35, color: "#0D6EFD", x: "70%", y: "15%" },
  { id: 9, size: 45, color: "#D600A8", x: "75%", y: "70%" },
];

const Header = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "mikaela.programming@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="relative w-[80vw] mx-auto h-dvh flex flex-col items-center justify-center gap-28 font-outfit overflow-hidden">
      {/* 🎈 Animated background circles */}
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            top: circle.y,
            left: circle.x,
          }}
          animate={{
            y: [0, Math.random(), 15, 0],
            x: [0, 5, Math.random(), 0],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 1,
          }}
        />
      ))}

      {/* ✨ Image + Shadow */}
      <div className="relative w-fit mx-auto">
        {/* Design / Develop Image with fade + scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={assets.designdevelop}
            alt="Design Develop"
            priority // optional but helps if it's above the fold
          />
        </motion.div>

        {/* Shadow blob underneath, with pulse animation */}
        <motion.div
          className="absolute bg-[#0D0D0D] rounded-[50%] w-[120%] h-3 -bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: [0.2, 1.1, 1] }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      </div>

      {/* 📝 Paragraph */}
      <motion.p
        className="font-kronaOne text-center max-w-[80%] md:w-auto z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I design and develop cool and useful web applications. You ask and I
        shall deliver.
      </motion.p>

      {/* 📨 Call to Action */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a
          href="mailto:mikaela.programming@gmail.com"
          className="inline-flex items-center gap-2 border border-[#8e05c2] py-3 px-5 rounded-2xl bg-[#121212]"
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
      </motion.div>
    </section>
  );
};

export default Header;
