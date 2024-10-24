"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface OfferFreeVisitPopupProps {
  popupIsOpen: boolean;
  setPopupIsOpen: (isOpen: boolean) => void;
}

export default function OfferFreeVisitPopup({ popupIsOpen, setPopupIsOpen }: OfferFreeVisitPopupProps) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setPopupIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setPopupIsOpen(true)}
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
      >
        Open Popup
      </button>

      {popupIsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Select Date and Time</h2>
              <button onClick={() => setPopupIsOpen(false)} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                  Note/Message
                </label>
                <textarea
                  id="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white rounded-md py-2 px-4 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
