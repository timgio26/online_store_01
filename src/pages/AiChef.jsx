import { useState } from 'react';
import { fetchAiResponse } from '../utils/ai';
import Markdown from 'react-markdown'

export function AiChef(){
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading,setLoading] =useState(false)

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const result = await fetchAiResponse(inputText);
    setOutputText(result);
    setLoading(false)
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Food Recipe Assistant</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border border-gray-300 rounded p-2 w-80"
          placeholder="Ask me about a recipe..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-96 text-center">
        <h3 className="text-xl font-semibold mb-2">Response:</h3>
        {loading ? (
          <p>Loading</p>
        ) : (
          <p className="text-gray-700">
            <Markdown>{outputText}</Markdown>
          </p>
        )}
      </div>
    </div>
  );
};



