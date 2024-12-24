"use client";

import Image from "next/image";
import LoginCard from "~/widgets/login/Card/LoginCard";

export default function Page() {
  return (
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
  );
}
