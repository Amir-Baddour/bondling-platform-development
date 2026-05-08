"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Properties", href: "/properties" },
  { name: "Contractors", href: "/contractors" },
  { name: "Materials", href: "/materials" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="The Bondling"
            width={50}
            height={50}
            className="rounded"
          />
          <div className="hidden sm:block">
            <span className="text-xl font-bold text-primary">THE BONDLING</span>
            <p className="text-xs text-muted-foreground">Bonding. Building. Helping.</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link href="/login" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Sign in
          </Link>
          <Link href="/register">
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              Register
            </Button>
          </Link>
          <Link href="/booking">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book Meeting - $40
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <Link href="/login" className="block">
                <Button variant="outline" className="w-full border-border">
                  Sign in
                </Button>
              </Link>
              <Link href="/register" className="block">
                <Button variant="outline" className="w-full border-primary/50 text-primary">
                  Register
                </Button>
              </Link>
              <Link href="/booking" className="block">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Meeting - $40
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
