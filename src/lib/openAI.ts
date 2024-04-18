import axios from "axios";

async function generateText(prompt: string): Promise<string> {
  const apiKey = "YOUR_OPENAI_API_KEY";
  const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

  try {
    const response = await axios.post(
      apiUrl,
      {
        prompt,
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error generating text:", error);
    throw error;
  }
}
