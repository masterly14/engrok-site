"use client"

import React from "react"

// Placeholder icons for a clean, abstract look
const AutomationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80 mb-4 h-8 w-8">
    <path d="M12 8V4M12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8ZM8 12H4M16 12H20M12 16V20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const DataAnalysisIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80 mb-4 h-8 w-8">
        <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
);

const CustomSoftwareIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80 mb-4 h-8 w-8">
        <path d="M8 8L3 12L8 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8L21 12L16 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const services = [
  {
    icon: <AutomationIcon />,
    title: "AI Engineering para optimizar procesos",
    description: "Trabajamos en entender el flujo de trabajo de tu empresa desde las raices, entender el como fluye la información es crucial para brindarte una solución de automatización utilizando inteligencia artificial. Hay muchos casos de uso; Servicio al cliente, Logística, Marketing, Ventas, etc. Investigamos que es lo que más te beneficia y te brindamos una solución de software impulado por IA a medida.",
  },
  {
    icon: <DataAnalysisIcon />,
    title: "Páginas web empresariales",
    description: "Diseñamos páginas web empresariales que no solo reflejan la identidad única de tu marca, sino que también destacan en un mercado competitivo. Nuestro enfoque se centra en crear experiencias digitales personalizadas que capturan la esencia de tu negocio, asegurando que cada visitante se convierta en un cliente potencial. Con un diseño intuitivo y tecnología de vanguardia, nuestras soluciones web están optimizadas para rendimiento, seguridad y escalabilidad, permitiéndote liderar en tu industria.",
  },
  {
    icon: <CustomSoftwareIcon />,
    title: "Software a Medida",
    description: "Desarrollamos soluciones de software personalizadas que se adaptan a las necesidades específicas de tu negocio. Nuestro equipo trabaja estrechamente contigo para entender tus requerimientos y crear aplicaciones que optimicen tus operaciones, mejoren la eficiencia y te den una ventaja competitiva en el mercado.",
  },
]

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div
    className="relative p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-white/30 hover:bg-black/20"
    style={{ filter: "url(#glass-effect)" }}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
    {icon}
    <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
    <p className="text-sm font-light text-white/70 leading-relaxed">{description}</p>
  </div>
)

export default function ServicesSection() {
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                Soluciones para Potenciar tu Crecimiento
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-base font-light text-white/70">
                Creamos herramientas que no solo resuelven problemas, sino que abren nuevas oportunidades e impulsan la innovación.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
