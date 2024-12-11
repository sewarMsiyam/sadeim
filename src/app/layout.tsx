import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/test";
// import { NextIntlClientProvider } from 'next-intl';
// import { getLocale, getMessages } from 'next-intl/server';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "sadeim",
  description: "sadeim",
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  // const locale = await getLocale();
  // const messages = await getMessages();
  return (
    <html lang="en" className="bg-white dark:bg-black">
      {/* lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} */}
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <body>
        {/* <NextIntlClientProvider messages={messages}></NextIntlClientProvider> */}
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
