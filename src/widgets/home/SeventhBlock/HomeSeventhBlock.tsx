import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/shared/ui/components/ui/carousel";
import ReviewItem from "~/widgets/home/SeventhBlock/ReviewItem";

export default function HomeSeventhBlock() {
  return (
    <section className="pt-35 flex justify-center">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-4">Отзывы наших клиентов</h2>
        <p className="mb-15">Что говорят о нас пользователи</p>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {[1, 2, 3, 4].map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-2/3 lg:basis-1/2"
              >
                <div className="p-1">
                  <ReviewItem
                    avatar={
                      <Image
                        src="/seventh-block/user-avatar.png"
                        alt=""
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    }
                    name="Annie"
                    position="Landlord in SE1"
                    content="Всё получилось просто великолепно! Ехала в командировку в Москву, очень переживала за жильё, однако получилось всё в лучшем виде! 
После поездки остались только хорошие впечатления. Спасибо за такой чудесный сервис"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="static bg-primary hover:bg-teal-800 text-white rounded-md translate-y-0" />
            <CarouselNext className="static bg-primary hover:bg-teal-800 text-white rounded-md translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
