import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Mail, MapPin, Linkedin, Github, Code, Briefcase, Award, Languages, ChevronDown, Menu, X, Sparkles, Zap, Rocket } from 'lucide-react';
import img from './assets/profil3.png';
const translations = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      title: "Full-Stack Developer",
      subtitle: "Computer Science & Networks Student",
      description: "Passionate about building modern web applications with Java/Spring Boot & Angular",
      cta: "View My Work",
      contact: "Get In Touch"
    },
    about: {
      title: "About Me",
      description: "I'm a dedicated Computer Science student at EMSI Casablanca, specializing in full-stack development. With hands-on experience in modern technologies like Spring Boot, Angular, React, and Django, I'm passionate about creating efficient, scalable solutions. Currently seeking a PFE internship to apply my skills in real-world projects.",
      education: "Education",
      currentStudy: "Computer Engineering - EMSI Casablanca",
      degree: "Bachelor in Physics - Electronics",
      highSchool: "Baccalaureate - Physical Sciences"
    },
    experience: {
      title: "Professional Experience",
      nexpublica: {
        title: "Full-Stack Developer Intern",
        company: "Nexpublica",
        date: "July - August 2025",
        points: [
          "Migrated Restonet application from PHP4 to Angular + Spring Boot",
          "Developed 15+ secured RESTful APIs with JWT authentication",
          "Configured and optimized Oracle XE database",
          "Created reusable Angular components for enhanced UX",
          "Implemented secure password reset module with email verification"
        ]
      },
      avicom: {
        title: "Full-Stack Developer Intern",
        company: "Avicom",
        date: "July 2024",
        points: [
          "Analyzed business needs and identified 3 key automation processes",
          "Digitalized invoicing system reducing manual processing time",
          "Developed Django web application with preventive email notifications"
        ]
      },
      hospital: {
        title: "Administration & Communication Intern",
        company: "Hassan II Hospital",
        date: "July 2021",
        points: [
          "Managed 200+ personnel files with optimal organization",
          "Processed 50+ leave requests and various certificates",
          "Enhanced internal communication processes"
        ]
      }
    },
    projects: {
      title: "Featured Projects",
      viewMore: "View More Projects",
      github: "Visit My GitHub",
      xnature: { name: "XNature", description: "Travel booking web application with React & MySQL", tech: "React, MySQL, REST API" },
      bfire: { name: "B.Fire", description: "Full-stack e-commerce platform with product management and secure payment", tech: "Django, Bootstrap, Payment Gateway" },
      uiq: { name: "UIQ - Invoice Management", description: "ASP.NET application for automated invoicing and quotations", tech: "ASP.NET, Bootstrap, SQL Server" },
      presence: { name: "EMSI Smart Presence", description: "Mobile app with AI integration for automated attendance tracking", tech: "Mobile Dev, AI Integration, Real-time" },
      task: { name: "Task Manager", description: "Web application with preventive email alerts", tech: "Django, Bootstrap, Email Service" },
      recommendation: { name: "Movie Recommendation System", description: "Python-based system generating personalized movie suggestions", tech: "Python, Jupyter, ML Algorithms" },
      abosaas: { name: "AboSaas", description: "Innovative SaaS platform for subscription management with customer analytics", tech: "Spring Boot, Angular, Analytics" }
    },
    skills: {
      title: "Technical Skills",
      languages: "Programming Languages",
      databases: "Databases",
      frameworks: "Frameworks & Tools",
      methodologies: "Methodologies"
    },
    contact: {
      title: "Get In Touch",
      description: "I'm currently looking for a PFE internship in Full-Stack Development. Let's connect!",
      location: "Casablanca, Morocco"
    },
    footer: { rights: "All rights reserved", made: "Made with" }
  },
  fr: {
    nav: { about: "À Propos", experience: "Expérience", projects: "Projets", skills: "Compétences", contact: "Contact" },
    hero: {
      title: "Développeuse Full-Stack",
      subtitle: "Étudiante en Informatique et Réseaux",
      description: "Passionnée par la création d'applications web modernes avec Java/Spring Boot & Angular",
      cta: "Voir Mes Projets",
      contact: "Me Contacter"
    },
    about: {
      title: "À Propos de Moi",
      description: "Je suis une étudiante en informatique dévouée à l'EMSI Casablanca, spécialisée dans le développement full-stack. Avec une expérience pratique des technologies modernes comme Spring Boot, Angular, React et Django, je suis passionnée par la création de solutions efficaces et évolutives. Actuellement à la recherche d'un stage PFE pour appliquer mes compétences dans des projets réels.",
      education: "Formation",
      currentStudy: "Ingénierie Informatique - EMSI Casablanca",
      degree: "Licence en Physique - Électronique",
      highSchool: "Baccalauréat - Sciences Physiques"
    },
    experience: {
      title: "Expérience Professionnelle",
      nexpublica: {
        title: "Stagiaire Développeuse Full-Stack",
        company: "Nexpublica",
        date: "Juillet - Août 2025",
        points: [
          "Migration de l'application Restonet de PHP4 vers Angular + Spring Boot",
          "Développement de 15+ API RESTful sécurisées avec authentification JWT",
          "Configuration et optimisation de la base de données Oracle XE",
          "Création de composants Angular réutilisables pour une meilleure UX",
          "Implémentation d'un module sécurisé de réinitialisation de mot de passe"
        ]
      },
      avicom: {
        title: "Stagiaire Développeuse Full-Stack",
        company: "Avicom",
        date: "Juillet 2024",
        points: [
          "Analyse des besoins et identification de 3 processus clés d'automatisation",
          "Digitalisation du système de facturation réduisant le temps de traitement",
          "Développement d'une application Django avec notifications préventives"
        ]
      },
      hospital: {
        title: "Stagiaire Administration & Communication",
        company: "Hôpital Hassan II",
        date: "Juillet 2021",
        points: [
          "Gestion de 200+ dossiers du personnel avec organisation optimale",
          "Traitement de 50+ demandes de congés et attestations diverses",
          "Renforcement des processus de communication interne"
        ]
      }
    },
    projects: {
      title: "Projets Principaux",
      viewMore: "Voir Plus de Projets",
      github: "Visiter Mon GitHub",
      xnature: { name: "XNature", description: "Application web de réservation de voyages avec React & MySQL", tech: "React, MySQL, API REST" },
      bfire: { name: "B.Fire", description: "Plateforme e-commerce full-stack avec gestion des produits et paiement sécurisé", tech: "Django, Bootstrap, Passerelle de paiement" },
      uiq: { name: "UIQ - Gestion de Factures", description: "Application ASP.NET pour automatiser la facturation et les devis", tech: "ASP.NET, Bootstrap, SQL Server" },
      presence: { name: "EMSI Smart Presence", description: "Application mobile avec IA pour le suivi automatisé des présences", tech: "Développement Mobile, IA, Temps réel" },
      task: { name: "Gestionnaire de Tâches", description: "Application web avec alertes email préventives", tech: "Django, Bootstrap, Service Email" },
      recommendation: { name: "Système de Recommandation de Films", description: "Système Python générant des suggestions personnalisées", tech: "Python, Jupyter, Algorithmes ML" },
      abosaas: { name: "AboSaas", description: "Plateforme SaaS innovante pour la gestion des abonnements avec analytics", tech: "Spring Boot, Angular, Analytics" }
    },
    skills: {
      title: "Compétences Techniques",
      languages: "Langages de Programmation",
      databases: "Bases de Données",
      frameworks: "Frameworks & Outils",
      methodologies: "Méthodologies"
    },
    contact: {
      title: "Me Contacter",
      description: "Je recherche actuellement un stage PFE en Développement Full-Stack. Connectons-nous !",
      location: "Casablanca, Maroc"
    },
    footer: { rights: "Tous droits réservés", made: "Fait avec" }
  }
};

const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold });

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [threshold]);

  return [ref, isInView];
};

const ClickSpark = ({ x, y }) => {
  const particles = Array.from({ length: 8 });
  return (
    <div style={{ position: 'fixed', left: x, top: y, pointerEvents: 'none', zIndex: 9999 }}>
      {particles.map((_, i) => {
        const angle = (i * 360) / particles.length;
        const velocity = 50;
        const radians = (angle * Math.PI) / 180;
        const vx = Math.cos(radians) * velocity;
        const vy = Math.sin(radians) * velocity;
        return (
          <div key={i} style={{
            position: 'absolute', width: '4px', height: '4px', borderRadius: '50%',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
            animation: `sparkFly${i} 0.6s ease-out forwards`,
          }} />
        );
      })}
      <style>{particles.map((_, i) => {
        const angle = (i * 360) / particles.length;
        const radians = (angle * Math.PI) / 180;
        const vx = Math.cos(radians) * 50;
        const vy = Math.sin(radians) * 50;
        return `@keyframes sparkFly${i} { to { transform: translate(${vx}px, ${vy}px); opacity: 0; } }`;
      }).join('')}</style>
    </div>
  );
};

const ParticleSystem = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = 80; // Reduced for better performance
    let animationId;
    let lastTime = 0;
    const fps = 30; // Limit FPS for better performance
    const fpsInterval = 1000 / fps;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3; // Slower movement
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 1.5 + 0.5; // Smaller particles
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const adjustedOpacity = isDark ? this.opacity : this.opacity * 0.6;
        ctx.fillStyle = `rgba(${this.color}, ${adjustedOpacity})`;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = (currentTime) => {
      if (currentTime - lastTime >= fpsInterval) {
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Draw background gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        if (isDark) {
          gradient.addColorStop(0, '#0f172a');
          gradient.addColorStop(1, '#1e293b');
        } else {
          gradient.addColorStop(0, '#f8fafc');
          gradient.addColorStop(1, '#e2e8f0');
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Update and draw particles
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        // Draw fewer connections for performance
        for (let i = 0; i < particles.length; i += 2) {
          for (let j = i + 2; j < particles.length; j += 2) {
            const particleA = particles[i];
            const particleB = particles[j];
            const distance = Math.sqrt(
              Math.pow(particleA.x - particleB.x, 2) + 
              Math.pow(particleA.y - particleB.y, 2)
            );

            if (distance < 100) {
              const connectionOpacity = 0.2 * (1 - distance / 100);
              const adjustedOpacity = isDark ? connectionOpacity : connectionOpacity * 0.5;
              ctx.strokeStyle = `rgba(59, 130, 246, ${adjustedOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particleA.x, particleA.y);
              ctx.lineTo(particleB.x, particleB.y);
              ctx.stroke();
            }
          }
        }

        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
};

const ProfileImageAnimation = ({ src, alt, isDark }) => {
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 160;
    canvas.height = 160;

    const particles = [];
    const particleCount = 20; // Reduced for better performance
    let animationId;
    let lastTime = 0;
    const fps = 20;
    const fpsInterval = 1000 / fps;

    class FloatingBit {
      constructor() {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = 70 + Math.random() * 20;
        this.speed = 0.003 + Math.random() * 0.005; // Slower animation
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.4 + 0.3;
        this.color = isDark ? '59, 130, 246' : '37, 99, 235';
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.angle += this.speed;
        this.pulsePhase += 0.015;
      }

      draw() {
        const centerX = 80;
        const centerY = 80;
        const x = centerX + Math.cos(this.angle) * this.radius;
        const y = centerY + Math.sin(this.angle) * this.radius;
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        
        ctx.beginPath();
        ctx.arc(x, y, this.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity * pulse})`;
        ctx.fill();
      }
    }

    // Initialize floating bits
    for (let i = 0; i < particleCount; i++) {
      particles.push(new FloatingBit());
    }

    const animate = (currentTime) => {
      if (currentTime - lastTime >= fpsInterval) {
        ctx.clearRect(0, 0, 160, 160);
        
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isDark]);

  return (
    <div className="relative">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-32 h-32 mx-auto pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className={`w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 relative z-10 ${isDark ? 'ring-blue-500/50' : 'ring-blue-400/50'}`}>
        <img 
          ref={imageRef}
          src={src}
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
  );
};

const FloatingBits = ({ count = 10, isDark }) => { // Reduced count
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bits = [];
    
    for (let i = 0; i < count; i++) {
      const bit = document.createElement('div');
      bit.className = 'absolute rounded-full opacity-20 pointer-events-none';
      bit.style.width = Math.random() * 3 + 1 + 'px';
      bit.style.height = bit.style.width;
      bit.style.left = Math.random() * 100 + '%';
      bit.style.top = Math.random() * 100 + '%';
      bit.style.backgroundColor = isDark ? '#3b82f6' : '#1d4ed8';
      
      // Simplified CSS animation
      bit.style.animation = `pulse 3s ease-in-out infinite ${Math.random() * 2}s`;
      
      container.appendChild(bit);
      bits.push(bit);
    }

    return () => {
      bits.forEach(bit => {
        if (bit.parentNode) bit.parentNode.removeChild(bit);
      });
    };
  }, [count, isDark]);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
};

const ParallaxSection = ({ children, speed = 0.5, className = "" }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      element.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

const ScrollButton = ({ isDark, scrolled, scrollToTop }) => {
  if (!scrolled) return null;

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full ${isDark ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-400 hover:bg-blue-500'} text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-40 group`}
      title="Scroll to top">
      <div className="relative">
        <ChevronDown size={24} className="transform rotate-180 group-hover:-translate-y-1 transition-transform duration-300" />
        <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${isDark ? 'bg-purple-400' : 'bg-purple-500'} animate-pulse`}></div>
      </div>
    </button>
  );
};

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sparks, setSparks] = useState([]);

  const t = translations[lang];

  useEffect(() => {
    // Force enable smooth scrolling with CSS and JS
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.scrollPaddingTop = '80px';
    document.body.style.scrollBehavior = 'smooth';
    
    // Add smooth scroll class to body
    document.body.classList.add('smooth-scroll');
    
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 50);
          
          // Update active section with throttling
          const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
          const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });
          if (current) setActiveSection(current);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleClick = (e) => {
      // Reduced spark effect
      if (Math.random() > 0.7) { // Only create sparks 30% of the time
        const id = Date.now();
        setSparks(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => setSparks(prev => prev.filter(spark => spark.id !== id)), 600);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
      // Clean up smooth scroll class
      document.body.classList.remove('smooth-scroll');
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Use multiple approaches for better browser compatibility
      const elementPosition = element.offsetTop - 80; // Account for navbar height
      
      // Primary method: native smooth scroll
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Fallback method: scrollIntoView
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 50);
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    // First try native smooth scroll to the hero section
    const heroElement = document.getElementById('home');
    if (heroElement) {
      // Use both scrollIntoView and manual scroll for better browser compatibility
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Also use scrollIntoView as fallback
      setTimeout(() => {
        heroElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    } else {
      // Enhanced smooth scroll to top with better easing
      const startPosition = window.pageYOffset;
      const targetPosition = 0;
      const distance = startPosition - targetPosition;
      const duration = 8000; // 800ms duration
      let startTime = null;

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition - (distance * easedProgress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    }
  };

  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const secondaryTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBg = isDark ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm';
  const accentColor = 'text-blue-500';

  const skillsData = {
    languages: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C++', 'C#', 'Kotlin'],
    databases: ['Oracle', 'SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL'],
    frameworks: ['Spring Boot', 'Angular', 'React', 'Django', 'ASP.NET', 'Docker', 'Kubernetes'],
    methodologies: ['UML', 'Agile/Scrum', 'Git/GitHub', 'REST API', 'GraphQL', 'JWT']
  };

  const [aboutRef, aboutInView] = useInView(0.2);
  const [experienceRef, experienceInView] = useInView(0.2);
  const [projectsRef, projectsInView] = useInView(0.2);
  const [skillsRef, skillsInView] = useInView(0.2);
  const [contactRef, contactInView] = useInView(0.2);

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300 overflow-x-hidden relative`}>
      <ParticleSystem isDark={isDark} />
      {sparks.map(spark => <ClickSpark key={spark.id} x={spark.x} y={spark.y} />)}

      <div className="relative z-10">
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? (isDark ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' : 'bg-white/95 backdrop-blur-md shadow-2xl') : ''}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <Code className={`${accentColor} transform group-hover:rotate-180 transition-transform duration-500`} size={24} />
                <span className="font-bold text-xl">ZN</span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <button key={section} onClick={() => scrollToSection(section)}
                    className={`relative transition-colors ${activeSection === section ? accentColor : secondaryTextColor} hover:text-blue-500`}>
                    {t.nav[section]}
                    {activeSection === section && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500" />}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={`p-2 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-200'} hover:scale-110 transition-all duration-300 hover:rotate-180`}>
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                  className={`px-3 py-1 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-200'} font-semibold hover:scale-110 transition-all duration-300`}>
                  {lang.toUpperCase()}
                </button>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 transition-transform duration-300 hover:scale-110">
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <div className={`md:hidden pb-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <button key={section} onClick={() => scrollToSection(section)}
                    className={`block w-full text-left py-2 px-4 ${activeSection === section ? accentColor : secondaryTextColor} hover:text-blue-500 transition-colors`}>
                    {t.nav[section]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <ParallaxSection speed={0.3} className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </ParallaxSection>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <ProfileImageAnimation 
                src={img}
                alt="Zineb Nafil"
                isDark={isDark}
              />
            </div>
            <ParallaxSection speed={0.1}>
              <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                <FloatingBits count={8} isDark={isDark} />
                Zineb Nafil
              </h1>
            </ParallaxSection>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{t.hero.title}</h2>
            <p className={`text-xl ${secondaryTextColor} mb-8 max-w-2xl mx-auto`}>{t.hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('projects')}
                className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
                  {t.hero.cta}
                </span>
              </button>
              <button onClick={() => scrollToSection('contact')}
                className={`px-8 py-3 ${isDark ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-gray-200/80 backdrop-blur-sm'} rounded-lg hover:scale-105 transition-all font-semibold shadow-lg hover:shadow-xl`}>
                {t.hero.contact}
              </button>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              {[
                { icon: Mail, href: "mailto:znafil177@gmail.com" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/zineb-nafil-4b0036284" },
                { icon: Github, href: "https://github.com/raidenshogen" }
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`p-3 ${isDark ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-gray-200/80 backdrop-blur-sm'} rounded-full hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <ParallaxSection speed={0.2} className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-green-500/20 rounded-full blur-2xl"></div>
          </ParallaxSection>
          <div className="max-w-6xl mx-auto relative z-10">
            <ParallaxSection speed={0.1}>
              <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-700 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Sparkles className="inline mr-2 text-yellow-500" />
                {t.about.title}
              </h2>
            </ParallaxSection>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`${cardBg} p-8 rounded-xl shadow-lg transition-all duration-700 ${aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <p className={`${secondaryTextColor} text-lg leading-relaxed mb-6`}>{t.about.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className={accentColor} />
                  <span>Casablanca, Morocco</span>
                </div>
              </div>
              <div className={`${cardBg} p-8 rounded-xl shadow-lg transition-all duration-700 ${aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Award className={accentColor} />
                  {t.about.education}
                </h3>
                <div className="space-y-4">
                  {[
                    { text: t.about.currentStudy, date: '2023 - 2026', color: 'blue' },
                    { text: t.about.degree, date: '2022 - 2023', color: 'purple' },
                    { text: t.about.highSchool, date: '2019 - 2020', color: 'green' }
                  ].map((item, i) => (
                    <div key={i} className={`border-l-4 border-${item.color}-500 pl-4 ${isDark ? 'bg-gray-700/50' : 'bg-gray-100'} p-4 rounded hover:scale-105 transition-transform duration-300`}>
                      <p className="font-semibold">{item.text}</p>
                      <p className={`text-sm ${secondaryTextColor}`}>{item.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" ref={experienceRef} className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-gray-100/50 backdrop-blur-sm'}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-700 ${experienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Briefcase className="inline mr-2 text-blue-500" />
              {t.experience.title}
            </h2>
            <div className="space-y-8">
              {Object.entries(t.experience).filter(([key]) => key !== 'title').map(([key, exp], index) => (
                <div key={key} className={`${cardBg} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 ${experienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                      <p className={`${accentColor} font-medium`}>{exp.company}</p>
                    </div>
                    <span className={`${secondaryTextColor} text-sm`}>{exp.date}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className={`${secondaryTextColor} flex items-start gap-2 hover:translate-x-2 transition-transform duration-300`}>
                        <Zap className={`${accentColor} mt-1 flex-shrink-0`} size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" ref={projectsRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <ParallaxSection speed={0.15} className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl"></div>
          </ParallaxSection>
          <div className="max-w-6xl mx-auto relative z-10">
            <ParallaxSection speed={0.1}>
              <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-700 ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Code className="inline mr-2 text-purple-500" />
                {t.projects.title}
              </h2>
            </ParallaxSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(t.projects).filter(([key]) => !['title', 'viewMore', 'github'].includes(key)).map(([key, project], index) => (
                <div key={key} className={`${cardBg} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 group relative overflow-hidden ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}>
                  <FloatingBits count={4} isDark={isDark} />
                  <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10`}>
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors relative z-10">{project.name}</h3>
                  <p className={`${secondaryTextColor} mb-4 text-sm relative z-10`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {project.tech.split(',').map((tech, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-200'} hover:scale-110 transition-transform duration-200`}>
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`mt-12 text-center transition-all duration-700 ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
              <a href="https://github.com/raidenshogen" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105">
                <Github size={20} className="group-hover:rotate-12 transition-transform" />
                <span>{t.projects.github}</span>
              </a>
              <p className={`mt-4 ${secondaryTextColor} text-sm`}>{t.projects.viewMore}</p>
            </div>
          </div>
        </section>

        <section id="skills" ref={skillsRef} className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${isDark ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-gray-100/50 backdrop-blur-sm'}`}>
          <ParallaxSection speed={0.1} className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-36 h-36 bg-green-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-44 h-44 bg-blue-500/20 rounded-full blur-2xl"></div>
          </ParallaxSection>
          <div className="max-w-6xl mx-auto relative z-10">
            <ParallaxSection speed={0.05}>
              <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-700 ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Languages className="inline mr-2 text-green-500" />
                {t.skills.title}
              </h2>
            </ParallaxSection>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skillsData).map(([category, skills], index) => (
                <div key={category} className={`${cardBg} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 relative overflow-hidden ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}>
                  <FloatingBits count={3} isDark={isDark} />
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 relative z-10">
                    <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-purple-500' : index === 2 ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    {t.skills[category]}
                  </h3>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {skills.map((skill, i) => (
                      <span key={i} className={`px-4 py-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'} hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-6 transition-all duration-700 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {t.contact.title}
            </h2>
            <p className={`${secondaryTextColor} text-lg mb-8 transition-all duration-700 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '150ms' }}>
              {t.contact.description}
            </p>
            <div className={`${cardBg} p-8 rounded-xl shadow-2xl inline-block transition-all duration-700 ${contactInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                <a href="mailto:znafil177@gmail.com" className="group flex items-center gap-2 hover:text-blue-500 transition-all duration-300 hover:scale-110">
                  <Mail className={accentColor} />
                  <span>znafil177@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/zineb-nafil-4b0036284" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2 hover:text-blue-500 transition-all duration-300 hover:scale-110">
                  <Linkedin className={accentColor} />
                  <span>LinkedIn</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className={accentColor} />
                  <span>{t.contact.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className={`py-8 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} text-center`}>
          <p className={secondaryTextColor}>
            © 2025 Zineb Nafil. {t.footer.rights}. {t.footer.made} ❤️
          </p>
        </footer>

        <ScrollButton isDark={isDark} scrolled={scrolled} scrollToTop={scrollToTop} />
      </div>
    </div>
  );
}