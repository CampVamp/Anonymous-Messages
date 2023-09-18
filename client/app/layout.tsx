import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Msg Ajay 😎",
  description: "Msg me anonymously",
  openGraph: {
    title: "Message Ajay 😎",
    description: "Anonymously message mee",
    url: "https://anonymous.ajrm.xyz/",
    siteName: "Msg Ajay 😎",
    images: [
      {
        url: "https://i.seadn.io/gae/hsWaOw_SOTvLES83mRykzKjaSn2Duzna0HVkXyLbkhekTprkpjeYXhq2bCUc4vy_fKzBEEFbgwSK9z-GAFT2riLM-3t4DI96dYejfQ?auto=format&dpr=1&w=1000",
        width: 800,
        height: 600,
      },
      {
        url: "https://i.seadn.io/gae/hsWaOw_SOTvLES83mRykzKjaSn2Duzna0HVkXyLbkhekTprkpjeYXhq2bCUc4vy_fKzBEEFbgwSK9z-GAFT2riLM-3t4DI96dYejfQ?auto=format&dpr=1&w=1000",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
