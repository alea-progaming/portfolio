"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="font-outfit w-full fixed px-8 py-4 lg:px-12 xl:px-16 flex justify-between items-center z-50 backdrop-blur-md">
        <h1 className="font-kronaOne text-2xl">
          <Link href="/">
            Mika<span className="text-[#8E05C2] text-3xl">.</span>
          </Link>
        </h1>
        <ul className="hidden md:flex items-center gap-6 border-1 border-[#8E05C2] rounded-full py-3 px-8">
          {["Home", "About", "Overview", "Projects", "Skills"].map((label) => (
            <Link key={label} href={`#${label.toLowerCase()}`}>
              {label}
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt="dark mode toggle"
              className="w-6 h-6"
            />
          </button>
          <a
            href="mailto:mikaela.programming@gmail.com"
            className="hidden lg:flex align-center border-1 rounded-full px-8 py-3"
          >
            Contact me
            <Image
              src={assets.topRightArrow_white}
              alt="Contact me"
              className="ml-4"
            />
          </a>
          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image src={assets.menu_white} alt="navbar menu" />
          </button>
        </div>
        <ul
          className={`md:hidden bg-[#8E05C2] flex flex-col gap-4 h-screen py-20 px-10 fixed top-0 bottom-0 w-64 z-50 transition-transform duration-500 text-[20px] ${
            isMenuOpen ? "translate-x-0 right-0" : "translate-x-full right-0"
          }`}
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close}
              alt="close menu"
              className="w-5 cursor-pointer"
            />
          </div>
          {["Home", "About", "Overview", "Projects", "Skills"].map((label) => (
            <li key={label}>
              {/* // * change the # to / so I can navigate thru pages */}
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
