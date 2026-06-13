import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "ProductHub",
  description: "Revenio Assessment",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </AuthProvider>
      </body>
    </html>
  );
}