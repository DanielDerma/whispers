import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_API_KEY = process.env.TWILIO_API_KEY;
const TWILIO_API_SECRET = process.env.TWILIO_API_SECRET;
const SERVICE_SID = process.env.SERVICE_SID;

console.log(TWILIO_ACCOUNT_SID, TWILIO_API_KEY, TWILIO_API_SECRET, SERVICE_SID);

const index = (req: NextApiRequest, res: NextApiResponse) => {
  const jwt = req.headers.jwt;

  if (jwt == null) {
    return res.status(401).json({ error: "401" });
  }

  const identity = jwt.startsWith("anonymous") ? jwt.split("_")[1] : null;

  if (identity == null) {
    return res.status(401).json({ error: "401" });
  }

  const { AccessToken } = twilio.jwt;
  const { ChatGrant } = AccessToken;

  const accessToken = new AccessToken(
    TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY,
    TWILIO_API_SECRET,
    { identity }
  );

  const conversationsGrant = new ChatGrant({ serviceSid: SERVICE_SID });

  accessToken.addGrant(conversationsGrant);

  res.status(200).json({ accessToken: accessToken.toJwt() });
};

export default index;
