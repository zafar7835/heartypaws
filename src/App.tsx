import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingModal from './components/BookingModal';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import FloatingWidgets from './components/FloatingWidgets';
import Footer from './components/Footer';
import { CLINIC_INFO, SERVICES_DATA } from './data';
import { Sparkles, Calendar, Phone, MapPin, Heart, ShieldAlert, Award, Clock } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  // Auto scroll to top on tab changes & update dynamic titles & meta for local SEO
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });

    let title = "Hearty Paws Pet Spa & Clinic | Best Pet Clinic & Dog Grooming in Delhi";
    let desc = "Best pet grooming, vaccination & treatment clinic in South Delhi. Open 7 days 8AM-8PM. Call 8800715311";

    switch (activeTab) {
      case 'home':
        title = "Hearty Paws Pet Spa & Clinic | Best Pet Clinic & Dog Grooming in Delhi";
        desc = "Hearty Paws in Shanti Niketan is the best Pet Clinic and Pet Spa in Delhi. Professional grooming, deworming, vaccination, and senior veterinarian treatment. Open 7 days, 8 AM - 8 PM.";
        break;
      case 'services':
        title = "Professional Grooming & Vet Services | Hearty Paws Delhi";
        desc = "Discover our range of premium pet services in South Delhi: Pet Spa, Professional Dog/Cat Grooming, complete Vaccination, Deworming, and Expert Medical Treatments.";
        break;
      case 'about':
        title = "About Our Vet Clinic & Certified Groomers | Hearty Paws Shanti Niketan";
        desc = "Learn about Delhi's trusted team of certified groomers and experienced veterinarians. Providing top-tier clinical accuracy and loving pet healthcare daily.";
        break;
      case 'gallery':
        title = "Grooming & Treatment Gallery | Hearty Paws Delhi";
        desc = "View our photo gallery of happy pets experiencing professional haircuts, herbal bath spas, feline vaccinations, and clinical checkups in New Delhi.";
        break;
      case 'contact':
        title = "Contact, Directions & Booking | Hearty Paws Shanti Niketan South Delhi";
        desc = "Get in touch with us at Shop No. 7, Shanti Niketan DDA Market. Call 8800715311 or 9289664150 for immediate bookings. Dedicated parking and secure facility.";
        break;
    }

    document.title = title;
    
    // Dynamically update meta description if it exists
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
  }, [activeTab]);

  const openBookingWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const triggerCall = () => {
    window.location.href = `tel:${CLINIC_INFO.phones[0]}`;
  };

  return (
    <div className="min-h-screen bg-gray-50/30 flex flex-col justify-between selection:bg-teal-500 selection:text-white font-sans antialiased text-gray-800">
      
      {/* Dynamic Top Announcement Ticker */}
      <div className="bg-teal-50 border-b border-teal-100 text-brand-teal text-[11px] sm:text-xs py-2 px-4 text-center font-semibold tracking-wide flex items-center justify-center gap-1.5 animate-pulse">
        <Sparkles size={12} className="animate-spin text-brand-teal" />
        <span>7 Days Open (8 AM - 8 PM) | General Health consultations & Professional Spa services at Shanti Niketan DDA Market!</span>
      </div>

      {/* Main Header navigation bar */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openBookingModal={() => openBookingWithService('')} 
      />

      {/* Dynamic Page Views Routing */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="animate-fade-in space-y-0">
            {/* 1. Hero Section */}
            <Hero 
              onOpenBooking={() => openBookingWithService('')} 
              setActiveTab={setActiveTab} 
            />

            {/* 2. Interactive Quick Services Overview */}
            <section className="py-16 md:py-24 bg-white border-b border-teal-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                  <div className="max-w-2xl space-y-3">
                    <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">
                      Service Categories
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 tracking-tight">
                      Premium Grooming & Veterinary Support 🐾
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      We offer a diverse set of medical, styling, and hygiene treatments. Select any option below or view our complete schedule.
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setActiveTab('services')}
                    className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-xs font-bold text-brand-teal hover:underline cursor-pointer group self-start md:self-auto"
                  >
                    <span>View all 6 services</span>
                    <span className="group-hover:translate-x-1 transition-transform">➔</span>
                  </button>
                </div>

                {/* Grid of 3 Prominent Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {SERVICES_DATA.slice(0, 3).map((svc) => (
                    <div 
                      key={svc.id}
                      className="bg-teal-50/20 hover:bg-teal-50/40 border border-teal-100/40 rounded-3xl p-6.5 flex flex-col justify-between transition-all duration-300 hover:shadow-xs group"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 font-display mt-4 group-hover:text-brand-teal transition-colors">
                          {svc.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                          {svc.description}
                        </p>
                      </div>
                      <div className="mt-5 pt-4 border-t border-teal-100/30 flex items-center justify-between">
                        <button
                          onClick={() => setActiveTab('services')}
                          className="text-xs font-bold text-gray-500 hover:text-brand-teal hover:underline cursor-pointer"
                        >
                          Learn inclusions
                        </button>
                        <button
                          onClick={() => openBookingWithService(svc.title)}
                          className="text-xs font-bold text-brand-teal hover:underline cursor-pointer"
                        >
                          Book Now ➔
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* 3. Dynamic "Why Choose Us" Widget (Interactive list) */}
            <section className="py-16 md:py-20 bg-teal-50/15 border-b border-teal-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left stats column */}
                  <div className="lg:col-span-5 space-y-5">
                    <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest bg-white border border-teal-100 px-3 py-1 rounded-full">
                      Trusted Clinic Support
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 tracking-tight leading-tight">
                      Why Delhi Pet Parents Trust Hearty Paws? ❤️
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      We treat your pet with the same patience and affection we would offer our own. Our facility is sanitised hourly and fully stocked with safe clinical vaccines and styling instruments.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="border border-teal-100/50 bg-white p-4 rounded-2xl shadow-3xs">
                        <div className="text-3xl font-display font-black text-brand-teal">8-8</div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mt-1">Daily Timings</p>
                      </div>
                      <div className="border border-teal-100/50 bg-white p-4 rounded-2xl shadow-3xs">
                        <div className="text-3xl font-display font-black text-brand-teal">7 Days</div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mt-1">Open All Week</p>
                      </div>
                    </div>
                  </div>

                  {/* Right illustration column */}
                  <div className="lg:col-span-7 relative">
                    <div className="bg-white p-2.5 rounded-3xl border border-teal-100/50 shadow-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800" 
                        alt="Golden Retriever enjoying spa therapeutic pamper at Hearty Paws Pet Clinic Delhi" 
                        referrerPolicy="no-referrer"
                        width="800"
                        height="533"
                        loading="lazy"
                        decoding="async"
                        className="rounded-2xl w-full h-[280px] sm:h-[320px] object-cover"
                      />
                    </div>
                    {/* Tiny floating testimonial badge */}
                    <div className="absolute -bottom-4 -left-4 bg-teal-800 text-white p-4 rounded-2xl max-w-xs shadow-lg border border-teal-700">
                      <p className="text-xs italic leading-relaxed">"The deworming is precise, and the premium pet treats are top-tier."</p>
                      <span className="text-[10px] font-bold block mt-1 text-teal-200">— Vikram, Rocky's Parent</span>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* 4. Google Reviews and Testimonials Widget */}
            <ReviewsSection />

            {/* FAQ Accordion Section */}
            <FAQSection />

            {/* 5. Quick Map & Information Finder */}
            <section className="py-16 bg-teal-50/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-teal-100/50 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    
                    <div className="space-y-4">
                      <span className="text-xs font-bold text-brand-teal uppercase bg-teal-50 px-2.5 py-1 rounded-md">Visit Our Store</span>
                      <h3 className="text-2xl font-display font-black text-gray-900">Located at Shanti Niketan Market</h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        We are situated at <strong>Shop No. 7, Shanti Niketan DDA Market, New Delhi - 110021</strong>. It is a highly central South Delhi spot with easy car parking.
                      </p>
                      
                      <div className="space-y-3.5 pt-2 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-brand-teal" />
                          <span>Shop No. 7, Shanti Niketan DDA Market, New Delhi - 21</span>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                          <Phone size={16} className="text-brand-teal" />
                          <div className="flex gap-2">
                            <a href={`tel:${CLINIC_INFO.phones[0]}`} className="hover:underline text-brand-teal">{CLINIC_INFO.phones[0]}</a>
                            <span>/</span>
                            <a href={`tel:${CLINIC_INFO.phones[1]}`} className="hover:underline text-brand-teal">{CLINIC_INFO.phones[1]}</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-brand-teal" />
                          <span>8:00 AM to 8:00 PM | Open 7 Days</span>
                        </div>
                      </div>

                      <div className="pt-3 flex gap-2">
                        <a 
                          href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-xl text-xs font-bold transition-all"
                        >
                          Chat on WhatsApp
                        </a>
                        <a
                          href="https://maps.app.goo.gl/EH6uvYzHuT6BaV6M6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 border border-teal-200 text-brand-teal hover:bg-teal-50 rounded-xl text-xs font-bold transition-all cursor-pointer inline-flex items-center justify-center"
                        >
                          View Directions Map
                        </a>
                      </div>
                    </div>

                    {/* Compact embedded map */}
                    <div className="h-[250px] rounded-2xl overflow-hidden border border-teal-100">
                      <iframe
                        title="Google Map Embed - Shanti Niketan"
                        src={CLINIC_INFO.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* Services Page View */}
        {activeTab === 'services' && (
          <ServicesSection 
            onSelectService={setSelectedService} 
            openBookingModal={() => setIsBookingOpen(true)} 
          />
        )}

        {/* About Us Page View */}
        {activeTab === 'about' && (
          <AboutSection />
        )}

        {/* Gallery Page View */}
        {activeTab === 'gallery' && (
          <GallerySection />
        )}

        {/* Contact Page View */}
        {activeTab === 'contact' && (
          <ContactSection />
        )}
      </main>

      {/* Floating Action Buttons & Quick WhatsApp widgets */}
      <FloatingWidgets onOpenBooking={() => openBookingWithService('')} />

      {/* Interactive Booking Popup Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preselectedService={selectedService}
      />

      {/* Persistent Brand Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        openBookingModal={() => openBookingWithService('')} 
      />

    </div>
  );
}
