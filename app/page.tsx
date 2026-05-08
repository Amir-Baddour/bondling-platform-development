import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Properties } from "@/components/properties"
import { Contractors } from "@/components/contractors"
import { Materials } from "@/components/materials"
import { MeetingBooking } from "@/components/meeting-booking"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Properties />
      <Contractors />
      <Materials />
      <MeetingBooking />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
