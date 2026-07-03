export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
  details: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'grooming' | 'clinic' | 'spa' | 'pets';
  imageUrl: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  petName: string;
  petType: 'Dog' | 'Cat' | 'Other';
  rating: number;
  text: string;
  date: string;
}

export interface AppointmentForm {
  name: string;
  phone: string;
  petName: string;
  petType: 'dog' | 'cat' | 'other';
  serviceNeeded: string;
  date: string;
  time: string;
  message: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  petName: string;
  serviceNeeded: string;
  message: string;
}
