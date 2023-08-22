// Two main prompting principles
// 1: Write clear and specific instructions
// 2: Give the model time to “think”

import openAiInstance from "../../lib/openai";

async function chapterOneCompletions() {
  // Tactic 1: Use delimiters to clearly indicate distinct parts of the input¶
  /// Delimiters can be anything like: `, "", < >, <tag> </tag>, :

  const tacticOnePromptText = `
  You should express what you want a model to do by providing instructions that are as clear and specific as you can possibly make them. This will guide the model towards the desired output,
  and reduce the chances of receiving irrelevant or incorrect responses. Don't confuse writing a clear prompt with writing a short prompt. In many cases, longer prompts provide more clarity and context for the model, which can lead to more detailed and relevant outputs.
  `;

  const tacticOnePrompt = `
  Summarize the text delimited by triple === into a single sentence.
  === ${tacticOnePromptText} === 
  `;

  // Tactic 2: Ask for a structured output¶
  // JSON, HTML

  const tacticTwoPrompt = `
    Generate a list of three made-up book titles along \
    with their authors and genres.
    Provide them in JSON format with the following keys:
    book_id, title, author, genre.
  `;

  // Tactic 3: Ask the model to check whether conditions are satisfied
  const tacticThreePromptText = `
    Making a cup of tea is easy! First, you need to get some \ 
    water boiling. While that's happening, \ 
    grab a cup and put a tea bag in it. Once the water is \ 
    hot enough, just pour it over the tea bag. \ 
    Let it sit for a bit so the tea can steep. After a \ 
    few minutes, take out the tea bag. If you \ 
    like, you can add some sugar or milk to taste. \ 
    And that's it! You've got yourself a delicious \ 
    cup of tea to enjoy.
    `;

  const tacticThreePrompt = `
    You will be provided with text delimited by triple quotes. 
    If it contains a sequence of instructions, \ 
    re-write those instructions in the following format:

    Step 1 - ...
    Step 2 - …
    …
    Step N - …

    If the text does not contain a sequence of instructions, \ 
    then simply write \"No steps provided.\"

    \"\"\"${tacticThreePromptText}\"\"\"
    `;

  // Tactic 4: "Few-shot" prompting

  const tacticFourPrompt = `
    Your task is to answer in a consistent style.

    <child>: Teach me about patience.

    <grandparent>: The river that carves the deepest \ 
    valley flows from a modest spring; the \ 
    grandest symphony originates from a single note; \ 
    the most intricate tapestry begins with a solitary thread.

    <child>: Teach me about resilience.
  `;

  const tacticFourResponse = await openAiInstance.get_completion(
    tacticFourPrompt
  );

  console.log(tacticFourResponse);

  const tacticThreeResponse = await openAiInstance.get_completion(
    tacticThreePrompt
  );

  console.log(tacticThreeResponse);

  const tacticOneResponse = await openAiInstance.get_completion(
    tacticOnePrompt
  );
  console.log(tacticOneResponse);

  const tacticTwoResponse = await openAiInstance.get_completion(
    tacticTwoPrompt
  );
  console.log(tacticTwoResponse);

  return {
    tacticOneResponse,
    tacticTwoResponse: JSON.parse(tacticTwoResponse as string),
    tacticThreeResponse,
    tacticFourResponse,
  };
}

export default chapterOneCompletions;
