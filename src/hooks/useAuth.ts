import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";

const useAuth = ({ ref }: { ref: string }) => {
  const Router = useRouter();
  const { session } = useApp();

  useEffect(() => {
    if (session) {
      Router.push(`/app${ref}/`);
    } else {
      Router.push("/");
    }
  }, [session]); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useAuth;
