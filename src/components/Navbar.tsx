import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Greenwood Public School" className="h-10 w-10" />
          <div className="leading-tight">
            <span className="font-heading font-extrabold text-primary text-lg block">Greenwood</span>
            <span className="font-heading font-bold text-secondary text-xs block -mt-1">Public School</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+918209936950"
            className="flex items-center gap-2 bg-hero-gradient text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-body text-sm font-medium text-foreground hover:text-primary py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+918209936950"
            className="flex items-center justify-center gap-2 bg-hero-gradient text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
