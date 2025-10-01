import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const colors = [
  { name: "Blanco Moderno", hex: "#F8F9FA", textColor: "text-gray-900" },
  { name: "Verde Bosque", hex: "#2D5016", textColor: "text-white" },
  { name: "Terracota Clásico", hex: "#C65D3B", textColor: "text-white" },
  { name: "Gris Piedra", hex: "#6B7280", textColor: "text-white" },
  { name: "Negro Premium", hex: "#1F2937", textColor: "text-white" },
  { name: "Azul Océano", hex: "#1E40AF", textColor: "text-white" }
];

export const ProductSelector = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "¡Añadido al carrito! 🛒",
      description: `Maceta EcoSense en ${selectedColor.name} agregada correctamente.`
    });
  };

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              Elige tu <span className="bg-gradient-hero bg-clip-text text-transparent">EcoSense</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              El mismo producto inteligente, disponible en múltiples colores para tu hogar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Preview */}
            <div className="space-y-6 animate-scale-in">
              <div 
                className="aspect-square rounded-2xl shadow-large transition-all duration-300 hover:shadow-glow"
                style={{ backgroundColor: selectedColor.hex }}
              >
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className={`text-center ${selectedColor.textColor}`}>
                    <div className="text-2xl font-bold mb-2">Maceta EcoSense</div>
                    <div className="text-lg opacity-80">{selectedColor.name}</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Precio</span>
                  <span className="text-2xl font-bold">149€</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Envío</span>
                  <span className="text-success font-medium">Gratis (pedidos +50€)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Disponibilidad</span>
                  <span className="text-success font-medium">En stock</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="text-2xl font-bold mb-2">Maceta Inteligente EcoSense</h3>
                <p className="text-muted-foreground">
                  Todas las funciones inteligentes en el diseño que prefieras
                </p>
              </div>

              {/* Color Selection */}
              <div className="space-y-4">
                <label className="text-sm font-medium">Selecciona tu color:</label>
                <div className="grid grid-cols-3 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                        selectedColor.name === color.name
                          ? "border-primary shadow-glow"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div
                        className="w-full aspect-square rounded-md mb-2"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <div className="text-xs font-medium text-center">{color.name}</div>
                      {selectedColor.name === color.name && (
                        <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                          <Check className="h-3 w-3 text-primary-foreground" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success shrink-0" />
                  <span className="text-sm">Sensores de humedad, temperatura, luz y pH</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success shrink-0" />
                  <span className="text-sm">Riego y fertilización automáticos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success shrink-0" />
                  <span className="text-sm">Control total desde la app móvil</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success shrink-0" />
                  <span className="text-sm">Modo vacaciones hasta 30 días</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-success shrink-0" />
                  <span className="text-sm">Diagnósticos con IA incluidos</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-gradient-hero hover:bg-primary-hover shadow-soft hover:shadow-glow transition-all duration-300 text-lg py-6"
              >
                Añadir al carrito - 149€
              </Button>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Garantía 2 años</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Devolución 30 días</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
