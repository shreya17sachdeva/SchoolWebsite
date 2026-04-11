import { Gift, FileCheck, UserPlus, PartyPopper } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Visit Campus", desc: "Schedule a campus tour to see our facilities" },
  { icon: FileCheck, title: "Fill Form", desc: "Complete the simple admission form" },
  { icon: PartyPopper, title: "Welcome!", desc: "Your child joins the Greenwood family" },
];

const AdmissionsSection = () => {
  return (
    <section id="admissions" className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary-foreground/5 animate-float" />
      <div className="absolute bottom-20 left-10 w-28 h-28 rounded-full bg-primary-foreground/5 animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          
          <h2 className="font-heading font-black text-3xl md:text-5xl text-primary-foreground">
            🎓 Admissions Open 2025-26
          </h2>
          <p className="font-body text-primary-foreground/80 mt-3 max-w-md mx-auto">
            Play Group (2.5 Years) | Nursery | KG | Class 1st to 8th & Beyond
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 flex-wrap">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/20 w-full sm:w-56 md:w-64 flex-shrink-0">
              <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-black text-secondary-foreground text-lg">
                {i + 1}
              </div>
              <s.icon className="h-8 w-8 text-primary-foreground mx-auto mb-3" />
              <h3 className="font-heading font-extrabold text-lg text-primary-foreground">{s.title}</h3>
              <p className="font-body text-sm text-primary-foreground/70 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="tel:+918209936950"
            className="inline-flex items-center gap-2 bg-gold-gradient text-secondary-foreground px-10 py-4 rounded-xl font-heading font-extrabold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all animate-pulse-glow"
          >
            📞 Call +91 82099 36950
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
