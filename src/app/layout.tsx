import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Rooks",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <header>
          <div className="w-full" style={{ backgroundColor: '#262522' }}>
            <Navbar/>
          </div>
        </header>
        <div>
          {children}
        </div>
        <footer>
          <div>
          <Footer/>
          </div>
        </footer>
      </body>
    </html>
  );
}
