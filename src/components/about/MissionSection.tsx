import Image from "next/image";
import missionImage from "@/assets/images/mission.jpg";
import mainIcons from "@/assets/images/main-ico.png";
import React from "react";

export default function MissionSection() {
  return (
    <section className="mx-4 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-around ">
          <div className="w-full md:w-1/2">
            <div className="mission-img rounded-lg overflow-hidden">
              <Image
                src={missionImage}
                alt="Our Mission"
                width={600}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="explore-content p-6">
              <div className="mb-3 flex justify-start">
                <div className="bg-white rounded-full ">
                  <Image src={mainIcons} alt="none" width={40} height={40} />
                </div>
              </div>
              <h2 className="text-5xl font-bold">Our Mission</h2>
              <p className="mt-4 text-base">
                At Helperow, our mission is to enhance your home’s functionality and aesthetic appeal through
                well-designed, secure furniture and comprehensive repair services. We believe that everyone deserves to
                live in a beautiful and well-maintained home.
              </p>
              <button className="learn-btn mt-6 bg-white text-black border border-black px-6 py-3 rounded-lg ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
