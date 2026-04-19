"use client";

import { useState } from 'react';
import Header from '@/components/Header';

/*************************************************************************** 변동사항 **************************************************************************/
// 스밍 순서
const TapSets = [
  ['tap1', 'tap2', 'tap3', 'tap4', 'tap5', 'tap6'],
  ['tap1', 'tap2', 'tap3', 'tap4', 'tap5', 'tap7'],
  ['tap1', 'tap6', 'tap2', 'tap3', 'tap8'],
  ['tap1', 'tap4', 'tap5', 'tap6', 'tap9'],
];

// 스밍 순서 긴거
const TapSetting = ['tap1', 'tap2', 'tap3', 'tap4', 'tap5', 'tap6', 'tap1', 'tap2', 'tap3', 'tap4', 'tap5', 'tap7', 'tap1', 'tap6', 'tap2', 'tap3', 'tap8', 'tap1', 'tap4', 'tap5', 'tap6', 'tap9'];

// 멜론 링크
const melonMap: Record<string, string> = {
  tap1: '600467604',
  tap2: '600467603',
  tap3: '600467605',
  tap4: '600467606',
  tap5: '600467607',
  tap6: '600467608',
  tap7: '38100189',
  tap8: '39120868',
  tap9: '600234958',
};

// 지니 링크
const genieMap: Record<string, string> = {
  tap1: '112601905',
  tap2: '112601904',
  tap3: '112601906',
  tap4: '112601907',
  tap5: '112601908',
  tap6: '112601909',
  tap7: '108065467',
  tap8: '110421762',
  tap9: '112061007',
};

// 벅스 링크
const bugsMap: Record<string, string> = {
  tap1: '33737812',
  tap2: '33737811',
  tap3: '33737813',
  tap4: '33737814',
  tap5: '33737815',
  tap6: '33737816',
  tap7: '33324396',
  tap8: '33563976',
  tap9: '33700617',
};

// 바이브 링크
const vibeMap: Record<string, string> = {
  tap1: '98618678',
  tap2: '98618677',
  tap3: '98618679',
  tap4: '98618680',
  tap5: '98618681',
  tap6: '98618682',
  tap7: '87485723',
  tap8: '94581170',
  tap9: '97376255',
};

// 스포티파이
const spotifyUrl = '#';

/*************************************************************************** 고정사항 **************************************************************************/
// 멜론 PC
const melonPC = () => {
  const melonpcbase = 'melonapp://play?cType=1&menuId=1000002721&cList=';
  const urls = TapSets.map((taps) => melonpcbase + taps.map((tap) => melonMap[tap]).join(','));
  setTimeout(() => {
    window.open(urls[0], '_blank');
    setTimeout(() => {
      window.open(urls[1], '_blank');
      setTimeout(() => {
        window.open(urls[2], '_blank');
        setTimeout(() => {
          window.open(urls[3], '_blank');
        }, 500);
      }, 500);
    }, 500);
  }, 500);
};

// 멜론 안드로이드
const melonAndroidBase = 'melonapp://play?ctype=1&menuid=1000002721&cid=';
const melonAndroidUrls = TapSets.map((taps) => melonAndroidBase + taps.map((tap) => melonMap[tap]).join(','));
const melonAndroid = (idx: number) => {
  window.open(melonAndroidUrls[idx], '_blank');
};

// 멜론 아이폰
const melonIosBase = 'meloniphone://play/?ctype=1&menuid=0&cid=';
const melonIosUrl = melonIosBase + TapSetting.map((tap) => melonMap[tap]).join(',');

// 지니 PC
const geniePCBase = 'https://www.genie.co.kr/player/shareProcessV2?xgnm=';
const geniePCUrl = geniePCBase + TapSetting.map((tap) => genieMap[tap]).join(';');

// 지니 안드로이드
const genieAndroidBase = 'cromegenie://scan/?landing_type=31&landing_target=';
const genieAndroidUrl = genieAndroidBase + TapSetting.map((tap) => genieMap[tap]).join(';');

// 지니 아이폰
const genieIosBase = 'ktolleh00167://landing/?landing_type=31&landing_target=';
const genieIosUrl = genieIosBase + TapSetting.map((tap) => genieMap[tap]).join(';');

// 벅스 핸드폰
const bugsPhoneBase = 'bugs3://app/tracks/lists?title=%EC%A0%84%EC%B2%B4%EB%93%A3%EA%B8%B0&miniplay=Y&track_ids=';
const bugsPhoneUrl = bugsPhoneBase + TapSetting.map((tap) => bugsMap[tap]).join('|');

// 벅스 PC
const bugsPCBase = 'https://music.bugs.co.kr/newPlayer?trackId=';
const bugsPCUrl = bugsPCBase + TapSetting.map((tap) => bugsMap[tap]).join(',');

// 바이브 폰
const vibeBase = 'vibe://listen?version=3&trackIds=';
const vibeAPPUrl = TapSets.map((taps) => vibeBase + taps.map((tap) => vibeMap[tap]).join(','));
const vibeUrl = (idx: number) => {
  window.open(vibeAPPUrl[idx], '_blank');
};

// 기본페이지 스타일
const boxtype = [
  'hover:bg-green-500 border-green-500 text-zinc-300 hover:text-white rounded-lg bg-zinc-800 py-2 text-lg cursor-pointer transition border-2',
  'hover:bg-orange-500 border-orange-500 text-orange-500 hover:text-white rounded-lg bg-zinc-800 py-2 text-lg cursor-pointer transition border-2',
  'hover:bg-purple-400 border-purple-400 text-purple-400 hover:text-white rounded-lg bg-zinc-800 py-2 text-lg cursor-pointer transition border-2',
  'border-gray-400 text-gray-300 rounded-lg bg-zinc-800 py-3 transition border-2'
];

const boxStyles = [
  'flex items-center justify-center hover:bg-green-500 border-green-500 text-green-500 hover:text-white rounded-lg bg-zinc-800 py-10 text-lg cursor-pointer transition border-2',
  'flex items-center justify-center hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white rounded-lg bg-zinc-800 py-10 text-lg cursor-pointer transition border-2',
  'flex items-center justify-center hover:bg-orange-500 border-orange-500 text-orange-500 hover:text-white rounded-lg bg-zinc-800 py-10 text-lg cursor-pointer transition border-2',
  'flex items-center justify-center hover:bg-purple-400 border-purple-400 text-purple-400 hover:text-white rounded-lg bg-zinc-800 py-10 text-lg cursor-pointer transition border-2',
  'flex items-center justify-center hover:bg-emerald-500 border-emerald-500 text-emerald-400 hover:text-white rounded-lg bg-zinc-800 py-10 text-lg cursor-pointer transition border-2',
  'flex items-center justify-center hover:bg-gray-700 border-gray-400 text-gray-300 hover:text-white rounded-lg bg-zinc-800 py-10 text-lg cursor-pointer transition border-2'
];

export default function StreamingPage() {
  const [pageIndex, setPageIndex] = useState(0);

  const setActive = (idx: number) => {
    setPageIndex(idx);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <main className="bg-neutral-900 min-h-screen text-zinc-200 pb-10 flex flex-col">
      <Header />

      <section className="px-7 flex-1 h-full flex flex-col max-w-2xl mx-auto w-full">
        {/* 새로고침 / 상단글 */}
        <button onClick={handleRefresh} className="flex flex-col pb-5 pt-8 w-full items-center">
          <div className="text-2xl text-center font-bold tracking-wide">원클릭 스밍리스트</div>
          <div className="text-xl text-center text-pink-500 mt-2 font-semibold">Ice Cream</div>
          <div className="text-zinc-500 text-sm text-center mt-2">↑ 누르면 새로고침</div>
        </button>

        {/* 0. 기본 페이지 */}
        {pageIndex === 0 && (
          <nav className="grid grid-cols-2 mt-5 items-center text-center justify-center gap-5">
            <button onClick={() => setActive(1)} className={boxStyles[0]}>Melon</button>
            <button onClick={() => setActive(2)} className={boxStyles[1]}>Genie</button>
            <button onClick={() => setActive(3)} className={boxStyles[2]}>Bugs</button>
            <button onClick={() => setActive(4)} className={boxStyles[3]}>VIBE</button>
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className={boxStyles[4]}>Spotify</a>
            <button onClick={() => setActive(6)} className={boxStyles[5]}>사용방법</button>
          </nav>
        )}

        {/* 1. 멜론 */}
        {pageIndex === 1 && (
          <nav className="grid grid-cols-2 mt-5 items-center text-center justify-center gap-5">
            <div className="flex flex-col gap-4">
              <button onClick={() => setActive(0)} className={boxtype[0]}>〈 뒤로가기</button>
              <button onClick={() => setActive(11)} className={boxtype[0]}>PC 체크</button>
            </div>
            <button onClick={melonPC} className={boxStyles[0]}>PC</button>
            <button onClick={() => setActive(12)} className={boxStyles[0]}>Android</button>
            <a href={melonIosUrl} className={boxStyles[0]}>iOS</a>
          </nav>
        )}

        {/* PC 체크 팝업 */}
        {pageIndex === 11 && (
          <nav className="mt-5 gap-5 rounded-lg border border-green-500 bg-zinc-800/20">
            <div className="flex justify-between mx-5 mt-5">
              <div className="text-lg text-green-400 font-bold">PC 체크 방법</div>
              <button onClick={() => setActive(1)} className="text-2xl font-bold text-gray-500 hover:text-white transition">✕</button>
            </div>
            <div className="m-5 text-gray-300 leading-relaxed">
              아래 밑줄 친 글씨를 눌러<br />
              팝업 승인을 해주세요<br />
              <span className="text-pink-400 border-b border-pink-400">중복곡 방지를 위해<br />
                순차적으로 등록합니다.</span><br /><br />
              팝업차단이나 조작 시<br />
              정상적으로 되지 않습니다.
            </div>
            <a href="melonapp://play?cType=1&menuId=1000002721&cList=31606729" className="mx-5 underline text-green-500 hover:text-green-400 text-lg font-bold">테스트</a>
            <p className="pb-5 mx-5 mt-2 text-zinc-400 text-sm">↑ 항상 허용 체크!</p>
          </nav>
        )}

        {/* 멜론 안드로이드 */}
        {pageIndex === 12 && (
          <nav className="grid grid-cols-2 mt-5 items-center text-center justify-center gap-5">
            <button onClick={() => melonAndroid(0)} className={boxStyles[0]}>1번 묶음</button>
            <button onClick={() => melonAndroid(1)} className={boxStyles[0]}>2번 묶음</button>
            <button onClick={() => melonAndroid(2)} className={boxStyles[0]}>3번 묶음</button>
            <button onClick={() => melonAndroid(3)} className={boxStyles[0]}>4번 묶음</button>
            <button onClick={() => setActive(1)} className="col-span-2 py-3 mt-4 text-center rounded bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 transition">〈 뒤로가기</button>
          </nav>
        )}

        {/* 2. 지니 */}
        {pageIndex === 2 && (
          <nav className="grid grid-cols-2 mt-5 items-center text-center justify-center gap-5">
            <button onClick={() => setActive(0)} className="flex items-center justify-center hover:bg-zinc-700 border-zinc-500 text-zinc-300 hover:text-white rounded-lg bg-zinc-800 py-10 text-lg cursor-pointer transition border-2">〈 뒤로가기</button>
            <a href={geniePCUrl} className={boxStyles[1]}>PC</a>
            <a href={genieAndroidUrl} className={boxStyles[1]}>Android</a>
            <a href={genieIosUrl} className={boxStyles[1]}>iOS</a>
          </nav>
        )}

        {/* 3. 벅스 */}
        {pageIndex === 3 && (
          <>
            <nav className="grid grid-cols-2 mt-5 items-center text-center justify-center gap-5">
              <a href={bugsPCUrl} className={boxStyles[2]}>PC</a>
              <a href={bugsPhoneUrl} className={boxStyles[2]}>APP</a>
            </nav>
            <button onClick={() => setActive(0)} className={boxtype[1] + " text-center mt-5 w-full"}>〈 뒤로가기</button>
          </>
        )}

        {/* 4. 바이브 */}
        {pageIndex === 4 && (
          <>
            <nav className="grid grid-cols-2 mt-5 items-center text-center justify-center gap-5">
              <button onClick={() => vibeUrl(0)} className={boxStyles[3]}>1번 묶음</button>
              <button onClick={() => vibeUrl(1)} className={boxStyles[3]}>2번 묶음</button>
              <button onClick={() => vibeUrl(2)} className={boxStyles[3]}>3번 묶음</button>
              <button onClick={() => vibeUrl(3)} className={boxStyles[3]}>4번 묶음</button>
            </nav>
            <button onClick={() => setActive(0)} className={boxtype[2] + " text-center mt-5 w-full"}>〈 뒤로가기</button>
          </>
        )}

        {/* 5. 사용방법 */}
        {pageIndex === 6 && (
          <div className={boxtype[3] + " mt-5 p-5 bg-zinc-800 border border-zinc-600 rounded-lg"}>
            <div className="flex justify-between mt-3 mb-5">
              <div className="text-xl text-white font-bold">사용 설명서</div>
              <button onClick={() => setActive(0)} className="text-2xl font-bold text-gray-500 hover:text-white transition">✕</button>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                본인 환경에 맞는 시스템에<br />
                간편하게 스밍리스트를<br />
                등록하는 시스템입니다.
              </p>
              <p>
                원하는 음원 플랫폼과 기기를 선택해서<br />
                간편하게 저장하세요.
              </p>
              <hr className="border-zinc-700" />
              <p className="text-pink-400 font-medium">
                안드로이드 유저 주의사항:<br />
                1, 2, 3, 4번 묶음은 순서에 맞게<br />
                <span className="underline">순차적으로 눌러주셔야</span><br />
                정상적으로 등록이 됩니다.<br />
                <span className="text-sm">(버그로 인한 중복곡 방지 시스템 동작)</span>
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
