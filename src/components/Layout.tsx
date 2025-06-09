import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignupCTA from "./SignupCTA";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 pb-8">{children}</main>
      <SignupCTA />
      <Footer />
    </>
  );
}
