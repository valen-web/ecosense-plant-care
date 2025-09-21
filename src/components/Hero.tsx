import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import heroImage from "@/assets/ecosense-hero.jpg";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleEarlyAccess = () => {
    if (email) {
      // Here you would normally handle the signup
      console.log("Early access signup:", email);
      setEmail("");
    }
  };

  return (
    <section className="bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                The smart pot that 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> takes care</span> of your plants for you
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Your plant always healthy, with minimum effort. EcoSense detects what your plant needs and does it for you.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={handleEarlyAccess}
                  className="bg-gradient-hero hover:bg-primary-hover shadow-soft hover:shadow-glow transition-all duration-300"
                >
                  Join the waitlist
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Be among the first to try EcoSense. No spam, just updates.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> early adopters
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">AI-powered</span> plant care
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">100%</span> automated
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="EcoSense Smart Pot - AI-powered plant care system"
                className="w-full h-auto rounded-2xl shadow-large hover-lift"
              />
              {/* Floating indicators */}
              <div className="absolute top-6 right-6 bg-card/80 backdrop-blur-sm rounded-lg p-3 shadow-medium animate-glow-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Plant is healthy</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-card/80 backdrop-blur-sm rounded-lg p-3 shadow-medium">
                <div className="text-sm">
                  <div className="font-medium mb-1">Auto-care active</div>
                  <div className="text-muted-foreground">Next watering in 2 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};