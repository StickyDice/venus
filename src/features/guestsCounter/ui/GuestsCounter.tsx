"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { cn } from "~/shared/lib/utils";
import GuestsIcon from "~/shared/ui/icons/guests-icon";
import MinusIcon from "~/shared/ui/icons/minus-icon";
import PlusIcon from "~/shared/ui/icons/plus-icon";

export default function GuestsCounter({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [guestsCount, setGuestsCount] = useState(
    Number(searchParams.get("guests") ?? 1),
  );
  return (
    <div className={cn("flex items-center gap-5 pl-10", className)}>
      <div className="flex gap-1">
        <GuestsIcon />
        <span className="font-bold">Гостей</span>
      </div>
      <button
        onClick={() => {
          setGuestsCount((prev) => Math.min(5, prev + 1));
          router.push(`${pathname}?guests=${Math.min(5, guestsCount + 1)}`, {
            scroll: false,
          });
        }}
      >
        <PlusIcon />
      </button>
      {guestsCount}
      <button
        onClick={() => {
          setGuestsCount((prev) => Math.max(1, prev - 1));
          router.push(`${pathname}?guests=${Math.max(1, guestsCount - 1)}`, {
            scroll: false,
          });
        }}
      >
        <MinusIcon />
      </button>
    </div>
  );
}
