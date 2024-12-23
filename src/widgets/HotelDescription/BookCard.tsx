"use client";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { useState } from "react";
import GuestsCounter from "~/features/guestsCounter/ui/GuestsCounter";
import { cn } from "~/shared/lib/utils";
import AppButton from "~/shared/ui/app-button/app-button";
import { Button } from "~/shared/ui/components/ui/button";
import { Calendar } from "~/shared/ui/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/shared/ui/components/ui/popover";
import CalendarIcon from "~/shared/ui/icons/calendar-icon";

export default function BookCard({ cost }: { cost: number }) {
  const [inDate, setInDate] = useState<Date>();
  const [outDate, setOutDate] = useState<Date>();
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-4xl font-bold mb-11 w-full text-center">
        от {cost} ₽ / сутки{" "}
      </h2>
      <div className="flex justify-between w-full mb-3">
        {/* in */}
        <Popover>
          <div className="relative">
            {inDate && (
              <span className="absolute -top-6 left-0 font-bold">Заезд</span>
            )}
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "w-[200px] justify-start font-normal bg-white !rounded-xl",
                  !inDate && "text-muted-foreground",
                )}
              >
                <CalendarIcon />
                {inDate ? (
                  format(inDate, "PPP", { locale: ru })
                ) : (
                  <span className="text-l text-black">Заезд</span>
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
          </div>
        </Popover>
        {/* out */}
        <Popover>
          <div className="relative">
            {outDate && (
              <span className="absolute -top-6 left-0 font-bold">Отъезд</span>
            )}
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "w-[200px] justify-start font-normal bg-white !rounded-xl",
                  !inDate && "text-muted-foreground",
                )}
              >
                <CalendarIcon />
                {outDate ? (
                  format(outDate, "PPP", { locale: ru })
                ) : (
                  <span className="text-l text-black">Отъезд</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={outDate}
                onSelect={setOutDate}
                initialFocus
                locale={ru}
              />
            </PopoverContent>
          </div>
        </Popover>
      </div>
      <GuestsCounter className="pl-0 mb-3" />
      <p className="mb-5">Включены завтраки и ужины</p>
      <AppButton className="mb-1.5" title="Оформить" />
      <p className="text-center max-w-md self-center">
        При нажатии кнопки “оформить” ваша бронь будет зарезервирована
        автоматически
      </p>
    </div>
  );
}
