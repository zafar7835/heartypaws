import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Calendar, ShieldAlert, Clock, Info } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'Timings & Operations',
      question: 'What are the clinic timings and operating days?',
      answer: 'Hearty Paws Pet Spa & Clinic is open 7 days a week from 8:00 AM to 8:00 PM. This includes Sundays and public holidays, ensuring consistent care and grooming options for your beloved companions.',
      icon: <Clock className="text-brand-teal w-5 h-5 flex-shrink-0" />
    },
    {
      id: 'faq-2',
      category: 'Medical & Health',
      question: 'What is your vaccination protocol for puppies, kittens, and adult pets?',
      answer: 'For puppies and kittens, we design complete, stage-wise immunization plans starting at 6-8 weeks of age (protecting against Parvovirus, DHPPi, Tricat, etc.). For adult pets, we administer crucial yearly boosters and Rabies vaccines. Our senior veterinarian performs a brief physical health check before any vaccine is injected to verify that your pet is healthy and fit.',
      icon: <ShieldAlert className="text-brand-teal w-5 h-5 flex-shrink-0" />
    },
    {
      id: 'faq-3',
      category: 'Grooming & Spa',
      question: 'What are the requirements for booking a grooming or spa appointment?',
      answer: 'To safeguard all visiting pets, we require that dogs and cats are up-to-date on basic immunizations (especially Rabies). We suggest booking grooming slots at least 1-2 days in advance, as weekend slots fill up rapidly. Please let our styling team know if your pet has skin issues, allergies, or tick infestations so we can utilize medicated or specialized oatmeal shampoos.',
      icon: <Calendar className="text-brand-teal w-5 h-5 flex-shrink-0" />
    },
    {
      id: 'faq-4',
      category: 'Deworming & Care',
      question: 'How often should I get my pet dewormed?',
      answer: 'Generally, adult dogs and cats should be dewormed once every 3 months to prevent internal worm infections and maintain nutritional balance. Puppies and kittens need a more frequent schedule during their first few months of life. Our vets measure your pet\'s weight accurately to calculate the exact dosage of deworming syrup or tablets.',
      icon: <Info className="text-brand-teal w-5 h-5 flex-shrink-0" />
    },
    {
      id: 'faq-5',
      category: 'Location & Parking',
      question: 'Where is the clinic located and is parking available?',
      answer: 'We are situated at Shop No. 7, Shanti Niketan DDA Market, New Delhi - 110021. The DDA market has a dedicated, secure parking area directly in front of our clinic, providing hassle-free space for your car when transporting your pets.',
      icon: <HelpCircle className="text-brand-teal w-5 h-5 flex-shrink-0" />
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-teal-50/10 font-sans border-t border-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 tracking-tight">
            Frequently Asked Questions 🐾
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Have questions about clinical protocols, timings, or grooming setups? Browse our responses below or reach out to us directly.
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-white rounded-2xl border border-teal-100/40 shadow-3xs hover:shadow-xs transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-xl bg-teal-50 text-brand-teal">
                      {faq.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-brand-teal uppercase tracking-wider block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  
                  <div className={`p-1.5 rounded-full bg-gray-50 text-gray-400 hover:text-brand-teal transition-all duration-300 ${isOpen ? 'rotate-180 bg-teal-50 text-brand-teal' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Answer Container with transition height */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] opacity-100 border-t border-teal-50/50' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 sm:p-6 bg-teal-50/10 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support CTA Callout */}
        <div className="mt-12 text-center p-6 bg-white border border-teal-100/30 rounded-2xl shadow-3xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-gray-900">Still have questions?</h4>
            <p className="text-xs text-gray-500 mt-1">Get immediate answers about your pet's needs on WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/918800715311"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-xl text-xs font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-3xs"
          >
            <span>Ask us on WhatsApp</span>
            <span>➔</span>
          </a>
        </div>

      </div>
    </section>
  );
}
