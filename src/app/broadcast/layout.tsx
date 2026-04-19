import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MIDZY FANCLUB",
  description: "믿지의 컴백 자료 안내",
  openGraph: {
    title: "MIDZY FANCLUB",
    description: "믿지의 컴백 자료 안내",
    images: ["/picture/broad/fanclub.jpg"],
  },
};

export default function BroadcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
