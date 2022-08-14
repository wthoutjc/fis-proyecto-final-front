import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Method: Logout");

  const { method } = req;

  switch (method) {
    case "GET":
      const cookie = req.cookies["request_token"];
      if (cookie) {
        // remove cookie
        res.setHeader(
          "Set-Cookie",
          serialize("request_token", "", {
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
