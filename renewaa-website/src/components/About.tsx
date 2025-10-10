"use client"

import { Card, CardContent } from "@/components/ui/card"
import { stats, values } from "@/lib/about-us"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

export default function About() {
  // const stats = [
  //   { icon: CheckCircle, number: PROJECTS_COUNT, label: "Projects Completed", color: "from-green-400 to-emerald-500" },
  //   { icon: Users, number: CUSTOMERS_COUNT, label: "Happy Customers", color: "from-blue-400 to-cyan-500" },
  //   { icon: Award, number: YEARS_EXPERIENCE, label: "Years Experience", color: "from-yellow-400 to-orange-500" },
  //   { icon: Leaf, number: CLEAN_ENERGY, label: "Clean Energy Generated", color: "from-green-400 to-teal-500" },
  // ]

  // const values = [
  //   {
  //     icon: Target,
  //     title: "Innovation",
  //     description: "Constantly pushing the boundaries of renewable energy and battery technology to deliver cutting-edge solutions.",
  //   },
  //   {
  //     icon: Shield,
  //     title: "Sustainability",
  //     description: "Committed to reducing environmental impact by promoting clean and renewable energy alternatives.",
  //   },
  //   {
  //     icon: Leaf,
  //     title: "Quality",
  //     description: "Delivering durable, high-performance products backed by comprehensive warranties and trusted reliability.",
  //   },
  //   {
  //     icon: Target,
  //     title: "Customer-Centricity",
  //     description: "Building strong relationships through personalized solutions, exceptional service, and after-sales support.",
  //   },
  //   {
  //     icon: Shield,
  //     title: "Integrity",
  //     description: "Operating with transparency, accountability, and trust in every project and partnership.",
  //   },
  //   {
  //     icon: Leaf,
  //     title: "Collaboration",
  //     description: "Partnering with clients, industries, and communities to create impactful and future-ready energy solutions.",
  //   },
  // ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-blue-400/10 to-blue-600/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 ">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-400/30 mb-6">
                <span className="text-blue-200 text-sm font-medium">🏢 About Renewaa</span>
              </div>

              <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-8">
                Who We Are ?
              </h2>

              <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
                <p>
                  Renewaa Private Limited is a leading provider of sustainable energy solutions, dedicated to shaping a cleaner
                  and greener future. With expertise in lithium battery technology, solar systems, EV battery upgrades, and
                  custom engineering, we deliver innovative and reliable energy solutions for homes, businesses, and industries.
                </p>
                <p>
                  Our focus on quality, performance, and sustainability ensures that every project we undertake contributes to
                  reducing carbon footprints and empowering individuals and organizations with energy independence.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 p-6"
                >
                  <CardContent className="text-center space-y-4 p-0">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300`}
                    >
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>



            {/* Why Choose Us */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Why Choose Renewaa?</h3>
              <ul className="space-y-3">
                {[
                  "Premium quality solar panels with 25-year warranty",
                  "Advanced lithium battery technology",
                  "Professional installation and ongoing support",
                  "Competitive pricing and flexible financing options",
                  "Certified and experienced technicians",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 group">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-blue-100 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content - Stats and Image */}
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/aboutus/About us.jpg?height=400&width=600"
                  alt="Renewaa team installing solar panels"
                  className="w-full h-80 object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur opacity-60"></div>
            </div>

            {/* Company Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Our Core Values</h3>
              <div className="grid gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                      <p className="text-blue-200 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      {/* <div className="relative z-30 container mx-auto px-6 lg:px-12 lg:pt-28 pt-8">
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
      </div> */}

      <div className="relative z-30 container mx-auto px-6 lg:px-12 lg:pt-28 pt-8">
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl border border-white/20 p-12 text-center shadow-2xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-lg px-8 py-6 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open("tel:+94743020154")}
            >
              Call Us on +94 743 020 154
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
