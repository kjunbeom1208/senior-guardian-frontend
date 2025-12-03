import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-sky-50 via-blue-100 to-sky-200 flex items-center justify-center px-4 py-10">
      {/* 배경 장식 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-indigo-400/25 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />
      </div>

      <div className="w-full max-w-4xl">
        {/* 상단 헤더 */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur shadow-sm border border-white/80 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-700">
              실시간 금융 사기 예방 플랫폼
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            👵 시니어 금융 안전 지킴이
          </h1>
          <p className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto">
            시니어가 안심하고 금융 서비스를 이용할 수 있도록
            <br className="hidden md:block" /> 실시간 사기 감지부터 가족 연동까지
            한 번에 제공합니다.
          </p>
        </div>

        {/* 기능 카드 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/guardian"
            className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/80 hover:border-blue-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-sky-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-between px-7 py-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                  📡
                </div>
                <div className="text-left">
                  <div className="text-lg md:text-xl font-bold text-slate-900">
                    실시간 사기 필터링
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    통화·문자·앱 사용 중 위험 신호를 즉시 감지해 알려줘요.
                  </p>
                </div>
              </div>
              <span className="text-2xl text-blue-400 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>

          <Link
            to="/simulation"
            className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/80 hover:border-emerald-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-between px-7 py-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                  🎥
                </div>
                <div className="text-left">
                  <div className="text-lg md:text-xl font-bold text-slate-900">
                    가상 시뮬레이션
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    실제 사기 패턴을 기반으로 연습하며 대응력을 키워요.
                  </p>
                </div>
              </div>
              <span className="text-2xl text-emerald-400 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>

          <Link
            to="/education"
            className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/80 hover:border-amber-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-between px-7 py-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                  📘
                </div>
                <div className="text-left">
                  <div className="text-lg md:text-xl font-bold text-slate-900">
                    보호자 확인 요청
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    큰 금액 거래 전, 보호자에게 간편하게 확인을 요청해요.
                  </p>
                </div>
              </div>
              <span className="text-2xl text-amber-400 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>

          <Link
            to="/family"
            className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur shadow-lg border border-white/80 hover:border-purple-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-fuchsia-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-between px-7 py-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                  👨‍👩‍👦
                </div>
                <div className="text-left">
                  <div className="text-lg md:text-xl font-bold text-slate-900">
                    가족 연동
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    가족이 함께 모니터링하며 금융 생활을 지켜볼 수 있어요.
                  </p>
                </div>
              </div>
              <span className="text-2xl text-purple-400 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        </div>

        {/* 하단 작은 설명 */}
        <p className="mt-8 text-xs md:text-sm text-slate-500 text-center">
          * 실제 금융 거래는 각 금융 기관의 정책을 따르며, 본 서비스는 사기 예방을 돕기 위한 도구입니다.
        </p>
      </div>
    </div>
  );
}