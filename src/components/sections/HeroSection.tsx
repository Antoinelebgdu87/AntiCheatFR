import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Github, Shield, Zap, Eye } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-gaming-grid bg-grid opacity-20"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark via-gaming-dark/50 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div className="animate-fade-in mb-8">
          <Badge
            variant="outline"
            className="border-neon-blue text-neon-blue bg-gaming-surface/50 backdrop-blur-sm px-4 py-2 text-sm font-medium"
          >
            🚀 Now supporting Roblox 2024 - Latest anti-exploit detection
          </Badge>
        </div>

        {/* Main heading */}
        <div className="animate-slide-up mb-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Ultimate Protection
            </span>
            <br />
            <span className="text-foreground">for Roblox Games</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Protect your Roblox experiences with our advanced anti-cheat system.
            Real-time detection, zero false positives, maximum performance.
          </p>
        </div>

        {/* Stats row */}
        <div className="animate-fade-in grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-blue mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Detection Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-2">
              &lt;1ms
            </div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-3xl font-bold text-neon-purple mb-2">
              500K+
            </div>
            <div className="text-sm text-muted-foreground">Games Protected</div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-gaming-dark font-semibold px-8 py-6 text-lg group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-gaming-dark px-8 py-6 text-lg group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Download Free
          </Button>

          <Button
            size="lg"
            variant="ghost"
            className="text-muted-foreground hover:text-foreground px-8 py-6 text-lg group"
          >
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View Source
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gaming-surface/30 backdrop-blur-sm border border-gaming-surface rounded-lg p-6 hover:border-neon-blue/50 transition-colors group">
            <Shield className="h-10 w-10 text-neon-blue mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Advanced Detection</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered pattern recognition detects even the most sophisticated
              exploits
            </p>
          </div>

          <div className="bg-gaming-surface/30 backdrop-blur-sm border border-gaming-surface rounded-lg p-6 hover:border-neon-cyan/50 transition-colors group">
            <Zap className="h-10 w-10 text-neon-cyan mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Zero impact on game performance with sub-millisecond response
              times
            </p>
          </div>

          <div className="bg-gaming-surface/30 backdrop-blur-sm border border-gaming-surface rounded-lg p-6 hover:border-neon-purple/50 transition-colors group">
            <Eye className="h-10 w-10 text-neon-purple mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Real-time Monitoring</h3>
            <p className="text-sm text-muted-foreground">
              Live dashboard with detailed analytics and threat intelligence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
