"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Calendar } from "lucide-react";






import { CustomDatePickerProps } from "@/types/date-picker";

export default function CustomDatePicker({
  selected,
  onChange,
  placeholder = "Select preferred date",
}: CustomDatePickerProps) {
  return (
    <div className="flex h-[52px] items-center rounded-md border border-gray-200 bg-[#f8fafc] px-4">
      <Calendar size={17} className="text-gray-400" />

      <DatePicker




              
        selected={selected}
        onChange={onChange}
        placeholderText={placeholder}
        dateFormat="MMMM d, yyyy"
        minDate={new Date()}
        popperPlacement="bottom-start"
        calendarClassName="custom-datepicker"
        className="ml-3 w-full bg-transparent text-sm outline-none"
      />
    </div>
  );
}