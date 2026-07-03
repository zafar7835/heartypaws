import React, { useState } from 'react';
import { X, Calendar, Clock, Smile, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data';
import { AppointmentForm } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

const TIME_SLOTS = [
  "08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM",
  "12:30 PM", "02:30 PM", "03:30 PM", "04:30 PM",
  "05:30 PM", "06:30 PM", "07:30 PM"
];

export default function BookingModal({ isOpen, onClose, preselectedService = "" }: BookingModalProps) {
  const [formData, setFormData] = useState<AppointmentForm>({
    name: '',
    phone: '',
    petName: '',
    petType: 'dog',
    serviceNeeded: preselectedService || SERVICES_DATA[0].title,
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appointmentId, setAppointmentId] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!formData.name.trim()) return setError('Please enter your name.');
    if (!formData.phone.trim() || formData.phone.length < 10) {
      return setError('Please enter a valid 10-digit mobile number.');
    }
    if (!formData.petName.trim()) return setError("Please enter your pet's name.");
    if (!formData.petType) return setError('Please select your pet type.');
    if (!formData.serviceNeeded) return setError('Please select a service.');
    if (!formData.date) return setError('Please select an appointment date.');
    if (!formData.time) return setError('Please choose a preferred time slot.');

    const petTypeCapitalized = formData.petType.charAt(0).toUpperCase() + formData.petType.slice(1);
    
    // Generate the formatted WhatsApp message
    const messageText = `🐾 *New Appointment Request*

👤 Name: ${formData.name.trim()}

📱 Phone: ${formData.phone.trim()}

🐶 Pet Name: ${formData.petName.trim()}

🐕 Pet Type: ${petTypeCapitalized}

🩺 Service: ${formData.serviceNeeded}

📅 Preferred Date: ${formData.date}

⏰ Preferred Time: ${formData.time}

📝 Additional Message:
${formData.message.trim() || 'None'}

Please confirm this appointment.`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/918800715311?text=${encodedText}`;

    // Open WhatsApp Click-to-Chat in a new window/tab
    window.open(whatsappUrl, '_blank');

    // Clear the form
    setFormData({
      name: '',
      phone: '',
      petName: '',
      petType: 'dog',
      serviceNeeded: preselectedService || SERVICES_DATA[0].title,
      date: '',
      time: '',
      message: ''
    });

    // Close the modal keeping user on the same website
    onClose();
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      petName: '',
      petType: 'dog',
      serviceNeeded: preselectedService || SERVICES_DATA[0].title,
      date: '',
      time: '',
      message: ''
    });
    setIsSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-teal-50 transform scale-100 transition-all">
        
        {/* Modal Header */}
        <div className="bg-brand-teal p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            id="close-booking-modal"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="bg-white/15 p-2 rounded-2xl">
              <Sparkles className="w-6 h-6 text-teal-200" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold">Book a Wellness Session</h3>
              <p className="text-xs text-teal-100 font-sans mt-0.5">Let's coordinate care for your pet</p>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-100 text-red-700 p-3 rounded-xl flex items-start gap-2.5 text-sm">
              <AlertCircle size={18} className="mt-0.5 flex-shrink-0 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              
              {/* Pet Parent Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-hidden text-sm bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-hidden text-sm bg-gray-50/50"
                  />
                </div>
              </div>

              {/* Pet Name & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Pet's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Milo, Coco"
                    value={formData.petName}
                    onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-hidden text-sm bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Pet Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['dog', 'cat', 'other'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, petType: type as any })}
                        className={`py-2 px-3 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                          formData.petType === type
                            ? 'bg-teal-50 border-brand-teal text-brand-teal shadow-xs'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {type === 'dog' ? '🐶 Dog' : type === 'cat' ? '🐱 Cat' : '🐾 Other'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Service Needed
                </label>
                <select
                  value={formData.serviceNeeded}
                  onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-hidden text-sm bg-gray-50/50 cursor-pointer"
                >
                  {SERVICES_DATA.map((svc) => (
                    <option key={svc.id} value={svc.title}>
                      {svc.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Calendar size={13} className="text-brand-teal" />
                    Appointment Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-hidden text-sm bg-gray-50/50 cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Clock size={13} className="text-brand-teal" />
                    Preferred Slot <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.time}
                    required
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-hidden text-sm bg-gray-50/50 cursor-pointer"
                  >
                    <option value="">-- Choose Slot --</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Special Instructions or Pet History (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Any skin allergies, anxiety triggers, or medical history..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-hidden text-sm bg-gray-50/50"
                />
              </div>

              {/* Safety notice */}
              <div className="bg-teal-50/50 border border-teal-100 rounded-xl p-3 text-[11px] text-teal-800 leading-relaxed">
                🐾 <strong>Please Note:</strong> Our clinic is open 8:00 AM to 8:00 PM. Please arrive 10 minutes prior to your selected slot. No pre-payment is required, pay directly at the desk!
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="submit-booking-form"
                  className="w-2/3 py-3 rounded-xl bg-brand-teal hover:bg-brand-teal-light text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-98 cursor-pointer"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          ) : (
            /* Success State Confirmation Card */
            <div className="text-center py-6 px-2 font-sans">
              <div className="inline-flex items-center justify-center bg-teal-50 p-4 rounded-full text-brand-teal mb-4 animate-bounce">
                <CheckCircle size={44} className="fill-white" />
              </div>
              <h4 className="text-2xl font-display font-extrabold text-gray-900 tracking-tight">
                Appointment Requested!
              </h4>
              <p className="text-sm text-gray-600 mt-2 max-w-sm mx-auto">
                We've reserved a tentative slot for your beloved pet. Our desk agent will call you shortly to confirm.
              </p>

              {/* Receipt card */}
              <div className="mt-6 bg-teal-50/30 border border-teal-100 rounded-2xl p-5 text-left space-y-3 max-w-sm mx-auto">
                <div className="flex justify-between border-b border-teal-100 pb-2 text-xs">
                  <span className="text-gray-500 font-medium">Booking ID:</span>
                  <span className="font-mono font-bold text-brand-teal">{appointmentId}</span>
                </div>
                <div className="grid grid-cols-2 gap-y-2.5 text-xs">
                  <span className="text-gray-500">Pet Name:</span>
                  <span className="font-semibold text-right text-gray-900">{formData.petName} ({formData.petType})</span>

                  <span className="text-gray-500">Service:</span>
                  <span className="font-semibold text-right text-gray-900">{formData.serviceNeeded}</span>

                  <span className="text-gray-500">Date:</span>
                  <span className="font-semibold text-right text-gray-900">{formData.date}</span>

                  <span className="text-gray-500">Time:</span>
                  <span className="font-semibold text-right text-gray-900">{formData.time}</span>
                </div>
                <div className="border-t border-teal-100 pt-2.5 flex items-center justify-between text-xs text-gray-500">
                  <span>Location:</span>
                  <span className="font-medium text-gray-800 text-right text-[11px]">Shanti Niketan DDA Market</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-2 max-w-sm mx-auto">
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hi,%20I%20have%20submitted%20an%20appointment%20request%20for%20my%20pet%20${formData.petName}%20(Booking%20ID:%20${appointmentId}).%20Please%20confirm.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba56] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md"
                >
                  <span>Share confirmation on WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full py-2.5 text-gray-600 hover:text-brand-teal text-xs font-semibold hover:underline cursor-pointer"
                >
                  Done & Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
