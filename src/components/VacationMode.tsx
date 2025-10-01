import { Plane, Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VacationMode = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-light p-2 rounded-lg">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Modo Vacaciones</span>
              </div>
              
              <h2 className="text-4xl font-bold leading-tight">
                Viaja sin preocupaciones, tus plantas están 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> protegidas</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                ¿Te vas de viaje? El modo vacaciones de EcoSense asegura que tus plantas reciban el cuidado óptimo mientras estás fuera, 
                con actualizaciones en tiempo real y alertas de emergencia enviadas directamente a tu teléfono.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ciclos de cuidado extendidos</h4>
                  <p className="text-muted-foreground">Ajusta automáticamente los horarios de riego y alimentación para períodos más largos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Smartphone className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Monitoreo remoto y alertas</h4>
                  <p className="text-muted-foreground">Mantente conectado con tus plantas sin importar dónde estés en el mundo</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-hero hover:bg-primary-hover shadow-soft hover:shadow-glow transition-all duration-300">
              Más información sobre el modo vacaciones
            </Button>
          </div>

          {/* Right content - Feature showcase */}
          <div className="relative animate-scale-in">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-large">
              <div className="space-y-6">
                {/* Mock mobile interface */}
                <div className="bg-background rounded-xl p-6 shadow-medium">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Modo Vacaciones Activo</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm text-success">En línea</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Duración</span>
                      <span className="font-medium">7 días restantes</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Próximo riego</span>
                      <span className="font-medium">Mañana, 9:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Estado de la planta</span>
                      <span className="font-medium text-success">Saludable</span>
                    </div>
                  </div>
                </div>

                {/* Notification examples */}
                <div className="space-y-3">
                  <div className="bg-primary-light/50 border-l-4 border-primary p-3 rounded-r-lg">
                    <p className="text-sm font-medium">Planta regada con éxito</p>
                    <p className="text-xs text-muted-foreground">Hace 2 horas</p>
                  </div>
                  <div className="bg-accent/50 border-l-4 border-success p-3 rounded-r-lg">
                    <p className="text-sm font-medium">Todos los sistemas óptimos</p>
                    <p className="text-xs text-muted-foreground">Chequeo diario completo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};