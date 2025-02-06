import { Suspense } from "react";
import Hotel from "~/entities/hotel/model/hotel";
import BookCard from "~/widgets/HotelDescription/BookCard";

export default function HotelDescription({ hotel }: { hotel: Hotel }) {
  return (
    <div className="pt-15 px-10 flex justify-between gap-28">
      <div className="basis-full">
        <h2 className="text-main leading-main mb-4 font-bold">{hotel.name}</h2>
        <address className="not-italic mb-8">{hotel.address}</address>
        <div className="flex gap-10 mb-10">
          <div className="flex gap-5">
            {hotel.iconedFeatures?.map((feature, index) => (
              <div key={index} className="flex gap-1">
                <span>{feature.icon}</span>
                <span>{feature.title}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {hotel.textFeatures?.map((feature, index) => (
              <div
                key={index}
                className="text-base leading-1 [&:not(:last-child)]:border-r-[1px] border-black pr-2"
              >
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl font-bold mb-3">Гости отдельно отметили:</h3>
          {hotel.guestsReviews?.map((review, index) => (
            <span key={index} className="uppercase">
              {review}{" "}
              {index === (hotel.guestsReviews?.length ?? 0) - 1 ? "" : " / "}
            </span>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3">Отзыв от ревизорра</h3>
          <p className="">{hotel.description}</p>
        </div>
      </div>
      <div className="basis-full">
        <div className="bg-secondary rounded-appButton py-4 px-10 flex flex-col items-center gap-5">
          <Suspense>
            <BookCard cost={hotel.cost} />
          </Suspense>
          <div />
        </div>
      </div>
    </div>
  );
}
