import Link from "next/link";
import AddParticipant from "../../../utils/icons/AddParticipant";
import DotsVertical from "../../../utils/icons/DotsVertical";
import Trash from "../../../utils/icons/Trash";

const Card = () => {
  return (
    <div className="w-full h-16 bg-red-400 mb-4 flex justify-between items-center">
      <Link href="/app/chat/1234">
        <a className="grow inline-block h-full cursor-pointer">
          Lorem ipsum dolor
        </a>
      </Link>
      <button className="group relative inline-block mr-2">
        <DotsVertical className="w-6 h-6" />
        <div className="hidden absolute right-0 w-24 z-10 group-hover:block bg-white p-2 rounded-xl">
          <div className="flex items-center hover:bg-twich2-variant rounded-lg p-1 ">
            <AddParticipant className="w-6 h-6 " />
            <p>Invitar</p>
          </div>
          <div className="flex items-center hover:bg-twich2-variant rounded-lg p-1 ">
            <Trash className="w-6 h-6 " />
            <p className="block">Eliminar</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Card;
