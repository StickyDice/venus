"use client";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import TimelineIcon from "~/app/feed/hotel/[id]/booking/TimelineIcon";
import CalendarIcon from "~/shared/ui/icons/calendar-icon";
import GuestsIcon from "~/shared/ui/icons/guests-icon";

export default function FinalHotelCard() {
  const searchParams = useSearchParams();
  const guests = searchParams.get("guests");
  const inDate = searchParams.get("inDate") as string;
  const outDate = searchParams.get("outDate") as string;

  return (
    <div className="bg-secondary rounded-appButton overflow-hidden flex flex-col items-center justify-start max-w-[522px]">
      <Image
        src="/test/test_1.png"
        alt=""
        width={522}
        height={282}
        className="object-cover"
      />
      <div className="w-full px-10 py-5">
        <div className="flex justify-between mb-6">
          <div>
            <span className="text-l text-black font-bold mb-3">Заезд</span>
            <div className="flex gap-3">
              <CalendarIcon />
              <span>{format(inDate, "PPP", { locale: ru })}</span>
            </div>
          </div>
          <div>
            <span className="text-l text-black font-bold mb-3">Отъезд</span>
            <div className="flex gap-3">
              <CalendarIcon />
              <span>{format(outDate, "PPP", { locale: ru })}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mb-3">
          <GuestsIcon />
          <span>Гостей {guests}</span>
        </div>
        <span className="block mb-5">Питание включено</span>
        <span className="block font-bold mb-5">Процесс оплаты</span>
        <div className="flex gap-4">
          <TimelineIcon />
          <div className="w-full">
            <div className="flex justify-between text-lg">
              <span>Подтверждение брони</span>
              <span>50 000 ₽</span>
            </div>
            <span className="text-sm block">Оплатить сейчас</span>
            <span className="text-lg block">После заезда</span>
            <span className="text-sm block">
              4000.00 ₽ вернутся на счёт в течении 3 рабочих дней
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
