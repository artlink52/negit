import type { Metadata } from "next";
import "./globals.css";

import { JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Loader from "@/components/shared/loader";
import { Toaster } from "react-hot-toast";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["cyrillic"],
  variable: "--font-jetbrainsmono",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "НЭГ ИТ | Главная",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={jetBrainsMono.className}>
        <Loader>
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          {children}
          {modal}
          <Footer />
        </Loader>
      </body>
    </html>
  );
}
