import { Palette, Grid, Star } from "lucide-react";

export const DesignShowcase = () => {
  const designFeatures = [
    "Estética minimalista",
    "Materiales premium",
    "Múltiples opciones de color",
    "Componentes modulares",
    "Diseño eficiente en espacio",
    "Indicadores LED de estado"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Design grid mockup */}
          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              {/* Main design showcase */}
              <div className="col-span-2 bg-gradient-card p-8 rounded-2xl shadow-medium">
                <div className="aspect-video bg-muted/30 rounded-xl mb-4 flex items-center justify-center">
                  <Palette className="h-12 w-12 text-muted-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Diseño Premium</h4>
                <p className="text-sm text-muted-foreground">Fusiona perfectamente tecnología con naturaleza</p>
              </div>
              
              {/* Modular showcase */}
              <div className="bg-gradient-card p-6 rounded-xl shadow-soft">
                <div className="bg-primary-light p-3 rounded-lg mb-3 w-fit">
                  <Grid className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-medium text-sm mb-2">Sistema Modular</h4>
                <p className="text-xs text-muted-foreground">Conecta múltiples macetas</p>
              </div>
              
              {/* Premium materials */}
              <div className="bg-gradient-card p-6 rounded-xl shadow-soft">
                <div className="bg-primary-light p-3 rounded-lg mb-3 w-fit">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-medium text-sm mb-2">Calidad Premium</h4>
                <p className="text-xs text-muted-foreground">Materiales de alta calidad</p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                No solo funcional,
                <span className="bg-gradient-hero bg-clip-text text-transparent"> bellamente diseñado</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                EcoSense no es solo una maceta inteligente, es un elemento decorativo premium que realza tu espacio 
                mientras proporciona tecnología de cuidado de plantas de vanguardia.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {designFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary-light/50 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">Red Modular</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Conecta múltiples macetas EcoSense para crear un ecosistema de jardín sincronizado. 
                Gestiona todas tus plantas desde una sola interfaz de aplicación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};