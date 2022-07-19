import React from "react";
import Logout from "../../../utils/icons/Logout";
import { signout } from "../../../utils/supabaseUtils";

const LogoutBtn = () => {
  return (
    <button onClick={signout}>
      <Logout className="w-6 h-6 text-white ml-2" />
    </button>
  );
};

export default LogoutBtn;
