"use client"

import { CLEAN_ENERGY, CUSTOMERS_COUNT, PROJECTS_COUNT, YEARS_EXPERIENCE } from "@/lib/const"
import { Archive, Award, Package, Smile, Sun, Trophy, UserCheck, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export default function StatsSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const stats = [
        { number: PROJECTS_COUNT, label: "Projects Completed", icon: <Archive size={40} className="mx-auto text-blue-400" /> },
        { number: CUSTOMERS_COUNT, label: "Happy Customers", icon: <UserCheck size={40} className="mx-auto text-blue-400" /> },
        { number: YEARS_EXPERIENCE, label: "Years Experience", icon: <Smile size={40} className="mx-auto text-blue-400" /> },
        { number: CLEAN_ENERGY, label: "Clean Energy", icon: <Sun size={40} className="mx-auto text-blue-400" /> },
    ];
    return (
        <div className="relative z-30 container mx-auto px-6 lg:px-12 pb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 shadow-2xl hover:shadow-blue-500/25 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                        style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                        <div className="mb-4">{stat.icon}</div>
                         <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-200 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <div className="text-blue-200 text-base lg:text-lg font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}