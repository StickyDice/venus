import { MouseEvent } from "react";

interface IAppButtonProps {
  className?: string;
  onClick?: (e: MouseEvent) => void;
  title?: string;
}

export default function AppButton(props: IAppButtonProps) {
  const { className, onClick, title } = props;

  return (
    <button
      className={`${className} rounded-appButton bg-primary text-white px-10 py-3 font-bold`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
