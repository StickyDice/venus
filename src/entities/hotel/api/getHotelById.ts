import Hotel from "~/entities/hotel/model/hotel";

/**
 * @todo добавить апишку когда поймем как запустить мавен в докере
 */
export default async function getHotelById(id: string) {
  const data = await fetch("");
  const hotel = await data.json();

  return new Hotel({
    id: hotel.id,
    name: hotel.name,
    address: hotel.address,
    iconedFeatures: hotel.iconedFeatures,
    textFeatures: hotel.textFeatures,
    guestsReviews: hotel.guestsRevies,
    comforts: hotel.comforts,
    location: hotel.location,
    hotelDetails: hotel.hotelDetails,
    images: hotel.images,
    description: hotel.description,
    cost: hotel.cost,
  });
}
