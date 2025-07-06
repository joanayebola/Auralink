import CTASection from '@/components/CTA'
import DemoSection from '@/components/DemoSection'
import FAQSection from '@/components/FAQ'
import FeatureDiagram from '@/components/FeatureDiagram'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureDiagram />
      <DemoSection />
      <Testimonials />
      <FAQSection />
      <CTASection/>
      <Footer />
    </div>
  )
}

export default page
