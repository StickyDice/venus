"use client";

import { format } from "date-fns";
import { cn } from "~/shared/lib/utils";
import { Button } from "~/shared/ui/components/ui/button";
import { Calendar } from "~/shared/ui/components/ui/calendar";
import { ru } from "date-fns/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/shared/ui/components/ui/popover";
import CalendarIcon from "~/shared/ui/icons/calendar-icon";
import RightArrowIcon from "~/shared/ui/icons/right-arrow-icon";
import { useState } from "react";

export default function BookCalendar() {
  const [inDate, setInDate] = useState<Date>();
  const [outDate, setOutDate] = useState<Date>();

  return (
    <div className="flex justify-between items-center border-r-[1px] border-primary max-w-[358px]">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-[150px] justify-end text-left font-normal",
              !inDate && "text-muted-foreground",
            )}
          >
            {!inDate && <CalendarIcon />}
            {inDate ? (
              format(inDate, "PPP", { locale: ru })
            ) : (
              <span className="text-l font-bold text-black">Заезд</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={inDate}
            onSelect={setInDate}
            initialFocus
            locale={ru}
          />
        </PopoverContent>
      </Popover>
      <RightArrowIcon />
      {/* out */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-[150px] justify-start text-left font-normal",
              !outDate && "text-muted-foreground",
            )}
          >
            {outDate ? (
              format(outDate, "PPP", { locale: ru })
            ) : (
              <span className="text-l font-bold text-black font-lato">
                Отъезд
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={outDate}
            onSelect={setOutDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
