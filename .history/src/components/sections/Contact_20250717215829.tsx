import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/alexjohnson",
    color: "hover:text-gray-400",
    description: "Check out my code",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/subramani-v-847291211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "hover:text-blue-400",
    description: "Connect professionally",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/alexjohnson_dev",
    color: "hover:text-sky-400",
    description: "Follow for updates",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "subbudme475@gmail.com",
    href: "mailto:subbudme475@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9159029499",
    href: "tel:+91 9159029499",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Trichy",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(false);
      }, 2000);
    }, 1500);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Get In{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can
            work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and
                development. Whether you're a fellow developer, a potential
                client, or someone with a great idea, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 animate-fade-in-up animate-delay-200">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:shadow-glow-primary transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {contact.label}
                    </div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up animate-delay-300">
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Follow Me
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:shadow-glow-primary transition-all duration-300 group"
                    >
                      <Icon
                        className={`w-6 h-6 text-muted-foreground ${social.color} transition-colors group-hover:scale-110`}
                      />
                      <div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {social.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.description}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="animate-fade-in-up animate-delay-200">
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-primary/20 focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-primary/20 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full ${
                    isSubmitted 
                      ? 'bg-success hover:bg-success' 
                      : 'bg-gradient-primary hover:scale-105'
                  } transition-all duration-300 shadow-glow-primary`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  I'll get back to you within 24 hours. Looking forward to hearing from you!
                </p>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
