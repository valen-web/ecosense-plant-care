import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ecosense-hero.jpg";

export const Hero = () => {

  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('productos');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                La maceta inteligente que 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> cuida</span> de tus plantas por ti
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Tus plantas siempre saludables, con el mínimo esfuerzo. EcoSense detecta lo que tu planta necesita y lo hace por ti.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleScrollToProducts}
                  size="lg"
                  className="bg-gradient-hero hover:bg-primary-hover shadow-soft hover:shadow-glow transition-all duration-300"
                >
                  Comprar ahora
                </Button>
                <Button 
                  onClick={handleScrollToProducts}
                  variant="outline"
                  size="lg"
                  className="transition-all duration-300"
                >
                  Ver productos
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Envío gratis en pedidos superiores a 50€
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">1000+</span> clientes satisfechos
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">IA avanzada</span> de cuidado
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">100%</span> automatizado
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Maceta Inteligente EcoSense - Sistema de cuidado de plantas con IA"
                className="w-full h-auto rounded-2xl shadow-large hover-lift"
              />
              {/* Floating indicators */}
              <div className="absolute top-6 right-6 bg-card/80 backdrop-blur-sm rounded-lg p-3 shadow-medium animate-glow-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Planta saludable</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-card/80 backdrop-blur-sm rounded-lg p-3 shadow-medium">
                <div className="text-sm">
                  <div className="font-medium mb-1">Cuidado automático</div>
                  <div className="text-muted-foreground">Próximo riego en 2 días</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};