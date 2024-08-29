"use client";

import "../styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
