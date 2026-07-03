import React from 'react';
import { Phone, MapPin, Clock, Mail, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import PawLogo from './PawLogo';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openBookingModal: () => void;
}

export default function Footer({ setActiveTab, openBookingModal }: FooterProps) {
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 font-sans border-t-4 border-brand-teal pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & Intro */}
          <div className="space-y-4">
            <div 
              onClick={() => handleNavClick('home')} 
              className="flex items-center space-x-2.5 cursor-pointer group"
              role="link"
              aria-label="Go to homepage"
            >
              <div className="bg-teal-950/60 p-2 rounded-full border border-teal-900 group-hover:border-brand-teal transition-colors duration-200">
                <PawLogo className="text-brand-teal fill-brand-teal w-5 h-5" isDarkBackground={true} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-display font-black text-white leading-none tracking-tight">
                  Hearty <span className="text-brand-teal">Paws</span>
                </h3>
                <span className="text-[9px] font-extrabold tracking-widest text-gray-500 mt-0.5 font-sans">
                  PET SPA & CLINIC
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Shop No. 7, Shanti Niketan DDA Market, New Delhi - 21. Your ultimate location for veterinary care, professional grooming, vaccines, deworming and therapeutic dog/cat spa baths.
            </p>
            
            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://www.instagram.com/heartypaws_delhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-teal-950 border border-teal-900/40 hover:border-brand-teal text-brand-teal hover:text-white hover:bg-brand-teal flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61591573830988"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-teal-950 border border-teal-900/40 hover:border-brand-teal text-brand-teal hover:text-white hover:bg-brand-teal flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>

            </div>
            
            <div className="text-xs text-gray-500">
              © 2026 Hearty Paws Pet Spa & Clinic.
              <br /> All rights reserved.
            </div>
          </div>

          {/* Business Timings */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-3 bg-brand-teal" />
              Hours of Operation
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <div className="flex justify-between items-center pb-2 border-b border-gray-900">
                <span>Monday - Sunday</span>
                <span className="text-white font-semibold">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-900">
                <span>Public Holidays</span>
                <span className="text-white font-semibold">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-900">
                <span>Doctor Checkups</span>
                <span className="text-teal-400 font-semibold">Daily Schedule</span>
              </div>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-3 bg-brand-teal" />
              Quick Links
            </h4>
            
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'services', label: 'Pet Services' },
                { id: 'about', label: 'About Our Vet Clinic' },
                { id: 'gallery', label: 'Photo Gallery' },
                { id: 'contact', label: 'Contact Details' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-brand-teal flex items-center space-x-1.5 transition-colors cursor-pointer text-gray-500 hover:translate-x-1 duration-200"
                  >
                    <ChevronRight size={12} className="text-brand-teal" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={openBookingModal}
                  className="hover:text-brand-teal flex items-center space-x-1.5 transition-colors text-brand-teal font-semibold cursor-pointer hover:translate-x-1 duration-200"
                >
                  <ChevronRight size={12} className="text-brand-teal" />
                  <span>Book Appointment Now</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-3 bg-brand-teal" />
              Contact Information
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-brand-teal mt-0.5 flex-shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              
              <div className="flex items-center space-x-2.5">
                <Phone size={16} className="text-brand-teal flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${CLINIC_INFO.phones[0]}`} className="hover:text-white transition-colors font-semibold">
                    +91 {CLINIC_INFO.phones[0]}
                  </a>
                  <a href={`tel:${CLINIC_INFO.phones[1]}`} className="hover:text-white transition-colors font-semibold">
                    +91 {CLINIC_INFO.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail size={16} className="text-brand-teal flex-shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Brand note bottom */}
        <div className="mt-12 pt-8 border-t border-gray-900/60 text-center text-xs text-gray-600">
          Hearty Paws Pet Spa & Clinic is Delhi's premium animal care facility. Highly trusted by local veterinarians and breeding parents. Designed with pure love for pets.
        </div>
      </div>
    </footer>
  );
}
