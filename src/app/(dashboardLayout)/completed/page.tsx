"use client";
import CompletedCard from "@/components/completed/CompletedCard";
import CreateHelpOrderButton from "@/components/shared/createHelpOrderButton/CreateHelpOrderButton";
import MainIcon from "@/components/shared/mainIcon/MainIcon";
import { cardData } from "@/data/openPageCardData";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const CompletedPage = () => {
  const user = useSelector((state: RootState) => state.user.user); // Get user from Redux (make sure to access .user)

  return (
    <div>
      <div className="flex items-center flex-col justify-center mb-20">
        <MainIcon />
        <p className="font-bold text-2xl">Completed</p>
      </div>
      {user?.role === "CUSTOMER" && (
        <div className="flex items-center justify-end mb-10 mr-12">
          <CreateHelpOrderButton />
        </div>
      )}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-10">
        {cardData?.map((card, index) => (
          <CompletedCard
            backgroundImage={card.backgroundImage}
            profileImage={card.profileImage}
            profileName={card.profileName}
            title={card.title}
            serviceType={card.serviceType}
            location={card.location}
            description={card.description}
            price={card.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedPage;
