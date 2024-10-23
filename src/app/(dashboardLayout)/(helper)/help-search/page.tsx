"use client";
import HelpSearchFilterComponent from "@/components/helpSearch/HelpSearchFilterComponent";
import SearchBar from "@/components/helpSearch/SearchBar";
import HelpSearchPageCard from "@/components/HelpSearchPageCard/HelpSearchPageCard";
import React, { useState } from "react";

const HelpSearchPage = () => {
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    serviceType: "",
    serviceLocation: "",
    minBudget: "",
    maxBudget: "",
    helpDuration: "",
    durationUnit: "hours",
    publishDateFrom: undefined as Date | undefined,
    publishDateTo: undefined as Date | undefined,
  });

  // States for calendars open and close
  const [isOpen, setIsOpen] = useState({
    to: false,
    from: false,
  });

  // Error state
  const [errors, setErrors] = useState<any>({});

  // Handle search submit
  const handleSearchSubmit = () => {
    console.log("search", search);
  };

  const sampleOrder = {
    orderId: "12345",
    customer: {
      firstName: "John",
      lastName: "Doe",
      user: {
        profileImage: undefined, // or provide a URL to an image
      },
    },
    subject: "Need help with gardening",
    serviceType: "Gardening",
    serviceLocation: "New York, NY",
    description: "I need help with my garden. It needs weeding, planting, and general maintenance.",
    totalCost: 150,
  };

  console.log(search);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
      <div className="w-full xl:sticky top-10 left-0 h-screen bg-white">
        <HelpSearchFilterComponent
          formData={formData}
          setFormData={setFormData}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          errors={errors}
          setErrors={setErrors}
        />
      </div>

      <div className="md:col-span-3 ">
        <div className="mb-5">
          <SearchBar handleSearchSubmit={handleSearchSubmit} setSearch={setSearch} />
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 pb-5">
          <HelpSearchPageCard order={sampleOrder} />
          <HelpSearchPageCard order={sampleOrder} />
          <HelpSearchPageCard order={sampleOrder} />

          <HelpSearchPageCard order={sampleOrder} />
        </div>
      </div>
    </div>
  );
};

export default HelpSearchPage;
