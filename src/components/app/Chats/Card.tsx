import Link from "next/link";
import DotsVertical from "../../../utils/icons/DotsVertical";

const Card = () => {
  return (
    <div className="w-full h-16 bg-red-400 mb-4 flex justify-between items-center">
      <Link href="/app/chat/1234">
        <a
          onClick={() => console.log("b")}
          className="grow inline-block h-full cursor-pointer"
        >
          Lorem ipsum dolor
        </a>
      </Link>
      <div className="group relative inline-block  cursor-pointer mr-2">
        <DotsVertical />
        <div className="hidden absolute right-0 w-24 z-10 group-hover:block ">
          <p className="block">1 item</p>
          <p className="block">2 item</p>
          <p className="block">3 item</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
