import { Bot, Swords, Dribbble, Calculator, BookHeart, CheckCircle2 } from "lucide-react";
import stemImg from "@/assets/Untitled-1.jpg";
import sportsImg from "@/assets/Untitled-2.jpg";

const activities = [
  { icon: Bot, label: "Coding, AI & Robotics" },
  { icon: Swords, label: "Karate & Skating" },
  { icon: Dribbble, label: "Multiple Sports" },
  { icon: Calculator, label: "Abacus & Hobby Class" },
  { icon: BookHeart, label: "Vedic Sanskar Shiksha" },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent text-accent-foreground font-heading font-bold text-sm px-4 py-1 rounded-full mb-3">Beyond Academics</span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
            Special Learning <span className="text-gradient-gold">Programs</span>
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-lg mx-auto">
            Give your child the best education with our holistic approach to learning and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={stemImg} alt="STEM activities" className="rounded-2xl shadow-lg w-full h-48 object-cover" loading="lazy" width={800} height={600} />
            <img src={sportsImg} alt="Sports activities" className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8" loading="lazy" width={800} height={600} />
          </div>

          <div className="space-y-4">
            {activities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-card rounded-xl px-5 py-4 shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5 text-secondary-foreground" />
                </div>
                <span className="font-heading font-bold text-foreground">{label}</span>
                <CheckCircle2 className="h-5 w-5 text-primary ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
