"use client";
import HelpSearchFilterComponent from "@/components/helpSearch/HelpSearchFilterComponent";
import SearchBar from "@/components/helpSearch/SearchBar";
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

  console.log(search);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
      <div className="sticky top-0">
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
        <div className="grid border grid-cols-1 md:grid-cols-2 gap-5">
          <div className="border">C1</div>
          <div className="border">C2</div>
        </div>
      </div>
    </div>
  );
};

export default HelpSearchPage;
