"use client";
import HelpSearchFilterComponent from "@/components/helpSearch/HelpSearchFilterComponent";
import OfferFreeVisitPopup from "@/components/helpSearch/OfferFreeVisitPopup";
import SearchBar from "@/components/helpSearch/SearchBar";
import HelpSearchPageCard from "@/components/HelpSearchPageCard/HelpSearchPageCard";
import { useGetAllOrderQuery } from "@/redux/api/orderApi";
import { OrderStatus, TimeUnit } from "@/types/common";
import { IOrder } from "@/types/helpOrder";
import React, { useState } from "react";

const HelpSearchPage = () => {
  const query: Record<string, any> = {};
  // const [page, setPage] = useState<number>(1);
  // const [limit, setLimit] = useState<number>(10);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    serviceType: "",
    serviceLocation: "",
    minBudget: "",
    maxBudget: "",
    helpDuration: "",
    durationUnit: "",
    publishDateFrom: undefined as Date | undefined,
    publishDateTo: undefined as Date | undefined,
  });

  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const [selectedOfferId, setSelectedOfferId] = useState("");

  // query["limit"] = limit;
  // query["page"] = page;
  query["searchTerm"] = search;
  // query["serviceType"] = formData.serviceType;
  // query["serviceLocation"] = formData.serviceLocation;
  query["minBudget"] = formData.minBudget;
  query["maxBudget"] = formData.maxBudget;
  if (formData.helpDuration !== "") {
    query["duration"] = formData.helpDuration;
  }
  if (
    formData.durationUnit === TimeUnit.DAYS ||
    formData.durationUnit === TimeUnit.HOURS ||
    formData.durationUnit === TimeUnit.MONTHS ||
    formData.durationUnit === TimeUnit.WEEKS ||
    formData.durationUnit === TimeUnit.YEARS
  ) {
    query["timeUnit"] = formData.durationUnit;
  }
  query["toDate"] = formData.publishDateTo;
  query["fromDate"] = formData.publishDateFrom;

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

  // redux querys
  const { data } = useGetAllOrderQuery({ ...query });
  const orderData = data?.data?.data;
  // const orderMeta = data?.data?.meta;
  const openDatas = orderData?.filter((order: IOrder) => order.status === OrderStatus.OPEN);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
      <div className="w-full xl:sticky top-10 left-0 xl:h-screen bg-white">
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
          {openDatas?.map((order: IOrder) => (
            <HelpSearchPageCard setSelectedOfferId={setSelectedOfferId} key={order.id} order={order} />
          ))}
        </div>
      </div>

      {/* Popup */}

      <OfferFreeVisitPopup setPopupIsOpen={setPopupIsOpen} popupIsOpen={popupIsOpen} />
    </div>
  );
};

export default HelpSearchPage;
