import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AcceptCookies from "@/components/utils/AcceptCookies";
import ChangeFavicon from "@/components/utils/ChangeFavicon";
import localFont from "next/font/local";

export const metadata = {
  title: "BRAND YOUR",
  description:
    "This is a replica hero page of BRAND YOUR website. 'www.brandyour.co'",
};

const ttCommons = localFont({
  src: [
    {
      path: "../public/fonts/regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/extra-bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-ttcommons",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ttCommons.className}>
        <ChangeFavicon />
        <Header />
        {children}
        <Footer />
        <AcceptCookies />
      </body>
    </html>
  );
}
