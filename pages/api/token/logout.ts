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
            maxAge: -1,
            path: "/",
          })
        );
        res.writeHead(302, { Location: "/" });
        return res.end();
      }
  }
};

export default handler;
