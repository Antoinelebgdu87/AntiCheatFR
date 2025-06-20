import { Button } from "@/components/ui/button";
import { Shield, Github, Twitter, MessageCircle, Mail } from "lucide-react";

export const Footer = () => {
  const links = {
    product: [
      { label: "Fonctionnalités", href: "#features" },
      { label: "Tarifs", href: "#pricing" },
      { label: "Documentation", href: "#docs" },
      { label: "Référence API", href: "#api" },
    ],
    support: [
      { label: "Centre d'aide", href: "#help" },
      { label: "Communauté", href: "#community" },
      { label: "Nous contacter", href: "#contact" },
      { label: "Signaler un bug", href: "#bugs" },
    ],
    legal: [
      { label: "Politique de confidentialité", href: "#privacy" },
      { label: "Conditions d'utilisation", href: "#terms" },
      { label: "Licence", href: "#license" },
      { label: "Sécurité", href: "#security" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#github", label: "GitHub" },
    { icon: MessageCircle, href: "#discord", label: "Discord" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Mail, href: "#email", label: "Email" },
  ];

  return (
    <footer className="bg-gaming-darker border-t border-gaming-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-neon-blue" />
              <span className="text-xl font-bold text-foreground">
                RoShield
                <span className="text-neon-blue ml-1">Pro</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              La solution anti-cheat la plus avancée pour les jeux Roblox.
              Protégez vos expériences avec une technologie de pointe et une
              détection de menaces en temps réel.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-neon-blue transition-colors p-2 rounded-lg hover:bg-gaming-surface/50"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Produit
            </h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-neon-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-neon-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Légal
            </h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-neon-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="bg-gaming-surface/30 rounded-lg p-6 mb-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Restez Informé
              </h3>
              <p className="text-muted-foreground">
                Recevez les dernières mises à jour sur les fonctionnalités et
                menaces de sécurité.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 bg-gaming-dark border border-gaming-surface rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-gaming-dark font-semibold">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gaming-surface">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-muted-foreground">
              © 2024 RoShield Pro. Tous droits réservés.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Conçu avec ❤️ pour la communauté Roblox</span>
                <span className="inline-flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Tous les systèmes opérationnels</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
