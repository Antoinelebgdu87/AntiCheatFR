import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Order Section */}
        <section id="order" className="py-16 relative bg-gaming-surface/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              <span className="text-white">Comment</span>
              <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
                {" "}
                Commander
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gaming-surface/30 border border-gaming-surface rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Choisissez votre Plan
                </h3>
                <p className="text-gray-400 text-sm">
                  Sélectionnez le plan qui correspond à vos besoins
                </p>
              </div>
              <div className="bg-gaming-surface/30 border border-gaming-surface rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Remplissez le Formulaire
                </h3>
                <p className="text-gray-400 text-sm">
                  Donnez-nous vos informations de contact
                </p>
              </div>
              <div className="bg-gaming-surface/30 border border-gaming-surface rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Recevez votre Anti-Cheat
                </h3>
                <p className="text-gray-400 text-sm">
                  Nous vous contactons pour finaliser et livrer
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
