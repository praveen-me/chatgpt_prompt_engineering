import OpenAI from "openai";
import { CreateChatCompletionRequestMessage } from "openai/resources/chat";

class OpenAIService {
  private apiKey = process.env.OPEN_AI_KEY;
  private instance = new OpenAI({
    apiKey: this.apiKey,
  });

  async get_completion(prompt: string) {
    try {
      const messages: CreateChatCompletionRequestMessage[] = [
        { role: "user", content: prompt },
      ];
      const response = await this.instance.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.1,
      });

      return response.choices[0].message["content"];
    } catch (e) {
      console.log(e);
    }
  }
}

const openAiInstance = new OpenAIService();

export default openAiInstance;
