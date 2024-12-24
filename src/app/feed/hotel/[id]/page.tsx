"use client";

import Hotel from "~/entities/hotel/model/hotel";
import ImageGallery from "~/widgets/ImageGallery/ImageGallery";
import BedIcon from "~/shared/ui/icons/bed-icon";
import ShowerIcon from "~/shared/ui/icons/shower-icon";
import HotelDescription from "~/widgets/HotelDescription/HotelDescription";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type HotelResponse = {
  id: string;
  bedrooms: number;
  images: string[];
  all_conviniences: string[];
  price: number;
  name: string;
  guest_tags: string[];
  adress: string;
  bathrooms: number;
  reservation_price: number;
  tags: string[];
};

// const fakedGallery = [
//   "/test/test_1.png",
//   "/test/test_2.png",
//   "/test/test_3.png",
//   "/test/test_4.png",
//   "/test/test_5.png",
// ];

const hotelDto = (response: HotelResponse) =>
  new Hotel({
    id: response.id,
    name: response.name,
    address: response.adress,
    iconedFeatures: [
      { icon: <BedIcon />, title: `${response.bedrooms} спален` },
      { icon: <ShowerIcon />, title: `${response.bathrooms} ванных` },
    ],
    textFeatures: response.tags,
    guestsReviews: response.guest_tags,
    description: "",
    comforts: [],
    cost: response.price,
    // images: response.images,
    images: ["/test/test_1.png"],
  });

// const fakedHotel = new Hotel({
//   id: faker.string.uuid(),
//   name: "Отель Метрополь",
//   address: "Москва, пр. Театральный, 2",
//   iconedFeatures: [
//     { icon: BedIcon(), title: "2 спальни" },
//     { icon: ShowerIcon(), title: "2 ванные" },
//   ],
//   textFeatures: ["500 кв.м", "Чудесный вид", "3ий этаж", "Лифт"],
//   guestsReviews: [
//     "удобное расположение",
//     "прекрасный вид",
//     "хороший сервис",
//     "спа в отеле",
//     "хорошая кухня",
//     "мероприятия",
//   ],
//   description:
//     "Сам отель и вокруг отеля все является достопримечательностью, в шаговой доступности Красная площадь, Кремль, Арбат, Цум, Гум, Музеи , рестораны. Невероятно красивый, атмосферный отель, уютные номера, роскошные ванные, где не только душ но и ванна , все для комфортного проживания. Очень чисто, уборка каждый день, очень вежливое обслуживание, вкусная кухня, подача завтраков и ужинов в номер на высшем уровне",
//   comforts: [],
//   cost: 25000,
//   images: fakedGallery,
// });

const fetchHotelById = async (id: string): Promise<Hotel> => {
  const data = await fetch(`http://localhost:5000/hotel/${id}`);

  const parsedData = await data.json();
  return hotelDto(parsedData);
};

export default function Page() {
  const [hotel, setHotel] = useState<Hotel>();
  const id = usePathname().split("/").at(-1) as string;

  useEffect(() => {
    const getHotel = async () => {
      setHotel(await fetchHotelById(id));
    };

    getHotel();
  }, []);
  return (
    <section className="flex justify-center">
      <div className="flex justify-center flex-col items-center max-w-xl">
        {hotel && (
          <>
            <ImageGallery images={hotel.images} />
            <HotelDescription hotel={hotel} />
          </>
        )}
      </div>
    </section>
  );
}
