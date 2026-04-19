import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "ITZY Cheer Guide",
  description: "믿지 응원해!",
  openGraph: {
    title: "ITZY Cheer Guide",
    description: "믿지 응원해!",
    images: ["/picture/album/daechoo.jpg"],
  },
};

export default function CheerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
