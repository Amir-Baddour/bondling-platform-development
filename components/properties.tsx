"use client"

import { useState } from "react"
import { Search, BedDouble, Bath, Maximize, MapPin, Heart, Eye, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const propertyCategories = ["All", "Apartment", "Villa", "Land", "Office", "Shop"]

const properties = [
  {
    id: 1,
    title: "Luxury Penthouse Suite",
    location: "Downtown Manhattan, NY",
    price: 2500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    category: "Apartment",
    status: "For Sale",
    verified: true,
    featured: true,
  },
  {
    id: 2,
    title: "Modern Beach Villa",
    location: "Malibu, California",
    price: 4800000,
    bedrooms: 5,
    bathrooms: 4,
    area: 520,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    category: "Villa",
    status: "For Sale",
    verified: true,
    featured: true,
  },
  {
    id: 3,
    title: "Executive Office Space",
    location: "Financial District, NYC",
    price: 850000,
    bedrooms: 0,
    bathrooms: 2,
    area: 200,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    category: "Office",
    status: "For Sale",
    verified: true,
    featured: false,
  },
  {
    id: 4,
    title: "Waterfront Apartment",
    location: "Miami Beach, FL",
    price: 1200000,
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    category: "Apartment",
    status: "For Sale",
    verified: true,
    featured: false,
  },
  {
    id: 5,
    title: "Premium Commercial Shop",
    location: "5th Avenue, NYC",
    price: 3200000,
    bedrooms: 0,
    bathrooms: 1,
    area: 150,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    category: "Shop",
    status: "For Sale",
    verified: true,
    featured: false,
  },
  {
    id: 6,
    title: "Development Land Plot",
    location: "Austin, Texas",
    price: 980000,
    bedrooms: 0,
    bathrooms: 0,
    area: 2000,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    category: "Land",
    status: "For Sale",
    verified: true,
    featured: false,
  },
]

export function Properties() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProperties = properties.filter((property) => {
    const matchesCategory = activeCategory === "All" || property.category === activeCategory
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="properties" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
            Property Marketplace
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Discover </span>
            <span className="gold-text">Premium Properties</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated collection of verified luxury properties. From stunning apartments to prime commercial spaces.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by location or property name..."
              className="pl-10 bg-card border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="border-primary/50 text-foreground">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {propertyCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "border-border text-foreground hover:bg-primary/10 hover:border-primary/50"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card 
              key={property.id} 
              className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                  {property.verified && (
                    <Badge variant="outline" className="bg-background/80 border-primary/50 text-primary">
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl font-bold gold-text">
                    ${property.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Title & Location */}
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{property.location}</span>
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center gap-1">
                      <BedDouble className="h-4 w-4 text-primary" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4 text-primary" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Maximize className="h-4 w-4 text-primary" />
                    <span>{property.area} m²</span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Request Meeting - $40
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
