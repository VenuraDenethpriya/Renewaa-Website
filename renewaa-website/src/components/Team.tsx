"use client"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { founders, teamMembers } from "@/lib/team"
import Image from "next/image"



export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-400/30 mb-6">
            <span className="text-blue-200 text-sm font-medium">🤝 Our Team</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate professionals dedicated to bringing clean energy solutions to your doorstep
          </p>
        </div>

        {/* Founders & Directors Row */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:ml-72">
            {founders.map((member, index) => (
              <Card
                key={member.name}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-400/30 group-hover:ring-blue-400/60 transition-all duration-300">
                      <Image
                        src={member.image || "C:\Renewaa Project\Website\renewaa-website\public\placeholder.jpeg"}
                        alt={member.name}
                        height={200}
                        width={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {hoveredMember === member.name && (
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full" />
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                  <p className="text-blue-400 font-medium mb-2">{member.position}</p>
                  <p className="text-slate-400 text-sm mb-3">{member.team}</p>
                  {/* <p className="text-slate-300 text-sm">{member.bio}</p> */}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Members Horizontal Scrollable Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Our Team</h3>
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500/20 hover:bg-blue-500/40 backdrop-blur-sm border border-blue-400/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-blue-400" />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500/20 hover:bg-blue-500/40 backdrop-blur-sm border border-blue-400/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-blue-400" />
            </button>

            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-blue-500 px-12"
            >
              <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
                {teamMembers.map((member, index) => (
                  <Card
                    key={member.name}
                    className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 flex-shrink-0 w-64"
                    onMouseEnter={() => setHoveredMember(member.name)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    <div className="p-4 text-center">
                      <div className="relative mb-4">
                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-2 ring-blue-400/30 group-hover:ring-blue-400/60 transition-all duration-300">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            height={150}
                            width={150}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        {hoveredMember === member.name && (
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full" />
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                      <p className="text-blue-400 text-sm font-medium mb-1">{member.position}</p>
                      {/* <p className="text-slate-400 text-xs">{member.team}</p> */}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
