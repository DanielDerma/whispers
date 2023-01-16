import Image from "next/image";
import Link from "next/link";

const Contact = ({
  name,
  lastMessage,
}: {
  name: string;
  lastMessage: string;
}) => {
  return (
    <Link href={`/message/${name}`}>
      <div
        className={
          "relative flex content-around items-center rounded-2xl border-2 border-gray-700 bg-white py-2 text-sm"
        }
      >
        <div
          className={
            "absolute -bottom-2 -left-[7px] -z-10 m-auto h-full w-[calc(100%_+_15px)] rounded-2xl border-2 border-black bg-[#ededee] px-4"
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
    </Link>
  );
};

export default Contact;
