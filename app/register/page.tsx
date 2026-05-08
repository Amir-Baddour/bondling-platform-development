"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "buyer" as "buyer" | "seller" | "contractor",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate registration - replace with actual auth logic
    setTimeout(() => {
      setIsLoading(false)
      router.push("/login")
    }, 1500)
  }

  const accountTypes = [
    { id: "buyer", label: "Buyer", description: "Looking for properties" },
    { id: "seller", label: "Seller", description: "List your properties" },
    { id: "contractor", label: "Contractor", description: "Offer your services" },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Image/Branding */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-primary/20 via-background to-secondary/20 items-center justify-center p-12">
        <div className="max-w-lg text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-2xl overflow-hidden border-2 border-primary/30">
            <Image
              src="/images/logo.jpg"
              alt="The Bondling"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-3xl font-bold gold-text mb-4">
            Join The Bondling Community
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Create your account and unlock access to premium properties, verified contractors, and exclusive deals.
          </p>
          <div className="space-y-4 text-left max-w-sm mx-auto">
            {[
              "Access to 2,500+ premium properties",
              "Connect with 500+ verified contractors",
              "Browse 1,000+ building materials",
              "Book property tours for only $40",
              "Secure and trusted transactions",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-8 overflow-y-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <Link href="/" className="flex items-center justify-center gap-3 mb-8 lg:hidden">
            <Image
              src="/images/logo.jpg"
              alt="The Bondling"
              width={60}
              height={60}
              className="rounded"
            />
            <div>
              <span className="text-2xl font-bold text-primary">THE BONDLING</span>
              <p className="text-xs text-muted-foreground">Bonding. Building. Helping.</p>
            </div>
          </Link>
          
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Join thousands of satisfied clients
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-card border border-border rounded-xl px-6 py-8 shadow-lg">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Account Type Selection */}
              <div>
                <Label className="text-foreground mb-3 block">I am a</Label>
                <div className="grid grid-cols-3 gap-3">
                  {accountTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, accountType: type.id as typeof formData.accountType })}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        formData.accountType === type.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="block font-medium">{type.label}</span>
                      <span className="text-xs text-muted-foreground">{type.description}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground">First name</Label>
                  <div className="mt-2 relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="First name"
                      className="pl-10 bg-background border-border"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground">Last name</Label>
                  <div className="mt-2 relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Last name"
                      className="pl-10 bg-background border-border"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-foreground">Email address</Label>
                <div className="mt-2 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                    className="pl-10 bg-background border-border"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-foreground">Phone number</Label>
                <div className="mt-2 relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="pl-10 bg-background border-border"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <div className="mt-2 relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Create a password"
                    className="pl-10 pr-10 bg-background border-border"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <Label htmlFor="confirmPassword" className="text-foreground">Confirm password</Label>
                <div className="mt-2 relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    placeholder="Confirm your password"
                    className="pl-10 pr-10 bg-background border-border"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:text-primary/80">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:text-primary/80">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating account...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Create account
                    <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary hover:text-primary/80">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
