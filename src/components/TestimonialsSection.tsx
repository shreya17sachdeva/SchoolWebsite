import { useState, useRef, useCallback } from "react";
import { Play, ChevronLeft, ChevronRight, Volume2, VolumeX, X, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const videoTestimonials = [
  {
    id: 1,
    title: "A parent's review on early childhood development",
    thumbnail: "",
    videoSrc: "/parent's feedback.mp4",
  },
  {
    id: 2,
    title: "Why we chose Greenwood for our children",
    thumbnail: "",
    videoSrc: "/parent's feedback (1).mp4",
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
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoSrc, setModalVideoSrc] = useState("");

  const videoRef = useRef<HTMLVideoElement>(null);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const openModal = useCallback((src: string) => {
    setModalVideoSrc(src);
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setModalVideoSrc("");
  };

  // Single click → navigate; double click → open fullscreen modal
  const handleVideoCardClick = (
    e: React.MouseEvent,
    isActive: boolean,
    isPrev: boolean,
    isNext: boolean,
    videoSrc?: string
  ) => {
    if (!isActive) {
      if (isPrev) handlePrev();
      if (isNext) handleNext();
      return;
    }

    if (!videoSrc) return;

    if (clickTimerRef.current) {
      // Double click detected
      clearTimeout(clickTimerRef.current);
      clickTimerRef.current = null;
      openModal(videoSrc);
    } else {
      clickTimerRef.current = setTimeout(() => {
        clickTimerRef.current = null;
        // single click — do nothing extra for video cards
      }, 280);
    }
  };

  return (
    <>
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
                const videoSrc = (video as any).videoSrc as string | undefined;

                if (!isActive && !isPrev && !isNext) return null;

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
                    onClick={(e) => handleVideoCardClick(e, isActive, isPrev, isNext, videoSrc)}
                    title={isActive && videoSrc ? "Double-click to expand" : undefined}
                  >
                    <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden relative bg-card border border-border/50 group">
                      {videoSrc ? (
                        <>
                          <video
                            ref={isActive ? videoRef : undefined}
                            src={videoSrc}
                            className="w-full h-full object-cover"
                            controls={isActive}
                            muted={isMuted}
                            loop
                            playsInline
                          />

                          {/* Mute / Unmute button — only on active card */}
                          {isActive && (
                            <button
                              onClick={toggleMute}
                              className="absolute top-3 right-3 z-50 w-9 h-9 rounded-full bg-black/60 backdrop-blur text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                              title={isMuted ? "Unmute" : "Mute"}
                            >
                              {isMuted ? (
                                <VolumeX className="w-4 h-4" />
                              ) : (
                                <Volume2 className="w-4 h-4" />
                              )}
                            </button>
                          )}

                          {/* Expand hint — only on active card */}
                          {isActive && (
                            <button
                              onClick={(e) => { e.stopPropagation(); openModal(videoSrc); }}
                              className="absolute top-3 left-3 z-50 w-9 h-9 rounded-full bg-black/60 backdrop-blur text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                              title="Open fullscreen"
                            >
                              <Maximize2 className="w-4 h-4" />
                            </button>
                          )}
                        </>
                      ) : (
                        <>
                          <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                          <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-colors ${isActive ? "group-hover:bg-black/40" : ""}`}>
                            <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg backdrop-blur-md transform transition-transform group-hover:scale-110">
                              <Play className="h-8 w-8 ml-1 fill-current" />
                            </div>
                          </div>
                        </>
                      )}

                      {isActive && (video as any).title && (
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

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 z-10 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <video
              src={modalVideoSrc}
              className="w-full rounded-2xl shadow-2xl"
              controls
              autoPlay
              loop
              style={{ maxHeight: "85vh" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsSection;
