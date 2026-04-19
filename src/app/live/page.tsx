import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import { LIVE_SELECT_BUTTONS } from '@/constants/liveData';

export const metadata: Metadata = {
  title: "ITZY VLIVE",
  description: "있지 브이라이브 아카이브",
  openGraph: {
    title: "ITZY VLIVE",
    description: "있지 브이라이브 아카이브",
    images: ["/picture/vlive/vlivem.jpg"],
  },
};

export default function LivePage() {
  return (
    <main className="bg-neutral-900 min-h-screen text-zinc-200 pb-5">
      <Header />

      <div className="p-5 max-w-3xl mx-auto">
        {/* 상단 */}
        <div className="flex justify-center">
          <img src="/picture/vlive/vlivem.jpg" className="rounded-lg h-50 w-full max-w-sm object-cover shadow-lg border border-zinc-800" alt="Vlive" />
        </div>
        <h1 className="py-10 text-center text-3xl flex justify-center gap-4 items-center">
          <span className="font-cursive text-4xl">Re:Wind</span>
          <span className="text-sky-400 font-extrabold tracking-wide">VLIVE</span>
        </h1>

        {/* 하단 */}
        <section className="grid grid-cols-2 gap-4">
          {LIVE_SELECT_BUTTONS.map((btn) => {
            const isExternal = btn.url.startsWith('http');
            if (isExternal) {
              return (
                <a key={btn.name} href={btn.url} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 rounded-lg bg-zinc-800 hover:bg-sky-600 transition-all font-semibold font-sans tracking-widest uppercase">
                  {btn.name}
                </a>
              );
            }
            return (
              <Link key={btn.name} href={btn.url} className="block w-full text-center py-4 rounded-lg bg-zinc-800 hover:bg-sky-600 transition-all font-semibold font-sans tracking-widest uppercase">
                {btn.name}
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}
