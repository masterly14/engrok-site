"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import OnboardingProcess from "@/components/onboarding-process"
import PulsingCircle from "@/components/pulsing-circle"
import ServicesSection from "@/components/services-section"
import ShaderBackground from "@/components/shader-background"
import SuccessStories from "@/components/success-stories"
import CtaSection from "@/components/cta-section"

export default function ShaderShowcase() {
  return (
    <main>
        <ShaderBackground />
        <div className="relative z-10">
            <Header />
            <div className="min-h-screen flex items-end">
                <HeroContent />
            </div>
            <ServicesSection />
            <SuccessStories />
            <OnboardingProcess />
            <CtaSection />
        </div>
        <PulsingCircle /> 
    </main>
  )
}
