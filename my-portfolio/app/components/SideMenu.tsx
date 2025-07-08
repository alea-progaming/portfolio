"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

interface SideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const SideMenu = ({ isOpen, closeMenu }: SideMenuProps) => {
  return (
    <ul
      className={`md:hidden bg-[#8E05C2] flex flex-col gap-4 h-screen py-20 px-10 fixed top-0 bottom-0 w-64 z-50 transition-transform duration-500 text-[20px] ${
        isOpen ? "translate-x-0 right-0" : "translate-x-full right-0"
      }`}
    >
      <div
        className="absolute top-6 right-6"
        onClick={closeMenu}
      >
        <Image
          src={assets.close}
          alt="close menu"
          className="w-5 cursor-pointer"
        />
      </div>
      {["Home", "About", "Projects", "Links", "Tools"].map((label) => (
        <li key={label}>
          {/* // * change the # to / so I can navigate thru pages */}
          <Link
            href={`#${label.toLowerCase()}`}
            onClick={closeMenu}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
