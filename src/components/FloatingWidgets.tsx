import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface FloatingWidgetsProps {
  onOpenBooking: () => void;
}

export default function FloatingWidgets({ onOpenBooking }: FloatingWidgetsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  // Auto-dismiss notification bubble after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Buttons: WhatsApp & Call (Desktop & Tablet) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col space-y-3.5 items-end">
        
        {/* WhatsApp Floating Button */}
        <div className="relative group">
          {showPulse && (
            <span className="absolute -top-1 -left-1 flex h-4 w-4 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[8px] font-bold text-white items-center justify-center">1</span>
            </span>
          )}

          {/* Label Tooltip */}
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md pointer-events-none font-medium">
            Chat on WhatsApp 🐾
          </div>

          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hi!%20I'd%20like%20to%20inquire%20about%20grooming/treatments%20at%20Hearty%20Paws.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            id="floating-whatsapp-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28px" height="28px">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.864L.054 23.8a.5.5 0 0 0 .609.627l6.098-1.597A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.188-1.43l-.372-.217-3.853 1.009 1.03-3.742-.237-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </a>
        </div>

        {/* Call Floating Button */}
        <div className="relative group">
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md pointer-events-none font-medium">
            Call Clinic Support 📞
          </div>

          <a
            href={`tel:${CLINIC_INFO.phones[0]}`}
            className="flex items-center justify-center w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-teal-500/20"
            id="floating-call-btn"
          >
            <Phone size={22} className="fill-white" />
          </a>
        </div>

      </div>

      {/* Floating Action Bar for Mobile Screens (Sticky Footer) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-teal-100 px-4 py-3 sm:hidden grid grid-cols-3 gap-2 shadow-2xl">
        
        {/* Mobile Call CTA */}
        <a
          href={`tel:${CLINIC_INFO.phones[0]}`}
          className="flex flex-col items-center justify-center text-brand-teal hover:text-brand-teal-dark transition-colors py-1 bg-teal-50/50 border border-teal-100 rounded-xl"
        >
          <Phone size={18} className="fill-teal-50" />
          <span className="text-[10px] font-bold mt-1 tracking-wide uppercase">Call Now</span>
        </a>

        {/* Mobile WhatsApp CTA */}
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hi,%20I'd%20like%20to%20know%20more%20about%20Hearty%20Paws%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-emerald-600 hover:text-emerald-700 transition-colors py-1 bg-emerald-50/50 border border-emerald-100 rounded-xl"
        >
          <MessageSquare size={18} className="fill-emerald-50" />
          <span className="text-[10px] font-bold mt-1 tracking-wide uppercase">WhatsApp</span>
        </a>

        {/* Mobile Booking Trigger CTA */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center bg-brand-teal hover:bg-brand-teal-light text-white transition-all py-1.5 rounded-xl shadow-xs"
        >
          <Calendar size={18} />
          <span className="text-[10px] font-extrabold mt-1 tracking-wide uppercase">Book Visit</span>
        </button>

      </div>
    </>
  );
}
