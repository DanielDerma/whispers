import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Message = ({
  name,
  lastMessage,
}: {
  name: string;
  lastMessage: string;
}) => {
  return (
    <div
      className={
        "relative mb-4 flex content-around items-center rounded-2xl border-2 border-gray-700 bg-white py-2 text-sm"
      }
    >
      <div
        className={
          "absolute -bottom-2 -left-[10px] -z-10 m-auto h-full w-[calc(100%_+_20px)] rounded-2xl border-2 border-black bg-[#ededee] px-4"
        }
      />
      <Image
        src="https://avatar.vercel.sh/whispers"
        width={30}
        height={30}
        alt="Avatar"
        className="ml-4 mr-2 rounded-full"
      />
      <div className="">
        <h4 className="font-semibold text-gray-700">{name}</h4>
        <p className="text-gray-500">{lastMessage}</p>
      </div>
    </div>
  );
};

export default Message;
