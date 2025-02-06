import Image from "next/image";

export default function HomeFirstBlock() {
  return (
    <section className="flex justify-center">
      <div className="relative max-w-xl w-full h-[767px] flex justify-center">
        <Image src="/hero.jpg" fill alt="" className="object-cover" />
        <div className="absolute -left-1 top-35 bg-white px-20 py-15 max-w-lg rounded-r-5xl">
          <h1 className="text-main font-bold leading-main mb-6">
            Аренда — наша забота
          </h1>
          <p className="text-base">
            Мы сами решим все проблемы, пока вы получаете удовольствие от
            поездки.
          </p>
        </div>
      </div>
    </section>
  );
}
