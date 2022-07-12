import type { NextPage } from "next";
import Portal from "../components/Portal";
import Account from "../components/Account";
import { useEffect, useState } from "react";
import { supabase } from "../utils/serviceSupabase";
import { Session } from "@supabase/supabase-js";

const Home: NextPage = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  console.log(session);

  return (
    <div className="">
      {!session ? (
        <Portal />
      ) : (
        <Account key={session?.user?.id} session={session} />
      )}
    </div>
  );
};

export default Home;
