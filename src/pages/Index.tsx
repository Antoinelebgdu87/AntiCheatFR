import { Scene3D } from "@/components/3d/Scene3D";
import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark text-foreground overflow-x-hidden">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Performance Section */}
        <section
          id="performance"
          className="py-24 relative bg-gaming-surface/20 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Performance Metrics
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gaming-surface/30 backdrop-blur-sm border border-gaming-surface rounded-lg p-8 hover:border-neon-cyan/50 transition-colors">
                <div className="text-4xl font-bold text-neon-cyan mb-2">
                  0.1%
                </div>
                <div className="text-muted-foreground">CPU Usage</div>
              </div>
              <div className="bg-gaming-surface/30 backdrop-blur-sm border border-gaming-surface rounded-lg p-8 hover:border-neon-blue/50 transition-colors">
                <div className="text-4xl font-bold text-neon-blue mb-2">
                  2MB
                </div>
                <div className="text-muted-foreground">Memory Footprint</div>
              </div>
              <div className="bg-gaming-surface/30 backdrop-blur-sm border border-gaming-surface rounded-lg p-8 hover:border-neon-purple/50 transition-colors">
                <div className="text-4xl font-bold text-neon-purple mb-2">
                  0ms
                </div>
                <div className="text-muted-foreground">Added Latency</div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Teaser */}
        <section id="docs" className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              <span className="text-foreground">Comprehensive</span>
              <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
                {" "}
                Documentation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything you need to integrate RobloxShield into your games.
              From basic setup to advanced configuration.
            </p>
            <div className="bg-gaming-surface/30 backdrop-blur-sm border border-gaming-surface rounded-lg p-8 max-w-4xl mx-auto">
              <div className="text-left">
                <div className="text-sm text-muted-foreground mb-4">
                  📚 Coming Soon - Full documentation with:
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="text-neon-blue mr-2">•</span>
                    Step-by-step integration guides
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-cyan mr-2">•</span>
                    API reference and examples
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-purple mr-2">•</span>
                    Best practices and security tips
                  </li>
                  <li className="flex items-center">
                    <span className="text-neon-pink mr-2">•</span>
                    Troubleshooting and FAQ
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section
          id="support"
          className="py-24 relative bg-gaming-surface/20 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              <span className="text-foreground">Need</span>
              <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
                {" "}
                Support?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our team is here to help you get the most out of RobloxShield.
              Choose your preferred way to get in touch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gaming-surface/30 backdrop-blur-sm border border-gaming-surface rounded-lg p-6 hover:border-neon-blue/50 transition-colors">
                <h3 className="text-lg font-semibold mb-4">
                  Discord Community
                </h3>
                <p className="text-muted-foreground mb-4">
                  Join our active community for real-time help and discussions.
                </p>
                <div className="text-neon-blue font-semibold">
                  📞 24/7 Community Support
                </div>
              </div>
              <div className="bg-gaming-surface/30 backdrop-blur-sm border border-gaming-surface rounded-lg p-6 hover:border-neon-cyan/50 transition-colors">
                <h3 className="text-lg font-semibold mb-4">Email Support</h3>
                <p className="text-muted-foreground mb-4">
                  Direct support from our technical team for complex issues.
                </p>
                <div className="text-neon-cyan font-semibold">
                  ⚡ 4-hour response time
                </div>
              </div>
              <div className="bg-gaming-surface/30 backdrop-blur-sm border border-gaming-surface rounded-lg p-6 hover:border-neon-purple/50 transition-colors">
                <h3 className="text-lg font-semibold mb-4">Premium Support</h3>
                <p className="text-muted-foreground mb-4">
                  Priority support with dedicated technical assistance.
                </p>
                <div className="text-neon-purple font-semibold">
                  🚀 1-hour response time
                </div>
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
