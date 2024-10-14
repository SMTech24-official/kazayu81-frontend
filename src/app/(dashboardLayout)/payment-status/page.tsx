import PaymentCard from "@/components/PaymentCard/PaymentCard";
import mainIcon from "@/assets/images/main-ico.png";
import Image from "next/image";
import React from "react";
import StatusDropdown from "@/components/paymentStatus/StatusDropdown";

const PaymentTransfer = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-3 mb-10">
        <div className=" flex items-end">
          <StatusDropdown />
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4 bg-white inline-block p-2 rounded-full">
            <Image
              src={mainIcon}
              alt="none"
              width={40}
              height={40}
              className="mx-auto"
            />
          </div>
          <h1 className="text-2xl font-bold">Payment status !</h1>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PaymentCard
          status="Partially Refunded"
          name="Zulqarnain"
          price="$ 40.00"
          refunded
        />
        <PaymentCard
          status="Payment in process"
          name="Zulqarnain"
          price="$ 100.00"
        />
        <PaymentCard
          status="Partial payment received"
          name="Zulqarnain"
          price="$ 100.00"
        />
      </div>
    </div>
  );
};

export default PaymentTransfer;
