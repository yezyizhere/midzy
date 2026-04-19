"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";

export default function PracticePage() {
  const [clickTime, setClickTime] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const baseTimeRef = useRef<{ date: number; perf: number } | null>(null);

  useEffect(() => {
    baseTimeRef.current = {
      date: Date.now(),
      perf: performance.now(),
    };
  }, []);

  const handleApply = () => {
    if (!baseTimeRef.current) return;

    const nowPerf = performance.now();
    const diff = nowPerf - baseTimeRef.current.perf;
    const preciseTime = baseTimeRef.current.date + diff;

    const date = new Date(preciseTime);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const msFractional = preciseTime % 1000;
    const fractionalStr = (msFractional / 1000).toFixed(3).split(".")[1];

    setClickTime(`${hours}:${minutes}:${seconds}.${fractionalStr}`);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="bg-[#151618] min-h-screen text-zinc-200 font-sans pb-24 relative">
      <Header />

      <div className="max-w-3xl mx-auto px-5 py-6">
        {/* Post Header */}
        <div className="mb-8">
          <div className="inline-block bg-pink-500 text-white text-xs px-3 py-1.5 rounded-[6px] mb-4 font-semibold tracking-wide">
            신청 가능
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
            [2099.05.26] 예지 100살 생일잔치
          </h1>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-zinc-800">
                <span className="font-extrabold text-white text-[10px] tracking-tighter">ITZY</span>
              </div>
              <div className="font-bold text-white flex items-center gap-1.5">
                ITZY
                <span className="bg-zinc-700 text-white text-[9px] px-1.5 py-0.5 rounded-[4px] font-bold tracking-wider">STAFF</span>
              </div>
            </div>
            <div className="text-zinc-500 font-medium">
              2099.05.26 02:12
            </div>
          </div>
        </div>

        <hr className="border-zinc-800/80 my-4" />

        {/* Post Content */}
        <div className="space-y-4 text-[15px] leading-relaxed mt-2">
          <div>
            <h3 className="font-bold text-white mb-1.5">일시</h3>
            <p className="text-zinc-300">2099.05.26 (화) 05:26</p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-1.5">장소</h3>
            <p className="text-zinc-300">JYP 고덕동 사옥</p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-1.5">신청 기간</h3>
            <p className="text-zinc-300 tracking-wide">26.01.01 (목) 02:12 - <span className="font-medium">99.05.26 (화) 05:25</span></p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-2">신청대상</h3>
            <ul className="text-zinc-300 space-y-1">
              <li>· MIDZY 1st ~ 77th 인증 회원</li>
              <li>· 만 15세 이상</li>
              <li>· 블랙리스트 1회 이하</li>
            </ul>
          </div>

          <div className="pt-6 space-y-5">
            <p className="font-bold text-white">2099년 5월 26일 화요일 예지 생일잔치 참여 안내 드립니다.</p>

            <p className="text-zinc-300">
              - 회사 사정에 따라 변경되는 사항이 많을 수 있습니다. 생일잔치 현장에 도착하시기 전까지 생일 공지 및 트위터(@for_midzy)를 수시로 확인해주세요.
            </p>

            <p className="text-zinc-300">
              * 동일한 ID 및 개인정보로 중복 신청 시 명단에서 제외되오니, 중복 신청이 되지 않도록 주의 부탁 드립니다.
            </p>

            <p className="text-zinc-300">
              * 해당 이벤트는 FANS ITZY 커뮤니티 내 MIDZY 모든 기수 인증을 한 회원만 신청 가능합니다.
            </p>

            <div className="space-y-1.5 pt-2">
              <p className="font-bold text-white">[ 일정 안내 ] * 현장 참여 및 현장 스티커 신청, 스티커 ONLY 배부 없습니다.</p>
              <p className="font-bold text-white">1. 생일잔치 사전진행</p>
            </div>

            <p className="text-zinc-300">
              ※ 인원 체크 및 스티커 배부 시작 시간: 04:30 ~ 05:00
            </p>

            <p className="font-bold text-white">2. 예지 리버 회고무대</p>

            <p className="text-zinc-300">
              ※ 무대 시작 시간: 06:30 ~ 07:00
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Button Container */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#151618]/95 backdrop-blur-md border-t border-zinc-800 flex justify-center z-40">
        <div className="w-full max-w-3xl">
          <button
            onClick={handleApply}
            className="w-full bg-white text-black font-bold py-4 rounded-xl text-[17px] hover:bg-gray-200 transition-colors shadow-lg active:scale-[0.99] active:bg-gray-300"
          >
            신청하기
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-5 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-[#1c1d21] border border-zinc-700/50 rounded-2xl p-7 max-w-[340px] w-full shadow-2xl transform transition-all animate-in zoom-in-95 duration-200">
            <h2 className="text-xl font-bold text-white text-center mb-5 tracking-tight">신청이 완료되었습니다</h2>

            <div className="bg-[#111214] rounded-xl p-5 mb-6 text-center border border-zinc-800/80">
              <p className="text-zinc-400 text-xs mb-2 font-medium tracking-wide">서버 신청 시간</p>
              <p className="text-[32px] font-mono text-blue-400 font-bold tracking-tighter">
                {clickTime}
              </p>
            </div>

            <button
              onClick={closePopup}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors text-[15px]"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
