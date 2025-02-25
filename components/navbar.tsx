"use client"

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sun, Moon, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LaserX Acad
            </span>
          </Link>
          <div className="h-10 w-10" /> {/* Placeholder for theme toggle */}
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            LaserX Acad
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/courses" className="text-foreground/60 hover:text-foreground">
            Courses
          </Link>
          <Link href="/live-classes" className="text-foreground/60 hover:text-foreground">
            Live Classes
          </Link>
          <Link href="/study-materials" className="text-foreground/60 hover:text-foreground">
            Study Materials
          </Link>
          <Link href="/about" className="text-foreground/60 hover:text-foreground">
            About
          </Link>
          <Button variant="outline" size="sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button>Get Started</Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4">
          <div className="flex flex-col space-y-4">
            <Link href="/courses" className="text-foreground/60 hover:text-foreground">
              Courses
            </Link>
            <Link href="/live-classes" className="text-foreground/60 hover:text-foreground">
              Live Classes
            </Link>
            <Link href="/study-materials" className="text-foreground/60 hover:text-foreground">
              Study Materials
            </Link>
            <Link href="/about" className="text-foreground/60 hover:text-foreground">
              About
            </Link>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  )
}