import { Heart, Code, Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background-subtle border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Logo/Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold font-poppins bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              {'<Dev />'}
            </button>
          </div>

          {/* Quote */}
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground italic text-lg">
              "Code is poetry written in logic, and every bug is just a plot twist waiting to be resolved."
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>using</span>
            <Code className="w-4 h-4 text-primary" />
            <span>and lots of</span>
            <Coffee className="w-4 h-4 text-yellow-600" />
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Subramani. All rights reserved. Built with React, TypeScript & Three.js
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="z-10 inline-flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors"
          >
            <span className="text-sm">Back to top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}