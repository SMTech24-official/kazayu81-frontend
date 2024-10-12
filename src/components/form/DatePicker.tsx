// components/DatePickerComponent.tsx
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from "react-icons/fa";
import { Controller, useFormContext } from 'react-hook-form';

type DatePickerComponentProps = {
  name: string;
};

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({ name }) => {
  const { control } = useFormContext();

  return (
    <div className="relative flex items-center">
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <DatePicker
              selected={value}
              onChange={onChange}
              onBlur={onBlur}
              className="border p-2 rounded-full bg-transparent px-5 text-gray-300"
              placeholderText="Select a date"
              dateFormat="yyyy/MM/dd"  // Ensure date format is consistent
            />
            <FaRegCalendarAlt className="text-gray-300 text-xl -ml-10 pointer-events-none" />
          </>
        )}
      />
    </div>
  );
};

export default DatePickerComponent;
