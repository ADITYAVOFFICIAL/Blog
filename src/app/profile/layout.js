import { Inter } from "next/font/google";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Blog Website of SRMIST ACM SIGKDD Student Chapter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}