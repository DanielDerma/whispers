import { useApp } from "../../../context/AppContext";
import Create from "./Create";

const CardJoin = () => {
  const {} = useApp();

  return (
    <div className="w-full pt-2 flex flex-col items-center justify-center gap-2 rounded-xl bg-twich2-variant">
      <Create />
    </div>
  );
};

export default CardJoin;
