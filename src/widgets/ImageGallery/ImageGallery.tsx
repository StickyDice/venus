import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-6 gap-3 grid-rows-2 max-w-xl w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`rounded-xl overflow-hidden ${index === 0 ? "row-span-2 col-span-4" : ""}`}
        >
          <Image
            src={image}
            alt=""
            width={index === 0 ? 910 : 235}
            height={index === 0 ? 480 : 235}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
