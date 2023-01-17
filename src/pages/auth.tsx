import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import Image from "next/image";
import logo from "public/whispers.png";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";


export default function Home() {
  return (
    <div className="mx-4 my-20">
      <header className="flex items-center justify-center">
        <Image src={logo} alt="logo" width={48} height={48} />
        <p>Whispers</p>
      </header>
      <Auth
        redirectTo="http://localhost:3000/"
        supabaseClient={supabaseClient}
        appearance={{ theme: ThemeSupa }}
        providers={["google"]}
        socialLayout="horizontal"
      />
    </div>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};
