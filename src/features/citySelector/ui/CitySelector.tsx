"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { cn } from "~/shared/lib/utils";
import { Button } from "~/shared/ui/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/shared/ui/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/shared/ui/components/ui/popover";
import SearchIcon from "~/shared/ui/icons/search-icon";

const cities = [
  {
    value: "Санкт-Петербург",
    label: "Санкт-Петербург",
  },
  {
    value: "Москва",
    label: "Москва",
  },
  {
    value: "Казань",
    label: "Казань",
  },
  {
    value: "Сочи",
    label: "Сочи",
  },
  {
    value: "Екатеринбург",
    label: "Екатеринбург",
  },
  {
    value: "Краснодар",
    label: "Краснодар",
  },
];

export default function CitySelector() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="border-r-[1px] border-primary">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between font-lato font-bold text-l h-full pl-10"
          >
            {value ? (
              cities.find((city) => city.value === value)?.label
            ) : (
              <div className="flex items-center h-full text-l gap-3">
                <SearchIcon />
                Город
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Введите название" />
            <CommandList>
              <CommandEmpty className="text-l">Город не найден</CommandEmpty>
              <CommandGroup>
                {cities.map((city) => (
                  <CommandItem
                    className="font-lato font-bold"
                    key={city.value}
                    value={city.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === city.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {city.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
