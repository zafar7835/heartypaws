import React, { useState } from 'react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'grooming', label: 'Grooming' },
    { id: 'clinic', label: 'Clinic & Vaccine' },
    { id: 'spa', label: 'Pet Spa' },
    { id: 'pets', label: 'Happy Clients' }
  ];

  // Filter images based on state
  const filteredImages = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  const openLightbox = (imgId: string) => {
    const globalIndex = GALLERY_DATA.findIndex(item => item.id === imgId);
    if (globalIndex !== -1) {
      setLightboxIndex(globalIndex);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === null || prev === 0 ? GALLERY_DATA.length - 1 : prev - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === null || prev === GALLERY_DATA.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section id="gallery-section" className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Life At Hearty Paws
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 mt-3 tracking-tight">
            Our Spa & Clinic Gallery 📸
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3.5 leading-relaxed">
            Take a look at our clean clinical rooms, luxurious spa tubs, premium retail racks, and some of the sweetest furry friends we have had the honor to treat.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4.5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-brand-teal text-white shadow-md border-transparent'
                  : 'bg-teal-50/50 text-gray-700 hover:text-brand-teal hover:bg-teal-50 border border-teal-100/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => openLightbox(img.id)}
              className="group relative rounded-3xl overflow-hidden border border-teal-100/40 bg-gray-50 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer aspect-square"
            >
              <img
                src={img.imageUrl}
                alt={img.alt}
                referrerPolicy="no-referrer"
                width={400}
                height={400}
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-teal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-3 scale-75 group-hover:scale-100 transition-transform duration-300 self-end">
                  <Eye size={20} className="text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-200">
                  {img.category}
                </span>
                <h4 className="text-sm font-bold font-display mt-1">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback for empty categories if any */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No pictures found in this category.
          </div>
        )}

        {/* Lightbox Pop-up Dialog */}
        {lightboxIndex !== null && (
          <div 
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 animate-fade-in cursor-default"
          >
            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between text-white w-full max-w-7xl mx-auto py-2">
              <div>
                <span className="text-xs uppercase tracking-wider text-teal-400 font-bold">
                  Image {lightboxIndex + 1} of {GALLERY_DATA.length}
                </span>
                <h3 className="text-sm sm:text-base font-bold font-display text-white">
                  {GALLERY_DATA[lightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                title="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Lightbox Main Image Area */}
            <div className="flex-1 flex items-center justify-center relative max-w-5xl mx-auto w-full">
              
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-10 p-3 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                title="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Central Image */}
              <img
                src={GALLERY_DATA[lightboxIndex].imageUrl}
                alt={GALLERY_DATA[lightboxIndex].alt}
                referrerPolicy="no-referrer"
                decoding="async"
                onClick={(e) => e.stopPropagation()} // Stop closing lightbox when clicking image itself
                className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl animate-scale-up"
              />

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-10 p-3 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                title="Next Image"
              >
                <ChevronRight size={24} />
              </button>

            </div>

            {/* Lightbox Footer Bar */}
            <div className="text-center text-gray-500 text-xs py-4">
              Press Escape or click outside to dismiss. Hearty Paws Pet Spa & Clinic
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
