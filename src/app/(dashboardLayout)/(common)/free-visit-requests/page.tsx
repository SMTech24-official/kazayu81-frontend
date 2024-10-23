"use client";
import FreeVisitRequestCard from "@/components/freeVisitRequest/FreeVisitRequestCard";
import CreateHelpOrderButton from "@/components/shared/createHelpOrderButton/CreateHelpOrderButton";
import MainIcon from "@/components/shared/mainIcon/MainIcon";
import { useGetOrdersQuery } from "@/redux/api/orderApi";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const FreePageVisit = () => {
  const user = useSelector((state: RootState) => state.user.user); // Get user from Redux (make sure to access .user)

  const { data } = useGetOrdersQuery({});
  const orderData = data?.data;
  // const orderMeta = data?.meta;

  const freeVisitReqOrders = orderData?.filter(
    (order: any) =>
      // order.status === "OPEN" &&
      order?.isPublished &&
      order?.freeVisits.length > 0
  );

  const allFreeVisit = freeVisitReqOrders
    ?.map((order: any) => order.freeVisits)
    .flat();


  return (
    <div>
      <div className="flex items-center flex-col justify-center mb-10">
        <MainIcon />
        <p className="font-bold text-2xl">Free Visit Requests!</p>
      </div>
      {user?.role === "CUSTOMER" && (
        <div className="flex items-center justify-end mb-10 ">
          <CreateHelpOrderButton />
        </div>
      )}
      <div className="grid grid-cols-6   gap-5 mx-auto max-w-screen">
        {allFreeVisit?.map((freeVisit: any, index: number) => (
          <div key={index} className="md:col-span-3 lg:col-span-2 col-span-6">
            <FreeVisitRequestCard
              freeVisit={freeVisit}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreePageVisit;
