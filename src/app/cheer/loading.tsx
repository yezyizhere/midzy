"use client";

export default function CheerLoading() {
  return (
    <div className="bg-neutral-900 min-h-screen flex flex-col items-center justify-center p-5">
      {/* 믿지 컨셉에 맞춘 핑크색 로딩 바 */}
      <div className="w-48 h-1.5 bg-zinc-800 rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full bg-pink-500 animate-loading-bar rounded-full shadow-[0_0_10px_#ec4899]"></div>
      </div>
      
      <div className="mt-6 flex flex-col items-center gap-2">
        <p className="text-pink-500 font-bold text-lg animate-pulse tracking-widest">LOADING</p>
        <p className="text-zinc-500 text-xs font-medium">응원법을 가져오는 중...</p>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; left: 0; }
          50% { width: 70%; left: 15%; }
          100% { width: 0%; left: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
