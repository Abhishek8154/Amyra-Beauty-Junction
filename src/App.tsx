import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Palette, 
  Heart, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  ChevronRight,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass-nav py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex flex-col">
          <span className="text-2xl font-serif font-bold tracking-tighter text-luxury-black">AMYRA</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold -mt-1">Beauty Junction</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-luxury-black text-white text-sm font-medium rounded-full hover:bg-gold transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-luxury-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-pink-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-serif"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="w-full py-3 bg-luxury-black text-white text-center rounded-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920" 
          alt="Salon Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-6">
            Best Salon in Bhopal
          </span>
          <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-6">
            Reveal Your <br />
            <span className="text-gold-gradient italic">Inner Radiance</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Experience premium beauty treatments and professional care at Bhopal's most luxurious beauty junction. We specialize in transforming your look and boosting your confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-10 py-4 bg-luxury-black text-white rounded-full font-medium hover:bg-gold transition-all duration-300 text-center shadow-lg hover:shadow-gold/20"
            >
              Book Appointment
            </a>
            <a 
              href="#services" 
              className="px-10 py-4 border border-luxury-black text-luxury-black rounded-full font-medium hover:bg-luxury-black hover:text-white transition-all duration-300 text-center"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/50 max-w-xs">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
              <Sparkles size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Expertise</p>
              <p className="font-serif font-bold">10+ Years Experience</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">Our certified professionals ensure you get the best beauty experience in town.</p>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-soft-pink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000" 
                alt="Beauty Treatment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-8 border-white hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=500" 
                alt="Salon Detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Where Luxury Meets <br />
              <span className="text-gold italic">Expert Care</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Amyra Beauty Junction is more than just a salon; it's a sanctuary for those who value excellence. Located in the heart of Bhopal, we have established ourselves as the premier destination for sophisticated beauty services.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Our philosophy is simple: every client deserves a personalized experience that highlights their unique features. From the moment you walk through our doors at Piplani, you'll be treated to an atmosphere of refined luxury and professional attention.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-3xl font-serif font-bold text-gold mb-2">5k+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-gold mb-2">15+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Beauty Experts</p>
              </div>
            </div>

            <button className="flex items-center gap-2 text-luxury-black font-bold group">
              Learn More About Our Story
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Haircut & Styling",
      description: "Precision cuts and modern styling tailored to your face shape and personality.",
      icon: <Scissors />,
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Hair Coloring",
      description: "From subtle balayage to bold transformations using premium, hair-safe colors.",
      icon: <Palette />,
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Hair Spa",
      description: "Deep conditioning and restorative treatments for healthy, lustrous locks.",
      icon: <Sparkles />,
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Bridal Makeup",
      description: "Exquisite bridal transformations to make your special day truly unforgettable.",
      icon: <Heart />,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Signature Services</h2>
          <p className="text-gray-600">We offer a wide range of premium beauty services designed to pamper you from head to toe.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full py-3 bg-white text-luxury-black rounded-lg font-bold text-sm">
                    Book This Service
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="text-gold">{service.icon}</div>
                <h3 className="text-xl font-serif font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527799822367-a05eb58c28ee?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="gallery" className="py-24 bg-soft-pink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">The Art of Beauty</h2>
            <p className="text-gray-600">Take a glimpse into our world of transformation and elegance. Every shot captures a moment of beauty perfected at Amyra.</p>
          </div>
          <button className="px-8 py-3 bg-luxury-black text-white rounded-full text-sm font-bold">
            View All Photos
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img 
                src={src} 
                alt={`Gallery ${idx}`} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Regular Client",
      content: "The best salon experience I've had in Bhopal. The staff is professional and the ambiance is so relaxing. My hair transformation was exactly what I wanted!",
      rating: 5
    },
    {
      name: "Anjali Gupta",
      role: "Bride",
      content: "Amyra made my wedding day perfect. The bridal makeup was flawless and stayed fresh all day. I received so many compliments. Highly recommended for brides!",
      rating: 5
    },
    {
      name: "Sneha Verma",
      role: "Fashion Blogger",
      content: "Luxury at its best. Their hair spa is a must-try. I love how they pay attention to every detail. Truly the best salon in Piplani area.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Client Love</h2>
          <div className="flex justify-center gap-1 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-soft-pink rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 text-gold/20 w-12 h-12" />
              <p className="text-gray-600 mb-8 italic leading-relaxed">"{review.content}"</p>
              <div>
                <p className="font-serif font-bold text-lg">{review.name}</p>
                <p className="text-sm text-gold uppercase tracking-widest">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-luxury-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-10">Get in Touch</h2>
            <p className="text-gray-400 mb-12 text-lg">Ready for your transformation? Book an appointment or visit us today.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Our Location</h4>
                  <p className="text-gray-400">S1, infront of piplani petrol pump, Landmark Complex, Bhopal, Madhya Pradesh 462022</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Call Us</h4>
                  <p className="text-gray-400">09752461221</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Working Hours</h4>
                  <p className="text-gray-400">Mon - Sun: 10:00 AM - 08:30 PM</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl">
            <h3 className="text-luxury-black text-3xl font-serif mb-8">Book Appointment</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gold text-luxury-black" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input type="tel" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gold text-luxury-black" placeholder="Your Phone" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Service</label>
                <select className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gold text-luxury-black">
                  <option>Select a Service</option>
                  <option>Haircut & Styling</option>
                  <option>Hair Coloring</option>
                  <option>Hair Spa</option>
                  <option>Bridal Makeup</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Preferred Date</label>
                <input type="date" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gold text-luxury-black" />
              </div>
              <button className="w-full py-5 bg-gold text-white rounded-xl font-bold shadow-lg shadow-gold/20 hover:bg-gold/90 transition-all">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const GoogleMap = () => {
  return (
    <section className="h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-700">
      <iframe 
        src="https://www.google.com/maps?q=Amyra+Beauty+Junction+Bhopal+Piplani&output=embed" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy"
        title="Amyra Beauty Junction Location"
      ></iframe>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-luxury-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-serif font-bold tracking-tighter text-white">AMYRA</span>
          <span className="text-[8px] uppercase tracking-[0.3em] text-gold -mt-1">Beauty Junction</span>
        </div>
        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Amyra Beauty Junction. All rights reserved.
        </p>
        
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <GoogleMap />
      </main>
      <Footer />
    </div>
  );
}
