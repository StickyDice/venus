import HotelScroll from "~/widgets/booking/HotelScroll/HotelScroll";
import FAQ from "~/widgets/faq/ui/FAQ";
import FindHotelPanel from "~/widgets/findHotelPanel/ui/FindHotelPanel";

export default function Page() {
  return (
    <>
      <FindHotelPanel />
      <HotelScroll />
      <FAQ />
    </>
  );
}
