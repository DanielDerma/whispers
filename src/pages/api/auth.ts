// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabaseServerClient = createServerSupabaseClient<Database>({
    req,
    res,
  });
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();
  res.status(200).json({ name: user?.email ?? "" });
}
