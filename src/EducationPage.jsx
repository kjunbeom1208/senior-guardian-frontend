import React, { useState } from "react";

export default function CheckRequestPage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendRequest = async () => {
    try {
      const res = await fetch("https://senior-guardian-app.onrender.com/api/request-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setResponse(data.message);
    } catch (err) {
      setResponse("❌ 요청 실패: 서버 오류");
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">🔔 보호자 확인 요청</h2>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="의심되는 메시지를 입력하세요"
        className="w-96 h-40 p-3 border-2 border-gray-400 rounded-lg text-lg"
      />

      <button
        onClick={sendRequest}
        className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-bold hover:bg-blue-700 transition"
      >
        보호자에게 확인 요청 보내기
      </button>

      {response && <p className="mt-4 text-lg text-gray-700">{response}</p>}
    </div>
  );
}