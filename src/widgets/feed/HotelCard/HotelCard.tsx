"use client";

import Image from "next/image";
import { HotelFeatureIcon } from "~/entities/hotel/model/hotel";

export interface IHotelCardProps {
  thumbnail: string;
  hotelName: string;
  iconedFeatures?: HotelFeatureIcon[];
  textFeatures?: string[];
  cost: string;
}

export default function HotelCard(props: IHotelCardProps) {
  const { thumbnail, hotelName, iconedFeatures, textFeatures, cost } = props;
  return (
    <div className="flex bg-secondary w-full rounded-r-5xl rounded-tl-5xl rounded-bl-appButton overflow-hidden">
      <div className="relative max-w-[305px] w-full">
        <Image
          src={thumbnail}
          alt={hotelName}
          fill
          className="object-cover h-[180px]"
        />
      </div>
      <div className="px-5 py-8">
        <h3 className="text-lg font-bold mb-4">{hotelName}</h3>
        <div className="flex gap-5 mb-2">
          {iconedFeatures?.map((feature) => (
            <div className="flex gap-2" key={Math.random()}>
              {feature.icon}
              {feature.title}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-3">
          {textFeatures?.map((feature) => (
            <span
              key={Math.random()}
              className="text-sm leading-4 [&:not(:last-child)]:border-r-[1px] border-black pr-2"
            >
              {feature}
            </span>
          ))}
        </div>
        <p className="text-sm">
          от <strong>{cost}</strong> ₽/сутки
        </p>
      </div>
    </div>
  );
}
