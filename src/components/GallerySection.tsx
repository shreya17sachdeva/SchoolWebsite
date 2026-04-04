import { useState } from "react";
import { X } from "lucide-react";
import annualDay from "@/assets/gallery-annual-day.jpg";
import science from "@/assets/gallery-science.jpg";
import yoga from "@/assets/gallery-yoga.jpg";
import art from "@/assets/gallery-art.jpg";
import republicDay from "@/assets/gallery-republic-day.jpg";
import sportsDay from "@/assets/gallery-sports-day.jpg";

const photos = [
  { src: annualDay, label: "Annual Day Celebration" },
  { src: science, label: "Science Lab" },
  { src: yoga, label: "Yoga & Wellness" },
  { src: art, label: "Art & Craft" },
  { src: republicDay, label: "Republic Day" },
  { src: sportsDay, label: "Sports Day" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent text-accent-foreground font-heading font-bold text-sm px-4 py-1 rounded-full mb-3">
            Campus Life
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
            Our <span className="text-gradient-green">Photo Gallery</span>
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-lg mx-auto">
            A glimpse into the vibrant life at Greenwood Public School.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <button
              key={photo.label}
              onClick={() => setSelected(i)}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                <span className="font-heading font-bold text-primary-foreground text-sm px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {photo.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={photos[selected].src}
            alt={photos[selected].label}
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
