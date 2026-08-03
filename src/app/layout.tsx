import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./custom.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";


const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk" 
});


export const metadata: Metadata = {
    title: "Diaz's Portfolio",
    description: "Shopify developer with 5 years of experience building e-commerce solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>  ) {
  return (
    <html
      lang="en" 
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark:bg-[#f5f4fc] text-black dark:text-black transition-colors">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
