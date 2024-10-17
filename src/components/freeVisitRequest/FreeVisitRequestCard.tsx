"use client";
import { RootState } from "@/redux/store";
import { MessageCircle, Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useSelector } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";

interface FreeVisitRequestCardProps {
  backgroundImage: StaticImageData;
  profileImage: StaticImageData;
  profileName: string;
  title: string;
  serviceType: string;
  location: string;
  description: string;
  price: string;
}

const FreeVisitRequestCard: React.FC<FreeVisitRequestCardProps> = ({
  backgroundImage,
  profileImage,
  profileName,
  title,
  serviceType,
  location,
  description,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  price,
}) => {
  const user = useSelector((state: RootState) => state.user.user);
  //   console.log(user);

  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-40 bg-gray-100">
        <Image src={backgroundImage} alt="Background" layout="fill" objectFit="cover" />
      </div>
      <div>
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
          <p className="text-gray-700 mb-4">
            {
              // description will be truncated to 100 characters
              description.length > 70 ? description.substring(0, 70) + "..." : description
            }
          </p>
          {/* <p className="text-base text-black mb-1 font-bold">
            Scheduled Date | <span className="text-orange-500 text-sm">July 10, 2024 - 4:00 pm EST</span>
          </p> */}

          {/* requested by section */}

          {user?.role === "CUSTOMER" && (
            <div className="flex items-start justify-between">
              <div className="bg-white  border max-w-xs w-2/3">
                <h2 className="text-lg px-2 pb-2 font-semibold text-gray-700 border mb-3">Requested By</h2>
                <div className="flex items-center p-2">
                  <div className="relative w-12 h-12 mr-3">
                    <Image
                      src={profileImage}
                      alt="Zulqarnain's profile picture"
                      layout="fill"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Zulqarnain</p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-2xl text-end font-bold">{price}</p>
            </div>
          )}

          {user?.role === "HELPER" && (
            <div className="flex items-center justify-between">
              <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
                View Details
              </button>
              <p className="text-2xl text-end font-bold">{price}</p>
            </div>
          )}

          <div className="flex  mt-2 justify-between items-start">
            <div className="flex flex-wrap gap-1">
              {
                // Conditional rendering based on user role
                // HELPER
                user?.role === "CUSTOMER" && (
                  <div>
                    <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
                      Accept
                    </button>
                    <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
                      Reject
                    </button>
                  </div>
                )
              }

              {
                // Conditional rendering based on user role
                // HELPER
                user?.role === "HELPER" && (
                  <div>
                    <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
                      Request Sent
                    </button>
                    <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
                      Cancel
                    </button>
                  </div>
                )
              }
            </div>
            {user?.role === "CUSTOMER" && (
              <div className="flex">
                <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
                  View Details
                </button>
                <button className="bg-orange-500 text-white p-2 rounded-md">
                  <MessageCircle size={20} />
                </button>
              </div>
            )}
            {user?.role === "HELPER" && (
              <div className="flex gap-2">
                <button className="bg-orange-500 hover:bg-white border border-orange-500 transition-all duration-300 hover:text-orange-500 text-white p-2 rounded-md">
                  <IoLocationSharp size={20} />
                </button>
                <button className="bg-orange-500 hover:bg-white border border-orange-500 transition-all duration-300 hover:text-orange-500 text-white p-2 rounded-md">
                  <MessageCircle size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeVisitRequestCard;
