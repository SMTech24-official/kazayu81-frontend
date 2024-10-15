import Image from "next/image";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  image: any;
  link: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, link }) => {
  return (
    <Link href={`service-detail/1`}>
      <div className="bg-white group max-w-[476px] flex flex-col items-center justify-between rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold text-black group-hover:text-orange-500">{title}</h3>
            <FaRegArrowAltCircleRight className="text-4xl group-hover:text-white group-hover:bg-orange-500 rounded-full" />
          </div>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        <div className="w-full h-[355px]">
          <Image src={image} alt={title} className="h-full w-full group-hover:scale-105 transition-all duration-500" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
