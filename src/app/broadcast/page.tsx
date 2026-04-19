"use client";

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { BOX_ITEMS, CD_LINKS } from '@/constants/broadcastData';

export default function BroadcastPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  // Toggle accordion items by index
  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  // Toggle preparation items check state
  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <main className="bg-neutral-900 min-h-screen text-zinc-200 pb-10">
      <Header />

      <div className="max-w-2xl mx-auto">
        <h1 className="pl-7 pt-10 text-2xl flex gap-2 font-bold tracking-wide">
          <span className="text-pink-500">공개방송</span>
          <span>참여 정보</span>
        </h1>

        {/* 전체 메뉴 */}
        <section className="space-y-4 px-7 py-8">
          {/* Section 1: 준비물 */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-md border border-zinc-700/50">
            <button
              className="w-full py-4 px-5 text-left font-semibold text-lg transition-colors focus:outline-none flex justify-between items-center"
              onClick={() => toggleAccordion(0)}
            >
              <span>공개방송 준비물</span>
              <span className={`text-zinc-500 transition-transform duration-300 ${openIndex === 0 ? 'rotate-180' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out bg-zinc-700/30 ${openIndex === 0 ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
              <div className="px-5 py-6 grid grid-cols-2 gap-4">
                {BOX_ITEMS.map((item, idx) => {
                  const isChecked = checkedItems.includes(idx);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleCheck(idx)}
                      className={`relative flex flex-col items-center cursor-pointer rounded-lg p-4 transition-all duration-300 border-2 ${isChecked
                        ? "bg-pink-500/10 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.1)]"
                        : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
                        }`}
                    >
                      <img src={item.img} alt={item.title} className="w-24 h-16 object-contain rounded-md mb-3 bg-zinc-900/50" />
                      <span className={`text-sm text-center font-medium ${isChecked ? "text-pink-400" : "text-zinc-300"}`}>
                        {item.title}
                      </span>
                      {isChecked && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-[10px] text-white animate-in zoom-in">
                          ✓
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2: 앨범 구매 링크 (CD) */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-md border border-zinc-700/50">
            <button
              className="w-full py-4 px-5 text-left font-semibold text-lg transition-colors focus:outline-none flex justify-between items-center"
              onClick={() => toggleAccordion(3)}
            >
              <span>💿 앨범 구매 링크</span>
              <span className={`text-zinc-500 transition-transform duration-300 ${openIndex === 3 ? 'rotate-180' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out bg-zinc-700/30 ${openIndex === 3 ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
              <div className="px-5 py-5 grid grid-cols-3 gap-3 items-center justify-center text-center">
                {CD_LINKS.map((selectcd) => (
                  <a
                    key={selectcd.cdname}
                    href={selectcd.cdurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 rounded-md bg-zinc-800 hover:bg-pink-500 hover:text-white transition-all ring-1 ring-zinc-500/50 shadow-sm text-sm font-medium break-keep"
                  >
                    {selectcd.cdname}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: 공개방송 참여 안내 */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-md border border-zinc-700/50">
            <button
              className="w-full py-4 px-5 text-left font-semibold text-lg transition-colors focus:outline-none flex justify-between items-center"
              onClick={() => toggleAccordion(1)}
            >
              <span>공개방송 참여 안내</span>
              <span className={`text-zinc-500 transition-transform duration-300 ${openIndex === 1 ? 'rotate-180' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out bg-zinc-700/30 ${openIndex === 1 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
              <div className="px-6 py-6 flex flex-col gap-4 font-medium text-[15px] leading-relaxed">
                <div>
                  1. <a href="https://www.jypfans.com/" target="_blank" rel="noopener noreferrer" className="text-pink-400 font-bold underline hover:text-pink-300">FANS</a> [이벤트] 참여 안내에서 신청<br />
                  <p className="text-sm text-pink-400 mt-1 flex items-center gap-1">
                    <span className="text-xs">✦</span> [공지] 오프라인 신청 가이드 참고
                  </p>
                </div>
                <p>2. 이후 결과 발표, 참여 여부 확인</p>
                <p>3. 공개방송 준비물 게시글 확인</p>
                <p>4. X <a href="https://x.com/for_midzy" target="_blank" rel="noopener noreferrer" className="text-pink-400 font-bold underline hover:text-pink-300">(ITZY SUPPORTERS)</a> 모임 공지 확인</p>
                <p>5. 사전 안내에 따라 현장 참여</p>
              </div>
            </div>
          </div>

          {/* Section 4: 공개방송 현장 안내 */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-md border border-zinc-700/50">
            <button
              className="w-full py-4 px-5 text-left font-semibold text-lg transition-colors focus:outline-none flex justify-between items-center"
              onClick={() => toggleAccordion(2)}
            >
              <span>공개방송 현장 안내</span>
              <span className={`text-zinc-500 transition-transform duration-300 ${openIndex === 2 ? 'rotate-180' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out bg-zinc-700/30 ${openIndex === 2 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
              <div className="px-6 py-6 flex flex-col gap-4 font-medium text-[15px] leading-relaxed">
                <p>1. 공개방송 준비물 게시글에 맞게 지참</p>
                <div>
                  2. 공방판 준비 <br />
                  <p className="text-sm text-pink-400 mt-1 flex items-center gap-1">
                    <span className="text-xs">✦</span> 팬매니저님께 받아가세요
                  </p>
                </div>
                <p>3. 참여 번호에 맞게 줄서서 대기</p>
                <p>4. 검사 후 재모임 시간 확인</p>
                <p>5. 재모임 시간에 줄서서 입장 대기</p>
              </div>
            </div>
          </div>

          {/* Section 5: 응원법으로 이동 */}
          <Link
            href="/cheer"
            className="group block w-full bg-pink-500 rounded-lg py-4 px-6 font-bold text-white text-lg hover:bg-pink-600 transition-all shadow-lg mt-6"
          >
            <div className="flex justify-between items-center gap-3">
              <span>응원법 보러가기</span>
              <svg
                className="transition-transform group-hover:translate-x-1"
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
