import { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const videoTestimonials = [
  {
    id: 1,
    title: "A parent's review on early childhood development",
    thumbnail: "https://images.unsplash.com/photo-1543269664-56d56910793b?w=400&h=700&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Why we chose Greenwood for our children",
    thumbnail: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=400&h=700&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "How the teachers support student growth",
    thumbnail: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=700&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Our experience with the admission process",
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=700&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "The amazing extracurricular activities",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=700&auto=format&fit=crop&q=80",
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-section-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-accent-foreground font-heading font-bold text-sm px-4 py-1 rounded-full mb-3">
            Happy Parents
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
            Watch Our <span className="text-gradient-gold">Parent Stories</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Hear directly from the families who trust us with their children's future.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center">
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-2 md:left-10 z-40 rounded-full w-12 h-12 bg-background/80 backdrop-blur shadow-md hover:bg-background"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-2 md:right-10 z-40 rounded-full w-12 h-12 bg-background/80 backdrop-blur shadow-md hover:bg-background"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="relative w-full h-full flex items-center justify-center">
            {videoTestimonials.map((video, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + videoTestimonials.length) % videoTestimonials.length;
              const isNext = index === (activeIndex + 1) % videoTestimonials.length;
              
              if (!isActive && !isPrev && !isNext) return null;

              // Determine classes based on position
              let positionClasses = "";
              if (isActive) {
                positionClasses = "z-30 scale-100 opacity-100 blur-0 translate-x-0 shadow-2xl";
              } else if (isPrev) {
                positionClasses = "z-20 scale-[0.85] opacity-50 blur-[3px] -translate-x-[55%] md:-translate-x-[80%] shadow-lg";
              } else if (isNext) {
                positionClasses = "z-20 scale-[0.85] opacity-50 blur-[3px] translate-x-[55%] md:translate-x-[80%] shadow-lg";
              }

              return (
                <div 
                  key={video.id}
                  className={`absolute w-[260px] md:w-[320px] aspect-[9/16] transition-all duration-500 ease-in-out cursor-pointer ${positionClasses}`}
                  onClick={() => {
                    if (isPrev) handlePrev();
                    if (isNext) handleNext();
                  }}
                >
                  <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden relative bg-card border border-border/50 group">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    
                    <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-colors ${isActive ? 'group-hover:bg-black/40' : ''}`}>
                       <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg backdrop-blur-md transform transition-transform group-hover:scale-110">
                         <Play className="h-8 w-8 ml-1 fill-current" />
                       </div>
                    </div>
                    
                    {isActive && (
                      <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <p className="text-white font-heading font-medium text-lg md:text-xl leading-tight drop-shadow-md">
                          "{video.title}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
