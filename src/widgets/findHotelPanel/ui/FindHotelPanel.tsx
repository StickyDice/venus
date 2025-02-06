import { Suspense } from "react";
import BookCalendar from "~/features/bookCalendar/ui/BookCalendar";
import CitySelector from "~/features/citySelector/ui/CitySelector";
import GuestsCounter from "~/features/guestsCounter/ui/GuestsCounter";
import AppButton from "~/shared/ui/app-button/app-button";

export default function FindHotelPanel() {
  return (
    <div className="flex justify-center">
      <div className="flex border-solid rounded-appButton border-primary border-4 overflow-hidden max-w-[1064px] p-0.5">
        <CitySelector />
        <BookCalendar />
        <Suspense>
          <GuestsCounter />
        </Suspense>
        <AppButton title="Найти" className="ml-5" />
      </div>
    </div>
  );
}
