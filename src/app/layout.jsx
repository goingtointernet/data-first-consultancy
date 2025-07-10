import localFont from "next/font/local";
import { Londrina_Outline, Poppins } from 'next/font/google';
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';
import AosProvider from "@/components/AosProvider/AosProvider";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: "swap",
});
const vezla = localFont({
  src: "./fonts/Vezla.ttf",
  variable: "--font-vezla",
  display: "swap",
});
const londrinaOutline = Londrina_Outline({
  subsets: ['latin'],
  weight: ['400'], // Bebas Neue only supports 400
  variable: '--font-londrina-outline',
  display: 'swap',
});

export const metadata = {
  title: "Data First Consultancy",
  description: "To empower businesses to harness the full potential of their data through expert-led strategy, services and products",
};

export default function RootLayout({ children }) {
  return (
    <html lang={`en`} className={`${vezla.variable} dark`}>
      <body
        className={`${vezla.variable} ${londrinaOutline.variable} ${poppins.variable} ${poppins.className} bg-secondaryBgColor`}
      >
        <NextTopLoader color="#5BA8A0" />
        <AosProvider>
          {children}
        </AosProvider>
        <Toaster />
      </body>
    </html>
  );
}
