"use client";
import SavedPageCard from "@/components/saved/SavedPageCard";
import MainIcon from "@/components/shared/mainIcon/MainIcon";
import { useGetOrdersQuery } from "@/redux/api/orderApi";
import { IOrder } from "@/types/helpOrder";
import React from "react";

const SavedPage = () => {
  const { data } = useGetOrdersQuery({});
  const orderData = data?.data;
  // const orderMeta = data?.meta;

  const openOrders = orderData?.filter(
    (order: any) => order.status === "OPEN" && order.isPublished === false
  );
  // console.log(openOrders);

  return (
    <div>
      <div className="flex items-center flex-col justify-center mb-10">
        <MainIcon />
        <p className="font-bold text-2xl">Saved Helps</p>
      </div>

      <div className="grid grid-cols-6 gap-5 mx-auto max-w-screen">
        {openOrders?.map((order: IOrder) => (
          <div
            key={order?.id}
            className="md:col-span-3 lg:col-span-2 col-span-6 "
          >
            <SavedPageCard order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPage;
