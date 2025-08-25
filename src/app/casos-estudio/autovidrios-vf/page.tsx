"use client";

import Header from "@/components/header";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from 'react';

const ShaderBackground = dynamic(
  () => import("@/components/shader-background"),
  { ssr: false }
);

// --- Sub-components for the Case Study Page ---

const AutovidriosVFLogo = () => (
    <svg className="w-24 h-24 mb-6 text-white mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24L32 12L56 24V40L32 52L8 40V24Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 24L32 36L56 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 52V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CaseStudyHeader = () => (
    <div className="relative pt-24 pb-32 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <AutovidriosVFLogo />
            <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                Autovidrios VF: Digitalización Integral para el Líder Automotriz
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg font-light text-white/80">
                La creación de un ecosistema digital holístico: desde la gestión de inventario y ventas hasta una IA para comunicación interna.
            </p>
        </div>
    </div>
);

const TechStack = () => {
    const technologies = [
        "Next.js", "TypeScript", "Tailwind CSS",
        "NestJS", "PostgreSQL", "Prisma ORM",
        "OpenAI API", "LangChain", "Vercel", "AWS (ECS, RDS)"
    ];

    return (
        <div className="my-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Stack Tecnológico</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {technologies.map(tech => (
                    <span key={tech} className="inline-block bg-gray-100 border border-gray-200/80 rounded-full px-4 py-1.5 text-sm font-medium text-gray-700">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

const MetricsHighlight = () => {
    const metrics = [
        { value: "-95%", label: "Errores en gestión de inventario" },
        { value: "+40%", label: "Eficiencia en el ciclo de ventas" },
        { value: "+300%", label: "Leads generados desde la nueva web" },
        { value: "-50%", label: "Tiempo en coordinación interna" }
    ];

    return (
        <div className="my-16 sm:my-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {metrics.map(metric => (
                    <div key={metric.label}>
                        <p className="text-4xl font-bold text-emerald-500">{metric.value}</p>
                        <p className="mt-1 text-sm text-gray-600">{metric.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Testimonial = () => (
    <div className="my-16 bg-emerald-500/10 border-l-4 border-emerald-500 text-emerald-900 p-8 rounded-r-lg">
        <blockquote className="text-xl font-light leading-relaxed italic">
            “Engrok no solo nos dio una web, transformaron nuestra operación. El inventario ahora es preciso, las ventas son más rápidas y el chatbot de IA ha eliminado horas de llamadas internas. Es como si hubiéramos saltado 10 años hacia el futuro.”
        </blockquote>
        <cite className="mt-6 block not-italic">
            <p className="font-semibold">Orlando Varón Quiroga</p>
            <p className="text-sm opacity-80">Gerente y Fundador, Autovidrios VF</p>
        </cite>
    </div>
);

const CallToAction = () => (
    <div className="my-20 text-center">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-light text-gray-900 tracking-tight">
                ¿Tu empresa necesita una transformación similar?
            </h2>
            <p className="mt-4 text-base text-gray-600">
                Permítenos analizar tus procesos y construir la solución digital que necesitas para escalar.
            </p>
            <div className="mt-8">
                <button className="px-8 py-3 rounded-full bg-emerald-600 text-white font-normal text-sm transition-all duration-200 hover:bg-emerald-500 cursor-pointer">
                    Solicitar un Análisis Gratuito
                </button>
            </div>
        </div>
    </div>
);

const CaseStudyContent = () => (
    <article className="max-w-4xl mx-auto py-16 px-6 lg:px-8 text-gray-700 font-light text-lg space-y-6">
        
        <h2 className="text-3xl font-light text-gray-900">El Desafío: Operaciones Fragmentadas en un Mercado Exigente</h2>
        <Link href="https://autovidriosvf.com" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 transition-colors mb-4 underline">Link a la página web de Autovidrios VF</Link>
        <p>
            Autovidrios VF, un líder regional en la distribución e instalación de vidrios para vehículos, operaba con sistemas tradicionales que comenzaban a limitar su crecimiento. Su gestión de inventario dependía de hojas de cálculo manuales, el proceso de ventas estaba desconectado del stock real y la comunicación entre el personal de ventas, el almacén y los técnicos era lenta y propensa a errores. Necesitaban un salto tecnológico para unificar sus operaciones y mantener su ventaja competitiva.
        </p>
        <ul className="list-disc pl-6 space-y-2">
            <li><strong>Gestión de Inventario Manual:</strong> El control de un catálogo de miles de piezas de vidrio era propenso a errores humanos, resultando en discrepancias de stock, pérdidas de ventas por falta de producto y exceso de capital inmovilizado en sobre-stock.</li>
            <li><strong>Proceso de Ventas Ineficiente:</strong> Los vendedores no tenían visibilidad en tiempo real del inventario, lo que requería múltiples llamadas y confirmaciones para cerrar una venta, retrasando el servicio al cliente.</li>
            <li><strong>Comunicación Interna Lenta:</strong> La coordinación para la instalación de un vidrio requería una cadena de llamadas telefónicas entre departamentos, generando demoras y una mala experiencia tanto para el empleado como para el cliente.</li>
            <li><strong>Presencia Online Desactualizada:</strong> Su página web era un simple folleto digital que no generaba clientes potenciales ni reflejaba la calidad de su servicio.</li>
        </ul>

        <MetricsHighlight />

        <h2 className="text-3xl font-light text-gray-900">La Solución: Un Ecosistema Digital Unificado</h2>
        <p>
            Engrok propuso una solución holística: desarrollar un sistema digital a medida que centralizara todas las operaciones de Autovidrios VF, desde el primer contacto con el cliente hasta la gestión interna.
        </p>
        <ol className="list-decimal pl-6 space-y-4">
            <li>
                <strong>Sistema de Gestión (ERP/CRM Personalizado):</strong> Creamos una aplicación web interna robusta que se convirtió en el cerebro de la operación. Este sistema integra un CRM para el seguimiento de clientes, un módulo de ventas que se conecta en tiempo real con el inventario y un sistema de gestión de almacenes (SGA) que permite llevar un control exacto de cada pieza.
            </li>
            <li>
                <strong>Página Web y Portal B2B:</strong> Rediseñamos completamente su presencia en línea con un sitio web moderno y optimizado para la conversión. Adicionalmente, desarrollamos un portal privado para clientes mayoristas, permitiéndoles consultar stock y realizar pedidos de forma autónoma.
            </li>
            <li>
                <strong>IA para Comunicación Interna:</strong> Implementamos un agente de IA conversacional, accesible a través de una aplicación interna, que responde instantáneamente a preguntas como: "¿Tenemos en stock el parabrisas para un Toyota Corolla 2022?", "¿Cuál es el estado del pedido 4582?" o "¿Qué técnico está disponible para una instalación en la sede norte?". Esto eliminó la fricción comunicacional entre equipos.
            </li>
        </ol>

        <TechStack />

        <h2 className="text-3xl font-light text-gray-900">Implementación: Migración y Adopción por Fases</h2>
        <p>
            El proyecto se abordó por fases para garantizar una transición suave y una alta tasa de adopción por parte del personal de Autovidrios VF. Comenzamos con el sistema de inventario, migrando los datos de las hojas de cálculo a la nueva base de datos PostgreSQL. Luego, desarrollamos el módulo de ventas y finalmente, la página web y el agente de IA. Realizamos múltiples talleres de capacitación para asegurar que todo el equipo se sintiera cómodo y aprovechara al máximo las nuevas herramientas.
        </p>

        <Testimonial />

        <h2 className="text-3xl font-light text-gray-900">Conclusión: Tecnología como Motor de Crecimiento</h2>
        <p>
            La transformación digital de Autovidrios VF es un claro ejemplo de cómo la tecnología a medida puede resolver problemas operativos complejos. Al unificar sus sistemas y automatizar la comunicación, no solo mejoraron su eficiencia y redujeron costos, sino que también elevaron la calidad de su servicio al cliente, consolidando su posición de liderazgo en el mercado.
        </p>
    </article>
);

// --- Main Page Component ---

export default function AutovidriosVFCaseStudyPage() {
    return (
        <div className="bg-gray-100">
            <ShaderBackground />
            <div className="relative z-10">
                <Header />
                <CaseStudyHeader />
            </div>
            
            <div className="relative bg-white rounded-t-3xl -mt-16 z-20">
                <CaseStudyContent />
            </div>
            <div className="bg-white">
                 <CallToAction />
            </div>
        </div>
    );
}
