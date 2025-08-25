"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Loader2, Check } from 'lucide-react'

import ShaderBackground from "./shader-background"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Button } from "./ui/button"

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
})

type FormValues = z.infer<typeof formSchema>

export default function CallToActionSection() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  })

  const onSubmit = (values: FormValues) => {
    setFormState('loading');
    console.log("Simulating form submission with values:", values);
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        setFormState('idle');
        form.reset();
      }, 2000);
    }, 2000);
  }

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <ShaderBackground />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div
          className="relative p-8 sm:p-12 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 text-center"
          style={{ filter: "url(#glass-effect)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex flex-col items-center justify-center h-full min-h-[300px]"
              >
                <Check className="w-16 h-16 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-light text-white">¡Mensaje Enviado!</h3>
                <p className="text-white/70 mt-2">Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
              </motion.div>
            ) : (
              <motion.div key="form">
                <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                  ¿Listo para transformar tu negocio?
                </h2>
                <p className="max-w-2xl mx-auto mt-4 text-base font-light text-white/70">
                  Completa el formulario y uno de nuestros especialistas se pondrá en contacto para agendar una consulta gratuita.
                </p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/80">Nombre</Label>
                      <Input id="name" {...form.register("name")} placeholder="Tu nombre completo" className="bg-white/5 border-white/20 text-white placeholder:text-white/40" />
                      {form.formState.errors.name && <p className="text-red-400 text-xs pt-1">{form.formState.errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/80">Email</Label>
                      <Input id="email" {...form.register("email")} placeholder="tu@email.com" className="bg-white/5 border-white/20 text-white placeholder:text-white/40" />
                      {form.formState.errors.email && <p className="text-red-400 text-xs pt-1">{form.formState.errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white/80">Empresa (Opcional)</Label>
                    <Input id="company" {...form.register("company")} placeholder="El nombre de tu empresa" className="bg-white/5 border-white/20 text-white placeholder:text-white/40" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/80">¿Cómo podemos ayudarte?</Label>
                    <Textarea id="message" {...form.register("message")} placeholder="Describe brevemente tu proyecto o desafío..." className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[120px]" />
                    {form.formState.errors.message && <p className="text-red-400 text-xs pt-1">{form.formState.errors.message.message}</p>}
                  </div>
                  <div className="text-center pt-4">
                    <Button type="submit" disabled={formState === 'loading'} className="px-8 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer w-48">
                      {formState === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Enviar Consulta'}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
