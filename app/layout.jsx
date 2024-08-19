import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CusorProvider from "@/components/CusorContext";
import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";

const marcellus = Marcellus({ subsets: ["latin"], weight: ["400"], variable: "--font-marcellus" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-montserrat" });

export const metadata = {
  title: "Skin Care Salon",
  description:
    "Welcome to Skin Care Salon, your premier destination for all your skin care needs. Our team of expert estheticians are dedicated to providing you with the best possible service, from facials to waxing and more. We use only the highest quality products and the latest techniques to ensure that you leave feeling pampered and refreshed. Book your appointment today!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <head>
        <link rel="icon" href="/iconweb.ico" type="image/x-icon" />
      </head>
      <body className={`${marcellus.variable} ${montserrat.variable} overflow-x-hidden`}>
        <CusorProvider>
          <Transition />
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
        </CusorProvider>
      </body>
    </html>
  );
}
