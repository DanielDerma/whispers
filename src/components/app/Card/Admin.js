import { useState } from "react";
import Dots from "../../../utils/icons/Dots";
import Eye from "../../../utils/icons/Eye";
import EyeOff from "../../../utils/icons/EyeOff";

const Admin = () => {
  const [eye, setEye] = useState(false);

  const password = "ab2s";
  return (
    <>
      <p className="text-xl text-white font-bold ">Grupo del tec</p>
      <div className="flex p-1 pl-2 border-2 border-white rounded-full">
        {eye ? (
          <>
            {password.split("").map((elem, i) => (
              <p
                key={i}
                className="grid place-content-center text-white text-xl uppercase w-6 h-6"
              >
                {elem}
              </p>
            ))}
          </>
        ) : (
          <>
            <Dots />
            <Dots />
            <Dots />
            <Dots />
          </>
        )}

        <button onClick={() => setEye(!eye)} className="ml-4">
          {eye ? <Eye /> : <EyeOff />}
        </button>
      </div>
      <button className="bg-red-400">Eliminar</button>
    </>
  );
};

export default Admin;
