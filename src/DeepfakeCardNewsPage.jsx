import React, { useState } from "react";

export default function DeepfakeCardNewsPage() {
  const [open, setOpen] = useState(false);

  // 🔥 업로드한 이미지 사용
  const imageSrc = "/images/card1.jpg"; 
  // 실제 적용 시: public/images/ 폴더에 넣고 위처럼 경로 작성
  // 지금 테스트라면: "/mnt/data/0.png" 로도 OK

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-100 to-green-200 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* 배경 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-64 w-64 bg-green-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 bg-emerald-300/40 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-4xl">
        {/* 헤더 */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-white/80 shadow-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-700">
              실제 사례 기반 금융 사기 카드뉴스입니다.
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-2">
            🎥 AI 딥페이크 영상통화 사기 카드뉴스
          </h2>

          <p className="text-slate-600 text-sm md:text-base">
            영상통화 사기, 실제 사례를 카드뉴스로 확인하세요.
          </p>
        </div>

        {/* 카드뉴스 버튼 */}
        <div className="bg-white/85 backdrop-blur-xl shadow-xl rounded-3xl p-7 border border-white/70 flex gap-6 items-center">
          
          {/* 썸네일 */}
          <div className="w-1/3">
            <img
              src={imageSrc}
              alt="딥페이크 카드뉴스"
              className="w-full h-full object-cover rounded-2xl shadow"
            />
          </div>

          {/* 텍스트 */}
          <div className="w-2/3">
            <span className="inline-flex px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold mb-3">
              카드뉴스 1 · AI 딥페이크 사기
            </span>

            <h3 className="text-2xl font-bold text-red-700 mb-3">
              😨 "엄마, 나야! 급한데 돈 좀..." 영상통화 속 아들, 진짜일까요?
            </h3>

            <p className="text-slate-700 text-base md:text-lg mb-4">
              얼굴도 목소리도 똑같은데… 어딘가 이상하다면 딥페이크 사기일 수 있습니다.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow transition"
            >
              카드뉴스 보기 ▶
            </button>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center px-4">
          <div className="max-w-2xl w-full bg-white rounded-3xl p-6 md:p-8 shadow-2xl relative">
            {/* 닫기 */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 text-xl"
            >
              ×
            </button>

            {/* 이미지 */}
            <img
              src={imageSrc}
              alt="딥페이크 카드뉴스"
              className="w-full h-48 md:h-64 object-cover rounded-2xl mb-4"
            />

            {/* 제목 */}
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
              😨 "엄마, 나야! 급한데 돈 좀..." 영상통화 속 아들, 진짜일까요?
            </h3>

            {/* 내용 */}
            <div className="space-y-3 text-slate-800 text-sm md:text-base leading-relaxed mb-5">
              <p>
                분명 아들 얼굴이고, 아들 목소리인데... 어딘가 이상하다면 AI 딥페이크 피싱일 가능성이 매우 높습니다! 🚨
              </p>
              <p>
                최신 AI 기술을 악용해 가족의 얼굴·목소리를 실시간으로 조작하는 사기가 기승을 부리고 있습니다.
                어떻게 대처해야 할까요?
              </p>
            </div>

            {/* 팁 */}
            <p className="font-bold text-slate-900 mb-2">💡 딱 3가지만 기억하세요!</p>

            <ul className="space-y-2 text-slate-800 text-sm md:text-base">
              <li>✅ <b>1. 일단 끊기!</b> 돈 요구하면 즉시 통화 종료.</li>
              <li>✅ <b>2. 저장된 번호로 다시 걸기!</b> 영상통화 번호는 조작 가능.</li>
              <li>✅ <b>3. 가족 암호 질문하기!</b> “강아지 이름?”, “지난 추석 메뉴?”</li>
            </ul>

            <div className="text-right mt-6">
              <button
                onClick={() => setOpen(false)}
                className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-xl font-semibold"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}