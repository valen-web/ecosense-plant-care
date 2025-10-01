import { Search, Settings, Heart, Bell } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Detecta",
    description: "Sensores avanzados monitorean continuamente el entorno y los indicadores de salud de tu planta."
  },
  {
    icon: Settings,
    title: "Ajusta",
    description: "La IA analiza los datos y ajusta automáticamente el riego, nutrientes y programas de cuidado."
  },
  {
    icon: Heart,
    title: "Cuida", 
    description: "Tu planta recibe cuidado óptimo las 24 horas sin requerir ningún esfuerzo de tu parte."
  },
  {
    icon: Bell,
    title: "Notifica",
    description: "Recibe actualizaciones, consejos y alertas en tu teléfono para estar conectado con el progreso de tu planta."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Cómo funciona <span className="bg-gradient-hero bg-clip-text text-transparent">EcoSense</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuidado de plantas simple, inteligente y completamente automatizado en cuatro pasos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/60 to-transparent transform -translate-y-1/2 z-0"></div>
                )}
                
                {/* Step circle */}
                <div className="relative z-10 bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-glow">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                {/* Step number */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-background border-2 border-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-primary">
                  {index + 1}
                </div>
              </div>

              <h3 className="font-semibold text-xl mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA after process */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-medium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Listo para revolucionar el cuidado de tus plantas?</h3>
            <p className="text-muted-foreground mb-6">
              Únete a miles de amantes de las plantas que ya han descubierto la jardinería sin esfuerzo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};