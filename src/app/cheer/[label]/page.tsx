import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { ALBUM_MAP, VIDEO_MAP, CHEER_ALBUMS } from '@/constants/cheerData';
import Header from '@/components/Header';
import CheerClientActions from '@/components/cheer/CheerClientActions';

// 모든 응원법 페이지를 정적으로 생성 (Instant Loading)
export async function generateStaticParams() {
  return CHEER_ALBUMS.map((album) => ({
    label: album.label,
  }));
}

export default async function CheerDetailPage(props: { params: Promise<{ label: string }> }) {
  const params = await props.params;
  const label = params.label;

  const songName = ALBUM_MAP[label] || 'Unknown';
  const videoUrl = VIDEO_MAP[label] || '#';

  let markdownContent = '';
  try {
    const filePath = path.join(process.cwd(), 'public', 'cheer', `cheer${label}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    markdownContent = await marked.parse(fileContents);
  } catch (error) {
    markdownContent = '<p class="text-center text-zinc-400 mt-10">응원법을 불러올 수 없습니다.</p>';
  }

  return (
    <main className="bg-neutral-900 min-h-screen text-zinc-200 pb-10">
      <Header />

      <div className="max-w-3xl mx-auto">
        {/* 곡명 표시 */}
        <div className="px-5 text-2xl text-center pt-10 flex gap-2 items-center justify-center font-bold tracking-wide">
          <span className="text-pink-500">{songName}</span>
          <span className="text-white">응원법</span>
        </div>
        <div className="flex gap-3 items-center justify-center mt-3 font-medium text-[15px]">
          <span className="text-red-500">ITZY와 함께</span>
          <span className="text-blue-500">MIDZY만</span>
        </div>

        {/* 버튼 모음 (클라이언트 컴포넌트) */}
        <CheerClientActions videoUrl={videoUrl} />

        {/* 응원법 부분 */}
        <section className="px-5 md:px-8 max-w-2xl mx-auto mt-6">
          <div 
            className="p-6 md:p-8 rounded-xl border border-zinc-700/50 bg-zinc-800/20 shadow-lg prose-cheer"
            dangerouslySetInnerHTML={{ __html: markdownContent }} 
          />
        </section>
      </div>
    </main>
  );
}
