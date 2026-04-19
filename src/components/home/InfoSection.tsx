import { YOUTUBE_LIST } from "@/constants/data";

interface InfoSectionProps {
  dDayStr: string;
}

export default function InfoSection({ dDayStr }: InfoSectionProps) {
  return (
    <section>
      <div className="flex flex-col gap-5 pt-5">
        {YOUTUBE_LIST.map((yt, idx) => (
          <a key={idx} href={yt.link} target="_blank" rel="noopener noreferrer">
            <img
              src={yt.image}
              alt={`Youtube Video ${idx + 1}`}
              className="mx-auto w-80 h-auto aspect-video object-cover rounded shadow-md hover:scale-105 transition duration-300"
            />
          </a>
        ))}
      </div>

      <div className="text-center pt-10">
        <h1 className="text-xl font-medium">All in Us! 안녕하세요, ITZY입니다!</h1>
        <h2 className="text-lg pt-5 text-gray-300">
          <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm font-bold uppercase tracking-wider">데뷔</span> {dDayStr || "새로고침 해주세요"}
        </h2>
      </div>

      <div className="text-center pt-5">
        <p className="text-lg pb-2">
          팬덤 {" "}
          <a href="https://midzy.kr" target="_blank" rel="noopener noreferrer" className="pl-1 text-pink-400 font-bold hover:underline">
            MIDZY(믿지)
          </a>
        </p>
        <p className="text-lg">
          응원봉 {" "}
          <a href="https://app.fans/shop/i/product/uven9lilmm?mp=KR" target="_blank" rel="noopener noreferrer" className="pl-7 font-bold hover:underline gradient-text">
            라이트링
          </a>
        </p>
        <div className="pt-15">
          <i className="pt-5 select-none text-zinc-500 text-sm">모든 이미지와 글씨에 링크가 있습니다</i>
        </div>
      </div>
    </section>
  );
}
