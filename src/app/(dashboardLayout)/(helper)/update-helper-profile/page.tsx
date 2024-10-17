"use client";

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import MainIcon from "@/components/shared/mainIcon/MainIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

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
  licenseUpload?: FileList;
  insuranceUpload?: FileList;
};

const defaultValues: FormData = {
  fullName: "John Doe",
  serviceType: "plumbing",
  email: "john.doe@example.com",
  phoneNumber: "123-456-7890",
  street: "123 Main St",
  apartment: "Apt 1",
  city: "Anytown",
  state: "CA",
  zipCode: "12345",
  serviceLocation: "miami",
  isLicensed: false,
  isInsured: true,
  enableTextMessages: true,
  sendEmails: true,
  enableRealTimeNotifications: true,
};

export default function UpdateHelperProfile() {
  const {
    register,
    control,
    handleSubmit,
    //  watch
  } = useForm<FormData>({ defaultValues });
  const [showLicenseUpload, setShowLicenseUpload] = useState(!defaultValues.isLicensed);
  const [showInsuranceUpload, setShowInsuranceUpload] = useState(!defaultValues.isInsured);
  const user = useSelector((state: RootState) => state.user.user);
  const [userData, setserData] = useState({});

  console.log(user);

  //   {
  //     "id": 1,
  //     "email": "nahidmahmudn2@gmail.com",
  //     "role": "CUSTOMER",
  //     "userStatus": "ACTIVE",
  //     "profileImage": "https://lh3.googleusercontent.com/a/ACg8ocIslpZQdPHwGYn3UkMnVlnHTfuub6Lrb7tKZH_4bEeO7H2mlbA=s96-c",
  //     "createdAt": "2024-10-15T06:04:23.937Z",
  //     "updatedAt": "2024-10-15T06:04:23.937Z",
  //     "customerId": "#NaMa799531",
  //     "firstName": "Nahid",
  //     "lastName": "Mahmud",
  //     "phoneNumber": null
  // }

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  // const isLicensed = watch("isLicensed");
  // const isInsured = watch("isInsured");

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <MainIcon />
        <h2 className="text-3xl font-bold mb-3">Update Profile</h2>
      </div>
      <div className="shadow-xl rounded-2xl max-w-5xl mx-auto  mb-10 p-5 sm:p-8 border-t border-gray-50">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="gap-3 flex flex-col">
              <Label htmlFor="fullName">Full name</Label>
              <Input className="h-14 text-lg" id="fullName" {...register("fullName")} placeholder="Enter Full name" />
            </div>
            <div className="gap-3 flex flex-col">
              <Label htmlFor="serviceType">Professional Service Type</Label>
              <Controller
                name="serviceType"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full h-14 text-lg">
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
            <div className="gap-3 flex flex-col">
              <Label htmlFor="email">Email</Label>
              <Input
                className="h-14 text-lg"
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter new email"
              />
            </div>
            <div className="gap-3 flex flex-col">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                className="h-14 text-lg"
                id="phoneNumber"
                {...register("phoneNumber")}
                placeholder="Enter phone number"
              />
            </div>
            <div className="gap-3 flex flex-col">
              <Label htmlFor="street">Address</Label>
              <Input className="h-14 text-lg" id="street" {...register("street")} placeholder="Street" />
            </div>
            <div className="gap-3 flex flex-col">
              <Label htmlFor="apartment">Appartment</Label>
              <Input className="h-14 text-lg" id="apartment" {...register("apartment")} placeholder="Apt" />
            </div>
            <div className="gap-3 flex flex-col">
              <Label htmlFor="city">City</Label>
              <Input className="h-14 text-lg" id="city" {...register("city")} placeholder="City" />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <Label htmlFor="state">State</Label>
              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full h-14 text-lg">
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
            <div className="gap-3 flex flex-col">
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input className="h-14 text-lg" id="zipCode" {...register("zipCode")} placeholder="Zip Code" />
            </div>
            <div className="gap-3 flex flex-col">
              <Label htmlFor="serviceLocation">Service Location</Label>
              <Controller
                control={control}
                name="serviceLocation"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="h-14 text-lg">
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
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isLicensed"
                  {...register("isLicensed")}
                  defaultChecked={defaultValues.isLicensed}
                  disabled={!defaultValues.isInsured}
                  onCheckedChange={(checked) => setShowLicenseUpload(!checked)}
                />
                <Label htmlFor="isLicensed">Licensed or not?</Label>
              </div>
              {!showLicenseUpload && (
                <div>
                  <Label htmlFor="licenseUpload">Upload License</Label>
                  <Input className="h-14 text-lg" id="licenseUpload" type="file" {...register("licenseUpload")} />
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isInsured"
                  {...register("isInsured")}
                  defaultChecked={defaultValues.isInsured}
                  disabled={!defaultValues.isLicensed}
                  onCheckedChange={(checked) => setShowInsuranceUpload(!checked)}
                />
                <Label htmlFor="isInsured">Insured or not?</Label>
              </div>
              {showInsuranceUpload && (
                <div>
                  <Label htmlFor="insuranceUpload">Upload Insurance</Label>
                  <Input className="h-14 text-lg" id="insuranceUpload" type="file" {...register("insuranceUpload")} />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Notification Settings</h3>
            <div className="flex items-center gap-4">
              <Controller
                name="enableTextMessages"
                control={control}
                render={({ field }) => (
                  <Switch
                    className="data-[state=checked]:bg-orange-500"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="enableTextMessages"
                  />
                )}
              />{" "}
              <Label htmlFor="enableTextMessages">Enable Text Messages</Label>
            </div>
            <div className="flex items-center gap-4 ">
              <Controller
                name="sendEmails"
                control={control}
                render={({ field }) => (
                  <Switch
                    className="data-[state=checked]:bg-orange-500"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="sendEmails"
                  />
                )}
              />
              <Label htmlFor="sendEmails">Send Emails</Label>
            </div>
            <div className="flex items-center gap-4">
              <Controller
                name="enableRealTimeNotifications"
                control={control}
                render={({ field }) => (
                  <Switch
                    className="data-[state=checked]:bg-orange-500"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="enableRealTimeNotifications"
                  />
                )}
              />
              <Label htmlFor="enableRealTimeNotifications">Enable Real-time Notifications</Label>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button type="submit" className="w-fit px-6 py-6 bg-orange-500">
              Update Settings
            </Button>
            {/* <Button type="button" variant="outline" className="flex-1">
              Update password
            </Button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
