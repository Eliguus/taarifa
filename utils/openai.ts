import axios from "axios";

const OPENAI_API_KEY = "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"; // Replace with your actual API key
const OPENAI_API_URL =
  "https://api.openai.com/v1/engines/gpt-3.5-turbo/completions"; // You may need to adjust the engine and endpoint based on your needs.

export async function generatePlan(word: string, timeFrame: string) {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        prompt: `Generate a plan based on the word "${word}" within a time frame of "${timeFrame}".`,
        max_tokens: 100, // Adjust the number of tokens as needed.
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    console.log(response);
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error generating plan:", error);
    throw error;
  }
}
