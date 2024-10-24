"use client";
import HelpSearchFilterComponent from "@/components/helpSearch/HelpSearchFilterComponent";
import SearchBar from "@/components/helpSearch/SearchBar";
import HelpSearchPageCard from "@/components/HelpSearchPageCard/HelpSearchPageCard";
import { useGetAllOrderQuery } from "@/redux/api/orderApi";
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
     durationUnit: "hours",
     publishDateFrom: undefined as Date | undefined,
     publishDateTo: undefined as Date | undefined,
   });


  // query["limit"] = limit;
  // query["page"] = page;
  query["searchTerm"] = search;
  // query["serviceType"] = formData.serviceType;


  // States for calendars open and close
  const [isOpen, setIsOpen] = useState({
    to: false,
    from: false,
  });

  // Error state
  const [errors, setErrors] = useState<any>({});

  // Handle search submit
  const handleSearchSubmit = () => {};
  console.log("search", search);

  // fetch all order
  const { data } = useGetAllOrderQuery({ ...query });
  const orderData = data?.data?.data;
  // const orderMeta = data?.data?.meta;
  // console.log(orderData, orderMeta);

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
          <SearchBar
            handleSearchSubmit={handleSearchSubmit}
            setSearch={setSearch}
          />
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 pb-5">
          {orderData?.map((order: IOrder) => (
            <HelpSearchPageCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSearchPage;
