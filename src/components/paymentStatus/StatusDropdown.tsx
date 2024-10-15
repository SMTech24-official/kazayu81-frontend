"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { RxMixerHorizontal } from "react-icons/rx";

export default function StatusDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const options = [
    "Payment In Progress",
    "Payment Received",
    "Partial Payment Received",
    "Canceled",
    "Refund In Progress",
    "Refunded",
    "Partially Refunded",
  ];

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-64 relative z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" bg-orange-500 text-white p-2 flex items-center justify-between rounded-md"
      >
        <RxMixerHorizontal />
      </button>
      {isOpen && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden">
          <div className="flex p-2 bg-gray-100">
            <input
              type="text"
              placeholder="Search options..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow p-2 w-3/5 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 text-white p-2 rounded-r-md">
              <Search className="h-5 w-5" />
            </button>
          </div>
          <ul className="max-h-60 overflow-auto">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  console.log(`Selected: ${option}`);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
