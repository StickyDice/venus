import Image from "next/image";
import Footer from "~/widgets/footer/Footer";
import Header from "~/widgets/header/Header";
import LoginCard from "~/widgets/login/Card/LoginCard";

export default function Page() {
  return (
    <>
      <Header />
      <section className="flex justify-center">
        <div className="relative max-w-xl w-full h-[683px]">
          <Image
            src="/login/ukraine-hotel.png"
            fill
            alt=""
            className="object-cover"
          />
          <LoginCard className="absolute right-20 top-1/2 -translate-y-1/2 max-w-[561px]" />
        </div>
      </section>
      <Footer className="!pt-12" />
    </>
  );
}
