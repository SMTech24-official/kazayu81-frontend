"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { serviceTitles } from "@/data/ServiceTitles";

interface HelpSearchFilterComponentProps {
  formData: {
    serviceType: string;
    serviceLocation: string;
    minBudget: string;
    maxBudget: string;
    helpDuration: string;
    durationUnit: string;
    publishDateFrom?: Date;
    publishDateTo?: Date;
  };
  setFormData: (data: any) => void;
  isOpen: {
    from: boolean;
    to: boolean;
  };
  setIsOpen: (open: { from: boolean; to: boolean }) => void;
  errors: {
    serviceType?: string;
    serviceLocation?: string;
    minBudget?: string;
    maxBudget?: string;
    helpDuration?: string;
    durationUnit?: string;
    publishDateFrom?: string;
    publishDateTo?: string;
  };
  setErrors: (errors: any) => void;
}

export default function HelpSearchFilterComponent({
  formData,
  setFormData,
  isOpen,
  setIsOpen,
  errors,
  setErrors,
}: HelpSearchFilterComponentProps) {
  // Form state

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue = parseFloat(value) || 0;

    // Validate for negative values
    if (parsedValue < 0) {
      setErrors({
        ...errors,
        [name]: `${name} cannot be negative`,
      });
    } else {
      setErrors({
        ...errors,
        [name]: undefined,
      });
      setFormData({
        ...formData,
        [name]: parsedValue,
      });
    }
  };

  // Handle Select change
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Date change
  const handleDateChange = (name: string, value: Date | undefined) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate date range
    if (name === "publishDateFrom" && value && formData.publishDateTo && value > formData.publishDateTo) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        publishDateFrom: "From date cannot be greater than To date",
      }));
    } else if (name === "publishDateTo" && value && formData.publishDateFrom && value < formData.publishDateFrom) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        publishDateTo: "To date cannot be less than From date",
      }));
    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        publishDateFrom: undefined,
        publishDateTo: undefined,
      }));
    }
  };

  // console.table(formData);

  // reset function

  const handleReset = () => {
    setFormData({
      serviceType: "",
      serviceLocation: "",
      minBudget: "",
      maxBudget: "",
      helpDuration: "",
      durationUnit: "hours",
      publishDateFrom: undefined,
      publishDateTo: undefined,
    });
    setErrors({});
  };

  return (
    <div>
      <form className="w-full flex flex-col gap-5 ">
        {/* Service Type Field */}
        <div>
          <label className="block mb-2">Professional Service Type</label>
          <Select onValueChange={(value) => handleSelectChange("serviceType", value)} value={formData.serviceType}>
            <SelectTrigger className="focus:ring-0 w-full focus:ring-offset-0 h-12 text-md">
              <SelectValue placeholder="Select Service Type" />
            </SelectTrigger>
            <SelectContent>
              {serviceTitles.map((title, index) => (
                <SelectItem key={index} value={title}>
                  {title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceType && <p className="text-red-500">{errors.serviceType}</p>}
        </div>

        {/* Service Location Field */}
        <div>
          <label className="block  mb-2">Service Location</label>
          <Select
            onValueChange={(value) => handleSelectChange("serviceLocation", value)}
            value={formData.serviceLocation}
          >
            <SelectTrigger className="focus:ring-0 focus:ring-offset-0 h-12 text-md">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CA">California</SelectItem>
              <SelectItem value="NY">New York</SelectItem>
              <SelectItem value="TX">Texas</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceLocation && <p className="text-red-500">{errors.serviceLocation}</p>}
        </div>

        {/* Budget Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block  mb-2">Budget (Min)</label>
            <Input
              type="number"
              name="minBudget"
              placeholder="Min"
              value={formData.minBudget}
              onChange={handleInputChange}
              className=" h-12 text-md"
            />
            {errors.minBudget && <p className="text-red-500">{errors.minBudget}</p>}
          </div>
          <div className="flex-1">
            <label className="block  mb-2">Budget (Max)</label>
            <Input
              type="number"
              name="maxBudget"
              placeholder="Max"
              value={formData.maxBudget}
              onChange={handleInputChange}
              className=" h-12 text-md"
            />
            {errors.maxBudget && <p className="text-red-500">{errors.maxBudget}</p>}
          </div>
        </div>

        {/* Help Duration Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block mb-2">Help Duration</label>
            <Input
              type="text"
              name="helpDuration"
              placeholder="Duration"
              value={formData.helpDuration}
              onChange={handleInputChange}
              className=" h-12 text-md"
            />
            {errors.helpDuration && <p className="text-red-500">{errors.helpDuration}</p>}
          </div>
          <div className="flex-1">
            <label className="block  mb-2">Duration Unit</label>
            <Select onValueChange={(value) => handleSelectChange("durationUnit", value)} value={formData.durationUnit}>
              <SelectTrigger className="focus:ring-0 focus:ring-offset-0 h-12 text-md">
                <SelectValue placeholder="Select Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hours">Hours</SelectItem>
                <SelectItem value="days">Days</SelectItem>
                <SelectItem value="weeks">Weeks</SelectItem>
                <SelectItem value="months">Months</SelectItem>
                <SelectItem value="years">Years</SelectItem>
              </SelectContent>
            </Select>
            {errors.durationUnit && <p className="text-red-500">{errors.durationUnit}</p>}
          </div>
        </div>

        {/* Publish Date Fields */}
        {/* <p>Post Published</p> */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* Publish Date From */}
          <div className="flex-1">
            <label className="block mb-2">From</label>
            <Popover open={isOpen.from} onOpenChange={(open) => setIsOpen({ ...isOpen, from: open })}>
              <PopoverTrigger asChild>
                <Button
                  onClick={() => setIsOpen({ ...isOpen, from: !isOpen.from })}
                  variant="outline"
                  className={cn(
                    "w-full pl-3 text-left font-normal  h-12 text-md",
                    !formData.publishDateFrom && "text-muted-foreground"
                  )}
                >
                  {formData.publishDateFrom ? format(formData.publishDateFrom, "MM/dd/yyyy") : <span>mm/dd/yyyy</span>}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar
                  mode="single"
                  selected={formData.publishDateFrom}
                  onSelect={(date) => {
                    handleDateChange("publishDateFrom", date);
                    setIsOpen({ ...isOpen, from: false });
                  }}
                />
              </PopoverContent>
            </Popover>
            {errors.publishDateFrom && <p className="text-red-500">{errors.publishDateFrom}</p>}
          </div>

          {/* Publish Date To */}
          <div className="flex-1">
            <label className="block mb-2">To</label>
            <Popover open={isOpen.to} onOpenChange={(open) => setIsOpen({ ...isOpen, to: open })}>
              <PopoverTrigger asChild>
                <Button
                  onClick={() => setIsOpen({ ...isOpen, to: !isOpen.to })}
                  variant="outline"
                  className={cn(
                    "w-full pl-3 text-left font-normal  h-12 text-md",
                    !formData.publishDateTo && "text-muted-foreground"
                  )}
                >
                  {formData.publishDateTo ? format(formData.publishDateTo, "MM/dd/yyyy") : <span>mm/dd/yyyy</span>}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar
                  mode="single"
                  selected={formData.publishDateTo}
                  onSelect={(date) => {
                    handleDateChange("publishDateTo", date);
                    setIsOpen({ ...isOpen, to: false });
                  }}
                />
              </PopoverContent>
            </Popover>
            {errors.publishDateTo && <p className="text-red-500">{errors.publishDateTo}</p>}
          </div>
        </div>
      </form>
      {/* reset button */}
      <Button onClick={handleReset} className="w-full h-12 bg-orange-500 hover:bg-orange-600 mt-10 text-md">
        Reset
      </Button>
    </div>
  );
}
