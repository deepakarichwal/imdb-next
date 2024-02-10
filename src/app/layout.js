import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb App",
  description: "An IMDb rating app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Providers>
          <Header />
          <NavBar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
