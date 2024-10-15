import React from "react";
import mainIcon from "@/assets/images/main-ico.png";
import Image from "next/image";

const MainIcon = () => {
  return (
    <div className="bg-orange-200 p-2 mb-4 rounded-full">
      <Image src={mainIcon} alt="icon" className="h-8 w-8" />
    </div>
  );
};

export default MainIcon;
