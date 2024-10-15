import firstImage from "@/assets/images/detail.jpg";
import missionImage from "@/assets/images/mission.jpg";
import ServiceDetail2 from "@/assets/images/service-detail two.jpg";
import serviceDetail1 from "@/assets/images/service-detail one.jpg";

import SectionTemplate from "./SectionTemplate";

const serviceDetailInfoArray = [
  {
    id: 1,
    title: "Home Repairs",
    description:
      "Our home repair services cover a wide range of needs, from fixing leaky faucets and patching drywall to replacing broken tiles and repairing doors. At Helperow, we understand how important it is to maintain a well-functioning and aesthetically pleasing home. Our skilled handymen are equipped to handle all your home repair needs with precision and care.",
    imageLink: firstImage,
    button: false,
  },
  {
    id: 2,
    title: "Why Choose Helperow for Home Repairs?",
    description:
      "Choosing Helperow for your home repairs ensures that you receive top-notch service from experienced professionals. We pride ourselves on our attention to detail and commitment to customer satisfaction. Every job, big or small, is treated with the same level of importance and dedication, ensuring your home remains in perfect condition.",
    imageLink: missionImage,
    button: true,
  },
  {
    id: 3,
    title: "Free Visit and Free Quote",
    description:
      "To help you get started, we offer a free visit and free quote for all our customers. This means we will assess your repair needs without any initial cost, providing you with a detailed quote before any work begins. Our transparent pricing and no-obligation quotes ensure you know exactly what to expect.",
    button: false,
    imageLink: ServiceDetail2,
  },
  {
    id: 4,
    title: "Quality and Trust",
    description:
      "At Helperow, we believe in building long-term relationships with our clients. Our team is trustworthy, reliable, and always ready to provide the highest quality service. Your satisfaction is our top priority, and we strive to exceed your expectations with every project we undertake.",
    button: true,
    imageLink: serviceDetail1,
  },
];

const ServiceDetail = () => {
  return (
    <div>
      {serviceDetailInfoArray?.map((item) => (
        <SectionTemplate
          description={item?.description}
          imageLink={item?.imageLink}
          reverse={item?.button}
          title={item?.title}
          key={item?.id}
          button={item?.button}
        />
      ))}
    </div>
  );
};

export default ServiceDetail;
