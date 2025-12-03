import React, { useState } from "react";

export default function GuardianPage() {
  const [message, setMessage] = useState(""); // 입력한 메시지
  const [result, setResult] = useState(""); // 검사 결과
  const [reportValue, setReportValue] = useState(""); // 신고 값
  const [reportType, setReportType] = useState("phone"); // 신고 타입
  const [reportStatus, setReportStatus] = useState(""); // 신고 상태
  const [reportCount, setReportCount] = useState(null); // 신고 횟수 ← 추가됨

  // ✅ 메시지 검사 (백엔드 로직 그대로 유지)
  const checkMessage = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/check-message`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );
      const data = await res.json();

      if (data.risk === "위험") {
        setResult("🚨 위험한 메시지입니다!");
      } else if (data.risk === "주의") {
        setResult("⚠️ 주의가 필요한 메시지입니다.");
      } else {
        setResult("✅ 안전한 메시지로 보입니다.");
      }
    } catch (err) {
      console.error(err);
      setResult("❌ 검사 오류 발생");
    }
  };

  // ✅ 신고하기 기능 (신고 횟수 count 포함)
  const submitReport = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: reportType, value: reportValue }),
      });

      const data = await res.json();

      setReportStatus(data.message);

      // ⭐ 백엔드가 count 값을 보내준다고 가정
      if (data.count !== undefined) {
        setReportCount(data.count);
      }
    } catch (err) {
      console.error(err);
      setReportStatus("❌ 신고 오류 발생");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-sky-100 to-indigo-100 px-4 py-10 flex items-center justify-center relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-64 w-64 bg-sky-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 bg-indigo-300/30 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-5xl">
        {/* 상단 타이틀 */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-white/80 shadow-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-700">
              실시간으로 위험 메시지를 분석하고 신고까지 도와드립니다.
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
            📡 실시간 사기 필터링
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            문자·메신저로 받은 내용을 붙여넣어 사기 위험도를 확인해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 메시지 검사 */}
          <div className="bg-white/85 backdrop-blur rounded-3xl shadow-xl p-6 md:p-7 border border-white/70">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              받은 메시지 검사
            </h3>

            <label className="block text-sm font-medium text-slate-600 mb-2">
              의심되는 문자, 카카오톡, 메신저 내용을 그대로 입력해주세요.
            </label>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-44 rounded-2xl border border-sky-200 bg-sky-50/60 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-4 text-base md:text-lg outline-none transition-all resize-none"
              placeholder="예: ○○은행 보안카드 전체 번호를 입력하지 않으면 계좌가 정지됩니다..."
            />

            <button
              onClick={checkMessage}
              className="mt-5 w-full bg-blue-600 text-white py-3.5 rounded-2xl text-base md:text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-[0.99] transition-all"
            >
              메시지 위험도 검사하기
            </button>

            {result && (
              <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-base md:text-lg font-medium text-slate-800">
                {result}
              </div>
            )}
          </div>

          {/* 신고하기 */}
          <div className="bg-white/85 backdrop-blur rounded-3xl shadow-xl p-6 md:p-7 border border-white/70">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🚨</span>
              사기 번호 / 계좌 신고하기
            </h3>

            <p className="text-sm text-slate-600 mb-4">
              이미 사기로 의심되는 전화번호나 계좌번호가 있다면 신고해 주세요.
              다른 이용자들의 안전에도 큰 도움이 됩니다.
            </p>

            <div className="flex flex-col gap-3 mb-4">
              <div className="flex gap-3 items-center">
                <label className="text-sm font-medium text-slate-700">
                  신고 유형
                </label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="border border-slate-300 bg-slate-50 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
                >
                  <option value="phone">전화번호</option>
                  <option value="account">계좌번호</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-slate-700 mb-1">
                  신고할 값
                </label>
                <input
                  type="text"
                  placeholder={
                    reportType === "phone"
                      ? "예: 010-1234-5678"
                      : "예: 123-456-789012"
                  }
                  value={reportValue}
                  onChange={(e) => setReportValue(e.target.value)}
                  className="border border-slate-300 bg-slate-50 rounded-xl px-4 py-2.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
                />
              </div>
            </div>

            <button
              onClick={submitReport}
              className="w-full bg-purple-600 text-white py-3 rounded-2xl text-base md:text-lg font-semibold shadow-md hover:bg-purple-700 hover:shadow-lg active:scale-[0.99] transition-all"
            >
              신고하기
            </button>

            {/* 신고 결과 + 신고 횟수 표시 */}
            {reportStatus && (
              <div className="mt-4 text-center">
                <p className="font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-2xl px-3 py-2">
                  {reportStatus}
                </p>

                {reportCount !== null && (
                  <p className="mt-2 text-sm font-medium text-slate-700 bg-white/70 rounded-xl px-3 py-2 shadow-sm">
                    📊 해당 {reportType === "phone" ? "전화번호" : "계좌번호"}는  
                    <span className="font-bold text-purple-700"> {reportCount}회 </span>
                    신고되었습니다.
                  </p>
                )}
              </div>
            )}

            <p className="mt-3 text-xs text-slate-500">
              * 신고된 정보는 사기 의심 데이터로 활용될 수 있으며, 실제 수사는
              경찰청 및 관계 기관의 권한입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}