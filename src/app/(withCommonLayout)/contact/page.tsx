"use client";
import { IoCallSharp } from "react-icons/io5";
import React from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CallToAction from "@/components/home/CallToAction";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MainIcon from "@/components/shared/mainIcon/MainIcon";
import { Mail } from "lucide-react";
import { useContactUsMutation } from "@/redux/api/contactUsApi";
import { toast } from "react-toastify";

const formSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone Number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [contactUsMutaionFn, { isLoading: contactUsLoading }] = useContactUsMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    //   {
    //     "name": "John Doe",
    //     "email": "test@gmail.com",
    //     "phoneNumber": "123-456-7890",
    //     "subject": "Inquiry",
    //     "message": "I would like to know more about your services."
    // }

    const reformedData = {
      name: data.fullName,
      email: data.email,
      phoneNumber: data.phone,
      subject: data.subject,
      message: data.message,
    };
    try {
      const result = await contactUsMutaionFn(reformedData).unwrap();
      if (result?.success) {
        toast.success("Message sent successfully", {
          position: "bottom-right",
        });
        // reset form
        reset();
      }
    } catch (e) {
      toast.error("Failed to send message", {
        position: "bottom-right",
      });
      console.log(e);
    }

    console.log(data);
  };

  return (
    <div>
      <div className="bg-orange-500">
        <div className="container py-6 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 gap-12 px-5 xl:px-0 lg:pt-28">
          <div>
            <div className="w-full p-6 px-8 py-12 bg-white rounded-2xl -mb-32 shadow-xl">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-lg">
                      Full Name
                    </Label>
                    <Input id="fullName" className="text-lg py-6" placeholder="Full name" {...register("fullName")} />
                    {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
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
                      {...register("email")}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      className="text-lg py-6"
                      placeholder="(123) 456 - 7890"
                      type="tel"
                      {...register("phone")}
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-lg">
                      Subject
                    </Label>
                    <Input id="subject" className="text-lg py-6" placeholder="ex. Plumber" {...register("subject")} />
                    {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
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
                    {...register("message")}
                  />
                  {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                </div>
                <Button
                  disabled={contactUsLoading}
                  className="w-fit text-xl bg-orange-500 disabled:bg-orange-400 hover:bg-orange-600 text-white font-semibold py-7 px-5 rounded"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          <div className="order-first md:order-last">
            <div className="flex">
              <MainIcon />
            </div>
            <div className="w-full bg-orange-500 text-white rounded-lg">
              <h2 className="text-6xl md:text-5xl lg:text-6xl font-bold mb-4">Contact us</h2>
              <p className="mb-6 text-base font-bold">
                For more information or to schedule <br /> a service, please contact us at :
              </p>
              <div className="flex flex-col gap-4 font-bold">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-orange-400 p-3">
                    <Mail className="h-8 w-8 text-black " />
                  </div>
                  <div className="flex gap-3 flex-col">
                    <p>Send us an email</p>
                    <p>service@helperow.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-orange-400 p-3">
                    {/* <Phone className="w-6 h-6" /> */}
                    <IoCallSharp className="h-8 w-8 text-black" />
                  </div>
                  <div className="flex gap-3 flex-col">
                    <p>Give us a call</p>
                    <p>+1 800 754 (4357- help)</p>
                  </div>
                </div>
              </div>
              <p className="mt-10 font-bold">We look forward to serving you!</p>
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
