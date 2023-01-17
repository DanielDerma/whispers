import { useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

const useAuth = () => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useAuth;
