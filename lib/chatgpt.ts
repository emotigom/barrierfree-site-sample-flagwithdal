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
          content: `다음 내용을 바탕으로 아래의 구조를 따른 진심 어린 편지를 한국어로 작성해주세요:
          - 시작 인사
          - 내용 요약
          - 세부 설명
          - 마무리 인사
          - 보낸 사람
          \n${prompt}`,
        },
      ],
    });

    return response.choices[0]?.message?.content || "Error generating letter.";
  } catch (error) {
    console.error("OpenAI API error:", error);
    return "Error connecting to the ChatGPT API.";
  }
};
