"use client"

import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { FaTiktok } from "react-icons/fa"
import { PolicyModal, usePolicyModals } from "./Policy-Modals"

export default function Footer() {
  const { activeModal, openModal, closeModal } = usePolicyModals()
  return (
    <>
      <footer className="bg-gradient-to-br from-slate-500 via-blue-900 to-slate-800 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative cursor-pointer">
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
                </div>


                {/* <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                        Renewaa
                      </span> */}
              </div>
              <p className="text-blue-200 leading-relaxed">
                Pioneering the future of energy with revolutionary lithium battery solutions and solar systems that power tomorrow&apos;s world.
              </p>
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, url: "https://web.facebook.com/renewaa.energy?_rdc=1&_rdr#" },
                  { Icon: FaTiktok, url: "https://www.tiktok.com/@renewaa_energy?_t=ZS-8ypugTbsvFC&_r=1" },
                  { Icon: Instagram, url: "https://www.instagram.com/renewaa.energy?igsh=bWlrY2tydTVyd3Iw" },
                  { Icon: Linkedin, url: "https://www.linkedin.com/company/renewaa-energy/posts/?feedView=all" },
                ].map(({ Icon, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-600/20 transition-all duration-300 cursor-pointer group"
                  >
                    <Icon className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>

            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "Solar Panel Installation",
                  "Lithium Battery Solutions",
                  "Residential Solar",
                  "Commercial Solar",
                  "Maintenance & Support",
                  "Energy Consulting",
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                {[
                  { url: "#about", label: "About Us" },
                  { url: "#portfolio", label: "Our Portfolio" },
                  { url: "#team", label: "Team" },
                  { url: "#contact", label: "Contact" },
                  { url: "#careers", label: "Careers" },
                  { url: "#partners", label: "Partners" },
                ].map(({ url, label }, index) => (
                  <li key={index}>
                    <a href={url} className="text-blue-200 hover:text-white transition-colors duration-300">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-blue-200 text-sm">L2-14, Reality plaza, Ja-ela, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-blue-200 text-sm">+94 743 020 154</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-blue-200 text-sm">info@renewaa.com</span>
                </div>
              </div>

              {/* Newsletter */}
              {/* <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Stay Updated</h4>
              <p className="text-blue-200 text-sm mb-4">
                Get the latest news about solar technology and special offers.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-blue-300 focus:border-blue-400 focus:outline-none text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white hover:from-blue-500 hover:to-blue-700 transition-all duration-300">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div> */}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-blue-200 text-sm">
                © 2025 Renewaa Pvt. Ltd. All rights reserved. | Powering a sustainable future.
              </div>
              <div className="flex space-x-6 text-sm">
                <button
                  onClick={() => openModal("privacy")}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <button onClick={() => openModal("terms")} className="text-blue-200 hover:text-white transition-colors">
                  Terms of Service
                </button>
                <button
                  onClick={() => openModal("cookie")}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Policy Modals */}
      <PolicyModal isOpen={activeModal === "privacy"} onClose={closeModal} type="privacy" />
      <PolicyModal isOpen={activeModal === "terms"} onClose={closeModal} type="terms" />
      <PolicyModal isOpen={activeModal === "cookie"} onClose={closeModal} type="cookie" />
    </>

  )
}
