import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500"] });

export const metadata: Metadata = {
  title: "Saney Bin Faruk",
  description:
    "Javascript Developer. Proficient in React.js, Node.js, Next Js, React Native | Experienced with MySQL, MongoDB, Redux, Zustand, and Stripe | Unity Game Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
