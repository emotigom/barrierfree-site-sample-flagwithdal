import { NextRequest, NextResponse } from "next/server";
import { generateLetter } from "@/lib/chatgpt";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
  }

  const letter = await generateLetter(prompt);
  return NextResponse.json({ letter });
}
