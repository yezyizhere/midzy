"use client";

import { useMemo, useState } from "react";
import { ALBUM_ITEMS } from "@/constants/data";

export default function FilmographySection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);
  const pageSize = 6;

  const sortedItems = useMemo(() => {
    return [...ALBUM_ITEMS].sort((a, b) =>
      sortAsc ? Number(a.label) - Number(b.label) : Number(b.label) - Number(a.label)
    );
  }, [sortAsc]);

  const totalPages = Math.ceil(sortedItems.length / pageSize);

  const pagedItems = useMemo(() => {
    return sortedItems.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  }, [sortedItems, currentPage]);

  const toggleSort = () => {
    setSortAsc(!sortAsc);
    setCurrentPage(1);
  };

  return (
    <section className="mx-5 pb-5">
      <button
        onClick={toggleSort}
        className="rounded w-full mb-5 flex items-center justify-center border border-pink-500 py-2 hover:bg-pink-500/10 transition-colors"
      >
        {sortAsc ? <span>▽</span> : <span>△</span>}
      </button>

      <nav className="grid grid-cols-2 md:grid-cols-3 w-full gap-5">
        {pagedItems.map((item, idx) => (
          <div key={idx} className="ring-1 ring-pink-500 rounded-lg p-3 flex flex-col items-center">
            <a href={item.albumLink} target="_blank" rel="noopener noreferrer">
              <img
                src={item.albumImage}
                alt={item.albumName}
                className="w-32 h-32 object-cover rounded-md mb-2 transition duration-300 hover:scale-105"
              />
            </a>
            <div className="font-bold text-gray-200 text-center text-sm">{item.albumName}</div>
            <div className="text-xs text-gray-400 mt-1">{item.albumDate}</div>
          </div>
        ))}
      </nav>

      {totalPages > 0 && (
        <nav className="flex items-center justify-center gap-10 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`px-2 py-1 ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : "hover:text-pink-400"}`}
          >
            〈
          </button>
          <span className="text-sm font-medium">{currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`px-2 py-1 ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "hover:text-pink-400"}`}
          >
            〉
          </button>
        </nav>
      )}
    </section>
  );
}
