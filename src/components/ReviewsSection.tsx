import React, { useState } from 'react';
import { INITIAL_TESTIMONIALS } from '../data';
import { Testimonial } from '../types';
import { Star, MessageSquare, Quote, PlusCircle, AlertCircle } from 'lucide-react';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    petName: '',
    petType: 'Dog' as 'Dog' | 'Cat' | 'Other',
    rating: 5,
    text: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Calculate Average Rating dynamically
  const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
  const averageRating = (totalRating / reviews.length).toFixed(1);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!newReview.name.trim()) return setError('Please specify your name.');
    if (!newReview.petName.trim()) return setError('Please specify your pet\'s name.');
    if (!newReview.text.trim() || newReview.text.length < 5) {
      return setError('Please write a brief review description (at least 5 characters).');
    }

    const createdReview: Testimonial = {
      id: 'review-' + Date.now(),
      name: newReview.name,
      petName: newReview.petName,
      petType: newReview.petType,
      rating: newReview.rating,
      text: newReview.text,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([createdReview, ...reviews]);
    setSuccess(true);
    setNewReview({
      name: '',
      petName: '',
      petType: 'Dog',
      rating: 5,
      text: ''
    });

    // Close form after a short delay
    setTimeout(() => {
      setIsFormOpen(false);
      setSuccess(false);
    }, 1500);
  };

  return (
    <section id="reviews-section" className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Aggregate Rating */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
            <span className="text-xs font-extrabold text-brand-teal uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 tracking-tight">
              Loved By Shanti Niketan's Pets & Parents 🐾
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-3xl">
              Don't just take our word for it—read honest ratings from local residents who trust us with their canine, feline, and beloved family members.
            </p>
          </div>

          {/* Aggregate Card */}
          <div className="lg:col-span-4 bg-teal-50/50 border border-teal-100/70 rounded-3xl p-6 text-center shadow-3xs flex flex-col items-center justify-center space-y-2.5">
            <span className="text-xs uppercase tracking-wider font-bold text-gray-500">Google Rating</span>
            <div className="flex items-baseline space-x-1">
              <span className="text-5xl font-black font-display text-gray-900">{averageRating}</span>
              <span className="text-sm font-semibold text-gray-400">/ 5.0</span>
            </div>
            <div className="flex text-amber-400 text-lg">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  className={i < Math.round(parseFloat(averageRating)) ? "fill-amber-400 text-amber-400" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 font-semibold">{reviews.length} Verified Local Reviews</span>
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="mt-2 bg-brand-teal hover:bg-brand-teal-light text-white font-bold text-xs py-2 px-4 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-3xs"
            >
              <PlusCircle size={14} />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Dynamic Review Submission Form */}
        {isFormOpen && (
          <div className="mb-12 bg-teal-50/25 border border-teal-100 p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto animate-scale-up">
            <h3 className="text-lg font-bold text-gray-900 font-display mb-4">Share Your Experience</h3>
            
            {error && (
              <div className="mb-4 bg-red-50 border border-red-100 text-red-700 p-3 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            {success ? (
              <div className="text-center py-6 text-emerald-800 font-semibold flex flex-col items-center gap-2">
                <div className="bg-emerald-50 text-emerald-600 p-3 rounded-full animate-bounce">
                  ★★★★★
                </div>
                <span>Thank you! Your review has been published.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Gupta"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm bg-white outline-hidden focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Pet's Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bruno"
                      value={newReview.petName}
                      onChange={(e) => setNewReview({ ...newReview, petName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm bg-white outline-hidden focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Pet Category</label>
                    <select
                      value={newReview.petType}
                      onChange={(e) => setNewReview({ ...newReview, petType: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm bg-white outline-hidden focus:border-brand-teal"
                    >
                      <option value="Dog">Dog 🐶</option>
                      <option value="Cat">Cat 🐱</option>
                      <option value="Other">Other 🐾</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Rating (1 to 5 Stars)</label>
                    <div className="flex items-center space-x-1.5 pt-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star 
                            size={22} 
                            className={star <= newReview.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Review Comment *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell other pet owners about the grooming cut or vaccine checkup..."
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm bg-white outline-hidden focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 text-xs font-bold text-gray-500 hover:underline cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-brand-teal hover:bg-brand-teal-light text-white text-xs font-bold cursor-pointer transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Testimonials Review Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-teal-50/10 p-6 sm:p-8 rounded-3xl border border-teal-100/30 hover:border-teal-100 shadow-3xs hover:shadow-xs transition-all relative flex flex-col justify-between"
            >
              {/* Quote marks */}
              <div className="absolute top-6 right-6 text-teal-100">
                <Quote size={32} className="stroke-1" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex text-amber-400 space-x-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star 
                      key={idx} 
                      size={14} 
                      className={idx < rev.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"} 
                    />
                  ))}
                </div>

                {/* Review Message */}
                <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3.5 mt-6 pt-5 border-t border-teal-50/50">
                <div className="w-9 h-9 rounded-full bg-teal-100 text-brand-teal flex items-center justify-center font-bold text-sm">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-none">{rev.name}</h4>
                  <span className="text-[10px] sm:text-xs text-gray-400 block mt-1">
                    Parent of {rev.petName} ({rev.petType})
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
