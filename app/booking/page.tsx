"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, CreditCard, Check, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]

const meetingTypes = [
  { id: "property", label: "Property Tour", description: "Visit and explore a specific property", icon: Building2 },
  { id: "consultation", label: "General Consultation", description: "Discuss your real estate needs", icon: Calendar },
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [meetingType, setMeetingType] = useState("property")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyId: "",
    notes: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)

  // Generate next 14 days for date selection
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i + 1)
    return date
  })

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setBookingComplete(true)
    }, 2000)
  }

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="h-10 w-10 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Booking Confirmed!</h1>
              <p className="text-muted-foreground mb-6">
                Your meeting has been successfully scheduled.
              </p>
              
              <div className="bg-background rounded-xl p-6 mb-6 text-left">
                <h3 className="font-semibold text-foreground mb-4">Booking Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Booking ID:</span>
                    <span className="text-foreground font-medium">BND-{Date.now().toString().slice(-8)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="text-foreground">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="text-foreground">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="text-foreground">{meetingTypes.find(t => t.id === meetingType)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount Paid:</span>
                    <span className="text-primary font-bold">$40.00</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                A confirmation email has been sent to {formData.email}. Our team will contact you shortly to finalize the details.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/properties">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Browse Properties
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="border-border">
                    Return Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Book a <span className="gold-text">Meeting</span>
            </h1>
            <p className="text-muted-foreground">
              Schedule a property tour or consultation with our experts for just $40
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                  step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {step > s ? <Check className="h-5 w-5" /> : s}
                </div>
                {s < 3 && <div className={`w-16 h-1 ${step > s ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            {/* Step 1: Select Date & Time */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Select Meeting Type & Date
                  </h2>

                  {/* Meeting Type */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {meetingTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setMeetingType(type.id)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          meetingType === type.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <type.icon className={`h-6 w-6 mb-2 ${meetingType === type.id ? "text-primary" : "text-muted-foreground"}`} />
                        <h3 className="font-medium text-foreground">{type.label}</h3>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </button>
                    ))}
                  </div>

                  {/* Date Selection */}
                  <Label className="text-foreground mb-3 block">Choose a Date</Label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-6">
                    {dates.map((date) => {
                      const dateStr = date.toISOString().split('T')[0]
                      const isSelected = selectedDate === dateStr
                      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
                      const dayNum = date.getDate()
                      
                      return (
                        <button
                          key={dateStr}
                          onClick={() => setSelectedDate(dateStr)}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            isSelected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <span className="block text-xs">{dayName}</span>
                          <span className="block text-lg font-semibold">{dayNum}</span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Time Selection */}
                  {selectedDate && (
                    <>
                      <Label className="text-foreground mb-3 block flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        Choose a Time
                      </Label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-xl border text-center transition-all ${
                              selectedTime === time
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(2)}
                >
                  Continue
                </Button>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Your Information
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="mt-2 bg-background border-border"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="mt-2 bg-background border-border"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="mt-2 bg-background border-border"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {meetingType === "property" && (
                  <div>
                    <Label htmlFor="propertyId" className="text-foreground">Property ID (Optional)</Label>
                    <Input
                      id="propertyId"
                      placeholder="Enter property ID if you have one"
                      className="mt-2 bg-background border-border"
                      value={formData.propertyId}
                      onChange={(e) => setFormData({ ...formData, propertyId: e.target.value })}
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="notes" className="text-foreground">Additional Notes (Optional)</Label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Any specific requirements or questions?"
                    className="mt-2 w-full rounded-md bg-background border border-border p-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-border"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={!formData.name || !formData.email || !formData.phone}
                    onClick={() => setStep(3)}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment
                </h2>

                {/* Booking Summary */}
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-medium text-foreground mb-4">Booking Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Meeting Type:</span>
                      <span className="text-foreground">{meetingTypes.find(t => t.id === meetingType)?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="text-foreground">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="text-foreground">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Name:</span>
                      <span className="text-foreground">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="text-foreground">{formData.email}</span>
                    </div>
                    <div className="pt-3 border-t border-border flex justify-between">
                      <span className="font-semibold text-foreground">Total:</span>
                      <span className="font-bold gold-text text-xl">$40.00</span>
                    </div>
                  </div>
                </div>

                {/* Payment Form */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardName" className="text-foreground">Name on Card</Label>
                    <Input
                      id="cardName"
                      placeholder="Enter cardholder name"
                      className="mt-2 bg-background border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardNumber" className="text-foreground">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="mt-2 bg-background border-border"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry" className="text-foreground">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        className="mt-2 bg-background border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-foreground">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        className="mt-2 bg-background border-border"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-border"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handlePayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Pay $40.00"
                    )}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  Your payment is secured with 256-bit SSL encryption. By completing this purchase, you agree to our Terms of Service.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
