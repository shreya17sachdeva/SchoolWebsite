import { Heart } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <div>
              <span className="font-heading font-extrabold text-lg block">Greenwood Public School</span>
              <span className="font-body text-xs text-primary-foreground/60">English Medium | CBSE Pattern</span>
            </div>
          </div>

          {/* <p className="font-body text-sm text-primary-foreground/60 flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-destructive" fill="currentColor" /> for little dreamers
          </p> */}

          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 Greenwood Public School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
