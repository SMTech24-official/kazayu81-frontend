"use client";
import FreeVisitRequestCard from "@/components/freeVisitRequest/FreeVisitRequestCard";
import CreateHelpOrderButton from "@/components/shared/createHelpOrderButton/CreateHelpOrderButton";
import MainIcon from "@/components/shared/mainIcon/MainIcon";
import { cardData } from "@/data/openPageCardData";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const FreePageVisit = () => {
  const user = useSelector((state: RootState) => state.user.user); // Get user from Redux (make sure to access .user)
  return (
    <div>
      <div className="flex items-center flex-col justify-center mb-10">
        <MainIcon />
        <p className="font-bold text-2xl">Free Visit Requests!</p>
      </div>
      {user?.role === "CUSTOMER" && (
        <div className="flex items-center justify-end mb-10 ">
          <CreateHelpOrderButton />
        </div>
      )}
      <div className="grid grid-cols-6   gap-5 mx-auto max-w-screen">
        {cardData.map((card, index) => (
          <div key={index} className="md:col-span-3 lg:col-span-2 col-span-6 ">
            <FreeVisitRequestCard
              backgroundImage={card.backgroundImage}
              profileImage={card.profileImage}
              profileName={card.profileName}
              title={card.title}
              serviceType={card.serviceType}
              location={card.location}
              description={card.description}
              price={card.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreePageVisit;
