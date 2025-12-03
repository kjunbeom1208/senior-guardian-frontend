import React, { useState } from "react";

export default function CheckRequestPage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendRequest = async () => {
    try {
      const res = await fetch(
        "https://senior-guardian-app.onrender.com/api/request-check",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );
      const data = await res.json();
      setResponse(data.message);
    } catch (err) {
      setResponse("❌ 요청 실패: 서버 오류");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-200 flex items-center justify-center px-4 relative overflow-hidden">

      {/* 배경 장식 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-20 h-72 w-72 bg-yellow-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-amber-300/30 rounded-full blur-3xl" />
      </div>

      {/* 카드 UI */}
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-8 border border-white/60">
        
        {/* 제목 */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
            🔔 보호자 확인 요청
          </h2>
          <p className="text-gray-600 text-sm">
            의심되는 메시지를 입력하면 보호자에게 즉시 전달됩니다.
          </p>
        </div>

        {/* 입력 박스 */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="받은 의심되는 메세지를 입력하시오."
          className="w-full h-40 p-4 bg-white/70 border-2 border-yellow-300 focus:border-yellow-500 rounded-xl text-lg shadow-sm transition-all outline-none"
        />

        {/* 버튼 */}
        <button
          onClick={sendRequest}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
        >
          보호자와 함께 확인하기
        </button>

        {/* 응답 메시지 */}
        {response && (
          <p className="mt-5 text-center text-lg font-medium text-gray-800 bg-white/70 p-3 rounded-xl shadow-sm">
            {response}
          </p>
        )}
      </div>
    </div>
  );
}