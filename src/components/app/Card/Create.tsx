import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useApp } from "../../../context/AppContext";
import { createOrJoinConversation } from "../../../services/chat";
import { getAccessToken } from "../../../services/user";
import { supabase } from "../../../utils/serviceSupabase";

const Create = () => {
  const router = useRouter();
  const [create, setCreate] = useState<boolean>(true);
  const [room, setRoom] = useState("");
  const { infoUser, session } = useApp();

  useEffect(() => {
    setRoom("");
  }, [create]);

  const { handleActiveConversation } = useApp();

  const handleClick = (value: any) => {
    setCreate(value);
  };

  const handleEntrar = async () => {
    if (!infoUser) return;
    if (!session) return;

    const { accessToken } = await getAccessToken({
      token: session?.access_token,
    });

    const conversation = await createOrJoinConversation({ room, accessToken });

    if (!conversation) return;
    try {
      // supabase database table channels insert
      const { error } = await supabase.from("channels").insert({
        sid: infoUser.sid,
        room,
        isAdmin: true,
      });

      if (error) throw error;

      handleActiveConversation(conversation);
      router.push(`/app/chat/${room}`);
    } catch (error) {
      console.log(error);
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
      {!create && (
        <p className="text-white">
          Asegurate de checar el email, si no tienes invitacion no entras
        </p>
      )}
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
