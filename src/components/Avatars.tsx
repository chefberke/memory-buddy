import React from "react";
import Image from "next/image";

import chefberke2Img from "../../public/chefberke2.png";

function Avatars() {
  const avatars = [
    {
      id: 1,
      fullname: "Berke Kanber",
      name: "@chefberke",
      nickname: "chefberke",
      imgSrc: chefberke2Img,
    },
  ];
  return (
    <div className="flex items-center justify-center gap-1 mt-3 relative z-10">
      {avatars.map((avatar) => (
        <div key={avatar.id} className="relative group">
          <a
            target="_blank"
            href={`https://github.com/${avatar.nickname}`}
          >
            <Image
              src={avatar.imgSrc}
              alt={avatar.name}
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </a>
          <div className="backdrop-blur-3xl text-center absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-3 py-1 text-sm text-white bg-black border border-gray-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-gray-200 text-[15px] truncate">
              {avatar.fullname}
            </p>
            <p className="text-gray-400 text-[14px]">{avatar.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Avatars;
