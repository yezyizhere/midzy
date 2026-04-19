import "./globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 
     process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
     "http://localhost:3000")
  ),
  title: "MIDZY",
  description: "ITZY Fan Platform",
  openGraph: {
    title: "MIDZY",
    description: "ITZY Fan Platform",
    images: [
      {
        url: "/picture/thumbnail.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIDZY",
    description: "ITZY Fan Platform",
    images: ["/picture/thumbnail.jpg"],
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
