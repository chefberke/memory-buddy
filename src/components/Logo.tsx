import Image from "next/image";
import React from "react";

import Logos from "../../public/logo2.svg";

function Logo() {
  return (
    <div>
      <Image src={Logos} width={200} height={200} alt="memorybuddy" />
    </div>
  );
}

export default Logo;
