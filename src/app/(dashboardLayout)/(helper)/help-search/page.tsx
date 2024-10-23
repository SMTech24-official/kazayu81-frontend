import HelpSearchFilterComponent from "@/components/helpSearch/HelpSearchFilterComponent";
import SearchBar from "@/components/helpSearch/SearchBar";
import React from "react";

const HelpSearchPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
      <div className="sticky top-0">
        <HelpSearchFilterComponent />
      </div>

      <div className="md:col-span-3 border">
        <div className="mb-5">
          <SearchBar />
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
