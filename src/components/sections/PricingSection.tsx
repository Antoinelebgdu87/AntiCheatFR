import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Crown, Shield, Zap, Star } from "lucide-react";
import { toast } from "sonner";

export const PricingSection = () => {
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    discord: "",
  });

  const plans = [
    {
      name: "Basique",
      price: "500",
      period: "Robux / mois",
      description: "Protection essentielle pour petits jeux",
      features: [
        "Anti-cheat basique",
        "Détection des exploits courants",
        "Support Discord",
        "Mises à jour automatiques",
      ],
      color: "from-gray-500 to-gray-700",
      popular: false,
    },
    {
      name: "Pro",
      price: "1,500",
      period: "Robux / mois",
      description: "Protection avancée recommandée",
      features: [
        "Anti-cheat avancé",
        "Détection IA temps réel",
        "Support prioritaire",
        "Dashboard personnalisé",
        "Alertes Discord",
        "Logs détaillés",
      ],
      color: "from-neon-blue to-neon-cyan",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "3,000",
      period: "Robux / mois",
      description: "Maximum de protection pour gros jeux",
      features: [
        "Protection maximale",
        "IA anti-cheat personnalisée",
        "Support 24/7 dédié",
        "Configuration sur mesure",
        "Intégration API complète",
        "Analyse comportementale",
        "White-label disponible",
      ],
      color: "from-neon-purple to-neon-pink",
      popular: false,
    },
  ];

  const handleOrder = (planName: string) => {
    setSelectedPlan(planName);
    setIsOrderDialogOpen(true);
  };

  const handleSubmitOrder = async () => {
    if (!formData.firstName || !formData.lastName || !formData.discord) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    const webhookData = {
      embeds: [
        {
          title: "🛒 Nouvelle Commande RobloxShield",
          color: 0x00ffff,
          fields: [
            {
              name: "👤 Client",
              value: `${formData.firstName} ${formData.lastName}`,
              inline: true,
            },
            {
              name: "💬 Discord",
              value: formData.discord,
              inline: true,
            },
            {
              name: "📦 Plan",
              value: selectedPlan,
              inline: true,
            },
            {
              name: "📅 Date",
              value: new Date().toLocaleString("fr-FR"),
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const response = await fetch(
        "https://discordapp.com/api/webhooks/1385305354157559921/o7AT-cgK96FrlabZ8ty6rXQAt92TuAup7JRmoWwxEs-GZeGyQ4iK58E53_oVITcuEd1T",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(webhookData),
        },
      );

      if (response.ok) {
        toast.success("Commande envoyée ! Nous vous contacterons bientôt.");
        setIsOrderDialogOpen(false);
        setFormData({ firstName: "", lastName: "", discord: "" });
      } else {
        toast.error("Erreur lors de l'envoi. Réessayez plus tard.");
      }
    } catch (error) {
      toast.error("Erreur de connexion. Vérifiez votre réseau.");
    }
  };

  return (
    <>
      <section id="pricing" className="py-24 relative bg-gaming-surface/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-neon-blue text-neon-blue bg-gaming-surface/80 mb-4"
            >
              💰 Tarifs
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Choisissez votre</span>
              <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
                {" "}
                Protection
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des tarifs accessibles en Robux pour tous types de jeux
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative bg-gaming-surface/30 border-gaming-surface hover:border-neon-blue/50 transition-all duration-300 ${
                  plan.popular ? "scale-105 border-neon-blue/50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-neon-blue to-neon-cyan text-black font-semibold px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Populaire
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                  >
                    {plan.name === "Basique" && (
                      <Shield className="w-8 h-8 text-white" />
                    )}
                    {plan.name === "Pro" && (
                      <Zap className="w-8 h-8 text-white" />
                    )}
                    {plan.name === "Enterprise" && (
                      <Crown className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">
                      {plan.price}
                    </div>
                    <div className="text-gray-400 text-sm">{plan.period}</div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <Check className="w-5 h-5 text-neon-blue mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-black"
                        : "border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => handleOrder(plan.name)}
                  >
                    Commander {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional info */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              💡 Tous les plans incluent 7 jours d'essai gratuit
            </p>
            <p className="text-sm text-gray-500">
              Paiement sécurisé en Robux • Support francophone • Satisfaction
              garantie
            </p>
          </div>
        </div>
      </section>

      {/* Order Dialog */}
      <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
        <DialogContent className="bg-gaming-surface border-gaming-surface max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">
              Commander {selectedPlan}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Remplissez vos informations pour finaliser la commande
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="firstName" className="text-white">
                Prénom
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="bg-gaming-dark border-gaming-surface text-white mt-1"
                placeholder="Votre prénom"
              />
            </div>

            <div>
              <Label htmlFor="lastName" className="text-white">
                Nom
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="bg-gaming-dark border-gaming-surface text-white mt-1"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <Label htmlFor="discord" className="text-white">
                Discord
              </Label>
              <Input
                id="discord"
                value={formData.discord}
                onChange={(e) =>
                  setFormData({ ...formData, discord: e.target.value })
                }
                className="bg-gaming-dark border-gaming-surface text-white mt-1"
                placeholder="votrenom#1234"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setIsOrderDialogOpen(false)}
              className="flex-1 border-gaming-surface text-gray-400 hover:bg-gaming-surface"
            >
              Annuler
            </Button>
            <Button
              onClick={handleSubmitOrder}
              className="flex-1 bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-black font-semibold"
            >
              Envoyer la commande
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
