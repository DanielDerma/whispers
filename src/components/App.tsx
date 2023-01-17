import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { SupabaseClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Contact from "./Contact";
import Modal from "./Modal";

const App = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/auth')
    }
  }, [user]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogOut = () => {
    supabaseClient.auth.signOut();
  };

  console.log(user)
  return (
    <div className="relative h-full overflow-hidden pt-6">
      <div className="">
        <h1 className="mx-9 mb-4">Chatting Room</h1>
        <button onClick={handleLogOut}>logout</button>
      </div>
      <section className="flex h-full flex-col gap-y-6 overflow-y-auto px-10 pb-28">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15].map((_, i) => (
          <Contact key={i} lastMessage="Hello, how are you?" name="Cesar" />
        ))}
      </section>
      <Modal />
    </div>
  );
};

export default App;
