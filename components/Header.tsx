"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {};
  return (
    <div className={twMerge("h-fit bg-gradient-to-b from-emerald-800 p-6", className)}>
      <div className="w-full mb-4 flex justify-between items-center">
        {/* Desktop View */}
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            onClick={() => {
              console.log("router: ", router);
              router.back();
            }}
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" onClick={() => router.forward()}>
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        {/* Mobile View */}
        <div className="md:hidden flex items-center gap-x-2">
          <button onClick={() => {}} className="rounded-full p-2 flex justify-center items-center bg-white hover:opacity-75 transition">
            <HiHome className="text-black" size={23} />
          </button>
          <button onClick={() => {}} className="rounded-full p-2 flex justify-center items-center bg-white hover:opacity-75 transition">
            <BiSearch className="text-black" size={23} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button>Sign up</Button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;
