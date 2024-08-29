import React from "react";
import Avatars from "./Avatars";

function Header() {
  return (
    <div className="flex items-center justify-center mt-32 relative z-10">
      <div
        className="flex-col items-center justify-center"
        data-aos="fade-up"
      >
        <h1 className="text-black font-bold text-[2.9rem] max-sm:text-[2.1rem] max-md:text-[2.5rem] text-center mt-2">
          Your Moments, Your <br /> Memories , Forever.
        </h1>
        <p className=" text-gray-600 text-center mt-3 font-normal text-[16px] max-sm:px-16 max-md:px-16">
          Capture the moments that matter, cherish the memories
          forever. Our app lets <br /> you preserve and share your
          life's most beautiful experiences.
        </p>
        <div className="mt-6">
          <h2 className="text-center text-black/90 font-medium">
            Developing by
          </h2>
          <Avatars />
        </div>
      </div>
    </div>
  );
}

export default Header;
