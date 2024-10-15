import React from "react";
import Image from "next/image";

import MainIcon from "@/components/shared/mainIcon/MainIcon";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SectionTemplateProps {
  reverse: boolean;
  title: string;
  description: string;
  imageLink: any;
  button: boolean;
}

const SectionTemplate: React.FC<SectionTemplateProps> = ({ reverse, title, description, imageLink, button }) => {
  return (
    <div className="container mx-auto xl:my-24 my-12 px-5 xl:px-0">
      <div className={`flex xl:gap-16 gap-8 flex-col ${reverse ? "xl:flex-row-reverse" : "xl:flex-row"}`}>
        <div className="w-full h-full my-auto  ">
          <div className="flex">
            <MainIcon />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600 text-lg text-justify">{description}</p>
          {button && (
            <Button className="bg-white text-black border py-8 px-5 rounded-2xl mt-9 text-lg border-gray-300 hover:bg-gray-100 transition-colors duration-200">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="w-full ">
          <Image
            src={imageLink}
            alt="Person cleaning a window"
            width={600}
            height={400}
            className="rounded-lg  w-full max-h-96 "
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTemplate;
