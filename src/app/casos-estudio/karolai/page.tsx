import Header from "@/components/header";
import ShaderBackground from "@/components/shader-background";
import Link from "next/link";
import React from 'react';

// --- Sub-components for the Case Study Page ---

const KarolAILogo = () => (
    <svg className="w-24 h-24 mb-6 text-white mx-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 15L24 6L33 15V33L24 42L15 33V15Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 24L33 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 24V42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 24L15 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 33L24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CaseStudyHeader = () => (
    <div className="relative pt-24 pb-32 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <KarolAILogo />
            <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                KarolAI: Automatización Inteligente de Comunicaciones
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg font-light text-white/80">
                Cómo diseñamos y construimos una plataforma SaaS escalable que revolucionó la interacción con clientes para miles de empresas.
            </p>
        </div>
    </div>
);

const TechStack = () => {
    const technologies = [
        "React", "Next.js", "TypeScript", "Tailwind CSS",
        "Node.js", "Express", "PostgreSQL", "Prisma",
        "AWS Lambda", "S3", "EC2", "Docker"
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
        { value: "+10,000", label: "Conversaciones mensuales automatizadas" },
        { value: "80%", label: "Tasa de resolución en primer contacto" },
        { value: "30%", label: "Reducción en costos operativos" },
        { value: "+500", label: "Horas de trabajo ahorradas al mes" }
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
            “Implementamos la plataforma desarrollada por Engrok y automatizamos el 80% de nuestras consultas por WhatsApp. Nuestro equipo ahora se enfoca en cierres de ventas. Increíble.”
        </blockquote>
        <cite className="mt-6 block not-italic">
            <p className="font-semibold">Lucía Fernández</p>
            <p className="text-sm opacity-80">Directora de Operaciones, InmoGlobal</p>
        </cite>
    </div>
);

const CallToAction = () => (
    <div className="my-20 text-center">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-light text-gray-900 tracking-tight">
                ¿Listo para transformar tu negocio?
            </h2>
            <p className="mt-4 text-base text-gray-600">
                Hablemos de cómo podemos aplicar estas mismas estrategias y tecnologías para resolver tus desafíos.
            </p>
            <div className="mt-8">
                <button className="px-8 py-3 rounded-full bg-emerald-600 text-white font-normal text-sm transition-all duration-200 hover:bg-emerald-500 cursor-pointer">
                    Agenda una Consulta Gratuita
                </button>
            </div>
        </div>
    </div>
);

const CaseStudyContent = () => (
    <article className="max-w-4xl mx-auto py-16 px-6 lg:px-8 text-gray-700 font-light text-lg space-y-6">
        <h2 className="text-3xl font-light text-gray-900">El Desafío: Escalar la Comunicación Sin Perder el Toque Humano</h2>

        <Link href="https://karolai.com" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 transition-colors mb-4 underline">Link a la página web de KarolAI</Link>
        <p> 
            KarolAI, una startup innovadora en el sector de la comunicación como servicio (CaaS), se acercó a Engrok con una visión ambiciosa: crear una plataforma SaaS que permitiera a las empresas automatizar las conversaciones con sus clientes en WhatsApp y canales de voz, utilizando agentes de IA ultra-realistas. El desafío era multifacético y complejo. Necesitaban una solución que fuera robusta, escalable y, sobre todo, increíblemente fácil de usar para clientes no técnicos.
        </p>
        <ul className="list-disc pl-6 space-y-2">
            <li><strong>Altos Volúmenes de Interacción:</strong> Las empresas cliente estaban gestionando miles de conversaciones diarias manualmente, lo que generaba cuellos de botella y agotamiento en los equipos de soporte.</li>
            <li><strong>Disponibilidad 24/7:</strong> La necesidad de ofrecer atención al cliente fuera del horario laboral era una demanda creciente del mercado que no podían satisfacer.</li>
            <li><strong>Personalización a Escala:</strong> Las soluciones existentes ofrecían respuestas genéricas. KarolAI quería que cada interacción se sintiera personal y contextual, como si estuviera siendo manejada por un humano experto.</li>
            <li><strong>Infraestructura Inexistente:</strong> Partían de cero. Necesitaban una arquitectura de nube segura, escalable y costo-efectiva capaz de soportar miles de conversaciones concurrentes en tiempo real.</li>
        </ul>

        <MetricsHighlight />

        <h2 className="text-3xl font-light text-gray-900">La Solución: Una Plataforma de Orquestación de IA</h2>
        <p>
            Nuestro equipo de ingenieros y arquitectos de software trabajó en estrecha colaboración con KarolAI para diseñar y construir una plataforma integral desde cero. En lugar de simplemente crear un chatbot, construimos un ecosistema completo para la orquestación de la comunicación inteligente.
        </p>
        <ol className="list-decimal pl-6 space-y-4">
            <li>
                <strong>Constructor de Flujos Visual "No-Code":</strong> Desarrollamos una interfaz de arrastrar y soltar utilizando React y la librería <a href="#" className="text-emerald-600 hover:text-emerald-500">React Flow</a>, permitiendo a los usuarios diseñar flujos de conversación complejos sin escribir una sola línea de código. Cada nodo en el flujo podía realizar acciones, desde enviar un mensaje hasta integrarse con una API externa.
            </li>
            <li>
                <strong>Motor de IA y NLU:</strong> Integramos múltiples proveedores de IA, incluyendo los modelos más avanzados de OpenAI (GPT-4) y Google (Dialogflow), para el procesamiento de lenguaje natural (NLU). Creamos una capa de abstracción que permitía a KarolAI cambiar de proveedor sin afectar los flujos de los clientes, asegurando flexibilidad y optimización de costos.
            </li>
            <li>
                <strong>Integraciones Poderosas:</strong> Construimos un sistema de "conectores" que permitía a la plataforma interactuar con herramientas de terceros como <a href="#" className="text-emerald-600 hover:text-emerald-500">Google Calendar</a> (para agendar citas), <a href="#" className="text-emerald-600 hover:text-emerald-500">Hubspot</a> (para actualizar CRM) y <a href="#" className="text-emerald-600 hover:text-emerald-500">Google Sheets</a> (para registrar datos), enriqueciendo las conversaciones y automatizando procesos de negocio completos.
            </li>
            <li>
                <strong>Infraestructura Basada en Eventos:</strong> Diseñamos una arquitectura de microservicios sobre AWS. Utilizamos AWS Lambda para funciones sin servidor que manejaban las conversaciones, Amazon S3 para el almacenamiento de activos y una base de datos PostgreSQL en RDS para la persistencia de datos, asegurando una escalabilidad casi infinita y un modelo de costos de pago por uso.
            </li>
        </ol>

        <TechStack />

        <h2 className="text-3xl font-light text-gray-900">Implementación y Colaboración Ágil</h2>
        <p>
            El proyecto se ejecutó en un ciclo de desarrollo ágil de 6 meses, dividido en sprints de dos semanas. Esta metodología nos permitió tener ciclos de retroalimentación constantes con el equipo de KarolAI, asegurando que el producto final estuviera perfectamente alineado con su visión y las necesidades del mercado.
        </p>
        <p>
            Utilizamos <a href="#" className="text-emerald-600 hover:text-emerald-500">Docker</a> para la contenedorización de los microservicios, lo que nos permitió mantener la coherencia entre los entornos de desarrollo, pruebas y producción. La integración y el despliegue continuo (CI/CD) se gestionaron a través de <a href="#" className="text-emerald-600 hover:text-emerald-500">GitHub Actions</a>, automatizando las pruebas y los despliegues y permitiendo a nuestro equipo centrarse en la entrega de valor.
        </p>

        <Testimonial />

        <h2 className="text-3xl font-light text-gray-900">Conclusión: De la Visión a la Realidad</h2>
        <p>
            La colaboración entre Engrok y KarolAI resultó en una plataforma robusta y de vanguardia que no solo cumplió con los requisitos iniciales, sino que también sentó las bases para el crecimiento futuro. KarolAI ahora ofrece una solución líder en el mercado que permite a las empresas de todos los tamaños automatizar sus comunicaciones de manera efectiva, personalizada y escalable. Este proyecto es un testimonio de cómo la ingeniería de software experta y una visión clara pueden transformar una idea ambiciosa en un producto exitoso y generador de valor.
        </p>
    </article>
);


// --- Main Page Component ---

export default function KarolAICaseStudyPage() {
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
