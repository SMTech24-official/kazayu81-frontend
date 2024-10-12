import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

type DInputProps = {
  name: string;
  label?: string;
  type?: string;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  labelClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const DInput = ({
  name,
  required = false,
  disabled = false,
  label,
  type = "text",
  defaultValue,
  className,
  labelClassName,
  ...props
}: DInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={{ required: required ? "This field is required" : false }}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full">
          {label && (
            <Label
              htmlFor={name}
              className={cn(
                "block mb-2 text-lg w-full font-bold text-gray-300",
                labelClassName
              )}
            >
              {label}
            </Label>
          )}
          <Input
            {...field}
            {...props}
            id={name}
            disabled={disabled}
            type={type}
            className={cn(
              "text-gray-500",
              error ? "border-red-500" : "border-gray-300",
              "w-full flex rounded-full p-4 py-6",
              className
            )}
          />
          {error && (
            <span className="text-red-500 text-sm mt-1">{error.message}</span>
          )}
        </div>
      )}
    />
  );
};

export default DInput;
