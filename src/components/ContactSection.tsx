import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, User, HelpCircle, Mail, AlertCircle, Instagram, Facebook } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data';
import { ContactForm } from '../types';

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    phone: '',
    petName: '',
    serviceNeeded: SERVICES_DATA[0].title,
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim()) return setError('Please enter your name.');
    if (!form.phone.trim() || form.phone.length < 10) return setError('Please enter a valid 10-digit phone number.');
    if (!form.petName.trim()) return setError('Please enter your pet\'s name.');

    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setIsSent(true);
    }, 800);
  };

  const handleReset = () => {
    setForm({
      name: '',
      phone: '',
      petName: '',
      serviceNeeded: SERVICES_DATA[0].title,
      message: ''
    });
    setIsSent(false);
    setError('');
  };

  return (
    <section id="contact-section" className="py-16 md:py-24 bg-teal-50/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 mt-3 tracking-tight">
            We are Here to Support Your Pets 🐾
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3.5 leading-relaxed">
            Have questions about a grooming trim, vaccination schedules, or persistent allergies? Call our desk directly or send us an instant message.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Interactive Contact Form (Left) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-teal-100/50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-teal-50 p-2.5 rounded-xl text-brand-teal">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 font-display">Send An Instant Message</h3>
                  <p className="text-xs text-gray-500">We respond to online inquiries within 2 hours</p>
                </div>
              </div>

              {error && (
                <div className="mb-4 bg-red-50 border border-red-100 text-red-700 p-3 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle size={16} className="text-red-500" />
                  <span>{error}</span>
                </div>
              )}

              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Parent Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-hidden text-sm bg-gray-50/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit number"
                        maxLength={10}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '') })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-hidden text-sm bg-gray-50/30"
                      />
                    </div>
                  </div>

                  {/* Pet Name & Service Wanted */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Pet's Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Milo, Rocky"
                        value={form.petName}
                        onChange={(e) => setForm({ ...form, petName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-hidden text-sm bg-gray-50/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={form.serviceNeeded}
                        onChange={(e) => setForm({ ...form, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-hidden text-sm bg-gray-50/30 cursor-pointer"
                      >
                        {SERVICES_DATA.map((svc) => (
                          <option key={svc.id} value={svc.title}>{svc.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message details */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Type your details here (e.g. preferred dates, clinic queries, or spa choices)..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-hidden text-sm bg-gray-50/30"
                    />
                  </div>

                  {/* Submit bar */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      id="submit-contact-form"
                      className="w-full sm:w-auto bg-brand-teal hover:bg-brand-teal-light text-white text-sm font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>{loading ? 'Sending...' : 'Send Message'}</span>
                      <Send size={15} />
                    </button>
                  </div>

                </form>
              ) : (
                /* Success Response Screen */
                <div className="text-center py-10 px-4">
                  <div className="inline-flex items-center justify-center bg-teal-50 p-4 rounded-full text-brand-teal mb-4">
                    <CheckCircle2 size={40} className="fill-white" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-gray-900">Message Received!</h4>
                  <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                    Thank you, <strong>{form.name}</strong>! We have received your inquiry regarding <strong>{form.serviceNeeded}</strong> for your pet, <strong>{form.petName}</strong>. Our support representative will call you shortly on <strong>{form.phone}</strong>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-6 px-5 py-2.5 rounded-xl border border-teal-200 text-brand-teal hover:bg-teal-50 text-xs font-bold transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
            
            <div className="mt-8 pt-6 border-t border-teal-50 text-xs text-gray-400">
              * Required fields. Your data remains 100% confidential.
            </div>
          </div>

          {/* Column 2: Directions, Working Hours & Clickable Links (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Quick Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-teal-100/50 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-gray-900 font-display flex items-center gap-2">
                <span className="w-1.5 h-4 bg-brand-teal rounded-sm" />
                Clinic Location
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm">
                
                {/* Physical address */}
                <div className="flex items-start space-x-3 text-gray-600">
                  <MapPin size={18} className="text-brand-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-800">Hearty Paws Pet Spa & Clinic</span>
                    <p className="mt-0.5">{CLINIC_INFO.address}</p>
                  </div>
                </div>

                {/* Clickable phone lines */}
                <div className="flex items-start space-x-3 text-gray-600 border-t border-teal-50/50 pt-3">
                  <Phone size={18} className="text-brand-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-800">Phone Numbers (Click to Call)</span>
                    <div className="flex flex-wrap gap-x-3 mt-1 font-semibold text-brand-teal">
                      <a href={`tel:${CLINIC_INFO.phones[0]}`} className="hover:underline">
                        +91 {CLINIC_INFO.phones[0]}
                      </a>
                      <span>/</span>
                      <a href={`tel:${CLINIC_INFO.phones[1]}`} className="hover:underline">
                        +91 {CLINIC_INFO.phones[1]}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Open timing hours */}
                <div className="flex items-start space-x-3 text-gray-600 border-t border-teal-50/50 pt-3">
                  <Clock size={18} className="text-brand-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-800">Working Hours</span>
                    <p className="mt-0.5">{CLINIC_INFO.timing}</p>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="flex items-center gap-3 border-t border-teal-50/50 pt-3.5">
                  <span className="text-xs font-bold text-gray-800 flex-shrink-0">Connect with us:</span>
                  <div className="flex items-center space-x-2">
                    <a
                      href="https://www.instagram.com/heartypaws_delhi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-teal-50 border border-teal-100 hover:border-brand-teal text-brand-teal hover:text-white hover:bg-brand-teal flex items-center justify-center transition-all duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram size={13} />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61591573830988"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-teal-50 border border-teal-100 hover:border-brand-teal text-brand-teal hover:text-white hover:bg-brand-teal flex items-center justify-center transition-all duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook size={13} />
                    </a>

                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Embedded Google Map */}
            <div className="flex-1 bg-white rounded-3xl overflow-hidden border border-teal-100/50 shadow-xs min-h-[220px] relative">
              <iframe
                title="Google Map Embed - Hearty Paws Shanti Niketan New Delhi"
                src={CLINIC_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '220px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
