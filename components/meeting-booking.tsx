"use client"

import { useState } from "react"
import { Calendar, Clock, CreditCard, CheckCircle, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]

export function MeetingBooking() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleBook = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Handle payment
      setStep(4)
    }
  }

  return (
    <>
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <div className="text-center p-8 md:p-12 rounded-2xl border border-primary/30 bg-card animate-glow">
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-6">
              Premium Service
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gold-text">Request a Meeting</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a private property tour with our expert advisors. 
              Get personalized guidance for your real estate journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>60-Minute Sessions</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CreditCard className="h-5 w-5 text-primary" />
                <span>Secure Payment</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-6 animate-glow"
              onClick={() => setIsOpen(true)}
            >
              Book Your Meeting - Only $40
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="mt-4 text-sm text-muted-foreground">
              100% refundable if property is unavailable
            </p>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <Card className="w-full max-w-lg bg-card border-primary/30 relative">
            <button
              onClick={() => { setIsOpen(false); setStep(1); }}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>

            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {step === 4 ? (
                  <span className="gold-text">Booking Confirmed!</span>
                ) : (
                  <span className="text-foreground">Book Your Meeting</span>
                )}
              </CardTitle>
              
              {step < 4 && (
                <div className="flex justify-center gap-2 mt-4">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-8 h-1 rounded-full ${
                        s <= step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              )}
            </CardHeader>

            <CardContent className="space-y-6">
              {step === 1 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Select Date
                    </label>
                    <Input
                      type="date"
                      className="bg-input border-border"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleBook}
                    disabled={!selectedDate}
                  >
                    Continue
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Select Time
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          className={`p-2 rounded-lg border text-sm transition-colors ${
                            selectedTime === time
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-foreground hover:border-primary/50"
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleBook}
                    disabled={!selectedTime}
                  >
                    Continue
                  </Button>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Date</span>
                      <span className="text-foreground">{selectedDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Time</span>
                      <span className="text-foreground">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium pt-2 border-t border-border">
                      <span className="text-foreground">Total</span>
                      <span className="gold-text">$40.00</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Input placeholder="Full Name" className="bg-input border-border" />
                    <Input placeholder="Email Address" type="email" className="bg-input border-border" />
                    <Input placeholder="Phone Number" type="tel" className="bg-input border-border" />
                  </div>

                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleBook}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay $40 & Confirm
                  </Button>
                </>
              )}

              {step === 4 && (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Meeting Scheduled!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    You&apos;ll receive a confirmation email with all the details.
                  </p>
                  <div className="p-4 rounded-lg bg-muted/50 text-left space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Date</span>
                      <span className="text-foreground">{selectedDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Time</span>
                      <span className="text-foreground">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Confirmation #</span>
                      <span className="text-primary">BND-{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => { setIsOpen(false); setStep(1); setSelectedDate(""); setSelectedTime(""); }}
                  >
                    Done
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Sticky CTA Button (Mobile) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden">
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg animate-glow px-6"
          onClick={() => setIsOpen(true)}
        >
          Book Meeting - $40
        </Button>
      </div>
    </>
  )
}
