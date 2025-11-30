import React from "react";

export default function SimulationPage() {
  return (
    <div className="min-h-screen bg-green-100 p-8">
      <h2 className="text-4xl font-extrabold text-green-900 text-center mb-8">
        🎥 가상 금융 사기 시뮬레이션
      </h2>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {/* 1️⃣ 위험 메시지 판별 시뮬레이션 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-red-700 mb-4">
            🚨 위험 메시지 판별 시뮬레이션
          </h3>
          <p className="text-xl mb-4">
            실제 문자나 카카오톡 메시지를 기반으로, 위험 키워드나 사기 문구를 탐지하는 과정을 시뮬레이션합니다.
          </p>
          <a
            href="https://www.youtube.com/watch?v=xxxxxxx" // 🔗 여기에 유튜브 링크
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-xl text-lg font-bold hover:bg-red-700 transition"
          >
            시뮬레이션 보기
          </a>
        </div>

        {/* 2️⃣ 보호자 알림 전송 시뮬레이션 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            📩 보호자 알림 전송 시뮬레이션
          </h3>
          <p className="text-xl mb-4">
            위험 메시지가 탐지되면 자동으로 보호자에게 경고 문자가 발송되는 과정을 보여줍니다.
          </p>
          <a
            href="https://www.youtube.com/watch?v=yyyyyyy" // 🔗 여기에 유튜브 링크
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-bold hover:bg-blue-700 transition"
          >
            시뮬레이션 보기
          </a>
        </div>

        {/* 3️⃣ 신고 기능 시뮬레이션 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">
            📞 신고 기능 시뮬레이션
          </h3>
          <p className="text-xl mb-4">
            사용자가 사기 전화번호나 계좌번호를 신고하고, 신고 횟수에 따라 자동 등록되는 과정을 확인할 수 있습니다.
          </p>
          <a
            href="https://www.youtube.com/watch?v=zzzzzzz" // 🔗 여기에 유튜브 링크
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-6 py-3 rounded-xl text-lg font-bold hover:bg-purple-700 transition"
          >
            시뮬레이션 보기
          </a>
        </div>
      </div>
    </div>
  );
}