"use client";

import AppButton from "~/shared/ui/app-button/app-button";
import AppInput from "~/shared/ui/app-input/app-input";
import { Label } from "~/shared/ui/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "~/shared/ui/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/shared/ui/components/ui/select";
import FinalHotelCard from "~/widgets/FinalHotelCard/FinalHotelCard";

export default function Page() {
  return (
    <section className="flex justify-center">
      <div className="px-10 flex justify-between gap-28 max-w-xl w-full">
        <div className="basis-full max-w-[630px]">
          <h2 className="text-main leading-main mb-15 font-bold">
            Информация о госте
          </h2>
          <div className="max-w-[430px] mb-8">
            <AppInput placeholder="ФИО" className="mb-4" />
            <AppInput placeholder="Email" className="mb-4" />
            <AppInput placeholder="Номер телефона" className="mb-4" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Цель поездки</h3>
          <RadioGroup defaultValue="option-one" className="mb-10">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="business" id="business" />
              <Label htmlFor="business">Коммандировка</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="move" id="move" />
              <Label htmlFor="move">Переезд</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="vacation" id="vacation" />
              <Label htmlFor="vacation">Отпуск</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Другое</Label>
            </div>
          </RadioGroup>
          <h3 className="text-2xl font-bold mb-4">
            Способ оплаты по умолчанию
          </h3>
          <div className="mb-10">
            <Select>
              <SelectTrigger className="max-w-[430px] bg-secondary border-none text-primary">
                <SelectValue placeholder="Выберите способ оплаты" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="cash">
                    Оплата наличными при заселении
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <AppButton
            title="Оплатить"
            className="mb-4"
            onClick={() => alert("Вы заброниваровали отель")}
          />
          <p className="max-w-[420px]">
            Нажимая &quot;Оплатить&quot; вы подтверждаете согласие с правилами
            сервиса, политикой персональных данных, и правилами проживания в
            отеле.
          </p>
        </div>
        <div>
          <FinalHotelCard />
        </div>
      </div>
    </section>
  );
}
