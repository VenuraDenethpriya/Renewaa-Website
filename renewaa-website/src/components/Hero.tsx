"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import StatsSection from "./StatsSection"
import Carousel from "./ui/carousel"
import Link from "next/link"
import Partners from "./Partners"

export default function Hero() {
  const slides = [
    {
      title: "Solar Panel Installation",
      button: "Learn More",
      src: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Lithium Battery Solutions",
      button: "Learn More",
      src: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Residential Solar",
      button: "Learn More",
      src: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Commercial Solar",
      button: "Learn More",
      src: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Maintenance & Support",
      button: "Learn More",
      src: "/placeholder.svg?height=300&width=400",
    }
  ]

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background with blur effects */}
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



      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-50">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-400/30 mt-6 md:pt-0">
                <span className="text-blue-200 text-sm font-medium">⚡ Advanced Energy Solutions</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Power Your Future
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                  with Solar Energy
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Revolutionary lithium battery solutions and solar systems engineered for tomorrow&apos;s energy demands.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="#services" passHref>
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-lg px-8 py-6 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border border-blue-400/20"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="#contact" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="group text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-2 border-blue-400/30 text-white hover:bg-white/20 hover:border-blue-300/50 transform hover:scale-105 transition-all duration-300"
                >
                  {/* <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> */}
                  <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="grid sm:flex items-center sm:space-x-8 pt-6">
              <div className="flex items-center space-x-3 text-blue-200 group hover:text-white transition-colors cursor-pointer">
                <div className="p-2 bg-blue-500/20 rounded-lg backdrop-blur-sm group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-medium" onClick={() => window.open("tel:+94743020154")}>+94 743 020 154</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200 group hover:text-white transition-colors cursor-pointer">
                <div className="p-2 bg-blue-500/20 rounded-lg backdrop-blur-sm group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-medium" onClick={() => window.open("mailto:info@renewaa.com")}>info@renewaa.com</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="mb-12">
            <Carousel slides={slides} />
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-blue-200 text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>


      {/* Stats section with glassmorphism */}
      <StatsSection />

      {/* Partners Section */}
      <Partners />

      {/* Call to Action Banner */}
      <div className="relative z-30 container mx-auto px-6 lg:px-12 pb-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl border border-white/20 p-12 text-center shadow-2xl">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Transform Your Energy Future?</h3>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, renewable energy solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-lg px-8 py-6 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </Button>
            </Link>

            <Link href="#portfolio" passHref>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-xl border-2 border-blue-400/30 text-white hover:bg-white/20 hover:border-blue-300/50 transform hover:scale-105 transition-all duration-300"
              >
                View Our Portfolio
              </Button>
            </Link>

          </div>
        </div>
      </div>



    </section>
  )
}
