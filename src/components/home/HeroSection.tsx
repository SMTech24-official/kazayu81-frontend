import PathToIcon from "@/assets/images/main-ico.png";
import HeroSecitonPhoto from "@/assets/images/hero sec.jpg";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-10 px-6">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-200 p-2 rounded-full">
              <Image src={PathToIcon} alt="icon" className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Need help at your home? Helper on the way</h1>
          <p className="text-gray-600">
            Open an account, create your own help work in your own budget, we will send helpers based on your needs.
          </p>
          <div className="flex space-x-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600">
              Become helper &rarr;
            </button>
            <button className="border-2 border-gray-300 text-gray-900 px-6 py-3 rounded-md hover:border-gray-400">
              Find helper
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <Image src={HeroSecitonPhoto} alt="hero" className="rounded-md" />
        </div>
      </div>
    </section>
  );
}
