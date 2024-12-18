import HotelScroll from "~/widgets/booking/HotelScroll/HotelScroll";
import BookingPanel from "~/widgets/bookingPanel/ui/BookingPanel";
import FAQ from "~/widgets/faq/ui/FAQ";

export default function Page() {
  return (
    <>
      <BookingPanel />
      <HotelScroll />
      <FAQ />
    </>
  );
}
