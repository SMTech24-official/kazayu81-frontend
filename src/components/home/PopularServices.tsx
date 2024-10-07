import MainIconImage from "../../assets/images/main-ico.png";
import BoxImage from "../../assets/images/box-img.jpg";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const PopularServices = () => {
  const services = [
    {
      title: "House Cleaning",
      description: "Professional home cleaning services, from dusting to deep cleaning, tailored to your needs.",
      image: "/path-to-house-cleaning.jpg",
      link: "#",
    },
    {
      title: "Lawn Service",
      description: "Complete lawn care, including mowing, edging, trimming, and mulching for a beautiful yard.",
      image: "/path-to-lawn-service.jpg",
      link: "#",
    },
    {
      title: "Painting Services",
      description: "Interior and exterior painting with high-quality finishes for a fresh, vibrant look.",
      image: "/path-to-painting-service.jpg",
      link: "#",
    },
    {
      title: "Home Repairs",
      description: "Expert repairs for all parts of your home, from fixing leaky roofs to patching walls.",
      image: "/path-to-home-repairs.jpg",
      link: "#",
    },
    {
      title: "Electrical Services",
      description: "Licensed electricians available for installations, repairs, and safety inspections.",
      image: "/path-to-electrical-services.jpg",
      link: "#",
    },
    {
      title: "Plumbing Services",
      description: "Quick and reliable plumbing services, from fixing leaks to installing new fixtures.",
      image: "/path-to-plumbing-services.jpg",
      link: "#",
    },
    {
      title: "Carpentry Services",
      description: "Custom carpentry for cabinets, furniture, decks, and more to enhance your home.",
      image: "/path-to-carpentry-services.jpg",
      link: "#",
    },
    {
      title: "Assembly & Installation",
      description: "Professional assembly and installation services for furniture, shelving, and appliances.",
      image: "/path-to-assembly-installation.jpg",
      link: "#",
    },
    {
      title: "Kitchen Cabinet Installation",
      description: "Custom cabinet installation to upgrade your kitchen with beautiful, functional storage.",
      image: "/path-to-kitchen-cabinet-installation.jpg",
      link: "#",
    },
    {
      title: "TV Mounting Services",
      description: "Secure TV mounting with precise positioning and cable management for a clean look.",
      image: "/path-to-tv-mounting-services.jpg",
      link: "#",
    },
    {
      title: "Epoxy Flooring Services",
      description: "Durable and stylish epoxy floor coatings for garages, basements, and commercial spaces.",
      image: "/path-to-epoxy-flooring-services.jpg",
      link: "#",
    },
    {
      title: "Drywall Services",
      description: "Professional drywall installation, repair, and finishing for smooth, even walls.",
      image: "/path-to-drywall-services.jpg",
      link: "#",
    },
  ];

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
              <div
                key={index}
                className="bg-white group max-w-[476px] flex flex-col items-center justify-between rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-bold text-black group-hover:text-orange-500">{service.title}</h3>
                    <FaRegArrowAltCircleRight className="text-4xl group-hover:text-white group-hover:bg-orange-500 rounded-full" />
                  </div>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
                <div className="w-full h-[355px]">
                  <Image
                    src={BoxImage}
                    alt="box"
                    className=" h-full w-full group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-12">
            <button className="text-white bg-orange-500 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 px-5 py-4 text-xl border border-white rounded-lg">
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularServices;
