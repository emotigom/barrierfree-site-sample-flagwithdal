import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { input } = req.body;

  if (!input) {
    res.status(400).json({ error: "Input is required" });
    return;
  }

  res.status(200).json({ text: `Generated letter for: ${input}` });
}
