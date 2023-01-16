const Message = ({
  id,
  content,
  sender,
  time,
}: {
  id: number;
  content: string;
  sender: string;
  time: Date;
}) => {
  const isMe = sender === "@daniel";

  const timeString = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  if (isMe) {
    return (
      <div className="my-7 flex justify-end">
        <div className="relative max-w-[75%] rounded-t-3xl rounded-bl-3xl border-2 border-black bg-[#49beb7] p-3  ">
          <p className="text-sm font-medium text-white">{content}</p>
          <p className="absolute -top-5 -left-1 text-xs font-medium">
            {timeString}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-7 flex">
      <div className="relative max-w-[75%] rounded-t-3xl rounded-br-3xl border-2 border-black  p-3  ">
        <p className="text-sm font-medium">{content}</p>
        <p className="absolute -top-5 right-1 text-xs font-medium">
          {timeString}
        </p>
      </div>
    </div>
  );
};

export default Message;
