import { Service, GalleryItem, Testimonial } from './types';

export const CLINIC_INFO = {
  name: "Hearty Paws Pet Spa & Clinic",
  tagline: "Where Every Paw Matters 🐾",
  phones: ["8800715311", "9289664150"],
  address: "Shop No. 7, Shanti Niketan DDA Market, New Delhi - 21",
  timing: "8:00 AM to 8:00 PM | 7 Days Open",
  whatsapp: "918800715311", // For direct chat links
  email: "saritasinha.heartypaws@gmail.com",
  mapEmbedUrl: "https://maps.google.com/maps?q=Hearty+Paws+Pet+Spa+%26+Clinic,+Shop+No.+7,+Shanti+Niketan+DDA+Market,+New+Delhi+110021&t=&z=17&ie=UTF8&iwloc=&output=embed"
};

export const SERVICES_DATA: Service[] = [
  {
    id: "grooming",
    title: "Pet Grooming",
    description: "Full professional grooming session to keep your pets looking sharp, clean, and smelling wonderful.",
    icon: "Scissors",
    price: "₹800 onwards",
    details: [
      "Full grooming & styling",
      "Refreshing bath & blow dry",
      "Precision haircut & styling",
      "Nail trimming & filing",
      "Ear cleaning & ear hair plucking",
      "Sanitary area trimming"
    ]
  },
  {
    id: "vaccination",
    title: "Vaccination",
    description: "All essential pet vaccines are available to shield your puppies, kittens, dogs, and cats from severe diseases.",
    icon: "Syringe",
    price: "₹400 onwards",
    details: [
      "DHPPi & Rabies vaccines for dogs",
      "Tricat & Felocell vaccines for cats",
      "Puppy/Kitten complete immunization schedule",
      "Booster dose reminders",
      "Digital vaccination certificates",
      "Vet health check before vaccine"
    ]
  },
  {
    id: "deworming",
    title: "Deworming",
    description: "Regular, safe, and highly effective deworming treatments to ensure internal health and weight balance.",
    icon: "ShieldAlert",
    price: "₹200 onwards",
    details: [
      "Broad-spectrum deworming tablet/syrup",
      "Stool analysis if needed",
      "Weight-graded precise dosing",
      "Prevention advice for zoonotic risks",
      "Reminders for the 3-month cycle"
    ]
  },
  {
    id: "treatment",
    title: "Pet Treatment",
    description: "Expert diagnostic and clinical medical care for all pets under the observation of senior veterinarians.",
    icon: "HeartPulse",
    price: "₹500 onwards",
    details: [
      "General medicine consultations",
      "Skin infection & allergy therapy",
      "Fever, vomiting, and diarrhea treatment",
      "Minor wound care & dressing",
      "Chronic disease management",
      "Emergency first aid"
    ]
  },
  {
    id: "accessories",
    title: "Pet Food & Accessories",
    description: "Premium quality dry food, wet food, treats, toys, collars, leashes, and daily pet accessories.",
    icon: "ShoppingBag",
    price: "Varies",
    details: [
      "Royal Canin, Farmina, Drools & more",
      "Veterinary prescribed diets",
      "Dental treats & supplements",
      "Premium leashes, harnesses & collars",
      "Anti-tick shampoos & sprays",
      "Comfortable pet beds & carriers"
    ]
  },
  {
    id: "spa",
    title: "Pet Spa",
    description: "Relaxing therapeutic and aromatic spa treatments to ease anxiety and rejuvenate pet coat vitality.",
    icon: "Sparkles",
    price: "₹1,200 onwards",
    details: [
      "Aromatherapy baths",
      "Oatmeal & medicated skin-soothing soak",
      "Anti-tick & flea spa treatment",
      "Conditioning coat massage",
      "Paw pad massage with herbal balm",
      "Blow dry with conditioning mist"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Vets & Groomers",
    description: "Our certified veterinary doctor and highly trained professional pet groomers treat every pet with extreme gentleness.",
    icon: "Award"
  },
  {
    title: "7 Days Open (8 AM - 8 PM)",
    description: "We are available 12 hours a day, 7 days a week, making it super convenient for working pet parents to visit us anytime.",
    icon: "Clock"
  },
  {
    title: "Clean & Hygiene Centric",
    description: "We enforce strict sanitization protocols after every treatment/grooming session to ensure a completely safe and clean clinic environment.",
    icon: "CheckCircle"
  },
  {
    title: "Affordable Premium Care",
    description: "Top-tier veterinary support, clinical accuracy, and high-end spa therapies at reasonable rates without any hidden costs.",
    icon: "TrendingUp"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Professional Haircut & Styling",
    category: "grooming",
    imageUrl: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800",
    alt: "Dog getting grooming scissors service"
  },
  {
    id: "g2",
    title: "Relaxing Herbal Bath Spa",
    category: "spa",
    imageUrl: "/src/assets/images/regenerated_image_1782990098115.png",
    alt: "Puppy receiving warm water bath in pet spa"
  },
  {
    id: "g3",
    title: "Vet General Health Checkup",
    category: "clinic",
    imageUrl: "/src/assets/images/regenerated_image_1782989829332.jpg",
    alt: "Friendly female veterinarian checkup puppy dog"
  },
  {
    id: "g4",
    title: "Cozy Persian Cat Bath Session",
    category: "grooming",
    imageUrl: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=800",
    alt: "Vet evaluating a cute white Persian cat"
  },
  {
    id: "g5",
    title: "Aromatherapy Paw Soothing Massage",
    category: "spa",
    imageUrl: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800",
    alt: "Golden retriever dog looking very happy after a spa treatment"
  },
  {
    id: "g6",
    title: "Post-Spa Happy Clients",
    category: "pets",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
    alt: "Extremely happy beagle dog showing off sparkling white coat"
  },
  {
    id: "g7",
    title: "Feline Vaccination Session",
    category: "clinic",
    imageUrl: "/src/assets/images/regenerated_image_1782989930114.jpg",
    alt: "Calm tabby cat lying in clinic table"
  },
  {
    id: "g8",
    title: "Warm Blow Dry & Fur Fluffing",
    category: "grooming",
    imageUrl: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=800",
    alt: "Shih tzu receiving a warm blow dry from a groomer"
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rohan Sharma",
    petName: "Milo",
    petType: "Dog",
    rating: 5,
    text: "Hearty Paws is our absolute favorite! Milo gets so excited when we pull up to the Shanti Niketan market. The grooming team is exceptionally professional, and the hair trim is always flawless. Highly recommend!",
    date: "2026-06-15"
  },
  {
    id: "t2",
    name: "Aanya Sen",
    petName: "Coco",
    petType: "Cat",
    rating: 5,
    text: "Getting Coco vaccinated was incredibly stress-free here. Cats are generally very anxious at clinics, but the vets here were so gentle and fast. Beautiful, clean environment, and open on Sundays too!",
    date: "2026-06-22"
  },
  {
    id: "t3",
    name: "Vikram Malhotra",
    petName: "Rocky",
    petType: "Dog",
    rating: 5,
    text: "Amazing spa treatments! Rocky had severe tick issues and dry skin. The medicated spa treatment completely healed him, and he feels super soft now. 10/10 clinical and spa service.",
    date: "2026-06-28"
  }
];
