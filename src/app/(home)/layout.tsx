import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { Poppins } from "next/font/google";
import { headers } from "next/headers";

import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

export const metadata: Metadata = {
  title: "Tokeen",
  description: "",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} antialiased font-poppins background`}>
        <main>
          {!isAdmin && <Header />}
          {children}
          {!isAdmin && <Footer />}
        </main>
      </body>
    </html>
  );
}
