import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    shortDescription: 'Full-stack MERN e-commerce solution with admin dashboard',
    longDescription: 'A comprehensive e-commerce platform built with the MERN stack featuring user authentication, product management, shopping cart functionality, payment integration with Stripe, and a complete admin dashboard for managing orders and inventory.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
    github: 'https://github.com/alexjohnson/ecommerce-platform',
    demo: 'https://ecommerce-demo.vercel.app',
    challenges: [
      'Implementing secure payment processing with Stripe',
      'Managing complex state for shopping cart and user sessions',
      'Optimizing database queries for product search and filtering'
    ],
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    shortDescription: 'Collaborative project management tool with real-time updates',
    longDescription: 'A collaborative task management application similar to Trello, featuring real-time updates using Socket.io, drag-and-drop functionality, team collaboration, file attachments, and comprehensive project analytics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tech: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/alexjohnson/task-manager',
    demo: 'https://taskmanager-demo.vercel.app',
    challenges: [
      'Implementing real-time collaboration with Socket.io',
      'Managing complex drag-and-drop interactions',
      'Optimizing performance for large datasets'
    ],
    featured: true
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    shortDescription: 'Analytics dashboard for social media management',
    longDescription: 'A comprehensive social media analytics dashboard that aggregates data from multiple platforms, provides detailed insights, scheduling capabilities, and performance tracking with beautiful data visualizations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tech: ['React', 'D3.js', 'Node.js', 'MongoDB', 'OAuth', 'Chart.js'],
    github: 'https://github.com/alexjohnson/social-dashboard',
    demo: 'https://social-dashboard-demo.vercel.app',
    challenges: [
      'Integrating multiple social media APIs',
      'Creating complex data visualizations',
      'Handling OAuth authentication for multiple platforms'
    ],
    featured: false
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    shortDescription: 'Beautiful weather app with location-based forecasts',
    longDescription: 'A responsive weather application providing detailed forecasts, interactive maps, weather alerts, and beautiful animations. Features location-based weather data, 7-day forecasts, and severe weather notifications.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    tech: ['Flutter', 'Dart', 'Weather API', 'Maps API', 'Redux'],
    github: 'https://github.com/alexjohnson/weather-app',
    demo: 'https://weather-demo.vercel.app',
    challenges: [
      'Creating smooth animations for weather transitions',
      'Implementing accurate location-based services',
      'Optimizing for various screen sizes and orientations'
    ],
    featured: false
  },
  {
    id: 5,
    title: 'Chat Application',
    shortDescription: 'Real-time messaging app with video calling',
    longDescription: 'A modern chat application featuring real-time messaging, video calling, file sharing, group chats, and end-to-end encryption. Built with WebRTC for peer-to-peer communication and Socket.io for real-time features.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
    tech: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/alexjohnson/chat-app',
    demo: 'https://chat-demo.vercel.app',
    challenges: [
      'Implementing WebRTC for video calling',
      'Managing real-time message synchronization',
      'Ensuring secure end-to-end encryption'
    ],
    featured: false
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    shortDescription: 'Mobile-first fitness tracking application',
    longDescription: 'A comprehensive fitness tracking application with workout planning, progress tracking, social features, and integration with wearable devices. Features custom workout builder, nutrition tracking, and community challenges.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    tech: ['Flutter', 'Node.js', 'PostgreSQL', 'Redis', 'Push Notifications'],
    github: 'https://github.com/alexjohnson/fitness-tracker',
    demo: 'https://fitness-demo.vercel.app',
    challenges: [
      'Integrating with multiple fitness device APIs',
      'Creating engaging user experience for daily use',
      'Implementing complex data analytics for progress tracking'
    ],
    featured: false
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-gradient-primary' : 'border-glow'}
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'outline'}
              onClick={() => setFilter('featured')}
              className={filter === 'featured' ? 'bg-gradient-primary' : 'border-glow'}
            >
              Featured
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass-effect rounded-lg overflow-hidden hover:shadow-glow-primary transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="bg-background/20 backdrop-blur-sm border-primary/30">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="bg-background/20 backdrop-blur-sm border-primary/30">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted/50 rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 border-glow hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto glass-effect border-primary/20">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">About This Project</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted/50 rounded-full border border-primary/30 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Challenges & Solutions</h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button className="bg-gradient-primary hover:scale-105 transition-transform">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-glow hover:bg-primary hover:text-primary-foreground">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}