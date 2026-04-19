"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { CHEER_ALBUMS } from '@/constants/cheerData';

export default function CheerPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(false);
  const pageSize = 6;

  // 정렬된 아이템
  const sortedItems = useMemo(() => {
    return [...CHEER_ALBUMS].sort((a, b) =>
      sortAsc
        ? Number(a.label) - Number(b.label)
        : Number(b.label) - Number(a.label)
    );
  }, [sortAsc]);

  const totalPages = Math.ceil(sortedItems.length / pageSize);

  // 현재 페이지에 해당하는 아이템 분리
  const pagedItems = useMemo(() => {
    return sortedItems.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  }, [sortedItems, currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const toggleSort = () => {
    setSortAsc(!sortAsc);
    setCurrentPage(1);
  };

  return (
    <main className="bg-neutral-900 min-h-screen h-full text-zinc-200 pb-10">
      <Header />

      <div className="max-w-2xl mx-auto px-5">
        {/* 응원법 진입 문구 */}
        <div className="text-3xl text-center pt-10 pb-5 flex gap-3 items-center justify-center font-bold tracking-wider">
          <img src="/picture/logo.png" alt="ITZY Logo" className="w-10 h-auto" />
          <span className="text-pink-500">Cheer Guide</span>
        </div>

        <section className="mt-5">
          {/* 순서 변경 버튼 */}
          <button
            onClick={toggleSort}
            className="w-full mb-8 py-3 flex items-center justify-center rounded-md border border-pink-500 hover:bg-pink-500/10 transition-colors"
          >
            <div className="flex items-center gap-6 font-semibold">
              <span>{sortAsc ? "오래된 순 ↑" : "최신 순 ↓"}</span>
            </div>
          </button>

          {/* 앨범 그리드 */}
          <nav className="grid grid-cols-2 md:grid-cols-3 w-full gap-x-4 gap-y-6">
            {pagedItems.map((item, idx) => (
              <Link
                href={`/cheer/${item.label}`}
                key={idx}
                className="group ring-1 ring-pink-500/50 hover:ring-pink-500 rounded-lg p-4 flex flex-col items-center gap-3 transition-all duration-300 bg-zinc-800/30 hover:bg-zinc-800"
              >
                <div className="overflow-hidden rounded-md shadow-lg">
                  <img
                    src={item.albumImage}
                    alt={item.albumName}
                    className="w-24 h-24 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="font-bold text-gray-200 text-center text-sm w-full truncate">
                  {item.albumName}
                </div>
              </Link>
            ))}
          </nav>

          {/* 페이지네이션 */}
          <nav className="flex items-center justify-center gap-8 mt-12 mb-5">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 transition-colors ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-pink-400'}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>

            <span className="font-medium text-lg min-w-16 text-center">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 transition-colors ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:text-pink-400'}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </nav>
        </section>
      </div>
    </main>
  );
}
