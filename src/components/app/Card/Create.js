import { useState } from "react";
import { useApp } from "../../../context/AppContext";

const Create = ({ handleTypeOfRole }) => {
  const [create, setCreate] = useState(true);
  const { handleOpen } = useApp();

  const handleClick = (value) => {
    setCreate(value);
  };

  const handleEntrar = () => {
    handleOpen();
    handleTypeOfRole(create);
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
