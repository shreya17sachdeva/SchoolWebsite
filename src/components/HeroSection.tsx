import { GraduationCap, Star } from "lucide-react";
import heroImg from "@/assets/hero_school.jpeg";

// Indian academic year: April–March (e.g. April 2025 → "2025-26")
const getAdmissionYear = () => {
  const now = new Date();
  const year = now.getFullYear();
  // Months are 0-indexed; month >= 3 means April or later
  const startYear = now.getMonth() >= 3 ? year : year - 1;
  return `${startYear}-${String(startYear + 1).slice(-2)}`;
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Happy school children" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full font-heading font-bold text-sm animate-fade-in-up">
            <Star className="h-4 w-4" fill="currentColor" />
            Admissions Open {getAdmissionYear()}
            <Star className="h-4 w-4" fill="currentColor" />
          </div>

          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Greenwood<br />
            <span className="text-secondary">Public School</span>
          </h1>

          <p className="font-heading font-bold text-xl md:text-2xl text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Where Little Minds Grow, <br/>Dreams Take Flight <br/>& Learning is Fun
          </p>

          <p className="font-body text-primary-foreground/75 text-base md:text-lg max-w-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            English Medium | CBSE Pattern | Co-Educational<br />
            Play Group (2.5 Years) to Class 8th & Beyond
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 bg-gold-gradient text-secondary-foreground px-8 py-3 rounded-xl font-heading font-extrabold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <GraduationCap className="h-5 w-5" /> Enroll Now — Free Admission!
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-xl font-heading font-bold hover:bg-primary-foreground/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
          <path d="M0,60 C360,100 720,20 1440,60 L1440,100 L0,100 Z" fill="hsl(80 40% 97%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
