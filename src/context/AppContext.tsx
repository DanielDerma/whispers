import React, { useContext, useEffect, useState } from "react";
import { supabase } from "../utils/serviceSupabase";
import { Session } from "@supabase/supabase-js";
import { getAccessToken } from "../services/user";

type Context = {
  session: Session | null;
  url: string;
  activeConversation: any;
  handleActiveConversation: any;
  handleUrl: any;
  updateProfile: any;
  showProfile: any;
  infoUser: any;
};

const AppContext = React.createContext<Context>(null as any);

export function useApp() {
  return useContext(AppContext);
}

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [activeConversation, setActiveConversation] = useState();
  const [loading, setLoading] = useState<boolean>(true);
  const [url, setUrl] = useState<string>("");
  const [session, setSession] = useState<Session | null>(null);
  const [infoUser, setInfoUser] = useState<any>(null);

  useEffect(() => {
    const authSession = supabase.auth.session();
    setSession(authSession);
    UseDBSessionOrcreate(authSession?.user?.id);
    setLoading(false);

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const UseDBSessionOrcreate = async (id: string | undefined) => {
    try {
      if (id === undefined) return;
      const { data: profiles, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id);

      if (error || profiles.length === 0) throw error;
      setInfoUser(profiles[0]);
    } catch (errorTry) {
      // supabase create profile
      if (!session) return;

      const { sid } = await getAccessToken({
        token: session?.access_token,
      });
      const { error, data } = await supabase.from("profiles").insert({
        id,
        sid,
        username: "",
        avatar_url: "https://joeschmoe.io/api/v1/josephine",
      });
      if (error) throw error;
      setInfoUser(data);
    }
  };

  const updateProfile = async (url: string) => {
    const { data: profile, error } = await supabase
      .from("profiles")
      .update({ avatar_url: url })
      .eq("id", session?.user?.id);
    if (error) throw error;
    setUrl(profile[0].avatar_url);
  };

  const showProfile = async () => {
    const { data } = await supabase
      .from("profiles")
      .select("avatar_url")
      .eq("id", session?.user?.id);

    if (data === null || data.length === 0) {
      throw new Error("Profile not found");
    }
    setUrl(data[0].avatar_url);
    return data[0].avatar_url;
  };

  const handleActiveConversation = (value: any) => {
    setActiveConversation(value);
  };

  const handleUrl = (value: string) => {
    setUrl(value);
  };

  const value = {
    session,
    activeConversation,
    handleActiveConversation,
    handleUrl,
    updateProfile,
    showProfile,
    url,
    infoUser,
  };

  return (
    <AppContext.Provider value={value}>
      {!loading && children}
    </AppContext.Provider>
  );
};

export default AppProvider;
