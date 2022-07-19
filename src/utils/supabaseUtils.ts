import { supabase } from "./serviceSupabase";

export const signout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
  }
};
