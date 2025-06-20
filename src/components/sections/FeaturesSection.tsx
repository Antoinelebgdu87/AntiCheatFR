import { Badge } from "@/components/ui/badge";
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
      label: "Threats Blocked",
      value: "2.5M+",
      color: "text-green-400",
    },
    {
      icon: Clock,
      label: "Avg Response Time",
      value: "<500μs",
      color: "text-neon-cyan",
    },
    {
      icon: BarChart3,
      label: "Uptime",
      value: "99.99%",
      color: "text-neon-blue",
    },
    {
      icon: AlertTriangle,
      label: "False Positives",
      value: "<0.01%",
      color: "text-neon-purple",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gaming-dark via-gaming-surface/30 to-gaming-dark"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-neon-blue text-neon-blue bg-gaming-surface/80 mb-4"
          >
            ⚡ Fonctionnalités
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Protection Avancée
            </span>
            <span className="text-white"> pour Roblox</span>
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
              className="bg-gaming-surface/30 backdrop-blur-sm border border-gaming-surface rounded-lg p-6 text-center hover:border-neon-blue/50 transition-all duration-300 hover:scale-105"
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
              className="bg-gaming-surface/30 backdrop-blur-sm border-gaming-surface hover:border-neon-blue/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-lg bg-gaming-dark/50 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
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

        {/* Code example */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Get Started in
              <span className="text-neon-blue"> 2 Minutes</span>
            </h3>
            <p className="text-muted-foreground">
              Simple integration with your existing Roblox scripts
            </p>
          </div>

          <div className="bg-gaming-darker border border-gaming-surface rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-muted-foreground ml-4">
                ServerScript.lua
              </span>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code className="text-neon-cyan">
                {`-- Initialize RobloxShield Anti-Cheat
local RobloxShield = require(game.ReplicatedStorage.RobloxShield)

-- Configure protection settings
RobloxShield.init({
    enabled = true,
    detection_level = "high",
    auto_ban = true,
    webhook_url = "your-discord-webhook"
})

-- That's it! Your game is now protected
print("🛡️ RobloxShield activated - Game protected!")`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
