import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const ValuesSection = () => {
  return (
    <section className="value-sec px-4 py-16 bg-orange-500 text-white pt-72">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-transparent p-6 rounded-lg">
              <div className="mb-3 flex justify-center">
                <div className="bg-white rounded-full p-4">
                  <Image src="/assets/images/main-ico.png" alt="none" width={80} height={80} />
                </div>
              </div>
              <h2 className="text-3xl font-bold">Our Values</h2>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur. <br /> Lectus nunc ante ac orci scelerisque duis vitae hendrerit
                ac ac pellentesque dui.
              </p>
              <a href="Helper/Helper-signup.html">
                <button className="bg-white text-orange-500 mt-6 px-6 py-3 rounded-lg hover:bg-gray-100">
                  Become helper <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </a>
            </div>
          </div>
          {[
            {
              title: "Customer-Centric Approach",
              text: "We always think from the customer’s perspective, ensuring our services meet your specific needs and expectations.",
            },
            {
              title: "Quality Craftsmanship",
              text: "With decades of expertise, we deliver high-quality work that stands the test of time.",
            },
            {
              title: "Reliability and Trust",
              text: "Our family business is built on trust, ensuring we are there for you whenever you need us.",
            },
            {
              title: "Affordability",
              text: "We provide top-notch services at competitive prices, making quality home improvement accessible to everyone.",
            },
            {
              title: "Sustainability",
              text: "We use eco-friendly materials and practices to ensure a minimal environmental footprint.",
            },
          ].map((value, idx) => (
            <div key={idx} className="p-6 rounded-lg max-w-md mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-200 rounded-full p-3">
                    <ThumbsUp className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-center mb-2">Customer-Centric Approach</h2>
                <p className="text-sm text-center text-gray-600">
                  We always think from the customer&apos;s perspective, ensuring our services meet your specific needs
                  and expectations.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
