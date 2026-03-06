"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { fuchsia } from "tailwindcss/colors";

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextTopLoader color={fuchsia[50]} height={3} />
      {children}
    </ThemeProvider>
  );
}

