import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamed Khaled | Personal Portfolio",
  description:
    "Mohamed Khaled is a full stack developer based in Egypt. He is passionate about building excellent software that improves the lives of those around him. He specializes in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. He is currently available for freelance projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
