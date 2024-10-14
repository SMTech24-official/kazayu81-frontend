import { MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

interface PaymentCardProps {
  status: string;
  name: string;
  price: string;
  refunded?: boolean;
}

const PaymentCard = ({ status, name, price, refunded }: PaymentCardProps) => {
  return (
    <div>
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="relative h-40 bg-gray-100">
          <Image
            src="/placeholder.svg?height=160&width=320"
            alt="Office supplies"
            width={300}
            height={150}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-semibold rounded">
            #1929130
          </div>
          <div className="absolute top-2 right-2 bg-white px-2 py-1 text-xs font-semibold rounded">
            {status}
          </div>
        </div>
        <div className="bg-orange-500 text-white p-4 flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Profile"
            width={300}
            height={150}
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-semibold">{name}</span>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">Triangles in calculus</h3>
          <p className="text-sm mb-1">
            Service Type | <span className="text-orange-500">Electrical</span>
          </p>
          <p className="text-sm mb-2">
            Help Location | <span className="text-orange-500">Miami, FL</span>
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Lorem Ipsum has been the industry&appos;s standard dummy text ever
            since the 1500s.
          </p>
          <p className="text-sm mb-4">
            Scheduled Date | July 10, 2024 - 4:00 pm EST
          </p>
          <div className="flex justify-between items-center">
            <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded">
              View details
            </button>
            <span
              className={`text-2xl font-bold ${
                refunded ? "text-red-500" : "text-green-500"
              }`}
            >
              {price}
            </span>
          </div>
        </div>
        <div className="bg-orange-500 p-2 flex justify-end">
          <MessageCircle className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
