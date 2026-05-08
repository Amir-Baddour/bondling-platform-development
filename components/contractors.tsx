"use client"

import { Star, MapPin, Briefcase, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const contractors = [
  {
    id: 1,
    name: "David Chen Construction",
    specialty: "Residential Construction",
    experience: 15,
    rating: 4.9,
    reviews: 128,
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    verified: true,
    services: ["New Construction", "Renovations", "Extensions"],
  },
  {
    id: 2,
    name: "Elite Renovations LLC",
    specialty: "Interior Renovations",
    experience: 12,
    rating: 4.8,
    reviews: 95,
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    verified: true,
    services: ["Kitchen Remodeling", "Bathroom Renovations", "Flooring"],
  },
  {
    id: 3,
    name: "Precision Builders Group",
    specialty: "Commercial Construction",
    experience: 20,
    rating: 4.9,
    reviews: 156,
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    verified: true,
    services: ["Office Buildings", "Retail Spaces", "Warehouses"],
  },
  {
    id: 4,
    name: "Green Build Solutions",
    specialty: "Sustainable Construction",
    experience: 8,
    rating: 4.7,
    reviews: 67,
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    verified: true,
    services: ["Eco-Friendly Homes", "Solar Installation", "Green Certifications"],
  },
]

export function Contractors() {
  return (
    <section id="contractors" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
            Contractor Network
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Verified </span>
            <span className="gold-text">Building Contractors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with experienced and verified contractors for construction, renovation, and supervision services.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Construction", desc: "New builds from foundation to finishing" },
            { title: "Renovation", desc: "Transform existing spaces beautifully" },
            { title: "Supervision", desc: "Expert project oversight and management" },
          ].map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors text-center"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Contractors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contractors.map((contractor) => (
            <Card 
              key={contractor.id} 
              className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                {/* Profile Image */}
                <div className="relative mb-4">
                  <img
                    src={contractor.image}
                    alt={contractor.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary/30 group-hover:border-primary transition-colors"
                  />
                  {contractor.verified && (
                    <div className="absolute bottom-0 right-1/3 bg-primary rounded-full p-1">
                      <CheckCircle className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{contractor.name}</h3>
                  <p className="text-sm text-primary mb-2">{contractor.specialty}</p>
                  
                  <div className="flex items-center justify-center gap-1 text-sm mb-2">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{contractor.location}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span className="ml-1 font-medium text-foreground">{contractor.rating}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">({contractor.reviews} reviews)</span>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-4">
                  <Briefcase className="h-4 w-4" />
                  <span>{contractor.experience} years experience</span>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {contractor.services.slice(0, 2).map((service) => (
                    <Badge 
                      key={service} 
                      variant="outline" 
                      className="text-xs border-border text-muted-foreground"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="h-4 w-4 mr-2" />
                  Request Contact
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
            View All Contractors
          </Button>
        </div>
      </div>
    </section>
  )
}
