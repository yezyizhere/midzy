import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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

      <div className="p-5 max-w-3xl lg:max-w-6xl mx-auto">
        {/* 상단 */}
        <div className="flex justify-center">
          <Image src="/picture/vlive/vlivem.jpg" width={1200} height={600} priority className="rounded-lg w-full max-w-sm md:max-w-xl lg:max-w-3xl aspect-[2/1] object-cover shadow-lg border border-zinc-800" alt="Vlive" />
        </div>
        <h1 className="py-10 md:py-16 text-center text-3xl md:text-5xl lg:text-6xl flex justify-center gap-4 lg:gap-6 items-center">
          <span className="font-cursive text-4xl md:text-6xl lg:text-7xl">Re:Wind</span>
          <span className="text-sky-400 font-extrabold tracking-wide">VLIVE</span>
        </h1>

        {/* 하단 */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 lg:px-10">
          {LIVE_SELECT_BUTTONS.map((btn) => {
            const isExternal = btn.url.startsWith('http');
            if (isExternal) {
              return (
                <a key={btn.name} href={btn.url} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 md:py-6 lg:py-8 rounded-lg bg-zinc-800 hover:bg-sky-600 transition-all font-semibold md:text-xl lg:text-2xl font-sans tracking-widest uppercase shadow-md hover:shadow-lg">
                  {btn.name}
                </a>
              );
            }
            return (
              <Link key={btn.name} href={btn.url} className="block w-full text-center py-4 md:py-6 lg:py-8 rounded-lg bg-zinc-800 hover:bg-sky-600 transition-all font-semibold md:text-xl lg:text-2xl font-sans tracking-widest uppercase shadow-md hover:shadow-lg">
                {btn.name}
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}
