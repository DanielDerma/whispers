import AppComponent from "@/components/App";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  if (user) {
    router.push("/app");
    return null;
  }

  return <AppComponent />;
}
