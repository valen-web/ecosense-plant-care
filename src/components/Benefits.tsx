import { Droplets, Smartphone, Leaf, Palette } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Riego y fertilización automáticos",
    description: "Sistema de doble tanque que proporciona riego y nutrición precisos según las necesidades de tu planta en tiempo real."
  },
  {
    icon: Smartphone,
    title: "Sensores avanzados con datos en tiempo real",
    description: "Monitorea humedad, temperatura, luz y niveles de pH con actualizaciones instantáneas en tu smartphone."
  },
  {
    icon: Leaf,
    title: "Control total desde tu app", 
    description: "Diagnósticos de IA, recordatorios de cuidado y consejos de expertos entregados directamente en tu teléfono."
  },
  {
    icon: Palette,
    title: "Diseño premium y personalizable",
    description: "Diseño modular y estético que complementa tu hogar mientras mantiene tus plantas prósperas."
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            ¿Por qué elegir <span className="bg-gradient-hero bg-clip-text text-transparent">EcoSense</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnología avanzada con diseño elegante para el cuidado de plantas sin esfuerzo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-6 rounded-2xl shadow-soft hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-light p-3 rounded-xl w-fit mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="font-semibold text-lg mb-3 leading-tight">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};