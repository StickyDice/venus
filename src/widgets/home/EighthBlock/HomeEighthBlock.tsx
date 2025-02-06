import { SelectGroup } from "@radix-ui/react-select";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/shared/ui/components/ui/select";

export default function HomeEighthBlock() {
  return (
    <section className="pt-35 flex justify-center">
      <div className="relative max-w-xl w-full h-[604px] flex justify-center">
        <Image
          src="/eighth-block/eighth-block-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute max-w-lg bg-white px-15 py-15 rounded-r-5xl rounded-tl-5xl rounded-bl-appButton top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-5xl font-bold mb-6">Время — деньги</h2>
          <p className="mb-8">
            Не тратьте время в поездке на вопросы с арендой. Ими займёмся мы.
            Осталось только выбрать куда поедем
          </p>
          <Select>
            <SelectTrigger className="w-full bg-primary text-white font-bold rounded-full">
              <SelectValue placeholder="Перейти к поиску" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Place1">Place</SelectItem>
                <SelectItem value="Place2">Place</SelectItem>
                <SelectItem value="Place3">Place</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
