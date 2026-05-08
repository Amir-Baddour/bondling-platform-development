"use client"

import { useState } from "react"
import { Search, ShoppingCart, Package, Truck, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const materialCategories = ["All", "Cement", "Steel", "Bricks", "Electrical", "Plumbing", "Paint"]

const materials = [
  {
    id: 1,
    name: "Premium Portland Cement",
    category: "Cement",
    price: 12,
    unit: "bag",
    minOrder: 50,
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&q=80",
    inStock: true,
    brand: "UltraCrete",
  },
  {
    id: 2,
    name: "Reinforced Steel Bars",
    category: "Steel",
    price: 85,
    unit: "bundle",
    minOrder: 10,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    inStock: true,
    brand: "SteelMax",
  },
  {
    id: 3,
    name: "Red Clay Bricks",
    category: "Bricks",
    price: 0.45,
    unit: "piece",
    minOrder: 1000,
    image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=400&q=80",
    inStock: true,
    brand: "BrickWorks",
  },
  {
    id: 4,
    name: "Copper Electrical Wiring",
    category: "Electrical",
    price: 120,
    unit: "roll",
    minOrder: 5,
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&q=80",
    inStock: true,
    brand: "ElectroPro",
  },
  {
    id: 5,
    name: "PVC Plumbing Pipes",
    category: "Plumbing",
    price: 35,
    unit: "length",
    minOrder: 20,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
    inStock: true,
    brand: "FlowMaster",
  },
  {
    id: 6,
    name: "Interior Wall Paint",
    category: "Paint",
    price: 65,
    unit: "gallon",
    minOrder: 10,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80",
    inStock: true,
    brand: "ColorPro",
  },
]

export function Materials() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMaterials = materials.filter((material) => {
    const matchesCategory = activeCategory === "All" || material.category === activeCategory
    const matchesSearch = material.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="materials" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
            Materials Marketplace
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Quality </span>
            <span className="gold-text">Building Materials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Source premium construction materials from verified suppliers. Bulk orders, competitive pricing, and reliable delivery.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Package, title: "Bulk Orders", desc: "Volume discounts available" },
            { icon: Truck, title: "Fast Delivery", desc: "Direct to your site" },
            { icon: CheckCircle, title: "Quality Assured", desc: "Verified suppliers only" },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
            >
              <feature.icon className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search materials..."
            className="pl-10 bg-card border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {materialCategories.map((category) => (
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

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <Card 
              key={material.id} 
              className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Stock Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={material.inStock ? "bg-green-600 text-white" : "bg-red-600 text-white"}>
                    {material.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>

                {/* Category */}
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 border-primary/50 text-primary">
                    {material.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Brand */}
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {material.brand}
                </span>

                {/* Name */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {material.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold gold-text">${material.price}</span>
                  <span className="text-sm text-muted-foreground">/ {material.unit}</span>
                </div>

                {/* Min Order */}
                <p className="text-sm text-muted-foreground mb-4">
                  Min. Order: {material.minOrder} {material.unit}s
                </p>

                {/* CTAs */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
                    Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
            View All Materials
          </Button>
        </div>
      </div>
    </section>
  )
}
