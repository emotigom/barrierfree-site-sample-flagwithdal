import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // 환경변수에서 API 키 읽기
});

export const generateLetter = async (prompt: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `Write a heartfelt letter based on the following input:\n${prompt} in Korean language`,
        },
      ],
    });

    return response.choices[0]?.message?.content || "Error generating letter.";
  } catch (error) {
    console.error("OpenAI API error:", error);
    return "Error connecting to the ChatGPT API.";
  }
};
