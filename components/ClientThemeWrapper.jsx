// This codebase is a fix for next-themes dark mode hydration mismatch error

"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Foot from "@/components/Foot";

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '500'],
  variable: '--font-poppins',
});

export default function ClientThemeWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className={poppins_init.variable}>
        <Header />
        {children}
        <Foot />
      </div>
    </ThemeProvider>
  );
}
