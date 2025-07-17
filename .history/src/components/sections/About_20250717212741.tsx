import { useState, useEffect, useRef } from 'react';
import { Code, Database, Server, Smartphone, SmartphoneCode, TerminalSquare} from 'lucide-react';

const skills = [
   { name: 'React.js', level: 90, icon: Code, color: 'text-blue-400' },
  { name: 'Node.js', level: 85, icon: Server, color: 'text-green-400' },
  { name: 'MongoDB', level: 80, icon: Database, color: 'text-emerald-400' },
  { name: 'TypeScript', level: 88, icon: Code, color: 'text-blue-600' },
  { name: 'Express.js', level: 85, icon: TerminalSquare, color: 'text-gray-400' },
  { name: 'Flutter', level: 75, icon: SmartphoneCode, color: 'text-cyan-400' },
  { name: 'PostgreSQL', level: 75, icon: Database, color: 'text-indigo-400' },
];

const SkillBar = ({ skill, isVisible }: { skill: typeof skills[0], isVisible: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <skill.icon className={`w-5 h-5 ${skill.color}`} />
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-primary transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with 1.5 years of experience creating scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Subramani, a passionate MERN Stack Developer with over 1.5 years of 
                  professional experience in building modern web applications. My journey 
                  started with a curiosity about how websites work, which quickly evolved 
                  into a deep passion for creating seamless digital experiences.
                </p>
                <p>
                  I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js,PostgreSQL,Flutter,MySQL) 
                  and have extensive experience with TypeScript, making robust and scalable 
                  applications. I love working on challenging projects that push the 
                  boundaries of what's possible on the web.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing my knowledge through 
                  technical blog posts and mentoring junior developers.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary mb-1">1.5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className={`${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <SkillBar skill={skill} isVisible={isVisible} />
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-6 glass-effect p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies I Love</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
                  'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker',
                  'Git', 'GraphQL', 'REST APIs', 'Tailwind CSS'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted/50 text-sm rounded-full border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}