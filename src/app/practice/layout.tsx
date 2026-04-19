import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "예지 생일잔치 신청안내",
  description: "JYP FANS 공방 신청 연습 페이지입니다",
  openGraph: {
    title: "예지 생일잔치 신청안내",
    description: "JYP FANS 공방 신청 연습 페이지입니다",
    images: ["/picture/broad/fans.png"],
  },
};

export default function PracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
