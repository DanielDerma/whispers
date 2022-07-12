import { useState } from "react";
import { useApp } from "../../../context/AppContext";
import { createOrJoinConversation } from "../../../services/chat";
import { getAccessToken } from "../../../services/user";

const Create = () => {
  const [create, setCreate] = useState<boolean>(true);
  const [room, setRoom] = useState("");

  const { handleOpen, user, handleActiveConversation } = useApp();

  const handleClick = (value: any) => {
    setCreate(value);
  };

  const handleEntrar = async () => {
    const accessToken = await getAccessToken({ token: user.token });
    const conversation = await createOrJoinConversation({ room, accessToken });

    if (conversation) {
      handleOpen();
      handleActiveConversation(conversation);
    }
  };

  return (
    <>
      <p className="text-xl text-white font-bold ">
        <button
          onClick={() => handleClick(true)}
          className={`${!create ? "text-gray-300" : ""}`}
        >
          Create
        </button>
        /
        <button
          onClick={() => handleClick(false)}
          className={`${create ? "text-gray-300" : ""}`}
        >
          Join
        </button>
      </p>
      <input
        type="text"
        placeholder={`${create ? "Nombre del canal" : "Codigo"}`}
        className="w-4/5 bg-white py-1 rounded-full text-center placeholder:text-gray-500"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button
        onClick={handleEntrar}
        className="w-4/5 bg-white py-1 rounded-full text-center"
      >
        Entrar
      </button>
    </>
  );
};

export default Create;
