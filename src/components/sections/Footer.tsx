import { Button } from "@/components/ui/button";
import { Shield, Github, Twitter, MessageCircle, Mail } from "lucide-react";

export const Footer = () => {
  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Documentation", href: "#docs" },
      { label: "API Reference", href: "#api" },
    ],
    support: [
      { label: "Help Center", href: "#help" },
      { label: "Community", href: "#community" },
      { label: "Contact Us", href: "#contact" },
      { label: "Bug Reports", href: "#bugs" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "License", href: "#license" },
      { label: "Security", href: "#security" },
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
                RobloxShield
                <span className="text-neon-blue ml-1">Pro</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The most advanced anti-cheat solution for Roblox games. Protect
              your experiences with cutting-edge technology and real-time threat
              detection.
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
              Product
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
              Legal
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
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Get the latest updates about new features and security threats.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gaming-dark border border-gaming-surface rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-gaming-dark font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gaming-surface">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-muted-foreground">
              © 2024 RobloxShield Pro. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Built with ❤️ for the Roblox community</span>
                <span className="inline-flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>All systems operational</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
