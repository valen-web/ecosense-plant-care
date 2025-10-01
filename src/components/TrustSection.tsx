import { Users, Lightbulb, Heart } from "lucide-react";

export const TrustSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Construyendo el futuro de la 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> jardinería inteligente</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Estamos construyendo la próxima generación de tecnología de jardinería inteligente. 
                Únete a nuestra comunidad y descubre cómo cuidar tus plantas nunca ha sido tan fácil.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-primary-light p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Impulsado por la Comunidad</h3>
                <p className="text-muted-foreground">
                  Construido con feedback de apasionados de las plantas como tú
                </p>
              </div>

              <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-primary-light p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Innovación Primero</h3>
                <p className="text-muted-foreground">
                  Tecnología de IA y sensores de vanguardia para un cuidado superior
                </p>
              </div>

              <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="bg-primary-light p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Hecho con Amor</h3>
                <p className="text-muted-foreground">
                  Diseñado por amantes de las plantas, para amantes de las plantas
                </p>
              </div>
            </div>

            <div className="bg-gradient-card p-8 rounded-2xl shadow-medium mt-16 max-w-2xl mx-auto">
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "Finalmente, una maceta inteligente que realmente entiende las plantas. Los diagnósticos de IA detectaron problemas 
                que nunca habría notado. ¡Mis plantas nunca han estado más saludables!"
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">MG</span>
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">María González</div>
                  <div className="text-xs text-muted-foreground">Cliente Verificado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};