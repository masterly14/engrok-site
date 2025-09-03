import React from 'react';
import Link from 'next/link';

const successStories = [
  {
    logo: '/placeholder-logo-1.svg',
    metric: '+250%',
    metricDescription: 'Incremento en Tasa de Conversión',
    title: 'Optimización de E-commerce con IA',
    description: 'Implementamos un motor de recomendaciones personalizado que potenció las ventas y mejoró la experiencia del cliente.',
    link: '/casos-estudio/karolai',
  },
  {
    logo: '/placeholder-logo-2.svg',
    metric: '-95%',
    metricDescription: 'Error en gestión de inventario',
    title: 'Digitalización Holística de Autovidrios VF',
    description: 'Desarrollamos un sistema digital holístico que abarca desde su página web hasta la gestión de ventas, inventario y comunicación interna con IA.',
    link: '/casos-estudio/autovidrios-vf',
  },
]

const SuccessCard = ({ logo, metric, metricDescription, title, description, link }: (typeof successStories)[0]) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
        <div className="flex-grow">
            <div className="mb-4">
                <p className="text-5xl font-bold text-emerald-500 mb-1">{metric}</p>
                <p className="text-sm font-medium text-gray-600">{metricDescription}</p>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{description}</p>
        </div>
        <Link href={link} className="font-semibold text-sm text-emerald-600 hover:text-emerald-500 group mt-auto">
            Ver caso de estudio
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1">&rarr;</span>
        </Link>
    </div>
)


export default function SuccessStories() {
  return (
    <section id="casos-exito" className="bg-gray-50 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                Resultados, no solo promesas.
            </h2>
            <p className="max-w-xl mt-4 text-base font-light text-gray-600">
                Estos son algunos ejemplos de cómo hemos transformado negocios a través de la tecnología y la ingeniería de IA.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <SuccessCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  )
}
