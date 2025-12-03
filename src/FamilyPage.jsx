import React, { useState } from "react";

export default function FamilyPage() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  // ✅ DB 저장
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/save-family`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      setStatus(data.message);
    } catch (err) {
      console.error(err);
      setStatus("❌ 저장 오류");
    }
  };

  // ✅ 문자 전송
  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/send-sms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: phone,
          message: "시니어 안심 톡에 등록되었습니다.",
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("✅ 문자 전송 성공!");
      } else {
        setStatus("❌ 전송 실패: " + data.message);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ 오류 발생");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-100 to-purple-200 px-4 py-12 flex justify-center items-center relative overflow-hidden">

      {/* 배경 장식 */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 left-10 h-64 w-64 bg-purple-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-pink-300/40 rounded-full blur-3xl" />
      </div>

      {/* 컨테이너 */}
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/50 rounded-3xl p-10">

        {/* 제목 */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-900 text-center mb-6">
          👨‍👩‍👦 가족 연동 서비스
        </h2>
        <p className="text-center text-slate-600 mb-8">
          가족 전화번호를 등록하면 위험 상황 발생 시 즉시 알림을 받을 수 있어요.
        </p>

        <form className="flex flex-col gap-6">
          <label className="text-lg font-semibold text-slate-700">
            가족 전화번호 입력
          </label>

          <input
            type="text"
            placeholder="예: 01012345678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-purple-300 rounded-2xl bg-purple-50/60 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 p-4 text-lg outline-none transition"
            required
          />

          {/* 버튼 그룹 */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <button
              onClick={handleSave}
              className="bg-yellow-500 shadow-md text-white text-lg font-bold py-4 rounded-2xl hover:bg-yellow-600 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              📌 저장하기
            </button>

            <button
              onClick={handleSend}
              className="bg-purple-600 shadow-md text-white text-lg font-bold py-4 rounded-2xl hover:bg-purple-700 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              📩 문자 보내기
            </button>
          </div>
        </form>

        {/* 상태 메시지 */}
        {status && (
          <p className="mt-6 text-center text-lg font-semibold bg-white/70 border border-slate-200 rounded-2xl py-3 shadow-sm text-slate-800">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}