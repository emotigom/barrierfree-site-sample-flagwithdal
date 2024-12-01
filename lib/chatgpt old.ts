import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateLetter = async (prompt: string): Promise<string> => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write a heartfelt letter based on the following input:\n${prompt}`,
      max_tokens: 150,
    });

    return response.data.choices[0]?.text?.trim() || "Error generating letter.";
  } catch (error) {
    console.error(error);
    return "Error connecting to the ChatGPT API.";
  }
};
