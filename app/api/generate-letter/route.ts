import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json();

    if (!input) {
      return NextResponse.json({ error: "Input is required" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY; // 서버용 키만 접근
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key is missing" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Write a kind letter based on: ${input}`,
        max_tokens: 100,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API Error Data:", errorData);
      return NextResponse.json(
        { error: errorData.error || "Failed to fetch from OpenAI" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ text: data.choices[0].text.trim() });
  } catch (error) {
    console.error("Error in OpenAI request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
