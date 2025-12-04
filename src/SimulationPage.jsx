import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CARD_NEWS = [
  {
    id: 1,
    badge: "카드뉴스 1",
    shortTitle: "AI 딥페이크 영상통화 사기",
    color: {
      title: "text-red-700",
      button: "bg-red-600 hover:bg-red-700",
      badge: "bg-red-100 text-red-700",
    },
    preview:
      '“엄마, 나야… 급한데 돈 좀…” 영상통화 속 가족, 진짜일까요? AI 딥페이크 사기 사례를 알아봅니다.',
    image: "/images/card1.png", // 🔁 딥페이크 이미지 경로로 교체해서 사용
    modalTitle:
      '😨 "엄마, 나야! 급한데 돈 좀..." 영상통화 속 아들, 진짜일까요?',
    body: [
      "분명 아들 얼굴이고, 아들 목소리인데... 어딘가 이상하다면? 지금 바로 AI 딥페이크 피싱을 의심하셔야 합니다! 🚨",
      "최근 AI 기술을 악용하여 가족의 얼굴과 목소리를 똑같이 흉내 내는 신종 금융 사기가 기승을 부리고 있습니다. 눈으로 보고도 속을 수밖에 없는 딥페이크(Deepfake) 사기, 어떻게 대처해야 할까요?",
    ],
    tipsTitle: "💡 딱 3가지만 기억하세요!",
    tips: [
      "✅ 1. 일단 끊기! 상대방이 돈을 요구하거나 당황스럽게 한다면, 무조건 통화를 종료하세요.",
      "✅ 2. 저장된 번호로 다시 걸기! 침착하게 내 휴대폰에 저장된 가족의 번호로 직접 전화를 걸어 확인하세요.",
      '✅ 3. 우리만의 암호 확인! "우리집 강아지 이름은?", "지난 추석에 먹은 음식은?" 등 가족끼리만 알 수 있는 질문으로 진짜인지 확인하세요.',
    ],
  },
  {
    id: 2,
    badge: "카드뉴스 2",
    shortTitle: '“엄마, 나 폰 고장났어…” 문자 피싱',
    color: {
      title: "text-blue-700",
      button: "bg-blue-600 hover:bg-blue-700",
      badge: "bg-blue-100 text-blue-700",
    },
    preview:
      "자녀를 사칭해 급하게 결제·개인정보를 요구하는 메신저 피싱, 어떻게 막을까요?",
    image: null,
    modalTitle:
      '😨 "엄마, 나 폰 고장났어..." 혹시 이 문자 받으셨나요? 클릭 금지!',
    body: [
      '갑자기 날아온 자녀의 다급한 문자! "액정 깨져서 수리 맡겼어. 급한데 엄마 카드로 결제 좀..." 걱정부터 앞서고 당황스러우셨죠? 😥',
      "잠깐! ✋ 그 문자, 사랑하는 아들딸이 보낸 게 아닐 수도 있어요! 최근 가족을 사칭하여 급하게 돈이나 개인정보를 요구하는 메신저 피싱이 기승을 부리고 있습니다. 🚨",
      "소중한 내 정보와 돈을 지키기 위해, 딱 3가지만 기억하세요!",
    ],
    tipsTitle: null,
    tips: [
      "✅ 1. 절대 금지! 신분증, 카드 정보, 인증번호 요구는 무조건 무시하고 즉시 차단하세요.",
      '✅ 2. 필수 확인! 메시지만 믿지 말고 꼭 "직접 전화"해서 목소리를 확인하세요. 통화를 피하면 100% 사기입니다.',
      "✅ 3. 침착하게 대응! 당황하지 말고 자녀의 원래 번호로 직접 전화해서 확인하는 습관을 가지세요.",
    ],
  },
  {
    id: 3,
    badge: "카드뉴스 3",
    shortTitle: "검사·경찰 사칭 보이스피싱",
    color: {
      title: "text-indigo-700",
      button: "bg-indigo-600 hover:bg-indigo-700",
      badge: "bg-indigo-100 text-indigo-700",
    },
    preview:
      '“서울지검 검사입니다. 당신 통장이 대포통장으로…” 이 전화, 진짜일까요?',
    image: null,
    modalTitle:
      '👮‍♂️ "서울지검 검사입니다. 당신 통장이 대포통장으로..." 이 전화, 진짜일까요?',
    body: [
      '어느 날 갑자기 걸려온 전화 한 통. "당신이 범죄에 연루되었습니다. 당장 계좌를 이체해서 검증받으세요." 너무나 권위적인 목소리와 협박에 머릿속이 하얗게 변하셨나요? 😨',
      "잠깐! 절대 속지 마세요! 100% 보이스피싱입니다! 🚨",
      "검찰, 경찰, 금융감독원은 절대로 전화로 돈을 요구하거나 안전 계좌로 이체하라고 하지 않습니다.",
    ],
    tipsTitle: "✅ 딱 3가지만 기억하세요!",
    tips: [
      "1️⃣ '범죄 연루, 돈 보내라'는 말을 들으면 즉시 끊으세요.",
      "2️⃣ '앱 설치하라'는 요구는 절대 따르지 마세요.",
      "3️⃣ 불안하면 ☎112(경찰청) 또는 ☎1332(금융감독원)로 직접 전화해 확인하세요.",
    ],
  },
  {
    id: 4,
    badge: "카드뉴스 4",
    shortTitle: "정부지원·대출 빙자 스미싱",
    color: {
      title: "text-emerald-700",
      button: "bg-emerald-600 hover:bg-emerald-700",
      badge: "bg-emerald-100 text-emerald-700",
    },
    preview:
      '“정부 지원 특별 대출 대상자입니다” 문자, 정말 나를 위한 혜택일까요?',
    image: null,
    modalTitle:
      '💸 "정부 지원 특별 대출 대상자?" 이 문자, 절대 믿지 마세요!',
    body: [
      '치솟는 물가와 이자 때문에 힘든 요즘, "정부 지원", "저금리 대환", "마감 임박" 같은 문자를 받으셨나요?',
      "교묘하게 정부 기관을 사칭하는 '대출 빙자형 스미싱', 딱 3가지만 확인하면 내 돈을 지킬 수 있습니다. 🚨",
    ],
    tipsTitle: null,
    tips: [
      "❌ 1. 금융기관은 문자로 대출을 권유하지 않습니다. '김미영 팀장' 등의 이름은 사기일 가능성이 큽니다.",
      "❌ 2. 선입금, 보증금 요구, 대출 앱 설치 요구는 100% 사기입니다.",
      "✅ 3. 문자 속 링크는 절대 누르지 말고 삭제! 대출이 필요하다면 은행 창구를 직접 방문해 상담하세요.",
    ],
  },
  {
    id: 5,
    badge: "카드뉴스 5",
    shortTitle: "신분증·명의 대여(내구제 대출)",
    color: {
      title: "text-amber-700",
      button: "bg-amber-500 hover:bg-amber-600",
      badge: "bg-amber-100 text-amber-700",
    },
    preview:
      '“30만 원 드릴게요, 신분증만 빌려주세요” 단 한 번의 선택이 평생 빚이 될 수 있습니다.',
    image: null,
    modalTitle:
      '💸 "30만원 드릴게, 신분증만..." 이 말 믿었다간 패가망신합니다!',
    body: [
      "길거리에서, 혹은 문자로 솔깃한 제안을 받으셨나요? '휴대폰 개통 실적만 채우면 되니 신분증만 빌려달라', '보조금 30만 원을 현금으로 바로 주겠다'는 말들...",
      "잠깐! 절대 넘어가시면 안 됩니다! 🙅‍♂️🙅‍♀️ 그 순간, 당신의 신분증은 범죄자들의 '대포폰 공장' 재료가 됩니다.",
      "내 이름으로 개통된 휴대폰이 보이스피싱에 쓰이면, 범죄 연루와 요금 폭탄까지 떠안게 됩니다.",
    ],
    tipsTitle: "🛡️ 내 명의를 지키는 확실한 방법",
    tips: [
      "✅ 타인에게 신분증 양도·대여 절대 금지!",
      "✅ '엠세이퍼(M-Safer)'(www.msafer.or.kr)에 가입해 내 명의로 몰래 휴대폰이 개통되는 것을 차단하세요.",
    ],
  },
];

export default function SimulationPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const activeCard =
    activeIndex !== null ? CARD_NEWS[activeIndex] : null;

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
            시니어와 보호자가 함께 여러 상황을 카드뉴스로 보고,
            <br className="hidden md:block" />
            실제 사기 상황에서 더 침착하게 대응할 수 있도록 돕습니다.
          </p>
        </div>

        {/* 카드뉴스 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CARD_NEWS.map((card, idx) => (
            <div
              key={card.id}
              className="bg-white/85 backdrop-blur-xl shadow-xl rounded-3xl p-7 border border-white/70 flex flex-col"
            >
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${card.color.badge}`}
              >
                {card.badge}
              </div>
              <h3
                className={`text-2xl font-bold mb-3 ${card.color.title}`}
              >
                {card.shortTitle}
              </h3>
              <p className="text-base md:text-lg text-slate-700 mb-5 flex-1">
                {card.preview}
              </p>
              <button
                onClick={() => navigate("/cardnews/deepfake")}
                className={`inline-block text-white px-6 py-3 rounded-2xl text-base md:text-lg font-semibold shadow ${card.color.button} transition`}
              >
                카드뉴스 보기
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 카드뉴스 모달 */}
      {activeCard && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full relative p-6 md:p-8">
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-3 right-3 text-slate-500 hover:text-slate-700 text-xl"
            >
              ✕
            </button>

            {/* 이미지가 있으면 표시 */}
            {activeCard.image && (
              <div className="mb-4 overflow-hidden rounded-2xl">
                <img
                  src={activeCard.image}
                  alt={activeCard.shortTitle}
                  className="w-full h-52 md:h-64 object-cover"
                />
              </div>
            )}

            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
              {activeCard.modalTitle}
            </h3>

            {activeCard.body.map((p, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-slate-700 mb-3 leading-relaxed"
              >
                {p}
              </p>
            ))}

            {activeCard.tipsTitle && (
              <p className="mt-4 mb-2 text-sm md:text-base font-semibold text-emerald-700">
                {activeCard.tipsTitle}
              </p>
            )}

            {activeCard.tips && activeCard.tips.length > 0 && (
              <ul className="list-none space-y-1 text-sm md:text-base text-slate-800">
                {activeCard.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            )}

            <button
              onClick={() => setActiveIndex(null)}
              className="mt-6 w-full bg-slate-900 text-white py-3 rounded-2xl text-sm md:text-base font-semibold hover:bg-slate-800 transition"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}