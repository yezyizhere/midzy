export interface SurveyQuestion {
  text: string;
  targets: number[];
}

// 10개의 혼합된 질문 리스트 (맞출 경우 targets에 해당하는 멤버들에게 점수 부여)
export const SURVEY_QUESTIONS: SurveyQuestion[] = [
  { text: '나는 [TUNNEL VISION]을 좋아한다', targets: [2, 4] },
  { text: '나는 [Nockturne]을 좋아한다', targets: [1, 4] },
  { text: '나는 [Supernatural]을 좋아한다', targets: [0, 2, 3] },
  { text: '나는 [요리 하는 것]을 좋아한다', targets: [0, 1] },
  { text: '나는 [집에서 쉬는 것]을 더 좋아한다', targets: [3] },
  { text: '나는 승부욕이 없는 편이다', targets: [1] },
  { text: '나는 [여유보단 내 삶이 팽팽한 외줄타기인 것]을 선호한다', targets: [0] },
  { text: '나는 음악으로 위로를 받는 편이다', targets: [1] },
  { text: '나는 [딸기 요거트 아이스크림]을 좋아한다', targets: [3] },
  { text: '나는 배고프면 서럽다고 느낀다', targets: [4] },
  { text: '상대방과 거리감 느껴지는게 싫다', targets: [0] },
  { text: '잘 하고 싶은 마인드보단 잘 하는 것이 더 중요하다', targets: [2] },
  { text: '부정적인 사람도 들여다볼 줄 알아야 한다는 말에 동의한다', targets: [4] },
  { text: '나를 있는 그대로 좋아해주는게 더 좋다', targets: [3] },
  { text: '타인에게 관심이 많은편이 아니다', targets: [2] },
];

// 멤버 기본 정보 (질문 인덱스와 매칭됨)
export const MEMBER_NAMES = ['예지', '리아', '류진', '채령', '유나'];

// 맴버별 결과 게이지바 그라데이션 스타일
export const MEMBER_GRADIENTS = [
  'from-zinc-700 to-zinc-900',  // 예지
  'from-sky-400 to-sky-600',    // 리아
  'from-red-400 to-red-600',    // 류진
  'from-gray-100 to-gray-400',  // 채령
  'from-pink-400 to-pink-600'   // 유나
];

// 2인 조합 명칭 매핑
export const PAIR_NAMES: Record<string, string> = {
  '예지,리아': '예지수',
  '예지,류진': '땡덩',
  '예지,채령': '령지곤지',
  '예지,유나': '맏막',
  '리아,류진': '진리아',
  '리아,채령': '채리즈',
  '리아,유나': '궁합즈',
  '류진,채령': '01즈',
  '류진,유나': '신자매',
  '채령,유나': '유채꽃',
};

// 3인 조합 명칭 매핑
export const TRIPLE_NAMES: Record<string, string> = {
  '예지,리아,류진': '예지수류',
  '예지,류진,채령': '캣즈',
  '예지,류진,유나': '륮덩신나',
  '리아,류진,채령': '미들즈',
  '류진,채령,유나': '한림퀸카즈',
};

// 최고 점수를 받은 멤버(들)을 조합 명칭으로 변환하는 함수
export function getMateName(topMembers: string[]): string {
  const count = topMembers.length;
  // 단독 1등
  if (count === 1) return topMembers[0];
  // 2명 동점
  if (count === 2) {
    const key = topMembers.join(','); // 이미 원래 순서(예지,리아...)대로 들어옴
    return PAIR_NAMES[key] || topMembers.join(', ');
  }
  // 3명 동점
  if (count === 3) {
    const key = topMembers.join(',');
    return TRIPLE_NAMES[key] || topMembers.join(', ');
  }
  // 4~5명 동점
  if (count >= 4) return 'ITZY';

  return '';
}
