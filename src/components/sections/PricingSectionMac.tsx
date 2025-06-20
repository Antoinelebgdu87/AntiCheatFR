import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MacCard } from "@/components/ui/mac-card";
import { MacWindow } from "@/components/ui/mac-window";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, Crown, Shield, Zap, Star } from "lucide-react";

// Safer toast implementation for SSR compatibility
const toast = {
  success: (message: string) => {
    if (typeof window !== "undefined") {
      console.log("✓", message);
    }
  },
  error: (message: string) => {
    if (typeof window !== "undefined") {
      console.error("✗", message);
    }
  },
};

export const PricingSectionMac = () => {
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
      color: "from-gray-400 to-gray-600",
      popular: false,
      icon: Shield,
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
      color: "from-blue-500 to-blue-600",
      popular: true,
      icon: Zap,
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
      color: "from-purple-500 to-purple-600",
      popular: false,
      icon: Crown,
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
          title: "🛒 Nouvelle Commande RoShield",
          color: 0x007aff,
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
          mode: "cors",
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
      console.error("Erreur:", error);
      toast.error("Erreur de connexion. Vérifiez votre réseau.");
    }
  };

  return (
    <>
      <section id="pricing" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-foreground">Choisissez votre</span>
              <span className="bg-gradient-to-r from-macos-blue to-blue-600 bg-clip-text text-transparent">
                {" "}
                Protection
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des tarifs accessibles en Robux pour tous types de jeux
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <MacCard
                key={plan.name}
                className={`relative transition-all duration-300 ${
                  plan.popular ? "scale-105 ring-2 ring-macos-blue/20" : ""
                }`}
                glass={true}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-macos-blue text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Populaire
                    </div>
                  </div>
                )}

                <div className="text-center pb-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-1">
                      {plan.price}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {plan.period}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-foreground"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-macos-blue hover:bg-blue-600 text-white shadow-lg"
                      : "border border-border/50 text-foreground hover:bg-macos-gray/50 bg-transparent"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleOrder(plan.name)}
                >
                  Commander {plan.name}
                </Button>
              </MacCard>
            ))}
          </div>

          {/* Additional info */}
          <div className="text-center mt-12 text-sm text-muted-foreground">
            Paiement sécurisé en Robux • Support francophone • Satisfaction
            garantie
          </div>
        </div>
      </section>

      {/* Order Dialog */}
      <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
        <DialogContent className="max-w-md mx-auto">
          <MacWindow title="Nouvelle Commande" showTrafficLights={false}>
            <div className="p-6">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-xl font-semibold">
                  Commander {selectedPlan}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Remplissez vos informations pour finaliser la commande
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="firstName" className="text-foreground">
                    Prénom
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="mt-1 rounded-xl"
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-foreground">
                    Nom
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="mt-1 rounded-xl"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <Label htmlFor="discord" className="text-foreground">
                    Discord
                  </Label>
                  <Input
                    id="discord"
                    value={formData.discord}
                    onChange={(e) =>
                      setFormData({ ...formData, discord: e.target.value })
                    }
                    className="mt-1 rounded-xl"
                    placeholder="votrenom#1234"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsOrderDialogOpen(false)}
                  className="flex-1 rounded-xl"
                >
                  Annuler
                </Button>
                <Button
                  onClick={handleSubmitOrder}
                  className="flex-1 bg-macos-blue hover:bg-blue-600 text-white rounded-xl"
                >
                  Envoyer la commande
                </Button>
              </div>
            </div>
          </MacWindow>
        </DialogContent>
      </Dialog>
    </>
  );
};
