import Hotel from "~/entities/hotel/model/hotel";
import ImageGallery from "~/widgets/ImageGallery/ImageGallery";
import { faker } from "@faker-js/faker";
import BedIcon from "~/shared/ui/icons/bed-icon";
import ShowerIcon from "~/shared/ui/icons/shower-icon";
import HotelDescription from "~/widgets/HotelDescription/HotelDescription";

const fakedGallery = [
  "/test/test_1.png",
  "/test/test_2.png",
  "/test/test_3.png",
  "/test/test_4.png",
  "/test/test_5.png",
];

const fakedHotel = new Hotel({
  id: faker.string.uuid(),
  name: "Отель Метрополь",
  address: "Москва, пр. Театральный, 2",
  iconedFeatures: [
    { icon: BedIcon(), title: "2 спальни" },
    { icon: ShowerIcon(), title: "2 ванные" },
  ],
  textFeatures: ["500 кв.м", "Чудесный вид", "3ий этаж", "Лифт"],
  guestsReviews: [
    "удобное расположение",
    "прекрасный вид",
    "хороший сервис",
    "спа в отеле",
    "хорошая кухня",
    "мероприятия",
  ],
  description:
    "Сам отель и вокруг отеля все является достопримечательностью, в шаговой доступности Красная площадь, Кремль, Арбат, Цум, Гум, Музеи , рестораны. Невероятно красивый, атмосферный отель, уютные номера, роскошные ванные, где не только душ но и ванна , все для комфортного проживания. Очень чисто, уборка каждый день, очень вежливое обслуживание, вкусная кухня, подача завтраков и ужинов в номер на высшем уровне",
  comforts: [],
  cost: 25000,
  images: fakedGallery,
});

export default function Page() {
  return (
    <section className="flex justify-center">
      <div className="flex justify-center flex-col items-center max-w-xl">
        <ImageGallery images={fakedGallery} />
        <HotelDescription hotel={fakedHotel} />
      </div>
    </section>
  );
}
