import { Heart, BookOpen, Users, Trophy } from "lucide-react";
import classroomImg from "@/assets/Untitled-3.jpg";

const stats = [
  { icon: BookOpen, value: "CBSE", label: "Pattern" },
  { icon: Users, value: "500+", label: "Students" },
  { icon: Trophy, value: "10+", label: "Activities" },
  { icon: Heart, value: "100%", label: "Dedication" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent text-accent-foreground font-heading font-bold text-sm px-4 py-1 rounded-full mb-3">About Us</span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
            We Don't Just Teach Subjects,<br />
            <span className="text-gradient-green">We Build 21st Century Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="relative inline-block">
              <img
                src={classroomImg}
                alt="Students in classroom"
                className="rounded-2xl shadow-xl object-cover"
                style={{ maxHeight: "380px", width: "auto", maxWidth: "100%" }}
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold-gradient text-secondary-foreground font-heading font-extrabold text-lg px-6 py-3 rounded-xl shadow-lg">
                Since 2018
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              At Greenwood Public School, we believe education is not just a business — it's a responsibility.
              Under the visionary guidance of <strong className="text-foreground">Ishita Mam & Aakash Sir</strong>,
              we nurture young minds from Play Group to Class 8th with a perfect blend of academics,
              values, and 21st-century skills.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              हम शिक्षा को व्यापार नहीं, जिम्मेदारी मानते हैं। Our campus at Greenpark Colony, Jhotwara, Jaipur
              provides a safe, inspiring environment where every child can discover their potential.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-card rounded-xl p-4 text-center shadow-sm border border-border">
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-heading font-extrabold text-xl text-foreground">{value}</div>
                  <div className="font-body text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
