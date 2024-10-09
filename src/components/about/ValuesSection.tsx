import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import mainIcon from "@/assets/images/main-ico.png";

export default function ValuesSection() {
  const values = [
    {
      title: "Customer-Centric Approach",
      description:
        "We always think from the customer's perspective, ensuring our services meet your specific needs and expectations.",
    },
    {
      title: "Quality Craftsmanship",
      description: "With decades of expertise, we deliver high-quality work that stands the test of time.",
    },
    {
      title: "Reliability and Trust",
      description: "Our family business is built on trust, ensuring we are there for you whenever you need us.",
    },
    {
      title: "Affordability",
      description:
        "We provide top-notch services at competitive prices, making quality home improvement accessible to everyone.",
    },
    {
      title: "Sustainability",
      description: "We use eco-friendly materials and practices to ensure a minimal environmental footprint.",
    },
  ];

  return (
    <section className="bg-orange-500 px-4 pb-16 pt-80 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="mb-8 w-full h-96 px-4 md:w-1/2 lg:w-1/3">
            <div className="rounded-lg bg-transparent p-6 h-full flex flex-col gap-3">
              <div>
                <div className="mb-3 flex justify-start">
                  <div className="rounded-full bg-white p-4">
                    <Image src={mainIcon} alt="Main icon" width={40} height={40} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold">Our Values</h2>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur. <br /> Lectus nunc ante ac orci scelerisque duis vitae
                  hendrerit ac ac pellentesque dui.
                </p>
              </div>
              <button className="mt-6 rounded-lg bg-white px-6 py-3 font-extrabold text-black hover:bg-gray-100 self-start">
                Become helper <span className="ml-2">→</span>
              </button>
            </div>
          </div>
          {values.map((value, idx) => (
            <div key={idx} className="mb-8 w-full px-4 flex flex-col items-center justify-center md:w-1/2 lg:w-1/3">
              <div className="rounded-lg bg-white p-6 h-80 shadow-sm flex flex-col items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-orange-100 p-3">
                      <ThumbsUp className="h-8 w-8 text-orange-500" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-2xl font-bold text-gray-800">{value?.title}</h3>
                  <p className="text-center text-lg text-gray-600 flex-grow">{value?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
