import React, { useState } from "react";

export default function GuardianPage() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [reasonSummary, setReasonSummary] = useState("");
  const [reportValue, setReportValue] = useState("");
  const [reportType, setReportType] = useState("phone");
  const [reportReason, setReportReason] = useState(""); // ✅ 추가됨
  const [reportStatus, setReportStatus] = useState("");
  const [reportCount, setReportCount] = useState(null);
  const [topReason, setTopReason] = useState(null);
  // ✅ 메시지 검사 (백엔드 연동 그대로)
  const checkMessage = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/check-message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();

      setResult(
        data.risk === "위험"
          ? "🚨 위험한 메시지입니다!"
          : "✅ 안전한 메시지입니다."
      );
      setReasonSummary(data.reason || "");
    } catch {
      setResult("❌ 검사 오류 발생");
      setReasonSummary("");
    }
  };

  // ✅ 신고 (백엔드 연동 그대로)
  const submitReport = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: reportType,
          value: reportValue,
          reason: reportReason,
        }),
      });

      const data = await res.json();
      setReportStatus(data.message);
      setReportCount(data.count ?? null);
      setTopReason(data.topReason || null);
    } catch {
      setReportStatus("❌ 신고 오류 발생");
      setReportCount(null);
    }
  };

  const isHighRisk = reportCount !== null && reportCount >= 5;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-sky-100 to-indigo-100 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-64 w-64 bg-sky-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 bg-indigo-300/30 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-5xl">
        {/* 헤더 */}
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
            의심되는 문자·카카오톡 내용을 분석하고, 사기 번호/계좌를 함께 신고해 보세요.
          </p>
        </div>

        {/* 콘텐츠 카드들 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ▶ 메시지 검사 카드 */}
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
              placeholder="받은 의심되는 메세지를 입력하시오."
              className="w-full h-44 rounded-2xl border border-sky-200 bg-sky-50/60 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-4 text-base md:text-lg outline-none transition-all resize-none"
            />

            <button
              onClick={checkMessage}
              className="mt-5 w-full bg-blue-600 text-white py-3.5 rounded-2xl text-base md:text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-[0.99] transition-all"
            >
              메시지 위험도 검사하기
            </button>

            {result && (
              <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-base md:text-lg font-medium text-slate-800">
                <p>{result}</p>
              </div>
            )}

            <p className="mt-3 text-xs text-slate-500">
              * 검사 결과는 참고용이며, 실제 금융 거래 전에는 반드시 금융기관
              공식 채널로 재확인하세요.
            </p>
          </div>

          {/* ▶ 신고 카드 */}
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
              {/* 신고 유형 */}
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

              {/* 신고 대상 값 */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-slate-700 mb-1">
                  신고할 번호 또는 계좌
                </label>
                <input
                  type="text"
                  placeholder={
                    reportType === "phone"
                      ? "예: 01012345678"
                      : "예: 123456789012"
                  }
                  value={reportValue}
                  onChange={(e) => setReportValue(e.target.value)}
                  className="border border-slate-300 bg-slate-50 rounded-xl px-4 py-2.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
                />
              </div>

              {/* 신고 사유 */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-slate-700 mb-1">
                  신고 사유 (예: 대출 사기, 당첨금 요구, 지인 사칭 등)
                </label>
                <input
                  type="text"
                  placeholder="예: 대출 사기 문자, 사칭 등"
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  className="border border-slate-300 bg-slate-50 rounded-xl px-4 py-2.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
                />
              </div>
            </div>

            <button
              onClick={submitReport}
              className="w-full bg-red-600 text-white py-3 rounded-2xl text-base md:text-lg font-semibold shadow-md hover:bg-red-700 hover:shadow-lg active:scale-[0.99] transition-all"
            >
              신고하기
            </button>

             {reportStatus && (
  <div className="mt-4 text-center space-y-2">
    {/* ✅ 5회 미만일 때만 일반 메시지 표시 */}
    {!isHighRisk && (
      <p className="font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-2xl px-3 py-2">
        {reportStatus}
      </p>
    )}

    {reportCount !== null && (
      <p className="text-sm font-medium text-slate-700 bg-white/70 rounded-xl px-3 py-2 shadow-sm">
        📊 누적 신고{" "}
        <span className="font-bold text-purple-700">{reportCount}회</span>
      </p>
    )}

    {isHighRisk && (
      <p className="text-sm font-semibold text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
        🚨 5회 이상 신고되어 위험 데이터베이스에 등록되었습니다!
        {topReason && (
          <span className="block mt-1 text-slate-700">
            사유:{" "}
            <span className="font-bold text-purple-700">
              {topReason || "정보 없음"}
            </span>
          </span>
        )}
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