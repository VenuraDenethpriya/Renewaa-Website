import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbwRnwf59J2rLJJOZ8OTI_PBO_ESUshUt5fhuwdR08XdKRDgyFY5TERghMp-Co6PLKaXtQ/exec";

    const response = await fetch(scriptUrl, {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: { "Content-Type": "application/json" },
    });

    const text = await response.text();
    if (text.includes("success")) {
      res.status(200).json({ result: "success" });
    } else {
      res.status(500).json({ result: "error", message: text });
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    res.status(500).json({ error: message });
  }
}
