import Image from "next/image";
import React from "react";

export default function FaqSection() {
  return (
    <section className="faq-sec px-4 py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="mb-3 flex justify-center">
            <div className="bg-white rounded-full p-4">
              <Image src="/assets/images/main-ico.png" alt="none" width={80} height={80} />
            </div>
          </div>
          <h2 className="text-3xl font-bold">FAQs for HOW’s Services</h2>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur ullamcorper viverra placerat a cras <br /> nunc egestas dolor
            porttitor a eget turpis mi amet lectus.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          {[
            {
              question: "What types of services do you offer?",
              answer:
                "We offer a wide range of handyman services including plumbing, carpentry, drywall installation and repair, and more.",
            },
            {
              question: "How do I schedule a service?",
              answer:
                "You can create a help order with your own schedule through our website. Simply provide details about the job and your preferred time.",
            },
            {
              question: "What are your service hours?",
              answer: "Our standard service hours are from 9:00 AM to 6:00 PM, Monday through Saturday.",
            },
            {
              question: "Do you provide free estimates?",
              answer:
                "Yes, we offer free estimates for all our services. Contact us to schedule an on-site evaluation.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md">
              <button className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800">
                {faq.question}
                <span className="text-orange-500">
                  <i className="fas fa-plus"></i>
                </span>
              </button>
              <div className="mt-2 text-gray-600 hidden">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
