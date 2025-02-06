import Image from "next/image";

export default function HomeSecondBlock() {
  return (
    <section className="pt-35 flex justify-center">
      <div className="max-w-xl flex rounded-5xl overflow-hidden">
        <div className="grid grid-cols-2 max-w-[640px] w-full">
          <Image
            src="/second-block/second-block-1.png"
            alt=""
            width={320}
            height={189}
            className="h-full w-full"
          />
          <Image
            src="/second-block/second-block-2.jpg"
            alt=""
            width={320}
            height={189}
            className="h-full w-full"
          />
          <Image
            src="/second-block/second-block-3.png"
            alt=""
            width={320}
            height={189}
            className="h-full w-full"
          />
          <Image
            src="/second-block/second-block-4.jpg"
            alt=""
            width={320}
            height={189}
            className="h-full w-full"
          />
        </div>
        <div className="bg-secondary px-20 py-30">
          <h2 className="text-5xl font-bold mb-6">Жильё на любой вкус</h2>
          <p>
            Мы уверены, что в нашем каталоге найдётся номер под любые параметры.
            Командировка, отпуск, переезд — какой бы не была цель вашей поездки,
            вы сможете насладиться ей.
          </p>
        </div>
      </div>
    </section>
  );
}
