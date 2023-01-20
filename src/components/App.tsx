import { Database } from "@/types/supabase";
import LogOut from '@/utils/icons/LogOut'
import { useSessionContext, useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Contact from "./Contact";
import Modal from "./Modal";
import logo from "public/whispers.png";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";


type ContactType = {
  avatar_url: string | null;
  id: string;
  username: string | null;
}

const App = () => {
  const { isLoading, session, error } = useSessionContext();
  const user = useUser();
  const supabaseClient = useSupabaseClient<Database>();

  const [contacs, setContacs] = useState<ContactType[] | null>()

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from('profiles').select('*');
      setContacs(data);
    }

    if (user) loadData();
  }, [user, supabaseClient]);

  const handleLogOut = async () => {
    await supabaseClient.auth.signOut();
  };

  if (!session) {
    return <>
      {error && <p>{error.message}</p>}
      <div className="mx-4 my-20">
        <header className="flex items-center justify-center">
          <Image src={logo} alt="logo" width={48} height={48} />
          <p>Whispers</p>
        </header>
        <Auth
          redirectTo="https://whispers-three.vercel.app"
          supabaseClient={supabaseClient}
          appearance={{ theme: ThemeSupa }}
          providers={["google"]}
          socialLayout="horizontal"
        />
      </div>
    </>
  }

  return (
    <div className="relative h-full overflow-hidden pt-6">
      <div className="mx-10 mb-4 flex justify-between">
        <h1 className="">Chatting Room</h1>
        <button onClick={handleLogOut}><LogOut /></button>
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
