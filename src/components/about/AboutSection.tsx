import React from "react";
import mainIcon from "@/assets/images/main-ico.png";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="about-sec mx-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="about-inner text-center">
            <div className="mb-3 flex justify-center">
              <div className="bg-white rounded-full p-4">
                <Image src={mainIcon} alt="none" width={80} height={80} />
              </div>
            </div>
            <h1 className="text-4xl font-bold">About our company</h1>
            <p className="mt-4 text-gray-700">
              Welcome to Helperow, your trusted partner for all handyman services. With over 20 years of expertise
              passed down through generations, we pride ourselves on delivering exceptional craftsmanship and reliable
              service. Our journey began as a family business, rooted in a commitment to excellence and a dedication to
              meeting the needs of our customers. Today, we continue this legacy, always prioritizing your perspective
              to provide the best service at the best price.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <a href="Helper/Helper-signup.html">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
                  Become helper <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </a>
              <a href="User/User-signup.html">
                <button className="bg-white text-black border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
                  Find helper
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
