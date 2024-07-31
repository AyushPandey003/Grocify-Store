import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
// import { FloatingNav } from "@/components/navbar0";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser  className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <html lang="en">
      <body className={`${font.className} bg-orange-100`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ToastProvider />
        <ModalProvider />
        {/* <FloatingNav navItems={navItems} /> */}
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
