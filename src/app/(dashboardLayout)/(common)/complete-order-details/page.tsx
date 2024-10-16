"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./style.css";
import { Check } from "lucide-react";
import { useState } from "react";

const CompleteOrderDetails = () => {
  const [subject, setSubject] = useState("Repair DC");

  // Subjects corresponding to each slide
  const subjects = ["Repair DC", "Repair AC", "Repair Fan"];

  const handleSlideChange = (swiper: SwiperType) => {
    setSubject(subjects[swiper.realIndex]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 p-4 md:p-0 gap-10 md:gap-6">
        {/* left  */}
        <div className=" md:col-span-3">
          {/* slider  */}
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              speed={1200}
              onSlideChange={handleSlideChange}
            >
              <SwiperSlide>
                <div className="flex justify-center items-center h-64 bg-orange-500 text-white text-3xl font-bold">
                  Slide 1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-64 bg-orange-600 text-white text-3xl font-bold">
                  Slide 2
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-64 bg-orange-700 text-white text-3xl font-bold">
                  Slide 3
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Update the subject text dynamically */}
            <div className="text-orange-500 mb-2 mt-4">Subject: {subject}</div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Title of the Order</h2>

          <p className="mb-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
            commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor
            sed eleifend tristique, tortor mauris molestie elit, et lacinia
            ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium
            sit amet quis magna. Aenean velit odio, elementum in tempus ut,
            vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate
            eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius
            pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem
            sit amet orci ullamcorper at ultricies metus viverra. Pellentesque
            arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
          </p>

          <div className="max-w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th className="border p-2 text-left">#</th>
                  <th className="border p-2 text-left">Step</th>
                  <th className="border p-2 text-left">Cost</th>
                  <th className="border p-2 text-left">Owner Confirmation</th>
                  <th className="border p-2 text-left">Helper Confirmation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">Repair DC</td>
                  <td className="border p-2">$20</td>
                  <td className="border p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="border p-2">
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">2</td>
                  <td className="border p-2">Repair Fan</td>
                  <td className="border p-2">$30</td>
                  <td className="border p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="border p-2">
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">3</td>
                  <td className="border p-2">Repair Refrigerator</td>
                  <td className="border p-2">$100</td>
                  <td className="border p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="border p-2">
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td className="border p-2" colSpan={2}>
                    Total
                  </td>
                  <td className="border p-2">$150</td>
                  <td className="border p-2" colSpan={2}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* right  */}
        <div className=" md:col-span-2">
          <button className="w-full bg-orange-500 text-white py-3 rounded-md mb-4 font-semibold">
            Order Completed
          </button>

          <button className="w-full border border-orange-500 text-orange-500 py-3 rounded-md mb-2 font-semibold">
            Cancel Order
          </button>

          <button className="w-full border border-orange-500 text-orange-500 py-3 rounded-md mb-2 font-semibold">
            Call Helper
          </button>

          <button className="w-full text-orange-500 py-3 mb-4 font-semibold underline">
            Payment Refund
          </button>

          <div className="border border-orange-200 rounded-md p-4 mb-4">
            <h2 className="font-bold mb-2">Order Detail</h2>
            <div className="grid grid-cols-2 gap-2">
              <span className="text-gray-600">Order By</span>
              <span className="text-right">Zulqarnain</span>
              <span className="text-gray-600">Total price</span>
              <span className="text-right">$1000</span>
              <span className="text-gray-600">Help Service</span>
              <span className="text-right">Electricity</span>
              <span className="text-gray-600">Published On</span>
              <span className="text-right">24 May, 2024</span>
            </div>
          </div>

          <div className="border border-orange-200 rounded-md p-4">
            <h2 className="font-bold mb-2">Track Order</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-orange-500 mr-2" />
                <span className="font-semibold">Order placed</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-orange-500 mr-2" />
                <span className="font-semibold">Requirements submitted</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-2 border-orange-500 rounded-full mr-2" />
                <span>Order In progress</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-2" />
                <span className="text-gray-500">Review delivery</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-2" />
                <span className="text-gray-500">Order Completed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteOrderDetails;
