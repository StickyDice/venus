import FAQ from "~/widgets/faq/ui/FAQ";
import HotelScroll from "~/widgets/feed/HotelScroll/HotelScroll";
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
