import OpenAI from 'openai';

const client = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey:import.meta.env.VITE_AI_KEY,
    dangerouslyAllowBrowser:true
  });



export const fetchAiResponse = async (inputText) => {
  try {
    console.log(inputText)
    const response =await client.chat.completions.create({
        messages:[{ role:"user", content: inputText }],
        model: "gpt-4o",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1
    })
    console.log(response)
    const outputText=response.choices[0].message.content
    return outputText;
  } catch (error) {
    console.error("Error generating text:", error);
    return "Sorry, I couldn’t generate a response. Please try again.";
  }
};
