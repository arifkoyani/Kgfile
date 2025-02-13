"use client";

import { useState } from "react";

export default function TextSummarizer() {
  const [inputText, setInputText] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  // Mock function to simulate summarization
  const handleSummarize = () => {
    // Simulate summarization logic
    const mockSummary = inputText.slice(0, 100) + "..."; // Truncate text for demo
    setSummary(mockSummary);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-[#f3f4f6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full py-4 bg-[#f3f4f6] rounded-lg shadow-lg p-8 space-y-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Text Summarizer
        </h1>
        <p className="text-center text-gray-600">
          Paste your text below, and we'll summarize it for you.
        </p>

        {/* Input Text Area */}
        <textarea
          className="w-full h-48 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        {/* Summarize Button */}
        <button
          onClick={handleSummarize}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Summarize
        </button>

        {/* Display Summary */}
        {summary && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Summary</h2>
            <p className="mt-2 text-gray-600">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}