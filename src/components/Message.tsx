import { twMerge } from "tailwind-merge";

const Message = ({
  id,
  content,
  sender,
  time,
}: {
  id: number;
  content: string;
  sender: string;
  time: string;
}) => {
  const isMe = sender === "@daniel";
  return (
    <div className={twMerge(isMe ? "text-right" : "text-left")}>
      <p>{content}</p>
    </div>
  );
};

export default Message;
