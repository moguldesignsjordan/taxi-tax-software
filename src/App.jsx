import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle, 
  Car, 
  Users, 
  Monitor, 
  Shield, 
  HelpCircle, 
  Menu, 
  X, 
  ChevronRight,
  Briefcase,
  Laptop,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Zap
} from 'lucide-react';

// --- Global Styles for Animations and Custom Fonts ---
const GlobalStyles = () => (
  <style>{`
    /* Import a heavy, bold font like Montserrat Black */
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .reveal-hidden {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
    }
    
    .reveal-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .delay-100 { transition-delay: 100ms; }
    .delay-200 { transition-delay: 200ms; }
    .delay-300 { transition-delay: 300ms; }

    /* Custom Utility for Ultra-Heavy Font */
    .font-heavy {
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
    }
  `}</style>
);

// --- Helper Components ---

// Animation Wrapper
const Reveal = ({ children, className = "", delay = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`${className} reveal-hidden ${isVisible ? 'reveal-visible' : ''} ${delay}`}>
      {children}
    </div>
  );
};

// Navigation Component
const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black py-3 md:py-4 shadow-lg' : 'bg-black/90 md:bg-transparent py-4 md:py-6 backdrop-blur-sm md:backdrop-blur-none'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center group cursor-pointer z-50">
          <img 
            src="/logo.png" 
            alt="Taxi Tax Software Logo" 
            className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/logo.png";
            }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white hover:text-[#FDEA08] font-bold uppercase text-sm tracking-wide transition-colors">Features</a>
          <a href="#power-play" className="text-white hover:text-[#FDEA08] font-bold uppercase text-sm tracking-wide transition-colors">Why Us</a>
          <a href="#pricing" className="text-white hover:text-[#FDEA08] font-bold uppercase text-sm tracking-wide transition-colors">Pricing</a>
          <a href="#contact" className="text-white hover:text-[#FDEA08] font-bold uppercase text-sm tracking-wide transition-colors">Contact</a>
          <button className="bg-[#FDEA08] text-black hover:bg-white hover:text-black px-6 py-2 rounded font-black uppercase text-sm tracking-wider transform hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            Try Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 z-40 transform transition-transform duration-300 ease-in-out md:hidden flex items-center justify-center ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-8 space-y-8 text-center w-full max-w-sm">
          <a href="#features" onClick={() => setIsOpen(false)} className="text-white hover:text-[#FDEA08] text-2xl font-black uppercase tracking-wider">Features</a>
          <a href="#power-play" onClick={() => setIsOpen(false)} className="text-white hover:text-[#FDEA08] text-2xl font-black uppercase tracking-wider">Why Us</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-white hover:text-[#FDEA08] text-2xl font-black uppercase tracking-wider">Pricing</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-white hover:text-[#FDEA08] text-2xl font-black uppercase tracking-wider">Contact</a>
          <button className="bg-[#FDEA08] text-black px-6 py-4 rounded font-black uppercase text-xl w-full shadow-[0_0_20px_rgba(253,234,8,0.3)]">
            Try Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center pt-32 md:pt-40 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(253,234,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(253,234,8,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="text-left space-y-8 order-2 md:order-1 pb-12 md:pb-0">
          <Reveal>
            <div className="inline-block bg-[#FDEA08] text-black font-black px-5 py-2 transform -skew-x-6 shadow-lg">
              <span className="block transform skew-x-6 text-xs md:text-sm uppercase tracking-widest">Become an ERO with Us</span>
            </div>
          </Reveal>
          
          <Reveal delay="delay-100">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heavy text-white leading-[0.9] tracking-tighter">
              GOING<br />
              <span className="text-white">PLACES?</span>
            </h1>
          </Reveal>
          
          <Reveal delay="delay-200">
            <h2 className="text-4xl md:text-6xl font-heavy text-white tracking-tighter">
              GO <span className="text-[#FDEA08] drop-shadow-[0_0_30px_rgba(253,234,8,0.5)]">TAXI.</span>
            </h2>
          </Reveal>
          
          <Reveal delay="delay-300">
            <p className="text-gray-300 text-base md:text-xl max-w-lg leading-relaxed pt-2">
              Professional Tax Software & DFY Tax Business in a Box. Start your own tax preparation business with industry-leading tools and mentorship.
            </p>
          </Reveal>

          <Reveal delay="delay-300">
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#pricing" className="bg-[#FDEA08] text-black px-8 py-4 rounded-lg font-black uppercase tracking-wider text-center hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base shadow-[0_10px_40px_-10px_rgba(253,234,8,0.4)]">
                Get Started <ChevronRight size={20} strokeWidth={3} />
              </a>
              <a href="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg font-black uppercase tracking-wider text-center hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base backdrop-blur-sm">
                View Features
              </a>
            </div>
          </Reveal>
        </div>

        {/* Hero Visual */}
        <div className="relative order-1 md:order-2 flex justify-center items-center">
           <div className="relative w-80 md:w-[500px] group animate-[fadeInUp_1.5s_ease-out]">
              <div className="absolute inset-0 bg-[#FDEA08] opacity-20 blur-[100px] rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
              <img 
                src="/hero-box.jpg" 
                alt="Taxi Tax Software Box" 
                className="relative w-full h-auto object-contain transform transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2 filter drop-shadow-2xl"
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src="/taxi.png";
                }}
              />
           </div>
        </div>
      </div>
    </section>
  );
};

// Power Play Section
const PowerPlay = () => {
  return (
    <section id="power-play" className="py-24 md:py-32 bg-black text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FDEA08] to-yellow-300 text-black font-black px-8 py-3 rounded-full mb-10 text-lg uppercase tracking-wider shadow-lg">
              <Zap size={20} />
              The Power Play!
            </div>
          </Reveal>
          
          <Reveal delay="delay-100">
            <h2 className="text-5xl md:text-7xl font-heavy mb-3 tracking-tighter uppercase leading-none">
              Earn More. Do Less.
            </h2>
            <h2 className="text-5xl md:text-7xl font-heavy mb-12 tracking-tighter text-[#FDEA08] uppercase leading-none">
              Scale Fast.
            </h2>
          </Reveal>

          <Reveal delay="delay-200">
            <h3 className="text-2xl md:text-4xl font-bold mb-8 text-gray-200 uppercase">
              Tired of Splitting Profits?
            </h3>
            <p className="text-xl md:text-2xl text-white mb-16 font-medium max-w-3xl mx-auto leading-relaxed">
              You keep more of what you earn while delivering <span className="text-[#FDEA08] font-black">TOP-TIER TAX SERVICES.</span>
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {[
              "Increase revenue with refund advances",
              "Full training & setup support",
              "Recruit & manage your own team",
              "Offer professional tax filing nationwide"
            ].map((item, i) => (
              <Reveal key={i} delay={`delay-${200 + (i * 100)}`}>
                <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 flex items-center gap-5 hover:border-[#FDEA08] hover:shadow-[0_0_30px_-5px_rgba(253,234,8,0.3)] transition-all duration-300 group">
                  <div className="bg-[#FDEA08] rounded-xl p-3 text-black group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <CheckCircle size={28} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-lg md:text-xl">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const Features = () => {
  const features = [
    { icon: <Monitor size={32} />, title: "Unlimited 1040 e-filing", desc: "File as many returns as you need without extra fees per return." },
    { icon: <Shield size={32} />, title: "Bank Products", desc: "Offer your clients refund advances and checks." },
    { icon: <Briefcase size={32} />, title: "Branded to Your Business", desc: "Your logo, your colors. We make you look like the pro you are." },
    { icon: <Laptop size={32} />, title: "Cloud Based Software", desc: "Access your tax office from anywhere, anytime. Mac & PC compatible." },
    { icon: <Users size={32} />, title: "Multi-user Access", desc: "Scale your team effortlessly with secure multi-user environments." },
    { icon: <CheckCircle size={32} />, title: "All States Included", desc: "File returns for any state with income tax requirements." },
    { icon: <HelpCircle size={32} />, title: "Dedicated Tech Support", desc: "We don't leave you hanging. Expert support when you need it." },
    { icon: <GraduationCap size={32} />, title: "Mentorship & Training", desc: "Virtual SOPs, recruiting guides, and marketing training included." },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 text-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Why Choose <span className="text-[#FDEA08] bg-black px-3 py-1">Taxi?</span></h2>
          </Reveal>
          <Reveal delay="delay-100">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Everything you need to run a successful tax business, packaged in one powerful platform.</p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index % 2 === 0 ? "" : "delay-100"}>
              <div className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#FDEA08] group h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDEA08] opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500"></div>
                <div className="text-[#FDEA08] mb-6 bg-black w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight relative z-10">{feature.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed relative z-10">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const Pricing = () => {
  const plans = [
    {
      name: "Starter Cab",
      price: "$199",
      subtitle: "Beginner Level",
      split: "60/40 Revenue Split",
      description: "Get in and start your tax journey.",
      features: [
        "Professional Tax Software (Single Office)",
        "Step-by-Step Software Training",
        "Tax Training for Beginners",
        "Bank Products / Refund Loans",
        "Tech Support & Troubleshooting",
        "Secure Cloud-Based System",
        "Ongoing Tax Season Updates",
        "Resource Library (Forms, Templates)"
      ],
      link: "https://buy.stripe.com/8x29ASa6dbHegtr4EIbQY00",
      highlight: false
    },
    {
      name: "Business Express",
      price: "$997",
      subtitle: "Intermediate Level",
      split: "NO Revenue Split",
      description: "Built for preparers ready to pick up more clients.",
      features: [
        "Professional Tax Software (Unlimited)",
        "Software Training",
        "Custom Business Name Setup",
        "Ability to Offer Tax Loans",
        "Client Forms Library & Law Updates",
        "Bank Product Registration",
        "Unlimited PTINs",
        "Business Payroll System Setup",
        "Private TAXI Co-Work Group"
      ],
      link: "https://buy.stripe.com/aFa4gycel8v2fpngnqbQY02",
      highlight: true
    },
    {
      name: "ERO Executive",
      price: "$1499",
      subtitle: "Advanced Level",
      split: "NO Revenue Split",
      description: "For EROs managing a full fleet.",
      features: [
        "Own Reseller-Level License",
        "The Full TAXI Blueprint",
        "1-on-1 Training & Mentorship",
        "Branding & Marketing Training",
        "Done-for-You Templates",
        "IRS EFIN & Bank Setup Support",
        "Client Intake Forms & Contracts",
        "Exclusive Executive Group Access"
      ],
      link: "https://buy.stripe.com/4gM5kCemt3aIgtr0osbQY01",
      highlight: false
    },
    {
      name: "Presidential Chauffeur",
      price: "$2000",
      subtitle: "Elite Level",
      split: "NO Revenue Split",
      description: "The Ultimate VIP Experience for Serious Tax Leaders.",
      features: [
        "Private-Labeled Software (White Label)",
        "Bureau-Level Access & Licensing",
        "Complete Onboarding System",
        "Full Coaching & Mentorship Program",
        "TAXI Lead Generation Tools",
        "Full Branding Setup",
        "Payroll Management & Hiring System",
        "Complete Revenue Control"
      ],
      link: "https://buy.stripe.com/fZucN4emt5iQelj8UYbQY03",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(253,234,8,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(253,234,8,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Software <span className="text-[#FDEA08]">Packages</span></h2>
          </Reveal>
          <Reveal delay="delay-100">
            <p className="text-gray-300 text-lg md:text-xl">Choose the package that drives your business forward.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-[1500px] mx-auto">
          {plans.map((plan, index) => (
            <Reveal key={index} delay={`delay-${(index * 100) % 400}`}>
              <div 
                className={`relative flex flex-col p-8 rounded-3xl transition-all duration-500 h-full ${
                  plan.highlight 
                    ? 'bg-[#1a1a1a] border-2 border-[#FDEA08] transform md:-translate-y-6 shadow-[0_20px_60px_-15px_rgba(253,234,8,0.3)] z-10' 
                    : 'bg-[#0a0a0a] border border-gray-800 hover:border-gray-600 hover:shadow-2xl'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FDEA08] to-yellow-400 text-black text-xs font-black px-6 py-2 rounded-full uppercase shadow-lg">
                    Best Value
                  </div>
                )}
                
                <h3 className={`text-xl font-black uppercase mb-2 ${plan.highlight ? 'text-[#FDEA08]' : 'text-gray-100'}`}>
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-500 font-bold uppercase mb-6">{plan.subtitle}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <div className={`${plan.highlight ? 'bg-[#FDEA08] text-black' : 'bg-gray-800 text-[#FDEA08]'} font-bold text-xs uppercase mt-3 px-3 py-2 inline-block rounded-lg`}>
                    {plan.split}
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-8 pb-6 border-b border-gray-800">
                  {plan.description}
                </p>
                
                <ul className="space-y-4 mb-10 flex-1 text-sm text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-[#FDEA08]' : 'text-gray-600'}`}>
                        <CheckCircle size={16} strokeWidth={2.5} />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-black uppercase tracking-wider text-center text-sm transition-all duration-300 block ${
                    plan.highlight 
                      ? 'bg-[#FDEA08] text-black hover:bg-white hover:scale-105 shadow-lg' 
                      : 'border-2 border-white text-white hover:bg-white hover:text-black'
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white text-black relative">
       <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Contact Info Side */}
          <div className="lg:w-1/2 max-w-xl">
            <Reveal>
              <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight">
                Ready to<br />
                <span className="text-[#FDEA08] bg-black px-4 py-2 inline-block mt-2">Start Driving?</span>
              </h2>
            </Reveal>
            <Reveal delay="delay-100">
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Whether you're a new ERO or a seasoned pro, we have the tools you need. Reach out today for a demo or consultation.
              </p>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay="delay-100">
                <div className="flex items-start gap-5 group">
                  <div className="bg-black text-[#FDEA08] p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-xl mb-2">Email Us</h4>
                    <p className="text-gray-600 break-all text-lg">support@taxitaxsoftware.com</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay="delay-200">
                <div className="flex items-start gap-5 group">
                  <div className="bg-black text-[#FDEA08] p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-xl mb-2">Call Us</h4>
                    <p className="text-gray-800 text-lg font-bold">1-800-TAXI-TAX</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri: 9am - 6pm EST</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay="delay-300">
                <div className="flex items-start gap-5 group">
                  <div className="bg-black text-[#FDEA08] p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-xl mb-2">Headquarters</h4>
                    <p className="text-gray-600 text-lg">Fort Worth,TX</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 w-full max-w-xl">
            <Reveal delay="delay-200" className="h-full">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-gray-100 h-full">
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-8">
                  Send a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-gray-700">First Name</label>
                      <input type="text" className="w-full bg-gray-50 border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#FDEA08] focus:bg-white transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-gray-700">Last Name</label>
                      <input type="text" className="w-full bg-gray-50 border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#FDEA08] focus:bg-white transition-all" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-700">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#FDEA08] focus:bg-white transition-all" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-700">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#FDEA08] focus:bg-white transition-all" placeholder="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-700">Message</label>
                    <textarea rows="4" className="w-full bg-gray-50 border-2 border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#FDEA08] focus:bg-white transition-all resize-none" placeholder="I'm interested in the Business in a Box..."></textarea>
                  </div>

                  <button className="w-full bg-black text-white hover:bg-[#FDEA08] hover:text-black py-5 rounded-xl font-black uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group text-lg">
                    Send Request 
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

        </div>
       </div>
    </section>
  );
}

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 border-t border-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Reveal>
              <div className="flex items-center gap-2 mb-8">
                 <img 
                   src="/logo.png" 
                   alt="Taxi Tax Software Logo" 
                   className="h-12 w-auto object-contain"
                   onError={(e) => {
                     e.target.onerror = null;
                     e.target.src = "/logo.png";
                   }}
                 />
              </div>
            </Reveal>
            <Reveal delay="delay-100">
              <p className="text-gray-400 max-w-sm mb-8 text-lg leading-relaxed">
                Empowering tax professionals with cutting-edge technology and business support. Go Places with Go Taxi.
              </p>
            </Reveal>
            <Reveal delay="delay-200">
              <div className="flex space-x-4">
                 <a href="#" className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-[#FDEA08] hover:text-black transition-all duration-300 hover:scale-110 cursor-pointer">
                    <Facebook size={20} />
                 </a>
                 <a href="#" className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-[#FDEA08] hover:text-black transition-all duration-300 hover:scale-110 cursor-pointer">
                    <Twitter size={20} />
                 </a>
                 <a href="#" className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-[#FDEA08] hover:text-black transition-all duration-300 hover:scale-110 cursor-pointer">
                    <Instagram size={20} />
                 </a>
                 <a href="#" className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-[#FDEA08] hover:text-black transition-all duration-300 hover:scale-110 cursor-pointer">
                    <Linkedin size={20} />
                 </a>
              </div>
            </Reveal>
          </div>
          
          <div>
            <Reveal delay="delay-100">
              <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-lg">Platform</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#features" className="hover:text-[#FDEA08] cursor-pointer transition-colors hover:translate-x-1 inline-block duration-300">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#FDEA08] cursor-pointer transition-colors hover:translate-x-1 inline-block duration-300">Pricing</a></li>
                <li><a href="#power-play" className="hover:text-[#FDEA08] cursor-pointer transition-colors hover:translate-x-1 inline-block duration-300">Why Choose Us</a></li>
                <li><button className="hover:text-[#FDEA08] cursor-pointer transition-colors hover:translate-x-1 inline-block duration-300 text-left">Try Demo</button></li>
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal delay="delay-200">
              <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-lg">Legal</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-[#FDEA08] cursor-pointer transition-colors hover:translate-x-1 inline-block duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#FDEA08] cursor-pointer transition-colors hover:translate-x-1 inline-block duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#FDEA08] cursor-pointer transition-colors hover:translate-x-1 inline-block duration-300">Bank Agreements</a></li>
                <li><a href="#contact" className="hover:text-[#FDEA08] cursor-pointer transition-colors hover:translate-x-1 inline-block duration-300">Contact Support</a></li>
              </ul>
            </Reveal>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>&copy; 2025 Taxi Tax Software. All rights reserved.</p>
          <p>Designed for Professional EROs.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-white selection:bg-[#FDEA08] selection:text-black">
      <GlobalStyles />
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <PowerPlay />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;