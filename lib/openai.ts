import OpenAI from "openai";
import { CreateChatCompletionRequestMessage } from "openai/resources/chat";

class OpenAIService {
  apiKey = process.env.OPEN_AI_KEY;

  instance = new OpenAI({
    apiKey: this.apiKey,
  });

  async get_completion(prompt: string) {
    const messages: CreateChatCompletionRequestMessage[] = [
      { role: "user", content: prompt },
    ];
    const response = await this.instance.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0,
    });

    return response.choices[0].message["content"];
  }
}
