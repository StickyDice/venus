import { ReactNode } from "react";

interface IHomeProsCardProps {
  icon: ReactNode;
  title: string;
  content: string;
}

export default function HomeProsCard(props: IHomeProsCardProps) {
  const { icon, title, content } = props;

  return (
    <div className="px-8 py-10 bg-card-background rounded-3xl flex flex-col gap-5">
      {icon}
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  );
}
