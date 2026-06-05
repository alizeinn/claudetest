"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="gold-line mx-10" />
        <Services />
        <div className="gold-line mx-10" />
        <SocialProof />
        <div className="gold-line mx-10" />
        <About />
        <div className="gold-line mx-10" />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
