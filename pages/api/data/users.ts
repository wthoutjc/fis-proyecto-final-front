import type { NextApiRequest, NextApiResponse } from "next";

//db

// Interfaces
import { IDocument } from "../../../interfaces";

enum Method {
  post = "POST",
  get = "GET",
  put = "PUT",
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: IDocument[] = [];

  return res.status(200).json(data);
};

export default handler;
