"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Check, Star, ArrowRight, Zap, Shield, Clock, Award } from "lucide-react"



export default function PrivacyPolicy({ isOpen, onClose }: any) {
  if (!isOpen) return null


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
              {/* <product.icon className="h-8 w-8 text-white" /> */}
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Privacy Policy
              </h2>
              <p className="text-blue-200 mt-1">At Renewaa Private Limited, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect data when you interact with our website (www.renewaa.com) or our services.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Left Column - Image and Description */}
          <div className="space-y-6">
            <div className="relative h-64 rounded-xl overflow-hidden">
              {/* <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 leading-relaxed mb-4"></p>
                <p className="text-blue-200 leading-relaxed">
                  We may collect the following types of information when you visit our website, contact us, or use our services:
                </p>
                <p className="text-blue-200 leading-relaxed">
                  Personal details (name, email address, phone number, company name) submitted through contact forms or inquiries.
                </p>
                <p className="text-blue-200 leading-relaxed">
                  Project-related details (site address, energy requirements, technical specifications) provided for consultations and proposals.
                </p>
                <p className="text-blue-200 leading-relaxed">
                  Website usage data (IP address, browser type, pages visited) through cookies and analytics tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 leading-relaxed mb-4"></p>
                <p className="text-blue-200 leading-relaxed">
                  Your information is used to:
                </p>
                <p className="text-blue-200 leading-relaxed">
                  Respond to your inquiries and provide requested services.
                </p>
                <p className="text-blue-200 leading-relaxed">
                  Process orders, payments, and project-related documentation.
                </p>
                <p className="text-blue-200 leading-relaxed">
                  Send important updates, offers, or newsletters (only if you opt-in).
                </p>
                <p className="text-blue-200 leading-relaxed">
                  Comply with legal and regulatory requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">3. Data Protection & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 leading-relaxed mb-4">We use industry-standard security measures to protect your data against unauthorized access, disclosure, or alteration. Your personal information will not be sold, rented, or shared with third parties except:</p>
                <p className="text-blue-200 leading-relaxed">
                  With trusted service providers who assist us in delivering our services.
                </p>
                <p className="text-blue-200 leading-relaxed">
                  When required by law or government authorities.
                </p>
                
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">3. Data Protection & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 leading-relaxed mb-4">We use industry-standard security measures to protect your data against unauthorized access, disclosure, or alteration. Your personal information will not be sold, rented, or shared with third parties except:</p>
                <p className="text-blue-200 leading-relaxed">
                  With trusted service providers who assist us in delivering our services.
                </p>
                <p className="text-blue-200 leading-relaxed">
                  When required by law or government authorities.
                </p>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
