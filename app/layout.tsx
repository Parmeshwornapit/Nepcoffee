import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Nep Coffee | Premium Nepali Coffee", description: "Premium Nepali coffee delivered fresh to your door." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
