
import type { Metadata } from "next";
import "@styles/globals.css";

import Navbar from "@components/Navbar";
import ContactPage from "@components/contactpage/ContactPage";

export const metadata: Metadata = {
  title: "EVAKEY - Premium Keychains & Promotional Products",
  description: "Discover amazing keychains and promotional products for your company. Premium quality custom keychains crafted with excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="relative w-full overflow-hidden">
          <div>
            <Navbar />
          </div>
          {children}
          <div>
            <ContactPage />
          </div>
        </div>
      </body>
    </html>
  );
}
