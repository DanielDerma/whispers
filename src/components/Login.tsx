import Link from "next/link";
import { supabase } from "../utils/serviceSupabase";
import React, { useState } from "react";
import ProfileImage from "./ProfileImage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("check the email");
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-twich-grad-0 via-twich-grad-50 to-twich-grad-100 flex flex-col items-center justify-center ">
      <ProfileImage onUpload={() => }/>

      <p className="text-white">What &apos;s your email</p>
      <p className="text-gray-200"></p>
      <input
        type="text"
        className="bg-gray-200 mt-12 p-6 rounded-full text-center m-12"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Link href="/app/play">
        <a
          onClick={handleLogin}
          className="p-6 bg-gray-100 font-bold rounded-full active:bg-gray-200"
        >
          Create Account
        </a>
      </Link>
    </div>
  );
};

export default Login;
