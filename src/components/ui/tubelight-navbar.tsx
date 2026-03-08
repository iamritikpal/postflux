"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { LucideIcon, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full z-50 pt-4 flex justify-center",
          className
        )}
      >
        <div className="flex items-center justify-between w-[95%] md:w-auto gap-3 bg-black/60 border border-white/15 backdrop-blur-xl py-1 px-2 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.5)]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 pl-2 pr-2 py-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-background flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="PostFlux Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>

            <span className="text-xl font-bold tracking-tight text-white hidden md:inline-block">
              Post<span style={{ color: "#0a66c2" }}>Flux</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">

            <div className="w-px h-6 bg-white/15 mx-2" />

            {items.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.name

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                    "text-white/70 hover:text-white",
                    isActive && "bg-white/10 text-white"
                  )}
                >
                  {item.name}

                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              )
            })}

            <div className="w-px h-6 bg-white/15 mx-2" />

            <a
              href="https://app.postflux.tech/login"
              className="inline-flex items-center justify-center h-9 px-4 rounded-full text-white text-sm font-medium transition-colors"
              style={{ backgroundColor: "#004182" }}
            >
              Login
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">

          {/* Background blur */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-black border border-white/10 rounded-2xl p-4 shadow-xl">

            {items.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => {
                    setActiveTab(item.name)
                    setMobileOpen(false)
                  }}
                  className="flex items-center gap-3 text-white/80 hover:text-white py-3 px-3 rounded-lg hover:bg-white/10 transition"
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              )
            })}

            <a
              href="https://app.postflux.tech/login"
              className="mt-4 flex items-center justify-center w-full h-11 rounded-lg text-white font-medium"
              style={{ backgroundColor: "#004182" }}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </>
  )
}
