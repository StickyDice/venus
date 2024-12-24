"use client";

import { ReactNode, useEffect, useState } from "react";
import AppButton from "~/shared/ui/app-button/app-button";
import BedIcon from "~/shared/ui/icons/bed-icon";
import ShowerIcon from "~/shared/ui/icons/shower-icon";
import HotelCard from "~/widgets/feed/HotelCard/HotelCard";

type hotelResponse = {
  id: string;
  price: number;
  images: string[];
  name: string;
  bathrooms: number;
  bedrooms: number;
  tags: string[];
};

const addHotels = (response: hotelResponse[]) => {
  const hotelsList = response.map((hotel) => {
    const iconedFeatures = [
      { icon: <BedIcon />, title: `${hotel.bedrooms} спальня` },
      { icon: <ShowerIcon />, title: `${hotel.bathrooms} ванных` },
    ];

    const textFeatures = hotel.tags;

    return (
      <HotelCard
        id={hotel.id}
        key={Math.random()}
        thumbnail="/test/test_1.png"
        hotelName={hotel.name}
        iconedFeatures={iconedFeatures}
        textFeatures={textFeatures}
        cost={hotel.price.toString()}
      />
    );
  });

  return hotelsList;
};

const fetchHotels = async (page: number): Promise<hotelResponse[]> => {
  const data = await fetch(`http://localhost:5000/feed/get?page=${page}`, {});
  const parsedData = await data.json();

  return parsedData;
};

export default function HotelScroll() {
  /* -------------------------------------------------------------------------- */
  /*                                    MOCK                                    */
  /* -------------------------------------------------------------------------- */
  const [page, setPage] = useState(1);
  const [hotelsListState, setHotelListState] = useState<ReactNode[]>([]);
  useEffect(() => {
    const getHotels = async () => {
      const hotelsResponse = await fetchHotels(page);
      const hotelsList = addHotels(hotelsResponse);
      setHotelListState(hotelsListState.concat(hotelsList));
    };

    getHotels();
  }, [page]);

  const handleOnClick = () => {
    setPage((prev) => prev + 1);
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
