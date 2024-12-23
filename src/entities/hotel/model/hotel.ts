import { ReactNode } from "react";

export type HotelFeatureIcon = {
  icon: ReactNode | string;
  title: string;
};

export default class Hotel {
  id: string;

  name: string;

  address?: string;

  // Это нужно для хуйни, в которой написано 2 спальни, 2 ванные
  iconedFeatures?: HotelFeatureIcon[];

  // Это нужно для хуйни, в которой написано 500кв.м | Чудесный вид ...
  textFeatures?: string[];

  guestsReviews?: string[];

  description: string;

  comforts: HotelFeatureIcon[];

  location?: string;

  hotelDetails?: HotelFeatureIcon[];

  images: string[];

  cost: number;

  constructor({
    id,
    name,
    address,
    iconedFeatures,
    textFeatures,
    guestsReviews,
    description,
    comforts,
    location,
    hotelDetails,
    images,
    cost,
  }: Hotel) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.iconedFeatures = iconedFeatures;
    this.textFeatures = textFeatures;
    this.guestsReviews = guestsReviews;
    this.description = description;
    this.comforts = comforts;
    this.location = location;
    this.hotelDetails = hotelDetails;
    this.images = images;
    this.cost = cost;
  }
}
