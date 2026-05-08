import { Shield, Users, Building2, Award, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Shield,
    title: "Verified Properties",
    description: "Every listing is thoroughly verified by our expert team to ensure authenticity and quality.",
  },
  {
    icon: Users,
    title: "Trusted Contractors",
    description: "Connect with pre-screened contractors who have proven track records and verified credentials.",
  },
  {
    icon: Building2,
    title: "Quality Materials",
    description: "Source premium building materials from certified suppliers at competitive prices.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Our experienced advisors guide you through every step of your real estate journey.",
  },
]

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$2B+", label: "Properties Sold" },
  { value: "50+", label: "Expert Advisors" },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
              About The Bondling
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Building </span>
              <span className="gold-text">Trust & Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              The Bondling is your premier destination for luxury real estate solutions. 
              We connect property seekers with verified listings, trusted contractors, 
              and quality building materials—all under one sophisticated platform.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Admin-verified property listings",
                "Secure payment processing",
                "Dedicated meeting booking system",
                "Comprehensive contractor network",
                "Premium customer support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-card border border-border">
                  <span className="text-2xl font-bold gold-text">{stat.value}</span>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
