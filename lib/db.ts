import { neon } from "@neondatabase/serverless"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set")
}

export const sql = neon(process.env.DATABASE_URL)

// Type definitions matching the database schema
export type User = {
  id: number
  email: string
  full_name: string
  phone: string | null
  account_type: "buyer" | "seller" | "contractor"
  avatar_url: string | null
  is_verified: boolean
  created_at: string
  updated_at: string
}

export type Property = {
  id: number
  user_id: number | null
  title: string
  description: string | null
  property_type: string
  status: string
  price: string
  currency: string
  address: string
  city: string
  state: string | null
  country: string
  zip_code: string | null
  latitude: string | null
  longitude: string | null
  bedrooms: number | null
  bathrooms: number | null
  area_sqft: number | null
  year_built: number | null
  features: string[] | null
  images: string[] | null
  is_featured: boolean
  views_count: number
  created_at: string
  updated_at: string
}

export type Contractor = {
  id: number
  user_id: number | null
  company_name: string | null
  specialty: string
  description: string | null
  experience_years: number
  hourly_rate: string | null
  rating: string
  reviews_count: number
  is_verified: boolean
  is_available: boolean
  portfolio_images: string[] | null
  certifications: string[] | null
  service_areas: string[] | null
  created_at: string
  updated_at: string
  // joined from users
  full_name?: string
  avatar_url?: string | null
  phone?: string | null
}

export type Material = {
  id: number
  seller_id: number | null
  name: string
  description: string | null
  category: string
  brand: string | null
  price: string
  unit: string
  min_order_quantity: number
  stock_quantity: number
  images: string[] | null
  specifications: Record<string, unknown> | null
  is_available: boolean
  created_at: string
  updated_at: string
}

export type Booking = {
  id: number
  user_id: number | null
  property_id: number | null
  booking_number: string
  full_name: string
  email: string
  phone: string
  booking_date: string
  booking_time: string
  meeting_type: string
  notes: string | null
  amount: string
  payment_status: string
  payment_id: string | null
  status: string
  created_at: string
  updated_at: string
}
