"use client";

import mainIcon from "@/assets/images/main-ico.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { serviceTitles } from "@/data/ServiceTitles";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import { RootState } from "@/redux/store";
import { ServiceOption, TimeUnit } from "@/types/common";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

type FormData = {
  subject: string;
  description: string;
  duration: string;
  timeUnit: TimeUnit;
  serviceLocation: string;
  city: string;
  state: string;
  serviceType: string;
  otherService?: string;
  serviceOption: ServiceOption;
  budget: { stepDescription: string; stepCost: number }[];
  isPublished: boolean;
};

export default function CreateHelpOrder() {
  const router = useRouter();

  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const [isOtherService, setIsOtherService] = useState(false);

  const user = useSelector((state: RootState) => state.user.user);

  const { register, control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      budget: [{ stepDescription: "", stepCost: 0 }],
      isPublished: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "budget",
  });

  const onSubmit = async (data: FormData) => {
    // check every data is nonempty, if not return and lg an error

    if (
      data.subject === "" ||
      data.description === "" ||
      data.duration === "" ||
      data.timeUnit === undefined ||
      data.serviceLocation === "" ||
      data.city === "" ||
      data.state === "" ||
      data.serviceType === "" ||
      data.serviceOption === undefined ||
      data.budget.length === 0
    ) {
      console.error("Please fill all fields");
      toast.error("Please fill all fields");
      return;
    }

    // check for all budget fields and budget step cost is a number which is grater than zero

    for (let i = 0; i < data.budget.length; i++) {
      if (data.budget[i].stepDescription === "" || isNaN(data.budget[i].stepCost) || data.budget[i].stepCost <= 0) {
        console.error("Please fill all budget fields correctly");
        toast.error("Please fill all budget fields correctly");
        return;
      }
    }

    // Ensure customerId is included and log data
    const formattedData = {
      ...data,
      customerId: user.id,
      budget: data.budget.map((item) => ({
        ...item,
        stepCost: Number(item.stepCost),
      })),
    };

    console.log("Submitting Data: ", formattedData);

    try {
      const res = await createOrder(formattedData).unwrap();
      console.log("Order created successfully:", res);

      if (data.isPublished) {
        router.push("/open"); // Redirect to the Open page
        toast.success("Order created successfully");
      } else {
        router.push("/saved"); // Redirect to the Saved page
        toast.success("Order saved successfully");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Error creating order");
    }
  };

  const otherServiceHandler = (value: string) => {
    if (value === "other") {
      setIsOtherService(true);
    } else {
      setIsOtherService(false);
    }
  };

  const handleSubmitWithPublishedStatus = (isPublishedStatus: boolean) => {
    setValue("isPublished", isPublishedStatus);
    handleSubmit(onSubmit)(); // Ensure form is submitted correctly
  };

  // get Regions

  return (
    <div className="shadow-xl rounded-2xl max-w-2xl mx-auto  mb-10  sm:p-8 border-t border-gray-50">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 bg-white inline-block p-2 rounded-full">
          <Image src={mainIcon} alt="none" width={40} height={40} className="mx-auto" />
        </div>
        <h2 className="text-4xl md:text-5xl  font-bold mb-3">Create help!</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6  p-6">
        <div>
          <Label className="font-semibold" htmlFor="subject">
            Help Subject
          </Label>
          <Input className="mt-3" id="subject" {...register("subject")} />
        </div>

        <div>
          <Label className="font-semibold" htmlFor="description">
            Help Description
          </Label>
          <Textarea className="mt-3" id="description" {...register("description")} />
        </div>

        <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-4">
          <div className="flex-1">
            <Label className="font-semibold" htmlFor="duration">
              Help Duration
            </Label>
            <Input id="duration" type="number" {...register("duration")} className="mt-3" />
          </div>

          <div className="flex-1 ">
            <Label className="font-semibold" htmlFor="timeUnit">
              Select Time
            </Label>
            <select id="timeUnit" {...register("timeUnit")} className="w-[180px] p-2 border rounded block mt-3">
              <option value="">Select time</option>
              <option value="hours">Hours</option>
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
              <option value="years">Years</option>
            </select>
          </div>
        </div>

        <div>
          <Label className="font-semibold" htmlFor="serviceLocation">
            Service location
          </Label>
          <Input className="mt-3" placeholder="Address" id="serviceLocation" {...register("serviceLocation")} />
        </div>

        <div className="flex sm:flex-row flex-col gap-4">
          <div className="flex-1">
            <Label className="font-semibold" htmlFor="city">
              City
            </Label>
            <Input className="mt-3" id="city" {...register("city")} />
          </div>

          <div className="flex-1">
            <Label className="font-semibold" htmlFor="state">
              State
            </Label>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full mt-3">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="TX">Texas</SelectItem>
                    {/* Add more states here */}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        <div>
          <Label className="font-semibold" htmlFor="serviceType">
            Professional Service Type
          </Label>
          <Controller
            name="serviceType"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  otherServiceHandler(value);
                }}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-full mt-3">
                  <SelectValue placeholder="Select Service Type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTitles.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}

                  {/* Add more service types here */}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {isOtherService && (
          <div>
            <Label className="font-semibold" htmlFor="otherService">
              Please specify your service
            </Label>
            <Input className="mt-3" placeholder="Enter your service" id="otherService" {...register("otherService")} />
          </div>
        )}

        <div>
          <Controller
            name="serviceOption"
            control={control}
            render={({ field }) => (
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4 mt-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="MATERIAL_INCLUDED" id="material" />
                  <Label htmlFor="material">Material included</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ONLY_LABOR" id="labor" />
                  <Label htmlFor="labor">Only labor</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <div>
          <Label>Budget</Label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex sm:flex-row flex-col gap-3 mt-3">
              <Input {...register(`budget.${index}.stepDescription`)} placeholder="Step description" />
              <Input {...register(`budget.${index}.stepCost`)} placeholder="Step cost" type="number" />
              {index > 0 && (
                <Button
                  className="bg-orange-500 hover:bg-orange-600"
                  type="button"
                  variant="destructive"
                  onClick={() => remove(index)}
                >
                  Undo
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            onClick={() => append({ stepDescription: "", stepCost: 0 })}
            className="mt-2 bg-orange-500 hover:bg-orange-600"
          >
            Add Step
          </Button>
        </div>

        <Button
          size={"lg"}
          variant={"outline"}
          type="button"
          className="w-full  hover:bg-orange-600 hover:text-white "
          onClick={() => handleSubmitWithPublishedStatus(false)}
        >
          {isLoading ? "Loading..." : "Save"}
        </Button>
        <Button
          type="button"
          className="w-full bg-orange-500 hover:bg-orange-600"
          onClick={() => handleSubmitWithPublishedStatus(true)}
        >
          {isLoading ? "Loading..." : "Publish"}
        </Button>
      </form>
    </div>
  );
}
