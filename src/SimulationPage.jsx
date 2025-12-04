import React from "react";

export default function SimulationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-100 to-green-200 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-64 w-64 bg-green-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 bg-emerald-300/40 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-5xl">
        {/* 헤더 */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-white/80 shadow-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-700">
              실제 상황을 바탕으로 금융 사기 대응 연습을 할 수 있어요.
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-2">
            🎥 가상 금융 사기 시뮬레이션
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            시니어와 보호자가 함께 여러 상황을 미리 경험해 보며,
            <br className="hidden md:block" />
            실제 사기 상황에서 더 침착하게 대응할 수 있도록 돕습니다.
          </p>
        </div>

        {/* 시뮬레이션 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1️⃣ 위험 메시지 판별 시뮬레이션 */}
          <div className="bg-white/85 backdrop-blur-xl shadow-xl rounded-3xl p-7 border border-white/70">
            <h3 className="text-2xl font-bold text-red-700 mb-3">
              🚨 위험 메시지 판별 시뮬레이션
            </h3>
            <p className="text-base md:text-lg text-slate-700 mb-5">
              실제 문자나 카카오톡 메시지를 기반으로, 위험 키워드나 사기 문구를
              탐지하는 과정을 시각적으로 보여줍니다.
            </p>
            <a
              href="https://www.youtube.com/watch?v=xxxxxxx" // 🔗 유튜브 링크
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-2xl text-base md:text-lg font-semibold shadow hover:bg-red-700 transition"
            >
              시뮬레이션 보기
            </a>
          </div>

          {/* 2️⃣ 보호자 알림 전송 시뮬레이션 */}
          <div className="bg-white/85 backdrop-blur-xl shadow-xl rounded-3xl p-7 border border-white/70">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              📩 보호자 알림 전송 시뮬레이션
            </h3>
            <p className="text-base md:text-lg text-slate-700 mb-5">
              위험 메시지가 탐지되었을 때, 보호자에게 자동으로 경고 문자가
              발송되는 흐름을 단계별로 확인할 수 있습니다.
            </p>
            <a
              href="https://www.youtube.com/watch?v=yyyyyyy" // 🔗 유튜브 링크
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-2xl text-base md:text-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              시뮬레이션 보기
            </a>
          </div>

          {/* 3️⃣ 신고 기능 시뮬레이션 */}
          <div className="bg-white/85 backdrop-blur-xl shadow-xl rounded-3xl p-7 border border-white/70">
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              📞 신고 기능 시뮬레이션
            </h3>
            <p className="text-base md:text-lg text-slate-700 mb-5">
              사용자가 사기 전화번호나 계좌번호를 신고하고,
              <br className="hidden md:block" />
              신고 횟수에 따라 위험 데이터베이스에 자동 등록되는 과정을
              살펴봅니다.
            </p>
            <a
              href="https://www.youtube.com/watch?v=zzzzzzz" // 🔗 유튜브 링크
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-2xl text-base md:text-lg font-semibold shadow hover:bg-purple-700 transition"
            >
              시뮬레이션 보기
            </a>
          </div>

          {/* 4️⃣ AI 통화 사기 탐지 시뮬레이션 */}
          <div className="bg-white/85 backdrop-blur-xl shadow-xl rounded-3xl p-7 border border-white/70">
            <h3 className="text-2xl font-bold text-orange-700 mb-3">
              📞 AI 통화 사기 탐지 시뮬레이션
            </h3>
            <p className="text-base md:text-lg text-slate-700 mb-5">
              실제 통화 음성을 기반으로, 금융기관 사칭·협박 전화를
              <br className="hidden md:block" />
              AI가 어떻게 위험 통화로 분류하는지 확인해 볼 수 있습니다.
            </p>
            <a
              href="https://www.youtube.com/watch?v=aaaaaaa" // 🔗 유튜브 링크
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-2xl text-base md:text-lg font-semibold shadow hover:bg-orange-700 transition"
            >
              시뮬레이션 보기
            </a>
          </div>

          {/* 5️⃣ 금융거래 보호 시나리오 */}
          <div className="bg-white/85 backdrop-blur-xl shadow-xl rounded-3xl p-7 border border-white/70 md:col-span-2">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              💸 금융거래 보호 시나리오
            </h3>
            <p className="text-base md:text-lg text-slate-700 mb-5">
              고액 송금 시 보호자 승인 요청, 거래 일시 제한, 추가 본인 확인 등
              <br className="hidden md:block" />
              실제 금융 거래 보호 기능이 어떤 순서로 작동하는지 한 번에
              보여주는 시나리오입니다.
            </p>
            <a
              href="https://www.youtube.com/watch?v=bbbbbbb" // 🔗 유튜브 링크
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-2xl text-base md:text-lg font-semibold shadow hover:bg-green-700 transition"
            >
              시뮬레이션 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}