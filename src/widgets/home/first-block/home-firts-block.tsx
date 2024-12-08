import Image from "next/image";

export default function HomeFirstBlock() {
  return (
    <section className="flex justify-center">
      <div className="relative max-w-xl w-full h-[767px] flex justify-center">
        <Image src="/hero.jpg" layout="fill" alt="" objectFit="cover" />
        <div className="absolute -left-1 top-35 bg-white px-20 py-15 max-w-lg rounded-r-5xl">
          <h1 className="text-main font-bold leading-main mb-6">
            We rent your property
          </h1>
          <p className="text-base">
            Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis
            proin fermentum, consectetur cursus.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
