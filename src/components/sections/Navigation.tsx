import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Commander", href: "#order" },
    { label: "Support", href: "#support" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gaming-dark/80 backdrop-blur-md border-b border-gaming-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="h-8 w-8 text-neon-blue animate-pulse" />
              <div className="absolute inset-0 h-8 w-8 text-neon-cyan animate-ping opacity-20">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <span className="text-xl font-bold text-foreground">
              RoShield
              <span className="text-neon-blue ml-1">Pro</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-neon-blue transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <Button className="bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-gaming-dark font-semibold px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-neon-blue transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gaming-surface/90 backdrop-blur-md border-t border-gaming-surface">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-neon-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-gaming-dark font-semibold">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
