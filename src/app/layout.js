import { Geist, Geist_Mono } from "next/font/google";
import { Old_Standard_TT, Montserrat } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oldStandard = Old_Standard_TT({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-old-standard',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-montserrat',
});

export const metadata = {
  title: "This is my Empire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oldStandard.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}