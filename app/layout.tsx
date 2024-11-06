import localFont from "next/font/local";
import "@/styles/main.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Provider } from "jotai";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider>
            <TitleBar />
            <div className="pt-8">
              <SidebarProvider>
                <SidePanel />
                <main className="w-full">
                  {/* <SidebarTrigger/> */}
                  {children}
                </main>
              </SidebarProvider>
            </div>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
