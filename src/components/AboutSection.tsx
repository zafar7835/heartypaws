import React from 'react';
import { Heart, ShieldCheck, MapPin, Sparkles, Smile, Star } from 'lucide-react';
import { CLINIC_INFO } from '../data';

export default function AboutSection() {
  return (
    <section id="about-section" className="py-16 md:py-24 bg-teal-50/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Column 1: Image & Highlight Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-teal-700/5 rounded-3xl transform -rotate-3 scale-103" />
              
              {/* Image Frame */}
              <div className="bg-white p-3 rounded-3xl shadow-xl border border-teal-100 overflow-hidden relative">
                <img
                  src="/src/assets/images/regenerated_image_1782989829332.jpg"
                  alt="Certified veterinarians performing health checkup on puppy at Hearty Paws Veterinary Clinic South Delhi"
                  referrerPolicy="no-referrer"
                  width="800"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="rounded-2xl w-full h-[360px] md:h-[420px] object-cover"
                />
                
                {/* Overlay details tag */}
                <div className="absolute bottom-6 right-6 bg-brand-teal text-white py-2 px-4 rounded-xl shadow-lg text-xs font-bold uppercase tracking-wider">
                  Established South Delhi Vets
                </div>
              </div>

              {/* Float Experience badge */}
              <div className="absolute -top-5 -left-5 bg-white border border-teal-100 p-4 rounded-2xl shadow-lg max-w-[170px] text-center">
                <div className="text-3xl font-display font-black text-brand-teal leading-none">100%</div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide mt-1">Surgical & Hygienic Safety</p>
              </div>

            </div>
          </div>

          {/* About Column 2: Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            <div className="space-y-3">
              <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                About Our Clinic
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 tracking-tight leading-tight">
                Passionate Pet Care Professionals in South Delhi 🐾
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Located in the premium market of Shanti Niketan (DDA Market, Shop No. 7), <strong>Hearty Paws Pet Spa & Clinic</strong> has become a beloved sanctuary for dogs, cats, and small animals alike. We understand that pets are not just animals—they are cherished members of your family.
            </p>

            {/* Structured Values / Mission block */}
            <div className="space-y-4">
              
              {/* Mission */}
              <div className="p-5 rounded-2xl bg-white border border-teal-100/50 hover:border-brand-teal/40 transition-colors flex items-start space-x-4">
                <div className="bg-teal-50 p-3 rounded-xl text-brand-teal">
                  <Heart className="w-5 h-5 fill-brand-teal/15 text-brand-teal" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Our Core Mission</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                    To deliver highly affordable, high-quality pet healthcare and grooming support that eliminates pet anxiety while ensuring pristine clinical hygiene.
                  </p>
                </div>
              </div>

              {/* South Delhi focus */}
              <div className="p-5 rounded-2xl bg-white border border-teal-100/50 hover:border-brand-teal/40 transition-colors flex items-start space-x-4">
                <div className="bg-teal-50 p-3 rounded-xl text-brand-teal">
                  <MapPin className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Serving South Delhi Communities</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                    Proudly serving pet owners across Shanti Niketan, Vasant Vihar, Chanakyapuri, Anand Niketan, and neighboring South Delhi regions with a committed team of vets and therapists.
                  </p>
                </div>
              </div>

              {/* Pet focus */}
              <div className="p-5 rounded-2xl bg-white border border-teal-100/50 hover:border-brand-teal/40 transition-colors flex items-start space-x-4">
                <div className="bg-teal-50 p-3 rounded-xl text-brand-teal">
                  <ShieldCheck className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">All Beloved Breeds & Pets</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                    Whether it's a playful Shih Tzu puppy needing a stylish haircut, a nervous Persian cat getting vaccine boosters, or an exotic pet requiring therapeutic dietary advice—we have experts for all.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick list details */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-700 font-semibold">
                <Star size={16} className="text-brand-teal fill-brand-teal" />
                <span>Doctor Consultation Daily</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-700 font-semibold">
                <Star size={16} className="text-brand-teal fill-brand-teal" />
                <span>Certified Gentle Groomers</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-700 font-semibold">
                <Star size={16} className="text-brand-teal fill-brand-teal" />
                <span>Surgical-grade Sterilization</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-700 font-semibold">
                <Star size={16} className="text-brand-teal fill-brand-teal" />
                <span>Premium Quality Shampoos</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
