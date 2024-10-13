"use client";

import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import mainIcon from "@/assets/images/main-ico.png";

type FormData = {
  fullName: string;
  serviceType: string;
  email: string;
  phoneNumber: string;
  street: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
  serviceLocation: string;
  isLicensed: boolean;
  isInsured: boolean;
  enableTextMessages: boolean;
  sendEmails: boolean;
  enableRealTimeNotifications: boolean;
};

export default function UpdateHelperProfile() {
  const { register, control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="shadow-xl rounded-2xl max-w-3xl mx-auto  mb-10 p-5 sm:p-8 border-t border-gray-50">
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
        <h2 className="text-4xl font-bold mb-3">Update Profile</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="fullName">Full name</Label>
            <Input
              id="fullName"
              {...register("fullName")}
              placeholder="Enter Full name"
            />
          </div>
          <div>
            <Label htmlFor="serviceType">Professional Service Type</Label>
            <Controller
              name="serviceType"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Enter new email"
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              {...register("phoneNumber")}
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <Label htmlFor="street">Address</Label>
            <Input id="street" {...register("street")} placeholder="Street" />
          </div>
          <div>
            <Label htmlFor="apartment">Appartment</Label>
            <Input
              id="apartment"
              {...register("apartment")}
              placeholder="Apt"
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" {...register("city")} placeholder="City" />
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
          <div>
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input
              id="zipCode"
              {...register("zipCode")}
              placeholder="Zip Code"
            />
          </div>
          <div>
            <Label htmlFor="serviceLocation">Service Location</Label>
            <Controller
              control={control}
              name="serviceLocation"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="miami">Miami</SelectItem>
                    <SelectItem value="florida">Florida</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="isLicensed" {...register("isLicensed")} />
            <Label htmlFor="isLicensed">Licensed or not ?</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="isInsured" {...register("isInsured")} />
            <Label htmlFor="isInsured">Insured or not?</Label>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Notification Settings</h3>
          <div className="flex items-center justify-between">
            <Label htmlFor="enableTextMessages">Enable Text Messages</Label>
            <Controller
              name="enableTextMessages"
              control={control}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="enableTextMessages"
                />
              )}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sendEmails">Send Emails</Label>
            <Controller
              name="sendEmails"
              control={control}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="sendEmails"
                />
              )}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="enableRealTimeNotifications">
              Enable Real-time Notifications
            </Label>
            <Controller
              name="enableRealTimeNotifications"
              control={control}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="enableRealTimeNotifications"
                />
              )}
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <Button type="submit" className="flex-1">
            Update Settings
          </Button>
          <Button type="button" variant="outline" className="flex-1">
            Update password
          </Button>
        </div>
      </form>
    </div>
  );
}
