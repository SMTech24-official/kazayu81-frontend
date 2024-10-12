"use client";

import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

type DPasswordInputProps = {
  name: string;
  label?: string;
  className?: string;
  defaultValue?: any;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  labelClassName?: string;
  iconColor?: string;
};

const DPasswordInput = ({
  name,
  required = false,
  disabled = false,
  label,
  defaultValue,
  className,
  labelClassName,
  iconColor,
  ...props
}: DPasswordInputProps) => {
  const { control } = useFormContext();
  const [show, setShow] = useState<boolean>(false);

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
                "block mb-2 text-lg w-full font-bold text-gray-300",
                labelClassName
              )}
            >
              {label}
            </Label>
          )}
          <div className="flex items-center">
            <Input
              {...field}
              {...props}
              id={name}
              disabled={disabled}
              required={required}
              type={show ? "text" : "password"}
              className={`text-gray-500 ${
                error ? "border-red-500" : "border-gray-500"
              } w-full rounded-full p-4 py-6 pr-12`}
            />
            <button
              type="button"
              className="-ml-10"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <IoMdEye className={cn("text-2xl text-gray-700", iconColor)} />
              ) : (
                <IoMdEyeOff
                  className={cn("text-2xl text-gray-700", iconColor)}
                />
              )}
            </button>
          </div>
          {error && (
            <span className="text-red-500 text-sm mt-1">{error.message}</span>
          )}
        </div>
      )}
    />
  );
};

export default DPasswordInput;
