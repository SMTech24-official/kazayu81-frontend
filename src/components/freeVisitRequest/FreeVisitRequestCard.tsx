"use client";
import orderBg from "@/assets/images/orderbg.jpg";
import profile from "@/assets/images/profile.jpg";
import { useUpdateFreeVisitStatusMutation } from "@/redux/api/freeVisitApi";
import { useGetOrderByIdQuery } from "@/redux/api/orderApi";
import { RootState } from "@/redux/store";
import { FreeVisitStatus } from "@/types/common";
import { format } from "date-fns";
import { MessageCircle, Star } from "lucide-react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface FreeVisitRequestCardProps {
  freeVisit: any;
}

const FreeVisitRequestCard: React.FC<FreeVisitRequestCardProps> = ({
  freeVisit,
}) => {
  const user = useSelector((state: RootState) => state.user.user);
  //   console.log(user);
  const { data } = useGetOrderByIdQuery(freeVisit?.orderId);
  const order = data?.data;

  const [updateFreeVisitStatus] = useUpdateFreeVisitStatusMutation();

  const updateFreeVisitStatusHandler = async (
    freeVisitStatus: FreeVisitStatus
  ) => {
    try {
      await updateFreeVisitStatus({
        freeVisitId: freeVisit?.id,
        data: { freeVisitStatus },
      });

      // console.log(res);
      toast.success("Free visit status updated successfully", {
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to update free visit status");
    }
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
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
          <h2 className="text-xl font-bold mb-2">{order?.subject}</h2>
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
          <p className="text-base text-black mb-3 font-bold">
            Scheduled Date |{" "}
            <span className="text-orange-500 text-sm">
              {" "}
              {freeVisit?.scheduledDate
                ? format(new Date(freeVisit.scheduledDate), "MMMM dd, yyyy")
                : ""}
              -
              {freeVisit?.scheduledTime
                ? format(
                    new Date(`${freeVisit.scheduledTime}`),
                    "hh:mm a"
                  )
                : ""}
            </span>
          </p>

          {/* requested by section */}

          {user?.role === "CUSTOMER" && (
            <div className="flex items-start justify-between">
              <div className="bg-white  border max-w-xs w-2/3">
                <h2 className="text-lg px-2 pb-2 font-semibold text-gray-700 border mb-3">
                  Requested By
                </h2>
                <div className="flex items-center p-2">
                  <div className="relative w-12 h-12 mr-3">
                    <Image
                      src={
                        order?.freeVisits?.find(
                          (visit: any) =>
                            visit?.helperId === freeVisit?.helperId
                        )?.helper?.user?.profileImage || profile
                      }
                      alt="Zulqarnain's profile picture"
                      layout="fill"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {
                        order?.freeVisits?.find(
                          (visit: any) =>
                            visit?.helperId === freeVisit?.helperId
                        )?.helper?.firstName
                      }{" "}
                      {
                        order?.freeVisits?.find(
                          (visit: any) =>
                            visit?.helperId === freeVisit?.helperId
                        )?.helper?.lastName
                      }
                    </p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-2xl text-end font-bold">
                $ {order?.totalCost}
              </p>
            </div>
          )}

          {user?.role === "HELPER" && (
            <div className="flex items-center justify-between">
              <button className="mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold">
                View Details
              </button>
              <p className="text-2xl text-end font-bold">
                $ {order?.totalCost}
              </p>
            </div>
          )}

          <div className="flex  mt-2 justify-between items-start">
            <div className="flex flex-wrap gap-1">
              {
                // Conditional rendering based on user role
                // HELPER
                user?.role === "CUSTOMER" && (
                  <div>
                    <button
                      onClick={() =>
                        updateFreeVisitStatusHandler(FreeVisitStatus.ACCEPTED)
                      }
                      className={`mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold ${
                        freeVisit?.freeVisitStatus === FreeVisitStatus.ACCEPTED
                          ? "bg-orange-500 text-white"
                          : ""
                      }`}
                      disabled={
                        freeVisit?.freeVisitStatus === FreeVisitStatus.ACCEPTED
                      }
                    >
                      {freeVisit?.freeVisitStatus === FreeVisitStatus.ACCEPTED
                        ? "Accepted"
                        : "Accept"}
                    </button>
                    <button
                      onClick={() =>
                        updateFreeVisitStatusHandler(FreeVisitStatus.REJECTED)
                      }
                      className={`mr-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300  text-sm font-semibold ${
                        freeVisit?.freeVisitStatus === FreeVisitStatus.REJECTED
                          ? "bg-gray-800 text-white border-gray-800"
                          : ""
                      }`}
                      disabled={
                        freeVisit?.freeVisitStatus === FreeVisitStatus.REJECTED
                      }
                    >
                      {freeVisit?.freeVisitStatus === FreeVisitStatus.REJECTED
                        ? "Rejected"
                        : "Reject"}
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
