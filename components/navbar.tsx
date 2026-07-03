"use client"

import { useEffect, useState } from "react"
import { Globe, Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { navItems, siteConfig } from "@/data/site-content"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { language, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const items = navItems[language]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled && "glass"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="text-lg sm:text-xl font-bold text-white md:flex-1 text-left"
          >
            {siteConfig.name}
          </button>

          <div className="hidden md:flex items-center space-x-8 mr-6">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white/75 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors glass px-3 py-2 rounded-lg"
              aria-label="Switch language"
            >
              <Globe size={16} />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-white glass px-2 py-1 rounded-lg"
            >
              <Globe size={14} />
              <span className="text-xs font-medium uppercase">{language}</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white glass p-2 rounded-lg"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-4 glass rounded-xl p-4 space-y-3">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-white/75 hover:text-white py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
