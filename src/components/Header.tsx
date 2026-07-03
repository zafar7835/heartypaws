import React, { useState } from 'react';
import { Menu, X, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import PawLogo from './PawLogo';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openBookingModal: () => void;
}

export default function Header({ activeTab, setActiveTab, openBookingModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-teal-100 shadow-sm transition-all duration-300">
      {/* Top Bar for contact & info */}
      <div className="bg-brand-teal text-white text-xs py-2 px-4 sm:px-6 md:px-8 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {CLINIC_INFO.timing}
            </span>
          </div>
          <div className="flex items-center space-x-4 font-semibold">
            <span>Call Us:</span>
            <a href={`tel:${CLINIC_INFO.phones[0]}`} className="hover:underline flex items-center gap-1">
              <Phone size={13} /> {CLINIC_INFO.phones[0]}
            </a>
            <span>|</span>
            <a href={`tel:${CLINIC_INFO.phones[1]}`} className="hover:underline">
              {CLINIC_INFO.phones[1]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-2.5 cursor-pointer group"
            id="header-logo"
            role="link"
            aria-label="Go to homepage"
          >
            <div className="bg-teal-50 p-2 rounded-full border border-teal-100 group-hover:bg-teal-100 transition-colors duration-200">
              <PawLogo className="text-brand-teal fill-brand-teal w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-display font-black text-gray-900 leading-none tracking-tight">
                Hearty <span className="text-brand-teal">Paws</span>
              </h3>
              <span className="text-[9px] font-extrabold tracking-widest text-brand-teal/85 mt-0.5 font-sans">
                PET SPA & CLINIC
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-teal-50 text-brand-teal font-semibold shadow-2xs border border-teal-100/50'
                    : 'text-gray-600 hover:text-brand-teal hover:bg-teal-50/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 border-r border-teal-100 pr-4">
              <a
                href="https://www.instagram.com/heartypaws_delhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 hover:border-brand-teal text-brand-teal hover:text-white hover:bg-brand-teal flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61591573830988"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 hover:border-brand-teal text-brand-teal hover:text-white hover:bg-brand-teal flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>

            </div>
            <button
              id="header-btn-booking"
              onClick={openBookingModal}
              className="bg-brand-teal hover:bg-brand-teal-light text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden items-center space-x-2">
            <a 
              href={`tel:${CLINIC_INFO.phones[0]}`}
              className="p-2.5 rounded-full bg-teal-50 text-brand-teal border border-teal-100 hover:bg-teal-100 transition-colors"
              title="Call Now"
              aria-label="Call Hearty Paws Pet Clinic"
            >
              <Phone size={18} />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-gray-700 hover:text-brand-teal hover:bg-teal-50 transition-colors cursor-pointer border border-transparent hover:border-teal-100"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-teal-100 bg-white shadow-inner animate-fade-in">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-brand-teal text-white'
                    : 'text-gray-700 hover:bg-teal-50 hover:text-brand-teal'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-teal-100 space-y-3">
              <div className="flex flex-col space-y-1.5 px-4 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-brand-teal" />
                  <span>{CLINIC_INFO.timing}</span>
                </div>
                <div>Shop No. 7, Shanti Niketan DDA Market</div>
              </div>
              <div className="flex items-center space-x-3 px-4 pt-1">
                <span className="text-xs font-bold text-gray-800">Connect:</span>
                <a
                  href="https://www.instagram.com/heartypaws_delhi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 hover:border-brand-teal text-brand-teal hover:text-white hover:bg-brand-teal flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61591573830988"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 hover:border-brand-teal text-brand-teal hover:text-white hover:bg-brand-teal flex items-center justify-center transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={14} />
                </a>

              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  id="mobile-drawer-booking"
                  onClick={() => {
                    setIsOpen(false);
                    openBookingModal();
                  }}
                  className="w-full text-center bg-brand-teal hover:bg-brand-teal-light text-white font-semibold py-3 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Book Vet/Spa
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phones[0]}`}
                  className="w-full text-center bg-teal-50 border border-teal-200 text-brand-teal hover:bg-teal-100 font-semibold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
