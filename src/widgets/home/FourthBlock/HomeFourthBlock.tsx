import Image from "next/image";
import Link from "next/link";
import AppButton from "~/shared/ui/app-button/app-button";

export default function HomeFourthBlock() {
  return (
    <section className="pt-35 flex justify-center">
      <div className="max-w-xl flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-15 text-center">
          Популярные города
        </h2>
        <div className="grid grid-cols-6 gap-5 items-end mb-15">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-5 text-center">Shoreditch</h3>
            <Image
              src="/fourth-block/shoreditch.jpg"
              alt=""
              width={196}
              height={196}
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-5 text-center">
              City of London
            </h3>
            <Image
              src="/fourth-block/london.jpg"
              alt=""
              width={196}
              height={196}
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-5 text-center">
              The West End
            </h3>
            <Image
              src="/fourth-block/west-end.jpg"
              alt=""
              width={196}
              height={196}
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-5 text-center">Kensington</h3>
            <Image
              src="/fourth-block/kensington.jpg"
              alt=""
              width={196}
              height={196}
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-5 text-center">
              Kingston-Upon-Thames
            </h3>
            <Image
              src="/fourth-block/kingston-upon-thames.jpg"
              alt=""
              width={196}
              height={196}
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-5">Hammersmith</h3>
            <Image
              src="/fourth-block/hammersmith.jpg"
              alt=""
              width={196}
              height={196}
            />
          </div>
        </div>
        <Link href="/">
          <AppButton title="Посмотреть все" />
        </Link>
      </div>
    </section>
  );
}
