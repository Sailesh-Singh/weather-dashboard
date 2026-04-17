import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Using Inter for dashboard/weather apps
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atmosphere | Weather Intelligence",
  description: "Beautifully designed real-time weather tracking with a glassmorphic interface.",
  keywords: ["Next.js", "Weather App", "Frontend Task", "Framer Motion", "Tailwind CSS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} bg-slate-950 text-white antialiased min-h-screen relative overflow-x-hidden`}
      >
        {/* Persistent Background Glows - Visible on all pages */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Top Left Glow */}
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
          
          {/* Bottom Right Glow */}
          <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full" />
          
          {/* Subtle noise texture to make it look high-end */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}