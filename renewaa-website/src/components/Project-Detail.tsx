"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Zap,            
  Calendar,       
  MapPin,         
  BatteryCharging, 
  Wrench,         
  Timer,           
  Gauge,           
  Leaf,            
  Fuel,            
  Cloud,           
  PiggyBank,       
  Tag,              
  X
} from "lucide-react";
import Image from "next/image";

interface ProjectDetailProps {
  project: {
    title: string
    location: string
    capacity: string
    image: string
    description: string
    year: string
    client?: string
    duration?: string
    savings?: string
    co2Reduction?: string
    cb1: string
    cb2: string
    cb3: string
    cb4: string
    description2?: string
    NoofConversionsDone?: string
    BatteryLifespan?: string
    Maintenance?: string
    ChargingTime?: string
    RunTime?: string
    Range?: string
    TreesEquivalent?: string
    SavingOnFuel?: string
    category?: string
  }
  isOpen: boolean
  onClose: () => void
}


export default function ProjectDetail({ project, isOpen, onClose }: ProjectDetailProps) {
  if (!isOpen) return null

  const projectStats = [
  { icon: Zap, label: "System Capacity", value: project.capacity },
  { icon: MapPin, label: "Client", value: project.client },
  { icon: Calendar, label: "No of Conversions Done", value: project.NoofConversionsDone },
  { icon: BatteryCharging, label: "Battery Lifespan", value: project.BatteryLifespan },
  { icon: Wrench, label: "Maintenance", value: project.Maintenance },
  { icon: Timer, label: "Charging Time", value: project.ChargingTime },
  { icon: Timer, label: "Run Time", value: project.RunTime },
  { icon: Gauge, label: "Range", value: project.Range },
  { icon: Leaf, label: "Trees Equivalent", value: project.TreesEquivalent },
  { icon: Fuel, label: "Saving on Fuel", value: project.SavingOnFuel },
  { icon: Cloud, label: "CO₂ Reduction", value: project.co2Reduction },
  { icon: PiggyBank, label: "Saving", value: project.savings },
  { icon: Tag, label: "Category", value: project.category },
];

  // const projectPhases = [
  //   {
  //     phase: "Site Assessment",
  //     description: "Comprehensive evaluation of solar potential and structural requirements",
  //   },
  //   { phase: "System Design", description: "Custom engineering design optimized for maximum energy production" },
  //   { phase: "Permitting", description: "Handling all necessary permits and utility interconnection agreements" },
  //   { phase: "Installation", description: "Professional installation by certified technicians" },
  //   { phase: "Commissioning", description: "System testing, monitoring setup, and performance verification" },
  //   { phase: "Maintenance", description: "Ongoing monitoring and maintenance support" },
  // ]

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-2xl border border-blue-400/30 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 border-b border-blue-400/20">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-blue-200 hover:text-white hover:bg-blue-600/20"
          >
            <X className="h-6 w-6" />
          </Button>

          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-2">
              {project.title}
            </h2>
            <div className="flex items-center space-x-4 text-blue-200">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span>{project.capacity}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Completed {project.year}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Project Image */}
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg leading-relaxed">{project.description}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project Statistics */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {projectStats.filter((spec) => spec.value && spec.value.trim() !== "").map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-blue-500/10 rounded-lg">
                      <stat.icon className="h-5 w-5 text-blue-400" />
                      <div>
                        <p className="text-blue-200 text-sm">{stat.label}</p>
                        <p className="text-white font-medium">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Impact */}
            <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md border border-blue-400/30">
              <CardHeader>
                <CardTitle className="text-white">Client Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                  <span className="text-blue-200">{project.cb1}</span>
                  {/* <span className="text-white font-bold">25 tons/year</span> */}
                </div>
                <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                  <span className="text-blue-200">{project.cb2}</span>
                  {/* <span className="text-white font-bold">625 trees planted</span> */}
                </div>
                <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                  <span className="text-blue-200">{project.cb3}</span>
                  {/* <span className="text-white font-bold">45,000 kWh/year</span> */}
                </div>
                <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                  <span className="text-blue-200">{project.cb4}</span>
                  {/* <span className="text-white font-bold">45,000 kWh/year</span> */}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Phases */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Project Description</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4">
                  <div className="p-4 bg-blue-500/10 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      {/* <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        
                      </div> */}
                      <h4 className="text-white font-medium">{project.description2}</h4>
                    </div>
                    <p className="text-blue-200 text-sm"></p>
                  </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          {/* <div className="flex justify-center space-x-4">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-lg px-8">
              Start Similar Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-blue-400/30 text-blue-200 hover:bg-blue-600/20 px-8 bg-transparent"
            >
              Download Case Study
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}
