"use client";

import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import mainIcon from "@/assets/images/main-ico.png";

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  enableTextMessages: boolean;
  sendEmails: boolean;
  enableRealTimeNotifications: boolean;
};

export default function Component() {
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder="Enter username"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter recovery email"
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
          <Button
            type="submit"
            className="flex-1 bg-orange-500 hover:bg-orange-600"
          >
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
