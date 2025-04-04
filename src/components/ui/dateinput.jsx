"use client";

import * as React from "react";
import { format, parse, isValid } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export function DateInput() {
  const [date, setDate] = React.useState();
  const [inputValue, setInputValue] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Try to parse the date
    const parsedDate = parse(value, "yyyy-MM-dd", new Date());

    if (isValid(parsedDate)) {
      setDate(parsedDate);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleCalendarSelect = (newDate) => {
    setDate(newDate);
    setInputValue(newDate ? format(newDate, "yyyy-MM-dd") : "");
    setError(false);
  };

  return (
    <div className="items-start">
      <div className="flex-1">
        <Input
          type="date"
          value={inputValue}
          onChange={handleInputChange}
          className={cn(
            "w-full",
            error && "border-red-500 focus-visible:ring-red-500",
          )}
        />
        {error && (
          <p className="text-sm text-red-500 mt-1">
            Please enter a valid date (YYYY-MM-DD)
          </p>
        )}
      </div>
    </div>
  );
}
