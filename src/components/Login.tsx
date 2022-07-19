import { supabase } from "../utils/serviceSupabase";
import React, { useState } from "react";
import Google from "../utils/icons/Google";

const Login = () => {
  const handleLogin = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: "google",
      });

      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-twich-grad-0 via-twich-grad-50 to-twich-grad-100 flex flex-col items-center justify-center px-4">
      <a
        onClick={handleLogin}
        className="p-6 bg-gray-100 font-bold rounded-full active:bg-gray-200 flex cursor-pointer "
      >
        <Google className="w-6 h-6 mr-4" />
        <p>Login</p>
      </a>
    </div>
  );
};

export default Login;
