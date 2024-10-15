import Image from "next/image";
import React from "react";
import mainIcon from "@/assets/images/main-ico.png";

const PaymentInTransfer = () => {
  return (
    <div className="w-full font-sans">
      <div className="flex flex-col items-center mb-6">
        <div className="mb-4 bg-white inline-block p-2 rounded-full shadow">
          <Image
            src={mainIcon}
            alt="none"
            width={40}
            height={40}
            className="mx-auto"
          />
        </div>
        <h1 className="text-xl font-bold">Payment in transfer !</h1>
      </div>

      <div className="bg-[#e8f3ed] p-4 rounded-md mb-6">
        <p className="text-[#2c584c]">
          Next Payment Transfer Date{" "}
          <span className="text-[#f26522] font-semibold">July 15, 2024</span>
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-start border-b pb-4">
          <div>
            <p className="font-semibold">Deposit for #1231231312</p>
            <p className="text-sm text-gray-500">12/07/2025 12:39 EST</p>
          </div>
          <div className="text-right">
            <p className="text-[#f26522] font-semibold">+$30.00</p>
            <p className="text-sm text-[#4a90e2]">In Transit</p>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-semibold">Deposit for #1231231312</p>
            <p className="text-sm text-gray-500">12/07/2025 12:39 EST</p>
          </div>
          <div className="text-right">
            <p className="text-[#f26522] font-semibold">+$30.00</p>
            <p className="text-sm text-[#27ae60]">Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInTransfer;
