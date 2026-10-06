import type { ReactNode } from "react";
import Nav from "../components/Nav";
import "./globals.css";

export const metadata = {
  title: "BookMart",
  description: "Номын онлайн дэлгүүр",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="mn">
      <body>
        <Nav />
        <main>{children}</main>
        <footer className="footer">© 2026 BookMart · Ariunbayar</footer>
      </body>
    </html>
  );
}