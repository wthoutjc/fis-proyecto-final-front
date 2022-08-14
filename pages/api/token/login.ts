import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

// Auth
import { loginAuth } from "../../../auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("API Method: LOGIN");

  const { method } = req;

  switch (method) {
    case "POST":
      const { email, password } = req.body;

      const data = await loginAuth(email, password);

      const serialized = serialize("request_token", data.access_token, {
        httpOnly: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month
        path: "/",
      });

      res.setHeader("Set-Cookie", serialized);
      return res
        .status(200)
        .json({ message: "Token añadido satisfactoriamente." });
    default:
      return res.status(405).json({ error: "Método no permitido" });
  }
};

export default handler;
