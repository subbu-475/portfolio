/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Associate Software Developer',
    company: 'KO Innovation Software Solutions',
    location: 'Trichy',
    period: 'May 2025 - Present',
    description: 'Lead developer for enterprise web applications serving 10k+ users. Architected and implemented scalable microservices using Node.js and React.',
    achievements: [
      'Reduced application load time by 40% through code splitting and optimization',
      'Led a team of 4 developers in implementing new feature modules',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Mentored junior developers and conducted technical interviews'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL','Flutter','AWS', 'Docker', 'Redis'],
    current: true
  },
  {
    id: 2,
    title: 'Junior Full Stack Developer',
    company: 'Hilife.Ai Private Limited',
    location: 'Trichy',
    period: 'Jan 2024 - Apr 2025',
    description: 'Developed and maintained multiple client projects using the MERN stack. Collaborated with design and product teams to deliver high-quality solutions.',
    achievements: [
      'Built 5+ client applications from concept to deployment',
      'Implemented real-time features using Socket.io for collaborative tools',
      'Integrated third-party APIs including payment gateways and social media',
      'Achieved 99.9% uptime for production applications'
    ],
    technologies: ['React', 'Express.js', 'MongoDB', "Node",'MySQL','Socket.io', 'Stripe API', 'JWT'],
    current: false
  }
];

const education = [
  {
    id: 1,
    title: 'Bachelor of Engineering in Computer Science',
    institution: 'Oxford Engineering College',
    location: 'Pirattiyur,Trichy.',
    period: '2023 - 2026',
    description: 'Focused on software engineering, algorithms, and web development. Graduated Magna Cum Laude.',
    achievements: [
      'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems',
      'Senior Project: E-learning platform with real-time collaboration features',
      'Teaching Assistant for Introduction to Programming (JavaScript)',
      'President of Computer Science Student Association'
    ],
    gpa: '3.8/4.0'
  }
];

const certifications = [
  {
    title: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-CDA-2023-001'
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2022',
    credentialId: 'MDB-DEV-2022-001'
  },
  {
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: '2022',
    credentialId: 'META-REACT-2022-001'
  }
];

const TimelineItem = ({ 
  item, 
  index, 
  type 
}: { 
  item: any, 
  index: number, 
  type: 'experience' | 'education' 
}) => {
  return (
    <div className={`relative animate-fade-in-up animate-delay-${index * 200}`}>
      {/* Timeline Line */}
      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-primary"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow-primary"></div>
      
      {/* Content */}
      <div className="ml-12 glass-effect p-6 rounded-lg hover:shadow-glow-primary transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
            <div className="flex items-center space-x-4 text-muted-foreground mb-2">
              <span className="font-medium">{type === 'experience' ? item.company : item.institution}</span>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{item.location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-sm bg-muted/30 px-3 py-1 rounded-full">
            <Calendar className="w-4 h-4" />
            <span>{item.period}</span>
            {item.current && (
              <span className="ml-2 px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                Current
              </span>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {item.description}
        </p>

        {item.gpa && (
          <div className="mb-4">
            <span className="text-sm font-medium text-primary">GPA: {item.gpa}</span>
          </div>
        )}

        {/* Achievements */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-foreground">
            {type === 'experience' ? 'Key Achievements:' : 'Highlights:'}
          </h4>
          <ul className="space-y-1">
            {item.achievements.map((achievement: string, idx: number) => (
              <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        {item.technologies && (
          <div>
            <h4 className="font-semibold mb-2 text-foreground">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted/50 text-xs rounded border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and educational background in software development
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Professional Experience</span>
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} item={exp} index={index} type="experience" />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <TimelineItem key={edu.id} item={edu} index={index} type="education" />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.credentialId}
                className={`glass-effect p-6 rounded-lg hover:shadow-glow-primary transition-all duration-300 animate-fade-in-up animate-delay-${index * 100}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-primary">{cert.title}</h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer" />
                </div>
                <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Issued: {cert.date}</span>
                  <span className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}