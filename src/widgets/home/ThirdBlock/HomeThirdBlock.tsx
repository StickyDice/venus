import Image from "next/image";
import HomeProsCard from "~/widgets/home/ProsCard/HomeProsCard";

export default function HomeThirdBlock() {
  return (
    <section className="pt-35 flex justify-center">
      <div className="max-w-xl flex flex-col items-center">
        <div className="max-w-3xl mb-15">
          <h2 className="text-5xl font-bold text-center mb-4">
            Id aliquam molestie nunc quis turpis imperdiet quis
          </h2>
          <p className="text-center">
            Euismod condimentum tempus quis nibh. Accumsan imperdiet non
            vulputate venenatis, lorem amet, purus amet, sagittis. Cum orci quam
            enim adipiscing interdum purus.
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
            title="Flexible living"
            content="Stay as Long or as little as you need with month-to-
month contracts"
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
            title="Move-in ready"
            content="Ready to move in with everything you need"
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
            title="High-speed Wi-Fi"
            content="Best in class internet speeds suitable for working 
from home"
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
            title="24/7 support"
            content="On hand team for any issues you have"
          />
        </div>
      </div>
    </section>
  );
}
