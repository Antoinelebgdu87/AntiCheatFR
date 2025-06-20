import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Zap,
  Eye,
  Code,
  Activity,
  Lock,
  Cpu,
  Network,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Protection Multi-Couches",
      description:
        "Système de détection avancé combinant analyse heuristique et signatures pour une sécurité maximale.",
      color: "text-neon-blue",
      gradient: "from-neon-blue/20 to-transparent",
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description:
        "Algorithmes optimisés qui n'impactent pas les performances de votre jeu Roblox.",
      color: "text-neon-cyan",
      gradient: "from-neon-cyan/20 to-transparent",
    },
    {
      icon: Eye,
      title: "Surveillance Temps Réel",
      description:
        "Détection instantanée des menaces avec alertes automatiques et réponse immédiate.",
      color: "text-neon-purple",
      gradient: "from-neon-purple/20 to-transparent",
    },
    {
      icon: Code,
      title: "Intégration Simple",
      description:
        "Installation facile en quelques minutes avec notre script prêt à l'emploi.",
      color: "text-neon-pink",
      gradient: "from-neon-pink/20 to-transparent",
    },
    {
      icon: Activity,
      title: "Statistiques Détaillées",
      description:
        "Dashboard complet avec analyses des tentatives d'attaque et métriques de sécurité.",
      color: "text-green-400",
      gradient: "from-green-400/20 to-transparent",
    },
    {
      icon: Lock,
      title: "Communication Sécurisée",
      description:
        "Toutes les données sont protégées par un chiffrement de niveau militaire.",
      color: "text-orange-400",
      gradient: "from-orange-400/20 to-transparent",
    },
  ];

  const stats = [
    {
      icon: CheckCircle,
      label: "Menaces Bloquées",
      value: "50K+",
      color: "text-green-400",
    },
    {
      icon: Clock,
      label: "Temps de Réponse",
      value: "<1ms",
      color: "text-neon-cyan",
    },
    {
      icon: BarChart3,
      label: "Disponibilité",
      value: "99.9%",
      color: "text-neon-blue",
    },
    {
      icon: AlertTriangle,
      label: "Faux Positifs",
      value: "0%",
      color: "text-neon-purple",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gaming-dark via-gaming-surface/20 to-gaming-dark"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-macos-blue/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Protection Avancée
            </span>
            <span className="text-foreground"> pour Roblox</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Solution anti-cheat complète et performante pour vos jeux Roblox
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-macos-surface/50 backdrop-blur-xl border border-border/30 rounded-2xl p-6 text-center hover:border-macos-blue/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
              <div className={`text-2xl font-bold mb-1 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-macos-surface/50 backdrop-blur-xl border-border/30 hover:border-macos-blue/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group overflow-hidden rounded-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-3 rounded-xl bg-macos-overlay/50 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-macos-surface/50 backdrop-blur-xl border border-border/30 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Prêt à Protéger votre Jeu ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Installation ultra-simple en moins de 2 minutes :D
              <br />
            </p>
            <Button
              size="lg"
              className="bg-macos-blue hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg"
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Voir les Tarifs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
