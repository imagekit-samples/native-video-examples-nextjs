import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Native Video Experiences",
  description: "Demonstration of different video streaming techniques in React + Next Apps with YouTube embed, HTML5 and React Video Player.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
