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
          <h2 className="text-5xl font-bold mb-6">The future is flexible</h2>
          <p>
            We believe in a world where finding a home is just a click away.
            Whether you’re selling your home, travelling for work or moving to a
            new city. Just bring your bags, and we’ll handle the rest.
          </p>
        </div>
      </div>
    </section>
  );
}
