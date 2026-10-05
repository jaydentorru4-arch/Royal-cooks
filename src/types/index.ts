export interface Cuisine {
  id: string;
  name: string;
  origin: string;
  description: string;
  highlights: string[];
  image: string;
  accentText: string;
}

export interface SignatureDish {
  id: string;
  name: string;
  cuisine: string;
  category: 'rice' | 'grills' | 'pastas' | 'pastries' | 'desserts';
  description: string;
  keyIngredients: string[];
  image: string;
  badge?: string;
}

export interface MenuPlan {
  id: string;
  name: string;
  tagline: string;
  idealFor: string;
  isRecommended?: boolean;
  features: string[];
  inclusions: {
    appetizers?: string;
    mains: string;
    sides: string;
    dessert: string;
    service: string;
  };
  pricePlaceholder: string;
  badge?: string;
}

export interface CateringService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capacity: string;
  features: string[];
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'banquet' | 'dishes' | 'dessert' | 'details';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  event: string;
  location: string;
  rating: number;
}
