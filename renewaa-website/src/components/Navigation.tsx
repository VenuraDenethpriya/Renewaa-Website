"use client";

import { Button } from "./ui/button";
import "../app/globals.css";
import Image from "next/image";
import MobileNav from "./Mobile-Navigation";

export default function Navigation() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10"></div>

      {/* Floating 3D elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl animate-float"></div>
      <div
        className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30 blur-lg animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-25 blur-md animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-6 lg:px-12 backdrop-blur-md bg-blue-200/50 border-b border-white/10">

        <div className="flex items-center space-x-3">
          <a href="#hero" className="relative cursor-pointer">
            {/* Glow effect behind logo */}
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-white to-white rounded-xl blur opacity-50 z-0"></div> */}

            {/* Logo */}
            <Image
              src="/renewaa-logo.png"
              alt="Renewaa Logo"
              width={120}
              height={90}
              className="object-contain relative z-10"
            />
          </a>


          {/* <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Renewaa
          </span> */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-blue-100 hover:text-white transition-all duration-300 hover:scale-105">
            Services
          </a>
          <a href="#about" className="text-blue-100 hover:text-white transition-all duration-300 hover:scale-105">
            About
          </a>
          <a href="#portfolio" className="text-blue-100 hover:text-white transition-all duration-300 hover:scale-105">
            Portfolio
          </a>
          <a href="#team" className="text-blue-100 hover:text-white transition-all duration-300 hover:scale-105">
            Team
          </a>
          <a href="#contact" className="text-blue-100 hover:text-white transition-all duration-300 hover:scale-105">
            Contact
          </a>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border border-blue-400/20">
            Get Quote
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <MobileNav/>
      </nav>
    </>

  )
}