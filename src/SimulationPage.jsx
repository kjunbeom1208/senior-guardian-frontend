import React from "react";

export default function SimulationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-100 to-green-200 px-6 py-12 relative overflow-hidden flex justify-center">
      
      {/* 배경 장식 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-64 w-64 bg-green-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-emerald-300/40 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-5xl">
        {/* 타이틀 */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center mb-10">
          🎥 가상 금융 사기 시뮬레이션
        </h2>

        {/* 시뮬레이션 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 1️⃣ 위험 메시지 판별 */}
          <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-7 border border-white/50">
            <h3 className="text-2xl font-bold text-red-700 mb-3">
              🚨 위험 메시지 판별 시뮬레이션
            </h3>
            <p className="text-lg text-slate-700 mb-5">
              실제 문자·카카오톡 메시지를 기반으로 위험 요소를 분석하는 과정입니다.
            </p>
            <a
              href="https://www.youtube.com/watch?v=xxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow hover:bg-red-700 transition"
            >
              시뮬레이션 보기
            </a>
          </div>

          {/* 2️⃣ 보호자 자동 알림 */}
          <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-7 border border-white/50">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              📩 보호자 알림 전송 시뮬레이션
            </h3>
            <p className="text-lg text-slate-700 mb-5">
              위험 탐지 후 보호자에게 자동 경고 문자가 전송되는 과정을 보여줍니다.
            </p>
            <a
              href="https://www.youtube.com/watch?v=yyyyyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              시뮬레이션 보기
            </a>
          </div>

          {/* 3️⃣ 신고 기능 */}
          <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-7 border border-white/50">
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              📞 신고 기능 시뮬레이션
            </h3>
            <p className="text-lg text-slate-700 mb-5">
              전화번호·계좌를 신고하고, 신고 횟수에 따라 데이터베이스에 자동 등록되는 과정입니다.
            </p>
            <a
              href="https://www.youtube.com/watch?v=zzzzzzz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow hover:bg-purple-700 transition"
            >
              시뮬레이션 보기
            </a>
          </div>

          {/* 4️⃣ AI 통화 사기 탐지 시뮬레이션 */}
          <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-7 border border-white/50">
            <h3 className="text-2xl font-bold text-orange-700 mb-3">
              📞 AI 통화 사기 탐지 시뮬레이션
            </h3>
            <p className="text-lg text-slate-700 mb-5">
              실제 음성 통화를 기반으로 사기 패턴을 식별하는 AI 탐지 과정을 보여줍니다.
            </p>
            <a
              href="https://www.youtube.com/watch?v=aaaaaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow hover:bg-orange-700 transition"
            >
              시뮬레이션 보기
            </a>
          </div>

          {/* 5️⃣ 금융거래 보호 시나리오 시뮬레이션 */}
          <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-7 border border-white/50">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              💸 금융거래 보호 시나리오
            </h3>
            <p className="text-lg text-slate-700 mb-5">
              고액 송금 시 보호자 승인 요청·제한 조치가 어떻게 작동하는지 확인할 수 있습니다.
            </p>
            <a
              href="https://www.youtube.com/watch?v=bbbbbbb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow hover:bg-green-700 transition"
            >
              시뮬레이션 보기
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}