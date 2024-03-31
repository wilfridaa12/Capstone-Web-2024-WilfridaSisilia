import { Lora } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <div className="md:px-20">
          <Header />
          {children}
          
        </div>

        <Footer/>
      </body>
    </html>
  );
}