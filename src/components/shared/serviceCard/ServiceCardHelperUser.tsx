import { MessageCircle } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ServiceCardHelperUserProps {
  backgroundImage: StaticImageData;
  profileImage: StaticImageData;
  profileName: string;
  title: string;
  serviceType: string;
  location: string;
  description: string;
  price: string;
}

const ServiceCardHelperUser: React.FC<ServiceCardHelperUserProps> = ({
  backgroundImage,
  profileImage,
  profileName,
  title,
  serviceType,
  location,
  description,
  price,
}) => {
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-40 bg-gray-100">
        <Image src={backgroundImage} alt="Background" layout="fill" objectFit="cover" />
      </div>
      <div className="bg-orange-500 p-4 flex items-center">
        <Image src={profileImage} alt={profileName} width={48} height={48} className="rounded-full mr-3" />
        <span className="text-white text-lg font-semibold">{profileName}</span>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-base text-black mb-1 font-bold">
          Service Type | <span className="text-orange-500">{serviceType}</span>
        </p>
        <p className="text-base text-black mb-1 font-bold">
          Help Location | <span className="text-orange-500">{location}</span>
        </p>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-2xl text-end font-bold">{price}</p>

        <div className="flex  mt-2 justify-between items-start">
          <div className="flex flex-wrap gap-2">
            <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
              View details
            </button>
            <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
              Unpublish
            </button>
            <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
              Cancel
            </button>
            <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
              Modify
            </button>
          </div>
          <button className="bg-orange-500 text-white p-2 rounded-md">
            <MessageCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardHelperUser;
