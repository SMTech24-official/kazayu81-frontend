import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label"; // Adjust the import path for consistency

type DTextareaProps = {
  name: string;
  label?: string;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  labelClassName?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>; // Extending standard textarea attributes

const DTextarea = ({
  name,
  required = false,
  disabled = false,
  label,
  defaultValue,
  className,
  labelClassName,
  ...props
}: DTextareaProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue} // Set defaultValue here, which is managed by Controller
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
          <Textarea
            {...field}
            {...props} // Props spread, will take all valid textarea attributes
            id={name}
            disabled={disabled}
            className={cn(
              "text-gray-300",
              error ? "border-red-500" : "border-gray-300",
              "w-full flex rounded-lg p-4 py-6",
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

export default DTextarea;
