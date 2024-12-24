"use client";

import Link from "next/link";
import AppButton from "~/shared/ui/app-button/app-button";
import FinalHotelCard from "~/widgets/FinalHotelCard/FinalHotelCard";

export default function Page() {
  return (
    <section className="flex justify-cent/er">
      <div className="px-10 flex justify-between gap-28 max-w-xl w-full">
        <div className="basis-full max-w-[630px]">
          <h2 className="text-main leading-main mb-10 font-bold">
            Бронирование
          </h2>
          <div className="flex justify-between text-lg font-bold mb-3">
            <span>Стоимость проживания</span>
            <span>30 000</span>
          </div>
          <div className="flex justify-between text-lg mb-3">
            <span>Стоимость питания</span>
            <span>12 000</span>
          </div>
          <div className="flex justify-between text-lg mb-3">
            <span>Разовый туристический сбор</span>
            <span>600</span>
          </div>
          <div className="flex justify-between text-lg mb-3">
            <span>НДС</span>
            <span>10 000</span>
          </div>
          <div className="flex justify-between text-2xl font-bold mb-6">
            <span>Итого</span>
            <span>40 000</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href="./guest">
              <AppButton title="Перейти к оплате" className="mb-1" />
            </Link>
            <p className="text-sm text-center max-w-52">
              Мы не получим доступ к вашим платёжным данным
            </p>
          </div>
        </div>
        <div>
          <FinalHotelCard />
        </div>
      </div>
    </section>
  );
}
