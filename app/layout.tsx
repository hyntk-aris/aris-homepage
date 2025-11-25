import type { Metadata } from "next"
// Removed Inter font to allow global Plus Jakarta Sans from globals.css
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"


export const metadata: Metadata = {
  title: "MyCompany - Trang chủ",
  description: "Website công ty của chúng tôi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          storageKey="theme-preference"
        >
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
