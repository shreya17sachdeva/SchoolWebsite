import { useState } from "react";
import { X, Images } from "lucide-react";

// Featured row (left → right)
import img0182 from "@/assets/annual_presentation/IMG_0182.JPG";
import img0619 from "@/assets/annual_presentation/IMG_0619.JPG";
import img0673 from "@/assets/annual_presentation/IMG_0673.JPG";

// Additional photos — "View All" modal only
import img0054 from "@/assets/annual_presentation/IMG_0054.JPG";
import img0059 from "@/assets/annual_presentation/IMG_0059.JPG";
import img0613 from "@/assets/annual_presentation/IMG_0613.JPG";
import img0615 from "@/assets/annual_presentation/IMG_0615.JPG";
import img0618 from "@/assets/annual_presentation/IMG_0618.JPG";
import img0662 from "@/assets/annual_presentation/IMG_0662.JPG";
import img0665 from "@/assets/annual_presentation/IMG_0665.JPG";
import img0734 from "@/assets/annual_presentation/IMG_0734.JPG";
import img0737 from "@/assets/annual_presentation/IMG_0737.JPG";
import img0740 from "@/assets/annual_presentation/IMG_0740.JPG";

const featuredPhotos = [
  { src: img0182, label: "Opening Ceremony" },
  { src: img0619, label: "Dance Performance" },
  { src: img0673, label: "Felicitation Ceremony" },
];

const allPhotos = [
  ...featuredPhotos,
  { src: img0054, label: "Student Showcase" },
  { src: img0059, label: "Student Performance" },
  { src: img0613, label: "Student Performance" },
  { src: img0615, label: "Student Performance" },
  { src: img0618, label: "Student Performance"},
  { src: img0662, label: "Student Performance" },
  { src: img0665, label: "Student Performance" },
  { src: img0734, label: "Student Performance" },
  { src: img0737, label: "Student Performance" },
  { src: img0740, label: "Joyful Memories" },
];

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Which photo array feeds the lightbox
  const lightboxPhotos = showAll ? allPhotos : featuredPhotos;

  const openLightbox = (index: number, fromAll = false) => {
    setShowAll(fromAll);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i! - 1 + lightboxPhotos.length) % lightboxPhotos.length);
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i! + 1) % lightboxPhotos.length);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-accent text-accent-foreground font-heading font-bold text-sm px-4 py-1 rounded-full mb-3">
            Annual Day
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
            Reliving the <span className="text-gradient-green">Magic</span>
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-lg mx-auto">
            A celebration of talent, culture, and achievement — our Annual Day brought smiles, pride,
            and memories that will last a lifetime.
          </p>
        </div>

        {/* One row: three featured photos */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {featuredPhotos.map((photo, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i, false)}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                <span className="font-heading font-bold text-white text-sm px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">
                  {photo.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <Images className="w-4 h-4" />
            View All
          </button>
        </div>
      </div>

      {/* ── All Photos Modal (blurred translucent backdrop) ── */}
      {showAll && lightboxIndex === null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(12px)" }}
          onClick={() => setShowAll(false)}
        >
          <div
            className="relative w-full max-w-5xl mx-4 max-h-[90vh] overflow-y-auto rounded-3xl p-6"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowAll(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-white font-heading font-black text-2xl mb-6 text-center drop-shadow">
              Annual Presentation Day
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {allPhotos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i, true)}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-xl transition-all hover:scale-[1.03]"
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                    <span className="text-white text-xs font-heading font-bold px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {photo.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-10 text-xl font-bold"
            onClick={goPrev}
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={lightboxPhotos[lightboxIndex].src}
            alt={lightboxPhotos[lightboxIndex].label}
            className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-heading font-semibold text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur">
            {lightboxPhotos[lightboxIndex].label} &nbsp;·&nbsp; {lightboxIndex + 1} / {lightboxPhotos.length}
          </div>

          {/* Next */}
          <button
            className="absolute right-4 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-10 text-xl font-bold"
            onClick={goNext}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
