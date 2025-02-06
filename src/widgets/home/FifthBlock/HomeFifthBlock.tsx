import Image from "next/image";
import AppButton from "~/shared/ui/app-button/app-button";

export default function HomeFifthBlock() {
  return (
    <section className="pt-35 flex justify-center">
      <div className="relative max-w-xl w-full h-[506px]">
        <Image
          src="/fifth-block/bespoke-partnerships.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute max-w-lg top-35 left-20">
          <h2 className="text-5xl font-bold text-white mb-4">
            Говорящие места
          </h2>
          <p className="text-white mb-15">
            Поможем подобрать жильё недалеко от местных достопримечательностей,
            или интересных мероприятий.
          </p>
          <AppButton title="Подобрать жильё" />
        </div>
      </div>
    </section>
  );
}
