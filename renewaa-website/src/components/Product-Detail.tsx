"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Zap, Shield, Clock, Award, Battery, Settings, Cpu,
  Activity, Gauge, Timer, Plug, RefreshCcw, CheckCircle,
  Layers, Box, Globe, Network, Radio, Car, CircuitBoard,
  Star,
  Check,
  X
} from "lucide-react";
import Image from "next/image"

interface ProductDetailProps {
  product: {
    icon: any
    title: string
    description: string
    overview: string
    image: string
    features: string[]
    price?: string
    // Specifications:string[]
    mounting?: string
    battery_type?: string
    voltage_capacity?: string
    protection?: string
    technology?: string
    current?: string
    lifespan?: string
    charging?: string
    range?: string
    warranty?: string
    monitoring?: string
    compatibility?: string
    applications?: string
    ongrid_systems?: string
    Off_grid_systems?: string
    hybrid_systems?: string
    bespoke_battery_design?: string
    wireless_bms?: string
    ev_charging_solutions?: string
    smart_tech_platforms?: string

  }
  isOpen: boolean
  onClose: () => void
}

export default function ProductDetail({ product, isOpen, onClose }: ProductDetailProps) {
  if (!isOpen) return null


  const specifications = [
    { icon: Settings, label: "Mounting", value: product.mounting },
    { icon: Battery, label: "Battery Type", value: product.battery_type },
    { icon: Gauge, label: "Voltage & Capacity", value: product.voltage_capacity },
    { icon: Shield, label: "Protection", value: product.protection },
    { icon: Cpu, label: "Technology", value: product.technology },
    { icon: Activity, label: "Current", value: product.current },
    { icon: Timer, label: "Lifespan", value: product.lifespan },
    { icon: Plug, label: "Charging", value: product.charging },
    { icon: RefreshCcw, label: "Range", value: product.range },
    { icon: Award, label: "Warranty", value: product.warranty },
    { icon: CheckCircle, label: "Monitoring", value: product.monitoring },
    { icon: Layers, label: "Compatibility", value: product.compatibility },
    { icon: Globe, label: "Applications", value: product.applications },
    { icon: Network, label: "On-Grid Systems", value: product.ongrid_systems },
    { icon: Box, label: "Off-Grid Systems", value: product.Off_grid_systems },
    { icon: CircuitBoard, label: "Hybrid Systems", value: product.hybrid_systems },
    { icon: Globe, label: "Bespoke Battery Design", value: product.bespoke_battery_design },
    { icon: Radio, label: "Wireless BMS", value: product.wireless_bms },
    { icon: Car, label: "EV Charging Solutions", value: product.ev_charging_solutions },
    { icon: Cpu, label: "Smart Tech Platforms", value: product.smart_tech_platforms },
  ];


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

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
              <product.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                {product.title}
              </h2>
              <p className="text-blue-200 mt-1">Professional Solar Solution</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Left Column - Image and Description */}
          <div className="space-y-6">
            <div className="relative sm:h-92 h-50 rounded-xl overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Product Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 leading-relaxed mb-4">{product.description}</p>
                <p className="text-blue-200 leading-relaxed">
                  {product.overview}
                </p>

              </CardContent>
            </Card>
          </div>

          {/* Right Column - Specifications and Features */}
          <div className="space-y-6">
            {/* Specifications */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid-cols-2 gap-4">
                  {specifications
                    .filter((spec) => spec.value && spec.value.trim() !== "")
                    .map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-blue-500/10 rounded-lg"
                      >
                        <spec.icon className="h-5 w-5 text-blue-400" />
                        <div>
                          <p className="text-blue-200 text-sm">{spec.label}</p>
                          <p className="text-white font-medium">{spec.value}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>

            </Card>

            {/* Features */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 sm:h-74">
              <CardHeader>
                <CardTitle className="text-white">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-blue-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            {/* <div className="flex space-x-4">
              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-blue-400/30 text-blue-200 hover:bg-blue-600/20 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div> */}
          </div>
        </div>
        {/* Pricing */}
        <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md border border-blue-400/30 mx-6 mb-6">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <p className="text-white text-lg">
                <span className="text-2xl font-bold">{product.price}</span>
              </p>
              <p className="text-blue-200 text-sm">
                *Price varies based on requirements
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
