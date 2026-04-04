import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ActivitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <AdmissionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
