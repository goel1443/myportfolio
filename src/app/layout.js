import { Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
          <Sidebar />
          <div className="ml-0 lg:pl-[250px]  h-screen ">
            {children}
          </div>
      </body>
    </html>
  );
}
