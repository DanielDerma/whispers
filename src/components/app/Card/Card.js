import { useState } from "react";
import { useApp } from "../../../context/AppContext";
import Admin from "./Admin";
import Create from "./Create";
import Member from "./Member";

const CardJoin = () => {
  const [role, setRole] = useState(null);
  const { open } = useApp();

  return (
    <div className="w-full pt-2 flex flex-col items-center justify-center gap-2 rounded-xl bg-twich2-variant">
      {open === null ? (
        <Create handleTypeOfRole={(r) => setRole(r)} />
      ) : role ? (
        <Admin />
      ) : (
        <Member />
      )}
    </div>
  );
};

export default CardJoin;
