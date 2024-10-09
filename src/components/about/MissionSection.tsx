import Image from "next/image";
import React from "react";

export default function MissionSection() {
  return (
    <section className="h-explore-sec mx-4 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <div className="mission-img rounded-lg overflow-hidden">
              <Image
                src="/assets/images/mission.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="explore-content p-6">
              <div className="mb-3 flex justify-center">
                <div className="bg-white rounded-full p-4">
                  <Image src="/assets/images/main-ico.png" alt="none" width={80} height={80} />
                </div>
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="mt-4">
                At Helperow, our mission is to enhance your home’s functionality and aesthetic appeal through
                well-designed, secure furniture and comprehensive repair services. We believe that everyone deserves to
                live in a beautiful and well-maintained home.
              </p>
              <button className="learn-btn mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
                Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
