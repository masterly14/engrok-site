"use client"

import { FileText, Search, Microscope, BarChart, HardDrive, DraftingCompass, Presentation } from "lucide-react"

const processSteps = [
  {
    icon: <Search size={24} className="text-emerald-500" />,
    title: "1. Descubrimiento General",
    description: "Iniciamos con una sesión inmersiva para entender tus objetivos de negocio, desafíos y visión. Esta fase es crucial para alinear nuestras estrategias con tus expectativas.",
  },
  {
    icon: <FileText size={24} className="text-emerald-500" />,
    title: "2. Análisis de Antecedentes",
    description: "Recopilamos y analizamos la información clave: tu stack tecnológico actual, flujos de información, la estructura de tu equipo técnico y las herramientas que utilizas.",
  },
  {
    icon: <Microscope size={24} className="text-emerald-500" />,
    title: "3. Evaluación del Caso Específico",
    description: "Profundizamos en los detalles técnicos y operativos. Nuestro equipo evalúa las necesidades específicas para identificar las soluciones tecnológicas más adecuadas y eficientes.",
  },
  {
    icon: <BarChart size={24} className="text-emerald-500" />,
    title: "4. Propuesta de Soluciones",
    description: "Te presentamos una o varias soluciones tecnológicas evaluadas. Si no somos la mejor opción para tu caso, te lo diremos con total transparencia. Tu éxito es nuestra prioridad.",
  },
  {
    icon: <DraftingCompass size={24} className="text-emerald-500" />,
    title: "5. Planificación y Cotización",
    description: "Una vez elegida la solución, creamos un plan de proyecto detallado. Recibirás una cotización transparente con tiempos, costos y un cronograma claro.",
  },
  {
    icon: <Presentation size={24} className="text-emerald-500" />,
    title: "6. Demo, Feedback y Entrega",
    description: "Desarrollamos un prototipo o demo funcional para tu validación. Iteramos en base a tu feedback y, una vez aprobado, procedemos con el desarrollo final y la entrega.",
  },
]

export default function OnboardingProcess() {
  return (
    <section className="relative z-20 pt-24 pb-24 sm:pt-32 sm:pb-32">
      {/* Glassmorphic card styled like ServiceCard */}
      <div className="relative max-w-5xl mx-auto p-12 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
        <div>
          <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                  Nuestro Proceso de Colaboración
              </h2>
              <p className="max-w-xl mt-4 text-base font-light text-white/70">
                  Transparencia y metodología de principio a fin. Así es como convertimos tus ideas en soluciones tecnológicas exitosas.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0 mt-1">{step.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
