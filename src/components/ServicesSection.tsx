import React, { useState } from 'react';
import { 
  Scissors, 
  Syringe, 
  ShieldAlert, 
  HeartPulse, 
  ShoppingBag, 
  Sparkles, 
  Award, 
  Clock, 
  CheckCircle, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES_DATA, WHY_CHOOSE_US } from '../data';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  openBookingModal: () => void;
}

const IconMap: Record<string, React.ComponentType<{ className?: string, size?: number }>> = {
  Scissors,
  Syringe,
  ShieldAlert,
  HeartPulse,
  ShoppingBag,
  Sparkles,
  Award,
  Clock,
  CheckCircle,
  TrendingUp
};

export default function ServicesSection({ onSelectService, openBookingModal }: ServicesSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleBookService = (svcTitle: string) => {
    onSelectService(svcTitle);
    openBookingModal();
  };

  return (
    <section id="services-section" className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Professional Pet Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 mt-3 tracking-tight">
            Comprehensive Pet Spa & Veterinary Services 🐾
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3.5 leading-relaxed">
            From styling and therapeutic aromatherapy baths to clinical checkups, vaccination cycles, and medicine, we provide absolute wellness under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = IconMap[service.icon] || Sparkles;
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`relative bg-white rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col h-full ${
                  isExpanded 
                    ? 'border-brand-teal ring-1 ring-brand-teal/30 shadow-lg' 
                    : 'border-teal-50 hover:border-teal-200/80 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Custom top bar accent color */}
                <div className="h-2 bg-gradient-to-r from-brand-teal to-teal-400" />
                
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Icon + Title Header */}
                    <div className="flex items-start justify-between">
                      <div className="bg-teal-50 p-4 rounded-2xl text-brand-teal border border-teal-100">
                        <IconComponent size={24} className="stroke-[2.5]" />
                      </div>
                    </div>

                    <h3 className="text-xl font-display font-bold text-gray-900 mt-5">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Detailed expandable checklist */}
                    {isExpanded && (
                      <div className="mt-5 pt-5 border-t border-teal-50 space-y-2.5 animate-fade-in">
                        <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          What is included:
                        </h4>
                        {service.details.map((detail, index) => (
                          <div key={index} className="flex items-start space-x-2 text-xs text-gray-600">
                            <Check size={14} className="text-brand-teal mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Expand button and booking CTA */}
                  <div className="mt-6 pt-5 border-t border-teal-50 flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="text-xs font-bold text-brand-teal flex items-center space-x-1 hover:underline cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <button
                      onClick={() => handleBookService(service.title)}
                      className="bg-teal-50 hover:bg-brand-teal hover:text-white text-brand-teal text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-200 cursor-pointer flex items-center space-x-1 border border-teal-100/50"
                    >
                      <span>Book Service</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Sub-Section */}
        <div className="mt-24 bg-teal-50/50 border border-teal-100/80 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Why Choose Us Column 1: Info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest bg-white border border-teal-100 px-3 py-1 rounded-full">
                Our Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 tracking-tight">
                Why Shanti Niketan Parents Choose Us? 🐾
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                We design our services around the psychological comfort of pets. No cages, no rough handling, only gentle, clinical care that guarantees happiness.
              </p>
              <div className="pt-2">
                <button
                  onClick={openBookingModal}
                  className="bg-brand-teal hover:bg-brand-teal-light text-white text-xs font-bold px-5 py-3 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Schedule Your Visit Now
                </button>
              </div>
            </div>

            {/* Why Choose Us Column 2: Grid of features */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_US.map((item, index) => {
                const ItemIcon = IconMap[item.icon] || CheckCircle;
                return (
                  <div key={index} className="bg-white p-5 rounded-2xl border border-teal-100/40 shadow-3xs flex space-x-3.5 items-start">
                    <div className="bg-teal-50 p-2.5 rounded-xl text-brand-teal mt-0.5">
                      <ItemIcon size={18} className="stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
