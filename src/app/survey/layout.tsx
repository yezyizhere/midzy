import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "믿지의 최애찾기",
  description: "ITZY와 나의 성향 매칭 테스트! 과연 나의 소울 메이트 멤버는?",
  openGraph: {
    title: "믿지의 최애찾기",
    description: "ITZY와 나의 성향 매칭 테스트! 과연 나의 소울 메이트 멤버는?",
    images: ["/picture/search.jpg"],
  },
};

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
