import React from "react";
import mainIcon from "@/assets/images/main-ico.png";
import Image from "next/image";
import { services } from "@/data/servicesDtata";
import BoxImage from "@/assets/images/box-img.jpg";
import ServiceCard from "@/components/shared/serviceCard/ServiceCard";
import CallToAction from "@/components/home/CallToAction";

const Services = () => {
  return (
    <div className="">
      <div className="bg-orange-500 border-t border-gray-200 py-16">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-4 rounded-full">
              <Image src={mainIcon} alt="pin icon" className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">Our Services</h2>
          <p className="text-white max-w-md mx-auto">Lorem ipsum dolor sit amet consectetur nunc ac congue risus.</p>
        </div>
        {/*  */}
        <div className="grid container mx-auto mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={BoxImage}
              link={service.link}
            />
          ))}
        </div>
      </div>
      <div>
        <CallToAction />
      </div>
    </div>
  );
};

export default Services;
