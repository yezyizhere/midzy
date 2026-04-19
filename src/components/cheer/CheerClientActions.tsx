"use client";

import { useRouter } from "next/navigation";

export default function CheerClientActions({ videoUrl }: { videoUrl: string }) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const copyUrl = () => {
    const url = window.location.href;
    
    // Modern Browser API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url)
        .then(() => alert("URL이 복사되었습니다 ' v '"))
        .catch(() => fallbackCopy(url));
    } else {
      fallbackCopy(url);
    }
  };

  const fallbackCopy = (text: string) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      
      // Ensure the textarea is not visible or obtrusive
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        alert("URL이 복사되었습니다 ' v '");
      } else {
        throw new Error('Fallback copy failed');
      }
    } catch (err) {
      alert('복사에 실패했습니다 \'^\'');
    }
  };

  return (
    <div className="flex justify-between items-center mt-6 px-6 max-w-xl mx-auto">
      {/* 뒤로가기 */}
      <button
        onClick={goBack}
        className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
        aria-label="뒤로가기"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
      </button>

      {/* 영상 이동 */}
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="영상 보러가기"
        className="p-2 rounded-full hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-pink-400 group"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>

      {/* 공유하기 */}
      <button
        onClick={copyUrl}
        className="p-2 rounded-full hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-pink-400 group"
        title="공유하기"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
      </button>
    </div>
  );
}
