import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const cookie = req.cookies["request_token"];
      if (cookie) {
        // remove cookie
        res.setHeader(
          "Set-Cookie",
          serialize("request_token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "none",
            maxAge: -1,
            path: "/",
          })
        );
        return res
          .status(200)
          .json({ message: "Token eliminado satisfactoriamente." });
      }
  }
};

export default handler;
