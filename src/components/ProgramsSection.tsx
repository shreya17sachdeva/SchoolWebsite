import { Baby, Smile, BookOpen, GraduationCap } from "lucide-react";

const programs = [
  {
    icon: Baby,
    title: "Play Group",
    age: "2.5+ Years",
    description: "A gentle introduction to school life through play, art, and sensory activities.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Smile,
    title: "Nursery & KG",
    age: "3-5 Years",
    description: "Building foundational skills in reading, writing, and social interaction.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: BookOpen,
    title: "Class 1st to 5th",
    age: "6-10 Years",
    description: "Comprehensive CBSE curriculum with focus on conceptual learning and creativity.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: GraduationCap,
    title: "Class 6th to 8th",
    age: "11-14 Years",
    description: "Advanced academics with STEM, sports, and personality development programs.",
    color: "bg-accent text-accent-foreground",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent text-accent-foreground font-heading font-bold text-sm px-4 py-1 rounded-full mb-3">Our Programs</span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
            Nurturing Every Stage of <span className="text-gradient-green">Growth</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${p.color} mb-4`}>
                <p.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-foreground mb-1">{p.title}</h3>
              <span className="inline-block bg-primary/10 text-primary font-body text-xs font-semibold px-2 py-0.5 rounded-full mb-3">{p.age}</span>
              <p className="font-body text-sm text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
