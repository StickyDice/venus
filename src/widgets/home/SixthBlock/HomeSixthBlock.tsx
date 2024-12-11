import Image from "next/image";
import HomeProsCard from "~/widgets/home/ProsCard/HomeProsCard";

export default function HomeSixthBlock() {
  return (
    <section className="pt-35 flex justify-center">
      <div className="max-w-xl w-full flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-4">Corporate Partnerships</h2>
        <p className="mb-15">
          We work with 100+ companies to meet accommodation needs in London.
          Offer a dedicated booking manager that can help to find properties for
          your needs.
        </p>
        <div className="grid grid-cols-3 gap-5 w-full">
          <HomeProsCard
            icon={
              <Image
                src="/sixth-block/search-icon.svg"
                alt=""
                width={60}
                height={60}
              />
            }
            title="Booking manager"
            content="We do the searching for you"
          />
          <HomeProsCard
            icon={
              <Image
                src="/sixth-block/person-icon.svg"
                alt=""
                width={60}
                height={60}
              />
            }
            title="Account manager"
            content="Preferred partner rates"
          />
          <HomeProsCard
            icon={
              <Image
                src="/sixth-block/file-icon.svg"
                alt=""
                width={60}
                height={60}
              />
            }
            title="Flexible terms"
            content="Extend on short notice"
          />
        </div>
      </div>
    </section>
  );
}
