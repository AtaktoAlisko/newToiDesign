import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Абылай && Ботакөз той",
  description: "toy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[url('/all-bg.jpg')] bg-cover bg-fixed bg-center">
        {children}
      </body>
    </html>
  );
}
