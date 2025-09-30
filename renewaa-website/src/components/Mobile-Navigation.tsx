"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap, Home, Briefcase, Users, Mail } from "lucide-react"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "Services", href: "#services", icon: Zap },
    { name: "About", href: "#about", icon: Users },
    { name: "Portfolio", href: "#portfolio", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {/* Hamburger Button */}
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <Menu className="h-10 w-10" />
          </Button>
        </SheetTrigger>

        {/* Sidebar Menu */}
        <SheetContent side="left" className="bg-slate-900 border-r border-white/10">
          <nav className="mt-8">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all"
                  >
                    <item.icon className="h-5 w-5 text-blue-400" />
                    <span className="text-white font-medium text-lg">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
