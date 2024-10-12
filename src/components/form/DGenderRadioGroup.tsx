import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

type DRadioGroupProps = {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
};

const DRadioGroup = ({
  name,
  label,
  options,
  defaultValue,
  required = false,
  className,
  labelClassName,
}: DRadioGroupProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{ required: required ? "This field is required" : false }}
      render={({ field, fieldState: { error } }) => (
        <div className={`w-full ${className}`}>
          {label && (
            <Label
              htmlFor={name}
              className={cn(
                "block mb-4 text-lg w-full font-bold text-gray-300",
                labelClassName
              )}
            >
              {label}
            </Label>
          )}
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="flex items-center gap-5"
          >
            {options.map((option) => (
              <span key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option.value}
                  id={`${name}-${option.value}`}
                />
                <Label htmlFor={`${name}-${option.value}`}>
                  {option.label}
                </Label>
              </span>
            ))}
          </RadioGroup>
          {error && (
            <span className="text-red-500 text-sm mt-1">{error.message}</span>
          )}
        </div>
      )}
    />
  );
};

export default DRadioGroup;
