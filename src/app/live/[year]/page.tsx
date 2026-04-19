import Link from 'next/link';
import Header from '@/components/Header';
import { LIVE_YEAR_BUTTONS, LIVE_YEAR_PICTURES } from '@/constants/liveData';

export default async function LiveYearPage(props: { params: Promise<{ year: string }> }) {
  const params = await props.params;
  const year = params.year;
  const buttons = LIVE_YEAR_BUTTONS[year] || [];

  const yearIndex = Number(year) - 2019;
  const yearImage = (yearIndex >= 0 && yearIndex < LIVE_YEAR_PICTURES.length)
    ? LIVE_YEAR_PICTURES[yearIndex]
    : LIVE_YEAR_PICTURES[0];

  return (
    <main className="bg-neutral-900 min-h-screen text-zinc-200 pb-5">
      <Header />

      <div className="p-5 max-w-3xl mx-auto">
        {/* 상단 */}
        <div className="flex justify-center">
          <img src={yearImage} className="rounded-lg h-50 w-full max-w-sm object-cover shadow-lg border border-zinc-800" alt={`${year} Archive`} />
        </div>
        <h1 className="py-8 text-center text-3xl flex justify-center gap-3 items-center">
          <span className="text-sky-400 font-extrabold tracking-widest">{year}</span>
          <span className="text-white font-medium">Archive</span>
        </h1>

        {/* 버튼 */}
        {buttons.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/live" className="block py-4 rounded-lg bg-zinc-800 hover:bg-sky-600 text-center transition-all font-semibold shadow-sm border border-zinc-700">
              년도 선택
            </Link>
            {buttons.map((btn) => {
              if (btn.url) {
                return (
                  <a key={btn.name} href={btn.url} target="_blank" rel="noopener noreferrer" className="block py-4 rounded-lg bg-zinc-800 hover:bg-sky-600 text-center transition-all font-semibold shadow-sm border border-zinc-700">
                    {btn.name}
                  </a>
                );
              } else {
                return (
                  <span key={btn.name} className="block py-4 rounded-lg bg-zinc-900 text-center opacity-40 cursor-not-allowed font-semibold border border-zinc-800">
                    {btn.name}
                  </span>
                );
              }
            })}
          </div>
        ) : (
          <div className="text-center py-20 text-zinc-400 text-lg">해당 연도의 자료가 없습니다.</div>
        )}
      </div>
    </main>
  );
}
