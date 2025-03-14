import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import GA from "@/components/GA";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundLinx } from "@/components/welcomelines/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tooolify Free Unlimited File Converter",
  description: `Unleash your creativity with Modifio – the ultimate online tool for
  unlimited and free multimedia conversion. Transform images, audio, and
  videos effortlessly, without restrictions. Start converting now and
  elevate your content like never before!`,
  creator: "Arif-koyani",
  keywords:
    "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GA GA_MEASUREMENT_ID="G-52GQ441X7H" />
      <meta
        name="google-site-verification"
        content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU"
      />
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark"]}
        > */}
       <Navbar />
           <BackgroundLinx/>
          <Toaster /> 
        <div
        // className="pt-10 min-h-screen lg:pt-28 2xl:pt-40 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl"
        >
          {children}
        </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
