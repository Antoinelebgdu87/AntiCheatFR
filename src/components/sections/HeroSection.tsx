import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Github, Shield, Zap, Eye } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-gaming-dark to-macos-gray pt-20">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <div className="animate-slideUp mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 -apple-system tracking-tight">
            <span className="bg-gradient-to-r from-macos-blue to-blue-600 bg-clip-text text-transparent">
              RoShield
            </span>
            <br />
            <span className="text-foreground">Protection Ultime</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Protégez vos jeux Roblox avec notre système anti-cheat avancé.
            <br />
            <span className="text-macos-blue font-semibold">
              Détection instantanée • Performance maximale
            </span>
          </p>
        </div>

        {/* Stats row */}
        <div className="animate-fadeIn grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div className="text-center p-4 bg-macos-surface/50 backdrop-blur-xl rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-macos-blue mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Détection</div>
          </div>
          <div className="text-center p-4 bg-macos-surface/50 backdrop-blur-xl rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-macos-blue mb-2">0ms</div>
            <div className="text-sm text-muted-foreground">Latence</div>
          </div>
          <div className="text-center p-4 bg-macos-surface/50 backdrop-blur-xl rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-macos-blue mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Jeux Protégés</div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="animate-scaleIn flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-macos-blue hover:bg-blue-600 text-white font-semibold px-8 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
            onClick={() =>
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Shield className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Voir les Tarifs
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-border/60 text-foreground hover:bg-macos-gray/80 px-8 py-4 text-base rounded-xl transition-all duration-200 group backdrop-blur-xl"
            onClick={() =>
              document
                .getElementById("order")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Commander Maintenant
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-macos-surface/50 backdrop-blur-xl border border-border/30 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-macos-blue/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Shield className="h-6 w-6 text-macos-blue group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Détection Avancée
            </h3>
            <p className="text-sm text-muted-foreground text-center">
              Reconnaissance de patterns IA qui détecte même les exploits les
              plus sophistiqués
            </p>
          </div>

          <div className="bg-macos-surface/50 backdrop-blur-xl border border-border/30 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Zap className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Ultra Rapide
            </h3>
            <p className="text-sm text-muted-foreground text-center">
              Aucun impact sur les performances avec des temps de réponse
              sub-millisecondes
            </p>
          </div>

          <div className="bg-macos-surface/50 backdrop-blur-xl border border-border/30 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Eye className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Monitoring Temps Réel
            </h3>
            <p className="text-sm text-muted-foreground text-center">
              Dashboard en direct avec analyses détaillées et intelligence des
              menaces
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
