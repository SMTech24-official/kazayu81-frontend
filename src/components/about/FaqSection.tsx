import Image from "next/image";
import React from "react";
import FAQAccordion from "../shared/accordion/FAQAccordion";
import mainIcon from "@/assets/images/main-ico.png";
import { genaralFakeDataFaq } from "@/data/genaralFakeDataFaq";
import { fakePlumbingFAQs } from "@/data/fakePlumbingFAQs";
import { fakeCarpentryFAQs } from "@/data/fakeCarpentryFAQs";
import { fakeDrywallFAQs } from "@/data/fakeDrywallFAQs";
import { fakeDoorsWindowsFAQs } from "@/data/fakeDoorsWindowsFAQs";

export default function FaqSection() {
  return (
    <section className="faq-sec px-4 pt-16  bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="mb-3 flex justify-center">
            <div className="bg-orange-100 rounded-full p-4">
              <Image src={mainIcon} alt="none" width={30} height={30} />
            </div>
          </div>
          <h2 className="text-3xl font-bold">FAQs for HOW’s Services</h2>
          <p className="mt-4 text-gray-700 ">
            Lorem ipsum dolor sit amet consectetur ullamcorper viverra placerat a cras <br /> nunc egestas dolor
            porttitor a eget turpis mi amet lectus.
          </p>
        </div>
        {/* faq section */}

        <div
        // className="w-32 w-36 w-40 w-44 w-48 w-52 w-56 w-60 w-64 w-72 w-80 w-96 "
        >
          <FAQAccordion FAQs={genaralFakeDataFaq} title="Genarel" width="w-36" />
          <FAQAccordion title="Plumbing" FAQs={fakePlumbingFAQs} width="w-40" />
          <FAQAccordion FAQs={fakeCarpentryFAQs} title="Carpentry" width="w-44" />
          <FAQAccordion FAQs={fakeDrywallFAQs} title="Drywall" width="w-36" />
          <FAQAccordion title="Doors & Windows" FAQs={fakeDoorsWindowsFAQs} width="w-80" />
          <FAQAccordion title="Painting" FAQs={fakeDoorsWindowsFAQs} width="w-40" />
          <FAQAccordion title="Kitchen & Bathroom" FAQs={fakeDoorsWindowsFAQs} width="w-[350px]" />
          <FAQAccordion title="Home Repairs" FAQs={fakeDoorsWindowsFAQs} width="w-64" />
          <FAQAccordion title="Assembly & Installation" FAQs={fakeDoorsWindowsFAQs} width="w-96" />
          <FAQAccordion title="Lawn Mowing" FAQs={fakeDoorsWindowsFAQs} width="w-56" />
          <FAQAccordion title="House Cleaning" FAQs={fakeDoorsWindowsFAQs} width="w-72" />
          <FAQAccordion title="TV Installation" FAQs={fakeDoorsWindowsFAQs} width="w-52" />
        </div>
      </div>
    </section>
  );
}
