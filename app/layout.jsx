import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
      path: "../public/fonts/tt_commons/TT Commons Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/tt_commons/TT Commons Medium.otf",
      weight: "600",
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
      </body>
    </html>
  );
}
