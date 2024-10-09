import Image from "next/image";
import React from "react";
import mainIcon from "@/assets/images/main-ico.png";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";

const Contact = () => {
  return (
    <div>
      <div className="bg-orange-500">
        <div className="container py-6 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 gap-12 px-5 xl:px-0 lg:pt-28">
          <div>
            <div className="w-full  p-6 px-8 py-12 bg-white rounded-2xl -mb-32 shadow-xl">
              <form className="space-y-4 ">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-lg">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      className="text-lg py-6"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      className="text-lg py-6"
                      placeholder="example@gmail.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      className="text-lg py-6"
                      placeholder="(123) 456 - 7890"
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-lg">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      className="text-lg py-6"
                      placeholder="ex. Plumber"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg">
                    Message
                  </Label>
                  <textarea
                    className="min-h-[100px] w-full border rounded-md p-4 text-lg"
                    id="message"
                    placeholder="Type your message here"
                  />
                </div>
                <Button className="w-full text-lg  bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 px-4 rounded">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          <div className="order-first md:order-last">
            <div className="mb-4 bg-white inline-block p-2 rounded-full shadow">
              <Image
                src={mainIcon}
                alt="none"
                width={40}
                height={40}
                className="mx-auto"
              />
            </div>
            <div className="w-full bg-orange-500 text-white rounded-lg">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Contact us
              </h2>
              <p className="mb-6">
                For more information or to schedule <br /> a service, please
                contact us at :
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="w-6 h-6" />
                  <span>service@helperow.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-6 h-6" />
                  <span>+1 800 754 (4357- help)</span>
                </div>
              </div>
              <p className="mt-6">We look forward to serving you!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <CallToAction />
      </div>
    </div>
  );
};

export default Contact;
