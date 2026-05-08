"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Star, MapPin, Briefcase, ArrowLeft, Filter, ChevronDown, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const contractors = [
  {
    id: 1,
    name: "Marcus Johnson",
    specialty: "General Construction",
    experience: 15,
    rating: 4.9,
    reviews: 127,
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    verified: true,
    available: true,
  },
  {
    id: 2,
    name: "Sarah Chen",
    specialty: "Interior Design",
    experience: 12,
    rating: 4.8,
    reviews: 98,
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    verified: true,
    available: true,
  },
  {
    id: 3,
    name: "David Williams",
    specialty: "Electrical Work",
    experience: 20,
    rating: 5.0,
    reviews: 156,
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    verified: true,
    available: false,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    specialty: "Plumbing",
    experience: 8,
    rating: 4.7,
    reviews: 64,
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    verified: true,
    available: true,
  },
  {
    id: 5,
    name: "Michael Thompson",
    specialty: "Roofing",
    experience: 18,
    rating: 4.9,
    reviews: 142,
    location: "Dallas, TX",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    verified: true,
    available: true,
  },
  {
    id: 6,
    name: "Lisa Park",
    specialty: "Landscaping",
    experience: 10,
    rating: 4.8,
    reviews: 89,
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    verified: true,
    available: true,
  },
  {
    id: 7,
    name: "James Anderson",
    specialty: "HVAC",
    experience: 14,
    rating: 4.6,
    reviews: 73,
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    verified: true,
    available: false,
  },
  {
    id: 8,
    name: "Amanda Foster",
    specialty: "Painting",
    experience: 6,
    rating: 4.9,
    reviews: 51,
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    verified: true,
    available: true,
  },
]

const specialties = ["All", "General Construction", "Interior Design", "Electrical Work", "Plumbing", "Roofing", "Landscaping", "HVAC", "Painting"]

export default function ContractorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  const filteredContractors = contractors.filter(contractor => {
    const matchesSearch = contractor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          contractor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          contractor.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSpecialty = selectedSpecialty === "All" || contractor.specialty === selectedSpecialty
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Find <span className="gold-text">Contractors</span>
            </h1>
            <p className="text-muted-foreground">
              Connect with verified professionals for your construction and renovation needs
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card border border-border rounded-xl p-4 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by name, specialty, or location..."
                  className="pl-10 bg-background border-border"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filter Toggle (Mobile) */}
              <Button
                variant="outline"
                className="lg:hidden border-border"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </Button>

              {/* Desktop Specialty Filter */}
              <div className="hidden lg:flex gap-2 flex-wrap">
                {specialties.slice(0, 5).map((specialty) => (
                  <Button
                    key={specialty}
                    variant={selectedSpecialty === specialty ? "default" : "outline"}
                    size="sm"
                    className={selectedSpecialty === specialty ? "bg-primary text-primary-foreground" : "border-border"}
                    onClick={() => setSelectedSpecialty(specialty)}
                  >
                    {specialty}
                  </Button>
                ))}
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mt-4 pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-2">Specialty</p>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((specialty) => (
                    <Button
                      key={specialty}
                      variant={selectedSpecialty === specialty ? "default" : "outline"}
                      size="sm"
                      className={selectedSpecialty === specialty ? "bg-primary text-primary-foreground" : "border-border"}
                      onClick={() => setSelectedSpecialty(specialty)}
                    >
                      {specialty}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing <span className="text-primary font-medium">{filteredContractors.length}</span> contractors
          </p>

          {/* Contractors Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredContractors.map((contractor) => (
              <div
                key={contractor.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={contractor.image}
                    alt={contractor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {contractor.verified && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      Verified
                    </Badge>
                  )}
                  <Badge 
                    className={`absolute top-3 right-3 ${contractor.available ? "bg-green-600" : "bg-muted"}`}
                  >
                    {contractor.available ? "Available" : "Busy"}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                    {contractor.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">{contractor.specialty}</p>
                  
                  <div className="flex items-center gap-1 text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{contractor.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground pb-4 border-b border-border">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{contractor.experience} yrs exp</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-foreground font-medium">{contractor.rating}</span>
                      <span>({contractor.reviews})</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1 border-border">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-border">
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </Button>
                  </div>
                  <Button className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    Request Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredContractors.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No contractors found matching your criteria.</p>
              <Button
                className="mt-4 bg-primary text-primary-foreground"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedSpecialty("All")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
