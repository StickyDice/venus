import Image from "next/image";
import HomeProsCard from "~/widgets/home/ProsCard/HomeProsCard";

export default function HomeThirdBlock() {
  return (
    <section className="pt-35 flex justify-center">
      <div className="max-w-xl flex flex-col items-center">
        <div className="max-w-3xl mb-15">
          <h2 className="text-5xl font-bold text-center mb-4">
            Часто гости ищут
          </h2>
          <p className="text-center">
            Самые частые критерии запросов наших пользователей за последние 3
            месяца.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <HomeProsCard
            icon={
              <Image
                src="/third-block/calendar-icon.svg"
                alt=""
                width={60}
                height={60}
              />
            }
            title="Гибкий въезд/выезд"
            content="Оставайтесь, сколько нужно, мы уладим формальности."
          />
          <HomeProsCard
            icon={
              <Image
                src="/third-block/sofa-icon.svg"
                alt=""
                width={60}
                height={60}
              />
            }
            title="Готов ко въезду"
            content="Готов ко въезду со всем что вам необходимо"
          />
          <HomeProsCard
            icon={
              <Image
                src="/third-block/wifi-icon.svg"
                alt=""
                width={60}
                height={60}
              />
            }
            title="Быстрый Wi-Fi"
            content="Высокоскоростной и бесперебойный интернет."
          />
          <HomeProsCard
            icon={
              <Image
                src="/third-block/message-icon.svg"
                alt=""
                width={60}
                height={60}
              />
            }
            title="24/7 поддержка"
            content="Наша команда готова решить любую вашу проблему"
          />
        </div>
      </div>
    </section>
  );
}
