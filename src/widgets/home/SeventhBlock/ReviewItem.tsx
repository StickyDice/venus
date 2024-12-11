import { ReactNode } from "react";

interface IReviewItemProps {
  avatar: ReactNode;
  name: string;
  position: string;
  content: string;
}

export default function ReviewItem(props: IReviewItemProps) {
  const { avatar, name, position, content } = props;
  return (
    <div className="max-w-4xl bg-secondary p-15 rounded-r-5xl rounded-tl-5xl rounded-bl-appButton">
      <div className="flex gap-5 items-center mb-5">
        {avatar}
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold">{name}</span>
          <span>{position}</span>
        </div>
      </div>
      {content}
    </div>
  );
}
