"use client"

import Image from "next/image"

export default function Partners() {
  const partners = [
    { name: "CTC", logo: "/partners/CTC.png" },
    { name: "DCSL LANKA", logo: "/partners/DCSL LANKA.png" },
    { name: "DEEP TECH", logo: "/partners/DEEP TECH.png" },
    { name: "DESO", logo: "/partners/DESO.png" },
    { name: "FERENTINO", logo: "/partners/FERENTINO.png" },
    { name: "FIRE x", logo: "/partners/FIRE x.png" },
    { name: "Global GIS", logo: "/partners/Global GIS.png" },
    { name: "GRI", logo: "/partners/GRI.png" },
    { name: "IDEAL LANKA", logo: "/partners/IDEAL LANKA.png" },
    { name: "JITI", logo: "/partners/JITI.png" },
    { name: "Laughfs", logo: "/partners/laughfs-.png" },
    { name: "OREL", logo: "/partners/OREL.png" },
    { name: "PON", logo: "/partners/PON.png" },
    { name: "ROYAL COLOMBO GOLF CLUB", logo: "/partners/ROYAL COLOMBO GOLF CLUB.png" },
    { name: "Windforce", logo: "/partners/windforce.png" },
  ]

  return (
    <section id="partners" className="py-12 bg-gradient-to-r from-slate-900/50 via-blue-900/30 to-slate-900/50 backdrop-blur-sm border-y border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Trusted Partners</h2>
          <p className="text-blue-200">Working with industry leaders to deliver excellence</p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

          {/* Animated logo strip */}
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            <div className="flex items-center space-x-12 min-w-max">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:bg-white/20 transition-all duration-300 min-w-[160px] h-20"
                >
                  <Image
                    src={partner.logo || "/partners/partner-placeholder.jpg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-12 max-w-28"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-12 min-w-max ml-12">
              {partners.map((partner, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:bg-white/20 transition-all duration-300 min-w-[160px] h-20"
                >
                  <Image
                    src={partner.logo || "/partners/partner-placeholder.jpg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-12 max-w-28 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
