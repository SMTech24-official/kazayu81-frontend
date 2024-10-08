import Image from "next/image";
import mainIcon from "@/assets/images/main-ico.png";
import imageOne from "@/assets/images/about one.jpg";
import imageTwo from "@/assets/images/about two.jpg";
import imageThree from "@/assets/images/about three.jpg";
import { ThumbsUp } from "lucide-react";
export default function AboutUs() {
  return (
    <>
      {/* About Section */}
      <section className="about-sec mx-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="about-inner text-center">
              <div className="mb-3 flex justify-center">
                <div className="bg-white rounded-full p-4">
                  <Image src={mainIcon} alt="none" width={80} height={80} />
                </div>
              </div>
              <h1 className="text-4xl font-bold">About our company</h1>
              <p className="mt-4 text-gray-700">
                Welcome to Helperow, your trusted partner for all handyman services. With over 20 years of expertise
                passed down through generations, we pride ourselves on delivering exceptional craftsmanship and reliable
                service. Our journey began as a family business, rooted in a commitment to excellence and a dedication
                to meeting the needs of our customers. Today, we continue this legacy, always prioritizing your
                perspective to provide the best service at the best price.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <a href="Helper/Helper-signup.html">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
                    Become helper <i className="fa-solid fa-arrow-right ml-2"></i>
                  </button>
                </a>
                <a href="User/User-signup.html">
                  <button className="bg-white text-black border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
                    Find helper
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Image Section */}
      <section className="about-img-sec mx-4 mt-8 -mb-52">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="about-img-main rounded-lg">
                <Image
                  src={imageOne}
                  alt="none"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="about-img-main rounded-lg ">
                <Image
                  src={imageTwo}
                  alt="none"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-xl border mt-20"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="about-img-main rounded-lg">
                <Image
                  src={imageThree}
                  alt="none"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="value-sec px-4 py-16 bg-orange-500 text-white pt-72">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-transparent p-6 rounded-lg">
                <div className="mb-3 flex justify-center">
                  <div className="bg-white rounded-full p-4">
                    <Image src="/assets/images/main-ico.png" alt="none" width={80} height={80} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold">Our Values</h2>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur. <br /> Lectus nunc ante ac orci scelerisque duis vitae
                  hendrerit ac ac pellentesque dui.
                </p>
                <a href="Helper/Helper-signup.html">
                  <button className="bg-white text-orange-500 mt-6 px-6 py-3 rounded-lg hover:bg-gray-100">
                    Become helper <i className="fa-solid fa-arrow-right ml-2"></i>
                  </button>
                </a>
              </div>
            </div>
            {[
              {
                title: "Customer-Centric Approach",
                text: "We always think from the customer’s perspective, ensuring our services meet your specific needs and expectations.",
              },
              {
                title: "Quality Craftsmanship",
                text: "With decades of expertise, we deliver high-quality work that stands the test of time.",
              },
              {
                title: "Reliability and Trust",
                text: "Our family business is built on trust, ensuring we are there for you whenever you need us.",
              },
              {
                title: "Affordability",
                text: "We provide top-notch services at competitive prices, making quality home improvement accessible to everyone.",
              },
              {
                title: "Sustainability",
                text: "We use eco-friendly materials and practices to ensure a minimal environmental footprint.",
              },
            ].map((value, idx) => (
              <div key={idx} className="p-6 rounded-lg max-w-md mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-center mb-4">
                    <div className="bg-orange-200 rounded-full p-3">
                      <ThumbsUp className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-center mb-2">Customer-Centric Approach</h2>
                  <p className="text-sm text-center text-gray-600">
                    We always think from the customer&apos;s perspective, ensuring our services meet your specific needs
                    and expectations.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="h-explore-sec mx-4 mt-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <div className="mission-img rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/mission.jpg"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="explore-content p-6">
                <div className="mb-3 flex justify-center">
                  <div className="bg-white rounded-full p-4">
                    <Image src="/assets/images/main-ico.png" alt="none" width={80} height={80} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="mt-4">
                  At Helperow, our mission is to enhance your home’s functionality and aesthetic appeal through
                  well-designed, secure furniture and comprehensive repair services. We believe that everyone deserves
                  to live in a beautiful and well-maintained home.
                </p>
                <button className="learn-btn mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
                  Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Content Section */}
      <section className="content-sec mx-4 mt-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Need help at your home.
              <br />
              <span className="text-orange-500">Helper on the way</span>
            </h2>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="Helper/Helper-signup.html">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
                  Become helper <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </a>
              <a href="User/User-signup.html">
                <button className="bg-white text-black border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
                  Find helper
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
