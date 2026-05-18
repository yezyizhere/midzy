import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "있지 원클릭 스밍리스트",
  description: "믿지 스밍해! - Motto",
  openGraph: {
    title: "있지 원클릭 스밍리스트",
    description: "믿지 스밍해! - Motto",
    images: ["/picture/albums/album_18.jpg"],
  },
};

export default function StreamingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
