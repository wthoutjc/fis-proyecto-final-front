import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("API Method: REGISTER");
  const { method } = req;

  switch (method) {
    case "POST":
      const { email, name, lastname, password } = req.body;
      const url = `${process.env.API_URL}/users`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastname, password, email }),
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.status !== 201) {
          return res
            .status(400)
            .json({ error: "Falló el registro del usuario" });
        }

        return res.status(201).json(JSON.stringify(data));
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error interno del servidor" });
      }
    default:
      return res.status(405).json({ error: "Método no permitido" });
  }
};

export default handler;
