"use client";
import CompletedCard from "@/components/completed/CompletedCard";
import CreateHelpOrderButton from "@/components/shared/createHelpOrderButton/CreateHelpOrderButton";
import MainIcon from "@/components/shared/mainIcon/MainIcon";
import { useGetOrdersQuery } from "@/redux/api/orderApi";
import { RootState } from "@/redux/store";
import { OrderStatus } from "@/types/common";
import { IOrder } from "@/types/helpOrder";
import React from "react";
import { useSelector } from "react-redux";

const CompletedPage = () => {
  const user = useSelector((state: RootState) => state.user.user); // Get user from Redux (make sure to access .user)

  const { data } = useGetOrdersQuery({});
  const orderData = data?.data;
  // const orderMeta = data?.meta;

  const completedOrders = orderData?.filter(
    (order: any) => order.status === OrderStatus.COMPLETED && order?.isPublished
  );

  return (
    <div>
      <div className="flex items-center flex-col justify-center mb-20">
        <MainIcon />
        <p className="font-bold text-2xl">Completed</p>
      </div>
      {user?.role === "CUSTOMER" && (
        <div className="flex items-center justify-end mb-10 mr-12">
          <CreateHelpOrderButton />
        </div>
      )}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-10">
        {completedOrders?.map((order: IOrder) => (
          <CompletedCard key={order?.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default CompletedPage;
