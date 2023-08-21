import OpenAI from "openai";

class OpenAIService {
  apiKey = process.env.OPEN_AI_KEY;

  instance = new OpenAI({
    apiKey: this.apiKey,
  });

  async get_completion(prompt: string) {
    const messages = [{ role: "user", content: prompt }];
    const response = await this.instance.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0,
    });
  }
}
