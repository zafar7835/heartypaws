import React from 'react';
import { Phone, Calendar, ShieldCheck, Heart, Sparkles, Smile } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
  setActiveTab: (tab: string) => void;
}

export default function Hero({ onOpenBooking, setActiveTab }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-teal-50/40 overflow-hidden py-12 md:py-20 lg:py-24 border-b border-teal-100">
      
      {/* Background Decorative Rings/Blobs */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-teal-100/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-50 rounded-full blur-2xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left font-sans">
            
            {/* Trust badge */}
            <div className="inline-flex items-center space-x-2 bg-teal-100/60 border border-teal-200/80 px-3.5 py-1.5 rounded-full text-brand-teal text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0 animate-fade-in shadow-3xs">
              <Sparkles size={13} className="text-teal-600 animate-spin" />
              <span>Where Every Paw Matters 🐾</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900 tracking-tight leading-tight md:leading-[1.1]">
              Delhi's Most Trusted <br />
              <span className="text-brand-teal relative inline-block">
                Pet Spa & Clinic 🐾
                <span className="absolute bottom-1.5 left-0 w-full h-2.5 bg-teal-200/40 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Professional care for your furry family members. We provide premium medical treatments, professional grooming sessions, deworming, vaccines, and relaxing spa sessions in the heart of South Delhi.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-cta-booking"
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-brand-teal hover:bg-brand-teal-light text-white text-base font-extrabold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar size={18} />
                Book Appointment
              </button>
              
              <a
                href={`tel:${CLINIC_INFO.phones[0]}`}
                id="hero-cta-call"
                className="w-full sm:w-auto bg-white border-2 border-teal-100 hover:border-brand-teal text-brand-teal hover:text-brand-teal-dark font-extrabold text-base px-8 py-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-teal-100 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-black text-brand-teal">8:00 AM</div>
                <div className="text-[11px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider">To 8:00 PM Timing</div>
              </div>
              <div className="space-y-1 border-x border-teal-100 px-4">
                <div className="text-2xl sm:text-3xl font-display font-black text-brand-teal">7 Days</div>
                <div className="text-[11px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider">Open Every Week</div>
              </div>
              <div className="space-y-1 pl-2">
                <div className="text-2xl sm:text-3xl font-display font-black text-brand-teal">100%</div>
                <div className="text-[11px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider">Loving Pet Care</div>
              </div>
            </div>

          </div>

          {/* Hero Right Media Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Decorative background behind pet image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 to-teal-200/40 rounded-3xl transform rotate-3 scale-102 -z-10" />
              
              {/* Pet Image Frame */}
              <div className="bg-white p-3 rounded-3xl shadow-xl border border-teal-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
                  alt="Happy pampered dog at Hearty Paws Pet Spa & Clinic Delhi"
                  referrerPolicy="no-referrer"
                  width="800"
                  height="800"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="rounded-2xl w-full h-[320px] sm:h-[400px] object-cover hover:scale-101 transition-transform duration-500"
                />
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-teal-50 flex items-center space-x-3 max-w-xs animate-bounce" style={{ animationDuration: '6s' }}>
                <div className="bg-teal-50 p-2.5 rounded-xl">
                  <ShieldCheck className="text-brand-teal w-6 h-6" />
                </div>
                <div>
                  <div className="flex text-amber-400 text-xs font-bold">★★★★★</div>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">"Top clinical care & spa in South Delhi!"</p>
                  <p className="text-[10px] font-bold text-gray-800 mt-1">- Shanti Niketan Parent</p>
                </div>
              </div>

              {/* Floating happy pet indicator */}
              <div className="absolute -top-6 -right-4 bg-teal-700 text-white py-2 px-3.5 rounded-2xl shadow-lg flex items-center space-x-1.5 text-xs font-bold">
                <Heart size={14} className="fill-white animate-pulse text-rose-200" />
                <span>Happy Pets guaranteed</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
