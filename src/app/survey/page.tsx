"use client";

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import {
  SURVEY_QUESTIONS,
  MEMBER_NAMES,
  MEMBER_GRADIENTS,
  getMateName
} from '@/constants/surveyData';

export default function SurveyPage() {
  const [pageIndex, setPageIndex] = useState(0);

  // 15개의 질문. (미선택은 -1, X는 0, O는 1)
  const [answers, setAnswers] = useState<number[]>(
    new Array(SURVEY_QUESTIONS.length).fill(-1)
  );

  const handleAnswer = (qIdx: number, val: number) => {
    const newAnswers = [...answers];
    newAnswers[qIdx] = val;
    setAnswers(newAnswers);
  };

  // 점수 계산 (각 멤버별 점수, 맞췄을 때 +1점)
  const scores = useMemo(() => {
    const newScores = new Array(MEMBER_NAMES.length).fill(0);
    answers.forEach((val, qIdx) => {
      if (val === 1 && SURVEY_QUESTIONS[qIdx]) { // 'O'를 선택한 경우
        SURVEY_QUESTIONS[qIdx].targets.forEach(memberIdx => {
          newScores[memberIdx] += 1;
        });
      }
    });
    return newScores;
  }, [answers]);

  // 비율 계산 (%) - 한 멤버가 받을 수 있는 최대 점수는 4점
  const percents = useMemo(() => {
    return scores.map(score => Math.round((score / 4) * 100));
  }, [scores]);

  // 최고점 동점 계산 및 조합명 반환 로직
  const mateName = useMemo(() => {
    if (pageIndex !== 4) return '';
    const maxScore = Math.max(...scores);
    // 점수가 다 0점이면 처리
    if (maxScore === 0) return '없음';
    const topMembers = MEMBER_NAMES.filter((_, i) => scores[i] === maxScore);
    return getMateName(topMembers);
  }, [pageIndex, scores]);

  const handleRefresh = () => window.location.reload();

  const shareUrl = () => {
    const url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).catch(() => fallbackCopy(url));
    } else {
      fallbackCopy(url);
    }
  };

  const fallbackCopy = (text: string) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      document.execCommand('copy');
      document.body.removeChild(textArea);
    } catch (err) {
      // Fallback silent fail
    }
  };

  // 현재 페이지의 모든 질문이 답변되었는지 확인
  const isCurrentPageAnswered = useMemo(() => {
    if (pageIndex === 1) return !answers.slice(0, 5).includes(-1);
    if (pageIndex === 2) return !answers.slice(5, 10).includes(-1);
    if (pageIndex === 3) return !answers.slice(10, 15).includes(-1);
    return true;
  }, [pageIndex, answers]);

  const currentQuestions = useMemo(() => {
    if (pageIndex === 1) return SURVEY_QUESTIONS.slice(0, 5);
    if (pageIndex === 2) return SURVEY_QUESTIONS.slice(5, 10);
    if (pageIndex === 3) return SURVEY_QUESTIONS.slice(10, 15);
    return [];
  }, [pageIndex]);

  return (
    <main className="bg-neutral-900 min-h-screen text-zinc-200 pb-10">
      <Header />

      {/* 0. 시작 페이지 */}
      {pageIndex === 0 && (
        <section className="flex flex-col justify-center items-center min-h-[80vh] px-7">
          <div className="flex flex-col pb-5 items-center">
            <h1 className="text-3xl font-extrabold text-center md:text-5xl tracking-wide">
              나만의 <strong className='text-pink-500'>최애</strong> 찾기
            </h1>
            <p className="text-sm text-center text-blue-400 mt-4 md:text-xl font-medium">단순 재미로 참고하시길 바랍니다</p>
          </div>

          <div className="text-center mt-6">
            <p className="text-blue-400 text-lg md:text-2xl font-bold">〔 룰 설명 〕</p>
            <div className="flex flex-col gap-3 justify-center items-center mt-5 text-gray-300">
              <p>1. 본인의 최애를 떠올려보세요</p>
              <p>2. 얼마나 해당되는지 선택하세요</p>
              <p className="text-blue-400 font-medium">총 15문항으로 이루어져 있습니다</p>

              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={() => setPageIndex(1)}
                  className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg shadow-lg transition-transform hover:scale-105"
                >
                  시작하기
                </button>
                <button
                  onClick={shareUrl}
                  title="테스트 공유하기"
                  className="flex items-center justify-center p-3 aspect-square bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-600 rounded-lg shadow-lg transition-transform hover:scale-105"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 1~3. 질문 페이지 (5문제씩 분할) */}
      {(pageIndex >= 1 && pageIndex <= 3) && (
        <section className="flex flex-col justify-center items-center min-h-[80vh] px-5 md:px-7 mt-5">
          <div className="w-full max-w-xl space-y-4">
            <div className="text-center pt-6 text-pink-400 font-bold tracking-wide text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
              STEP {pageIndex} / 3
            </div>
            {currentQuestions.map((question, idx) => {
              const qIdx = (pageIndex - 1) * 5 + idx;
              return (
                <div key={qIdx} className="flex flex-col sm:flex-row items-center justify-between border-b border-zinc-700/50 py-4 gap-4 mb-2">
                  <span className="text-base font-semibold text-center sm:text-left break-keep shrink px-2 w-full sm:w-auto">
                    {qIdx + 1}. {question.text}
                  </span>
                  <div className="flex gap-4 shrink-0">
                    <button
                      onClick={() => handleAnswer(qIdx, 1)}
                      className={`px-5 py-2.5 rounded-xl font-black text-lg transition-all ${answers[qIdx] === 1
                        ? 'border-2 border-pink-500 bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)] scale-105'
                        : 'border-2 border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:border-pink-400 hover:text-pink-100'
                        }`}
                    >
                      O
                    </button>
                    <button
                      onClick={() => handleAnswer(qIdx, 0)}
                      className={`px-5 py-2.5 rounded-xl font-black text-lg transition-all ${answers[qIdx] === 0
                        ? 'border-2 border-blue-500 bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-105'
                        : 'border-2 border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:border-blue-400 hover:text-blue-100'
                        }`}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 mb-10 flex flex-col items-center justify-center w-full max-w-xl">
            <button
              onClick={() => setPageIndex(pageIndex + 1)}
              disabled={!isCurrentPageAnswered}
              className={`px-10 py-3 rounded-full font-bold text-lg transition-all ${isCurrentPageAnswered
                ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105'
                : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
                }`}
            >
              {pageIndex === 3 ? '결과보기' : '다음'}
            </button>
            {!isCurrentPageAnswered && (
              <p className="text-zinc-400 mt-4 text-sm animate-pulse">현재 페이지의 모든 문항을 선택해주세요</p>
            )}
          </div>
        </section>
      )}

      {/* 4. 결과 페이지 */}
      {pageIndex === 4 && (
        <section className="flex flex-col justify-center items-center min-h-[80vh] pt-10 px-4 ">
          <div className="w-full max-w-xl p-8 bg-zinc-800/40 border border-zinc-700 rounded-3xl shadow-2xl flex flex-col gap-10">
            {/* 메이트 명칭 */}
            <div className="flex flex-col items-center gap-3">
              <div className="text-lg md:text-xl font-bold text-zinc-300 tracking-wide flex items-center gap-2">
                <span className="inline-block animate-bounce text-2xl">🎉</span>
                <span>나의 소울 메이트는</span>
              </div>
              <div className="text-4xl md:text-5xl font-black mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 text-center break-keep">
                {mateName}
              </div>
            </div>

            {/* 게이지 바 */}
            <div className="flex flex-col gap-5">
              {MEMBER_NAMES.map((name, idx) => (
                <div key={name} className="flex items-center gap-4">
                  <span className="w-12 font-bold text-lg text-zinc-300 shrink-0 text-right">
                    {name}
                  </span>
                  <div className="flex-1 flex items-center bg-zinc-800/80 rounded-full h-7 overflow-hidden relative shadow-inner ring-1 ring-zinc-700">
                    <div
                      className={`h-full bg-gradient-to-r ${MEMBER_GRADIENTS[idx]} transition-all duration-1000 ease-out`}
                      style={{ width: `${percents[idx]}%` }}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-extrabold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      {percents[idx]}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 초기화 버튼 */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleRefresh}
                className="px-8 py-3 rounded-full border-2 border-zinc-500 text-zinc-300 font-bold hover:bg-zinc-700 hover:text-white transition-all transform hover:scale-105 active:scale-95"
              >
                현실부정
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
