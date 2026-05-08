"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ArrowLeft, Filter, ChevronDown, ShoppingCart, Plus, Minus, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const materials = [
  {
    id: 1,
    name: "Premium Cement",
    category: "Cement",
    price: 12.99,
    unit: "bag",
    inStock: true,
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&q=80",
    bulkDiscount: "10% off 50+ bags",
  },
  {
    id: 2,
    name: "Red Clay Bricks",
    category: "Bricks",
    price: 0.75,
    unit: "piece",
    inStock: true,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80",
    bulkDiscount: "15% off 1000+ pieces",
  },
  {
    id: 3,
    name: "Steel Reinforcement Bars",
    category: "Steel",
    price: 45.00,
    unit: "bundle",
    inStock: true,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
    bulkDiscount: "Bulk pricing available",
  },
  {
    id: 4,
    name: "Oak Hardwood Flooring",
    category: "Wood",
    price: 8.50,
    unit: "sq ft",
    inStock: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    bulkDiscount: "Free delivery 500+ sq ft",
  },
  {
    id: 5,
    name: "Granite Tiles",
    category: "Tiles",
    price: 15.00,
    unit: "sq ft",
    inStock: false,
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&q=80",
    bulkDiscount: "Coming soon",
  },
  {
    id: 6,
    name: "Exterior Paint - White",
    category: "Paint",
    price: 45.00,
    unit: "gallon",
    inStock: true,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80",
    bulkDiscount: "Buy 5, get 1 free",
  },
  {
    id: 7,
    name: "PVC Pipes 4inch",
    category: "Plumbing",
    price: 12.00,
    unit: "10ft",
    inStock: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    bulkDiscount: "Contractor pricing available",
  },
  {
    id: 8,
    name: "Electrical Wiring Kit",
    category: "Electrical",
    price: 89.00,
    unit: "kit",
    inStock: true,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80",
    bulkDiscount: "Professional discounts",
  },
  {
    id: 9,
    name: "Insulation Rolls",
    category: "Insulation",
    price: 35.00,
    unit: "roll",
    inStock: true,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
    bulkDiscount: "20% off bulk orders",
  },
  {
    id: 10,
    name: "Concrete Blocks",
    category: "Cement",
    price: 2.50,
    unit: "piece",
    inStock: true,
    image: "https://images.unsplash.com/photo-1590389336193-8eab4ef65a99?w=400&q=80",
    bulkDiscount: "Pallet pricing available",
  },
  {
    id: 11,
    name: "Ceramic Wall Tiles",
    category: "Tiles",
    price: 6.00,
    unit: "sq ft",
    inStock: true,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&q=80",
    bulkDiscount: "Designer collection",
  },
  {
    id: 12,
    name: "Plywood Sheets",
    category: "Wood",
    price: 55.00,
    unit: "sheet",
    inStock: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    bulkDiscount: "Grade A quality",
  },
]

const categories = ["All", "Cement", "Bricks", "Steel", "Wood", "Tiles", "Paint", "Plumbing", "Electrical", "Insulation"]

interface CartItem {
  id: number
  quantity: number
}

export default function MaterialsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFilters, setShowFilters] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (id: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id)
      if (existing) {
        return prev.map(item => 
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { id, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id)
      if (existing && existing.quantity > 1) {
        return prev.map(item => 
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      }
      return prev.filter(item => item.id !== id)
    })
  }

  const getCartQuantity = (id: number) => {
    return cart.find(item => item.id === id)?.quantity || 0
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => {
    const material = materials.find(m => m.id === item.id)
    return sum + (material?.price || 0) * item.quantity
  }, 0)

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          material.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || material.category === selectedCategory
    return matchesSearch && matchesCategory
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Building <span className="gold-text">Materials</span>
              </h1>
              <p className="text-muted-foreground">
                Quality materials for your construction and renovation projects
              </p>
            </div>
            
            {/* Cart Summary */}
            {totalItems > 0 && (
              <div className="bg-card border border-primary/30 rounded-xl p-4 flex items-center gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="font-medium">{totalItems} items</span>
                </div>
                <div className="text-foreground font-bold">${totalPrice.toFixed(2)}</div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Checkout
                </Button>
              </div>
            )}
          </div>

          {/* Search and Filters */}
          <div className="bg-card border border-border rounded-xl p-4 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search materials..."
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
                Categories
                <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </Button>

              {/* Desktop Category Filter */}
              <div className="hidden lg:flex gap-2 flex-wrap">
                {categories.slice(0, 6).map((category) => (
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

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mt-4 pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-2">Category</p>
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
            )}
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing <span className="text-primary font-medium">{filteredMaterials.length}</span> materials
          </p>

          {/* Materials Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMaterials.map((material) => (
              <div
                key={material.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={material.image}
                    alt={material.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                    {material.category}
                  </Badge>
                  {!material.inStock && (
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {material.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl font-bold gold-text">${material.price.toFixed(2)}</span>
                    <span className="text-muted-foreground text-sm">/{material.unit}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Package className="h-4 w-4" />
                    <span>{material.bulkDiscount}</span>
                  </div>

                  {/* Add to Cart */}
                  {material.inStock && (
                    <div className="flex items-center gap-2">
                      {getCartQuantity(material.id) > 0 ? (
                        <div className="flex items-center gap-2 flex-1">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-border"
                            onClick={() => removeFromCart(material.id)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="flex-1 text-center font-medium">
                            {getCartQuantity(material.id)}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-border"
                            onClick={() => addToCart(material.id)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          onClick={() => addToCart(material.id)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredMaterials.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No materials found matching your criteria.</p>
              <Button
                className="mt-4 bg-primary text-primary-foreground"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
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
