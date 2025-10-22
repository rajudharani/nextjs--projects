// import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/_components/Navbar";



export const metadata = {
  title: "Contact Manager",
  description: "A simple Contact Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <Navbar />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
