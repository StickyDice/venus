"use client";

import { ReactNode, useEffect, useState } from "react";
import AppButton from "~/shared/ui/app-button/app-button";
import BedIcon from "~/shared/ui/icons/bed-icon";
import ShowerIcon from "~/shared/ui/icons/shower-icon";
import HotelCard, {
  HotelFeatureIcon,
} from "~/widgets/booking/HotelCard/HotelCard";

const addHotels = () => {
  const amoutOfFakedHotels = 10;

  const iconedFeatures: HotelFeatureIcon[] = [];
  iconedFeatures.push({
    icon: <BedIcon />,
    title: "2 Спальни",
  });
  iconedFeatures.push({
    icon: <ShowerIcon />,
    title: "2 Спальни",
  });

  const textFeatures = ["Вид на город", "3ий этаж", "Лифт", "Парковка"];

  const hotelsList: ReactNode[] = [];

  for (let _ = 0; _ < amoutOfFakedHotels; _++) {
    hotelsList.push(
      <HotelCard
        key={Math.random()}
        thumbnail="https://a.travelcdn.mts.ru/property-photos/1633728227/2347900126/b906bb336c2edc107d3ff70ed3812ed641a5131e.jpeg?width=640&fit=bounds&quality=75"
        hotelName="Гостинница Москва"
        iconedFeatures={iconedFeatures}
        textFeatures={textFeatures}
        cost="30 000"
      />,
    );
  }

  return hotelsList;
};

export default function HotelScroll() {
  /* -------------------------------------------------------------------------- */
  /*                                    MOCK                                    */
  /* -------------------------------------------------------------------------- */
  const [hotelsListState, setHotelListState] = useState<ReactNode[]>([]);
  useEffect(() => {
    const hotelsList = addHotels();
    setHotelListState(hotelsList);
  }, []);

  const handleOnClick = () => {
    const hotelsList = addHotels();
    setHotelListState(hotelsListState.concat(hotelsList));
  };

  return (
    <div className="pt-35 flex justify-center">
      <div className="flex flex-col gap-5 max-w-6xl w-full">
        {hotelsListState}
        <AppButton
          title="Показать больше вариантов"
          onClick={handleOnClick}
          className="w-fit self-center mt-10"
        />
      </div>
    </div>
  );
}
