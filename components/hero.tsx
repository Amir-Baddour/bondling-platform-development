"use client"

import { ArrowRight, Building2, Users, Package, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 gold-gradient opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-1 gold-gradient opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-glow">
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-sm text-primary font-medium">Trusted by 10,000+ Clients</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Your Gateway to</span>
          <br />
          <span className="gold-text">Luxury Real Estate</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
          Discover premium properties, connect with verified contractors, and source quality building materials. 
          All in one sophisticated platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 animate-glow">
            Explore Properties
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6">
            Book a Meeting - $40
          </Button>
        </div>

        {/* Meeting Booking Banner */}
        <div className="max-w-3xl mx-auto p-6 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 mb-16 animate-shimmer">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground">
                Request a Meeting to Visit Any Property
              </h3>
              <p className="text-muted-foreground">
                Secure your private property tour with Bondling experts
              </p>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
              Only $40 - Book Now
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Building2, value: "2,500+", label: "Premium Properties" },
            { icon: Users, value: "500+", label: "Verified Contractors" },
            { icon: Package, value: "1,000+", label: "Building Materials" },
            { icon: Shield, value: "100%", label: "Secure Transactions" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <stat.icon className="h-8 w-8 text-primary mb-2" />
              <span className="text-2xl sm:text-3xl font-bold gold-text">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
    </section>
  )
}
