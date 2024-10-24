"use client";
import orderBg from "@/assets/images/orderbg.jpg";
import profile from "@/assets/images/profile.jpg";
import { useAcceptOrderMutation } from "@/redux/api/orderApi";
import { RootState } from "@/redux/store";
import { IOrder } from "@/types/helpOrder";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface HelpSearchPageCardProps {
  order: IOrder;
}

const HelpSearchPageCard: React.FC<HelpSearchPageCardProps> = ({ order }) => {
  const user = useSelector((state: RootState) => state.user.user);
  //   console.log(user);
  const [acceptOrder] = useAcceptOrderMutation();

  // Handle accept order
  const handleAcceptOrder = async (orderId: number) => {
    try {
      await acceptOrder(orderId).unwrap();

      toast.success("Order accepted successfully");
    } catch (error) {
      console.log("error", error);
      toast.error("Error accepting order please try again");
    }
  };

  return (
    <div className="w-full  bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-40 bg-gray-100">
        <Image src={orderBg} alt="Background" layout="fill" objectFit="cover" />
        <p className="absolute bg-white top-3 left-5 p-1 text-xs font-bold rounded-md">
          #{order?.orderId}
        </p>
      </div>
      <div>
        <div className="bg-orange-500 p-4 flex items-center">
          <Image
            src={
              order?.customer?.user?.profileImage
                ? order?.customer?.user?.profileImage
                : profile
            }
            alt={order?.customer?.user?.firstName || "Profile Image"}
            width={48}
            height={48}
            className="rounded-full mr-3"
          />
          <span className="text-white text-lg font-semibold">
            {order?.customer?.firstName} {order?.customer?.lastName}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold mb-2">{order?.subject}</h2>
            <div className="bg-orange-500 group h-8 w-8 hover:border transition-all duration-300 hover:border-orange-500 hover:bg-white flex items-center justify-center rounded-md">
              <FaMapMarkerAlt className="h-4 w-4 text-white group-hover:text-orange-500" />
            </div>
          </div>
          <p className="text-base text-black mb-1 font-bold">
            Service Type |{" "}
            <span className="text-orange-500">{order?.serviceType}</span>
          </p>
          <p className="text-base text-black mb-1 font-bold">
            Help Location |{" "}
            <span className="text-orange-500">{order?.serviceLocation}</span>
          </p>
          <p className="text-gray-700 mb-4">
            {
              // description will be truncated to 100 characters
              order?.description.length > 70
                ? order?.description.substring(0, 70) + "..."
                : order?.description
            }
          </p>
          {/* <p className="text-base text-black mb-1 font-bold">
            Scheduled Date |{" "}
            <span className="text-orange-500 text-sm">
              July 10, 2024 - 4:00 pm EST
            </span>
          </p> */}

          <p className="text-2xl text-end font-bold">${order?.totalCost}</p>
          <div className="flex  mt-2 justify-between items-start">
            <div className="flex flex-wrap gap-1">
              {
                // Conditional rendering based on user role
                // HELPER
                user && (
                  <>
                    <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
                      Offer free visit
                    </button>
                    <button
                      onClick={() => handleAcceptOrder(order?.id)}
                      className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold"
                    >
                      Accept
                    </button>
                  </>
                )
              }
            </div>
            {user && (
              <div className="flex items-center">
                <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
                  View details
                </button>
                <button className="bg-orange-500 text-white p-2 rounded-md">
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

export default HelpSearchPageCard;
