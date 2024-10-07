"use client";
import { useState } from "react";
import Image from "next/image";
import VideoBg from "@/assets/images/video bg.jpg";
import MainIcon from "@/assets/images/main-ico.png";
import { ArrowRight } from "lucide-react";

export default function ExploreSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-10 px-6">
        {/* Image Section with Play Button */}
        <div className="relative lg:w-1/2 w-full rounded-lg overflow-hidden">
          <Image src={VideoBg} alt="video" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <button
              onClick={() => setShowVideo(true)}
              className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              <svg
                className="w-8 h-8 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 w-full">
          <div className="mb-4 flex items-center space-x-2">
            <div className="bg-orange-200 p-2 rounded-full">
              <Image src={MainIcon} alt="icon" className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            A Whole world of talented experts at your fingertip
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur ullamcorper viverra placerat a cras nunc egestas dolor porttitor a
            eget turpis mi amet lectus.
          </p>
          <button className="mt-6 bg-white text-orange-500 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 flex items-center space-x-2">
            <span>Learn More</span>
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="relative  rounded-lg p-6 w-11/12 lg:w-3/4 max-w-3xl">
            <button
              onClick={() => setShowVideo(false)}
              className="text-black bg-white text-xl h-10 w-10 absolute -top-10  -right-5  rounded-full px-1 flex items-center justify-center hover:text-gray-900"
            >
              &times;
            </button>
            <iframe
              src="https://www.youtube.com/embed/nSjujP7AyEQ?si=4raboWUWM3e_WIqv"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-64 lg:h-96"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
