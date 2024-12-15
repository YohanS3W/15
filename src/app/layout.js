// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/Sidebar";  // Correct import path

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "YUKKTHIYA",
    template: "yukkthiya",
  },
  description: "We are team Yukkthiya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          <div style={{ display: "flex" }}>
            <Sidebar /> {/* Sidebar component */}
            <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
