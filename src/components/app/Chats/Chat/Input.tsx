import { useState } from "react";
import { useApp } from "../../../../context/AppContext";

const Input = () => {
  const [value, setValue] = useState("");
  const { activeConversation } = useApp();

  const handleSubmit = async () => {
    await activeConversation.sendMessage(value);
    setValue("");
  };

  return (
    <div className="h-16 bg-red-400 fixed bottom-0 w-full">
      <input
        type="text"
        className="border-2 border-red-400"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="border-2 border-red-500" onClick={handleSubmit}>
        add
      </button>
    </div>
  );
};

export default Input;
