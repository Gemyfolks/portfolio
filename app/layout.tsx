import "./globals.css";
import { Inter } from "next/font/google";
import Header from "common/components/Header";
import {
  ActiveSectionContextProvider,
  ThemeContextProvider,
} from "common/providers";
import { Toaster } from "react-hot-toast";
import Footer from "common/components/Footer";
import ThemeSwitcher from "common/components/ThemeSwitcher";

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitcher />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
