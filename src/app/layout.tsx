import "./globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "MIDZY",
  description: "ITZY Fan Platform",
  openGraph: {
    title: "MIDZY",
    description: "ITZY Fan Platform",
    images: ["/picture/thumbnail.jpg"],
    type: "website",
  },
  icons: {
    icon: "/picture/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
