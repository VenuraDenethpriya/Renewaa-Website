"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Zap } from "lucide-react"
import ProjectDetail from "./Project-Detail"
import { useState } from "react"
import { projects } from "@/lib/projects"
import Image from "next/image"

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<any>(null)

    return (
        <>
            <section
                id="portfolio"
                className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
            >
                {/* Background elements */}
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
                <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-blue-600/10 rounded-full blur-2xl"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-400/30 mb-6">
                            <span className="text-blue-200 text-sm font-medium">🏗️ Our Portfolio</span>
                        </div>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-6">
                            Innovation in Action
                        </h2>
                        <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                            Transforming industries with breakthrough energy solutions that redefine what&apos;s possible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        height={300}
                                        width={500}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>

                                    {/* Year badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-white text-sm font-medium">
                                        {project.year}
                                    </div>

                                    {/* Capacity badge */}
                                    <div className="absolute bottom-4 left-4 flex items-center space-x-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                                        <Zap className="h-4 w-4 text-yellow-400" />
                                        <span className="text-white text-sm font-medium">{project.capacity}</span>
                                    </div>
                                </div>

                                <CardContent className="p-6 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors mb-2">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center space-x-2 text-blue-300 mb-3">
                                            {
                                                project.location == "" ? null : <div className="flex gap-x-2 items-center">
                                                    <MapPin className="h-4 w-4" />
                                                    <span className="text-sm">{project.location}</span>
                                                </div>
                                            }

                                        </div>
                                        <p className="text-blue-200 text-sm leading-relaxed">{project.description}</p>
                                    </div>

                                    {/* Stats Grid */}
                                    {/* <div className="hidden sm:grid grid-cols-2 gap-4 text-sm">
                                        {Object.entries(project.stats).map(([key, value]) => (
                                            <div
                                                key={key}
                                                className="text-center p-3 bg-gray-100/60 rounded-xl group-hover:bg-white/80 transition-colors duration-300"
                                            >
                                                <div className="font-black text-blue-950 text-lg">{value}</div>
                                                <div className="text-gray-500 capitalize font-medium">{key.replace("_", " ")}</div>
                                            </div>
                                        ))}
                                    </div> */}

                                    {
                                        project.location == "" ? <Button
                                            variant="ghost"
                                            className=" mt-5 w-full text-blue-200 hover:text-white hover:bg-blue-600/20 border border-blue-400/30 hover:border-blue-300/50 group/btn"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            View Details
                                            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button> : <Button
                                            variant="ghost"
                                            className="w-full text-blue-200 hover:text-white hover:bg-blue-600/20 border border-blue-400/30 hover:border-blue-300/50 group/btn"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            View Details
                                            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    }

                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Call to Action */}
                    {/* <div className="text-center mt-16">
                    <div className="inline-flex flex-col items-center space-y-6 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                        <h3 className="text-2xl font-bold text-white">Ready to Start Your Solar Project?</h3>
                        <p className="text-blue-200 max-w-md">
                            Join hundreds of satisfied customers who have made the switch to clean, renewable energy.
                        </p>
                        <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-3">
                            Get Your Free Quote
                        </Button>
                    </div>
                </div> */}
                </div>
            </section>
            <ProjectDetail project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    )
}
