// app/mindletter/ClientComponent.tsx
"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [input, setInput] = useState("");
  const [letter, setLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setLetter("");

    try {
      const response = await fetch("/api/generate-letter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setLetter(data.letter);
    } catch (error) {
      console.error(error);
      setLetter("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        마음 편지 만들기
      </h1>
      <textarea
        className="w-full max-w-md p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={5}
        placeholder="마음 편지에 넣고 싶은 내용을 입력하세요..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "생성 중..." : "편지 생성"}
      </button>
      {letter && (
        <div className="mt-6 w-full max-w-md p-4 bg-white border border-gray-300 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">생성된 마음 편지</h2>
          <p className="whitespace-pre-wrap">{letter}</p>
        </div>
      )}
    </div>
  );
}
