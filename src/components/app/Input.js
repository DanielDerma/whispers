import Send from "../../utils/icons/Send";

const Input = () => {
  return (
    <div className="h-16 w-full flex justify-around items-center bg-white fixed bottom-0">
      <input
        type="text"
        className="w-4/5 bg-white py-1 rounded-full text-center border-2 border-gray-800"
      />
      <Send />
    </div>
  );
};

export default Input;
