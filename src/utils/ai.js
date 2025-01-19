import OpenAI from 'openai';

const client = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey:import.meta.env.VITE_AI_KEY,
    dangerouslyAllowBrowser:true
  });


export const messages = [
  {
    role: "system",
    content: `Conversational AI that generates recipes.
    please expect user input is containing ingredient and consider if user dietary preference 
    otherwise make validUserInput falsy your response must be in JSON format with 
    this type {content : string , validUserInput : boolean`,
  },
  { role: "assistant", content: "Please list all the ingredients you have." },
];



export async function fetchAiResponse({inputText,step}){
  
  try {
    messages.push({ role: "user", content: inputText })
     

    const response =await client.chat.completions.create({
        messages:messages,
        model: "gpt-4o",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1
    })
    
    const respContentRaw=response.choices[0].message.content
    const {content:respContent,validUserInput}=JSON.parse(respContentRaw)

    if (validUserInput) {
        messages.push({
        role: "assistant",
        content: step===1&&"Do you have any dietary restrictions?",
      });
    } else {
      messages.pop();
    }
    
    return {respContent};


  } catch (error) {
    // console.error("Error generating text:", error);
    return {respContent:"Sorry, I couldn’t generate a response. Please try again."};
  }
};
