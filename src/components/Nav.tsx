"use client";

import React from "react";
import Logo from "./Logo";

import { MdOutlineArrowOutward } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

function Nav() {
  function toastyFunc() {
    toast("This app is still under development!");
  }

  return (
    <div
      data-aos="fade-up"
      className="w-full h-[6rem] flex items-center justify-between max-sm:px-6 max-md:px-12"
    >
      <div>
        <Logo />
      </div>
      <Toaster />
      <div className="bg-black text-white rounded-xl px-4 py-2 flex items-center justify-center text-[14px] font-medium gap-1 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105">
        <button onClick={toastyFunc}>Launch App</button>
        <MdOutlineArrowOutward className="w-5 h-5" />
      </div>
    </div>
  );
}

export default Nav;
