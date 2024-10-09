import React from "react";
import imageOne from "@/assets/images/about one.jpg";
import imageTwo from "@/assets/images/about two.jpg";
import imageThree from "@/assets/images/about three.jpg";
import Image from "next/image";

export default function AboutImageSection() {
  return (
    <section className="about-img-sec mx-4 mt-8 -mb-52">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-4">
            <div className="about-img-main rounded-lg">
              <Image
                src={imageOne}
                alt="none"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <div className="about-img-main rounded-lg ">
              <Image
                src={imageTwo}
                alt="none"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-xl border mt-20"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <div className="about-img-main rounded-lg">
              <Image
                src={imageThree}
                alt="none"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
