import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";
import { supabase } from "../../utils/serviceSupabase";

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_API_KEY = process.env.TWILIO_API_KEY;
const TWILIO_API_SECRET = process.env.TWILIO_API_SECRET;
const SERVICE_SID = process.env.SERVICE_SID;

const index = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const reqJwt = req.headers.jwt;

    if (reqJwt == null) {
      return res.status(401).json({ error: "401" });
    }

    const jwt = Array.isArray(reqJwt) ? reqJwt[0] : reqJwt;

    const user = await supabase.auth.api.getUser(jwt);

    const identity = user.data?.user_metadata?.full_name;

    if (identity == null) {
      return res.status(401).json({ error: "401" });
    }

    const { AccessToken } = twilio.jwt;
    const { ChatGrant } = AccessToken;

    if (
      TWILIO_ACCOUNT_SID &&
      TWILIO_API_KEY &&
      TWILIO_API_SECRET &&
      SERVICE_SID
    ) {
      const accessToken = new AccessToken(
        TWILIO_ACCOUNT_SID,
        TWILIO_API_KEY,
        TWILIO_API_SECRET,
        { identity }
      );

      const conversationsGrant = new ChatGrant({ serviceSid: SERVICE_SID });

      accessToken.addGrant(conversationsGrant);

      res.status(200).json({
        accessToken: accessToken.toJwt(),
      });
    } else {
      res.status(500).json({ error: "500" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "500" });
  }
};

export default index;
