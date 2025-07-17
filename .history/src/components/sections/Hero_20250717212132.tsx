import { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeJSBackground from '@/components/three/ParticleField';
// import heroImage from '@/assets/hero-bg.jpg';
import developerAvatar from '@/assets/subbu.jpg';

export default function Hero() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'MERN Stack Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Blink cursor
        setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          // backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/70 z-[1]" />

      {/* Three.js Background */}
      <div className="relative z-[2]">
        <ThreeJSBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Greeting */}
        <div className="animate-fade-in">
          <p className="text-primary text-lg font-mono mb-4">
            Hello, my name is
          </p>
        </div>

        {/* Name */}
        <div className="animate-fade-in animate-delay-200">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-poppins mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Subramani V
            </span>
          </h1>
        </div>

        {/* Developer Avatar */}
        <div className="animate-fade-in animate-delay-300 mb-6">
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-glow-primary hover:shadow-glow-secondary transition-all duration-500 hover:scale-105">
              <img
                src={developerAvatar}
                alt="Subramani V - MERN Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
            {/* Floating particles around avatar */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-float"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -right-4 w-2 h-2 bg-primary-glow rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        {/* Title with typing effect */}
        <div className="animate-fade-in animate-delay-500">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6 h-16 flex items-center justify-center">
            <span className="font-mono">
              {text}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                |
              </span>
            </span>
          </h2>
        </div>

        {/* Tagline */}
        <div className="animate-fade-in animate-delay-700">
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Building full-stack experiences that scale. Passionate about creating 
            innovative web solutions with modern technologies and best practices.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in animate-delay-700 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            variant="gradient"
            size="lg"
            className="min-w-48"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-5 h-5 mr-2" />
            Hire Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-48"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Stats */}
        <div className="animate-fade-in animate-delay-700 grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">1.5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in animate-delay-700">
          <button
            onClick={scrollToNextSection}
            className="group flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-sm font-mono mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-primary" />
          </button>
        </div>
      </div>

      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none z-[3]" />
    </section>
  );
}