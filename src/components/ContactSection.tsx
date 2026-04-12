import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent text-accent-foreground font-heading font-bold text-sm px-4 py-1 rounded-full mb-3">Get In Touch</span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
            Visit <span className="text-gradient-green">Our Campus</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground">Address</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Plot No. 96, Greenpark Colony, Dadi Ka Phatak,<br />
                  Nirmal Vihar, Jhotwara, Jaipur, Rajasthan
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground">Phone</h3>
                <a href="tel:+918209936950" className="font-body text-sm text-primary font-semibold hover:underline">
                  +91 82099 36950
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground">School Hours</h3>
                <p className="font-body text-sm text-muted-foreground">Monday – Saturday: 8:00 AM – 2:00 PM</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground">Adjacent to</h3>
                <p className="font-body text-sm text-muted-foreground">200 Feet Bypass Road</p>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-80 md:h-full min-h-[320px]">
            <iframe
              title="Greenwood Public School Location"
              src="https://maps.google.com/maps?q=Greenwood%20Public%20School,%20Jhotwara,%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
