import Image from "next/image";

const Message = () => {
  return (
    <div className="mb-4 flex items-center rounded-2xl border-2 border-gray-700 py-2 pl-4 text-sm">
      <Image
        src="https://avatar.vercel.sh/whispers"
        width={30}
        height={30}
        alt="Avatar"
        className="mr-2 rounded-full"
      />
      <div className="">
        <h4 className="font-semibold text-gray-700">Rose Carr</h4>
        <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Message;
