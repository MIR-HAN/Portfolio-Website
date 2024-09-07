'use client'
import { ThemeProvider } from "next-themes";
import { fuchsia } from "tailwindcss/colors"
import "./globals.css";
import NextTopLoader from "nextjs-toploader";



export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
        <ThemeProvider attribute="class" >
          <NextTopLoader
            color={fuchsia[50]}
            height={3}
              />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
