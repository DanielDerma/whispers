import Link from "next/link";
import React from "react";
import Home from "../../utils/icons/Home";
import Leave from "../../utils/icons/Leave";

const Navbar = ({ children }) => {
  return (
    <>
      {children}
      <div className="h-16 w-full flex justify-around items-center bg-red-500 fixed bottom-0">
        <Link href="/app/play">
          <button>
            <Home />
          </button>
        </Link>
        <Link href="/app/chat">
          <button>
            <Leave />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
