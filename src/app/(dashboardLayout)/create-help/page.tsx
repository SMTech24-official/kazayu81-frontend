"use client";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import mainIcon from "@/assets/images/main-ico.png";

type FormData = {
  helpSubject: string;
  helpDescription: string;
  workplaceLocation: string;
  helpDuration: string;
  helpTime: string;
  serviceLocation: string;
  city: string;
  state: string;
  serviceType: string;
  materialIncluded: "material" | "labor";
  steps: { description: string; cost: string }[];
};

export default function Component() {
  const { register, control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      steps: [{ description: "", cost: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="shadow-xl rounded-2xl max-w-2xl mx-auto  mb-10 p-5 sm:p-8 border-t border-gray-50">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 bg-white inline-block p-2 rounded-full">
          <Image
            src={mainIcon}
            alt="none"
            width={40}
            height={40}
            className="mx-auto"
          />
        </div>
        <h2 className="text-4xl md:text-5xl  font-bold mb-3">Create help!</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6  p-6">
        <div>
          <Label htmlFor="helpSubject">Help Subject</Label>
          <Input id="helpSubject" {...register("helpSubject")} />
        </div>

        <div>
          <Label htmlFor="helpDescription">Help Description</Label>
          <Textarea id="helpDescription" {...register("helpDescription")} />
        </div>

        <div>
          <Label htmlFor="workplaceLocation">Help workplace location</Label>
          <Input
            id="workplaceLocation"
            {...register("workplaceLocation")}
            placeholder="Address"
          />
        </div>

        <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-4">
          <div className="flex-1">
            <Label htmlFor="helpDuration">Help Duration</Label>
            <Input
              id="helpDuration"
              type="number"
              {...register("helpDuration")}
            />
          </div>

          <div className="flex-1 ">
            <Label htmlFor="helpTime">Select Time</Label>
            <select
              id="helpTime"
              {...register("helpTime")}
              className="w-[180px] p-2 border rounded block"
            >
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
          <Label htmlFor="serviceLocation">Service location</Label>
          <Input id="serviceLocation" {...register("serviceLocation")} />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <Label htmlFor="city">City</Label>
            <Input id="city" {...register("city")} />
          </div>

          <div className="flex-1">
            <Label htmlFor="state">State</Label>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
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
          <Label htmlFor="serviceType">Professional Service Type</Label>
          <Controller
            name="serviceType"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Service Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electrical">Electrical</SelectItem>
                  <SelectItem value="A/C HVAC">A/C HVAC</SelectItem>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="roofing">Roofing</SelectItem>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  {/* Add more service types here */}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div>
          <Label>Material Included</Label>
          <Controller
            name="materialIncluded"
            control={control}
            render={({ field }) => (
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="material" id="material" />
                  <Label htmlFor="material">Material included</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="labor" id="labor" />
                  <Label htmlFor="labor">Only labor</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <div>
          <Label>Budget</Label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex space-x-4 mt-2">
              <Input
                {...register(`steps.${index}.description`)}
                placeholder="Step description"
              />
              <Input
                {...register(`steps.${index}.cost`)}
                placeholder="Step cost"
                type="number"
              />
              {index > 0 && (
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => remove(index)}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            onClick={() => append({ description: "", cost: "" })}
            className="mt-2"
          >
            Add Step
          </Button>
        </div>

        <Button type="submit" className="w-full">
          Save
        </Button>
        <Button
          type="button"
          className="w-full bg-orange-500 hover:bg-orange-600"
        >
          Publish
        </Button>
      </form>
    </div>
  );
}
