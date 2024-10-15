import MainIconImage from "../../assets/images/main-ico.png";
import BoxImage from "@/assets/images/box-img.jpg";
import Image from "next/image";
import ServiceCard from "../shared/serviceCard/ServiceCard";
import { services } from "@/data/servicesDtata";
import Link from "next/link";
// Import the new ServiceCard component

const PopularServices = () => {
  return (
    <div>
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="bg-white inline-flex items-center justify-center p-2 rounded-full">
              <Image src={MainIconImage} alt="icon" className="h-8 w-8" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4">Popular Services</h2>
            <p className="text-white mt-2">Learn about door & window installation, mulching, and more.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="flex items-center justify-center mt-12">
            <Link href={"/help-services"}>
              <button className="text-white bg-orange-500 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 px-5 py-4 text-xl border border-white rounded-lg">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularServices;
