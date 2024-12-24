import { MouseEvent, ReactNode } from "react";

interface IAppButtonProps {
  className?: string;
  onClick?: (e: MouseEvent) => void;
  title?: string;
  leading?: ReactNode;
  disabled?: boolean;
}

export default function AppButton(props: IAppButtonProps) {
  const { className, onClick, title, leading, disabled } = props;

  return (
    <button
      className={`${className} rounded-appButton bg-primary text-white px-10 py-3 font-bold flex items-center justify-center gap-2 disabled:bg-slate-500`}
      onClick={onClick}
      disabled={disabled}
    >
      {leading}
      {title}
    </button>
  );
}
