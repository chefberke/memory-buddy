import Image from "next/image";
import React from "react";

import Phone from "../../public/phonemockup3.svg";

function Mockup() {
  return (
    <div
      data-aos="fade-up"
      className="w-full flex items-center justify-center mt-20 relative z-10"
    >
      <Image
        src={Phone}
        width={800}
        height={800}
        className="phoneImage"
        alt="phonemockup"
        priority
      />
    </div>
  );
}

export default Mockup;
