"use client";
import CreateHelpOrderButton from "@/components/shared/createHelpOrderButton/CreateHelpOrderButton";
import MainIcon from "@/components/shared/mainIcon/MainIcon";
import ServiceCardHelperUser from "@/components/shared/serviceCard/ServiceCardHelperUser";
import { useGetOrdersQuery } from "@/redux/api/orderApi";
import { RootState } from "@/redux/store";
import { IOrder } from "@/types/helpOrder";
import React from "react";
import { useSelector } from "react-redux";

const OpenPage = () => {
  const user = useSelector((state: RootState) => state.user.user); // Get user from Redux (make sure to access .user)

  const { data } = useGetOrdersQuery({});
  const orderData = data?.data;
  // const orderMeta = data?.meta;

  const openOrders = orderData?.filter(
    (order: any) => order.status === "OPEN" && order?.isPublished
  );
  console.log(openOrders);

  return (
    <div>
      <div className="flex items-center flex-col justify-center mb-10">
        <MainIcon />
        <p className="font-bold text-2xl">Open</p>
      </div>
      {user?.role === "CUSTOMER" && (
        <div className="flex items-center justify-end mb-10 ">
          <CreateHelpOrderButton />
        </div>
      )}
      <div className="grid grid-cols-6 gap-5 mx-auto max-w-screen">
        {openOrders?.map((order: IOrder) => (
          <div
            key={order?.id}
            className="md:col-span-3 lg:col-span-2 col-span-6 "
          >
            <ServiceCardHelperUser order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenPage;
