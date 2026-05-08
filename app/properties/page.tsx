"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Bed, Bath, Square, Heart, Filter, ChevronDown, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const properties = [
  {
    id: 1,
    title: "Luxury Penthouse Suite",
    location: "Downtown Manhattan, NY",
    price: 2500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Villa with Pool",
    location: "Beverly Hills, CA",
    price: 4800000,
    bedrooms: 6,
    bathrooms: 5,
    area: 6200,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "Waterfront Estate",
    location: "Miami Beach, FL",
    price: 7500000,
    bedrooms: 8,
    bathrooms: 7,
    area: 9500,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Executive Office Space",
    location: "Financial District, NY",
    price: 1200000,
    bedrooms: 0,
    bathrooms: 2,
    area: 2800,
    type: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Prime Retail Location",
    location: "5th Avenue, NY",
    price: 3500000,
    bedrooms: 0,
    bathrooms: 1,
    area: 1500,
    type: "Shop",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Development Land",
    location: "Austin, TX",
    price: 850000,
    bedrooms: 0,
    bathrooms: 0,
    area: 25000,
    type: "Land",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    featured: false,
  },
  {
    id: 7,
    title: "Beachfront Condo",
    location: "San Diego, CA",
    price: 1800000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    featured: true,
  },
  {
    id: 8,
    title: "Mountain Retreat",
    location: "Aspen, CO",
    price: 5200000,
    bedrooms: 5,
    bathrooms: 4,
    area: 4800,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    featured: false,
  },
  {
    id: 9,
    title: "Urban Loft",
    location: "Brooklyn, NY",
    price: 950000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    featured: false,
  },
]

const categories = ["All", "Apartment", "Villa", "Land", "Office", "Shop"]

const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under $1M", min: 0, max: 1000000 },
  { label: "$1M - $3M", min: 1000000, max: 3000000 },
  { label: "$3M - $5M", min: 3000000, max: 5000000 },
  { label: "$5M+", min: 5000000, max: Infinity },
]

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    )
  }

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || property.type === selectedCategory
    const matchesPrice = property.price >= selectedPriceRange.min && property.price <= selectedPriceRange.max
    return matchesSearch && matchesCategory && matchesPrice
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
              Explore <span className="gold-text">Properties</span>
            </h1>
            <p className="text-muted-foreground">
              Discover our collection of premium properties across the country
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card border border-border rounded-xl p-4 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by property name or location..."
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

              {/* Desktop Filters */}
              <div className="hidden lg:flex gap-4">
                {/* Category Filter */}
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      className={selectedCategory === category ? "bg-primary text-primary-foreground" : "border-border"}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mt-4 pt-4 border-t border-border space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Property Type</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        className={selectedCategory === category ? "bg-primary text-primary-foreground" : "border-border"}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Price Range</p>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range) => (
                      <Button
                        key={range.label}
                        variant={selectedPriceRange.label === range.label ? "default" : "outline"}
                        size="sm"
                        className={selectedPriceRange.label === range.label ? "bg-primary text-primary-foreground" : "border-border"}
                        onClick={() => setSelectedPriceRange(range)}
                      >
                        {range.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing <span className="text-primary font-medium">{filteredProperties.length}</span> properties
          </p>

          {/* Properties Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className="bg-primary text-primary-foreground">{property.type}</Badge>
                    {property.featured && (
                      <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
                    )}
                  </div>
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <Heart 
                      className={`h-5 w-5 ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-foreground"}`} 
                    />
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-2xl font-bold gold-text">
                      ${property.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pb-4 border-b border-border">
                    {property.bedrooms > 0 && (
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        <span>{property.bedrooms} Beds</span>
                      </div>
                    )}
                    {property.bathrooms > 0 && (
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span>{property.bathrooms} Baths</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>{property.area.toLocaleString()} sqft</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                      View Details
                    </Button>
                    <Link href="/booking">
                      <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                        Book Tour - $40
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No properties found matching your criteria.</p>
              <Button
                className="mt-4 bg-primary text-primary-foreground"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setSelectedPriceRange(priceRanges[0])
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
