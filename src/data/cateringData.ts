import { Cuisine, SignatureDish, MenuPlan, CateringService, GalleryItem, Testimonial } from '../types';

import heroBanquetImg from '../assets/images/hero_luxury_banquet_1791220563297.jpg';
import jollofRiceImg from '../assets/images/cuisine_african_jollof_1791220573646.jpg';
import friedRiceImg from '../assets/images/dish_gourmet_fried_rice_1791222275937.jpg';
import europeanPaellaImg from '../assets/images/cuisine_european_paella_1791222244657.jpg';
import middleEasternGrillImg from '../assets/images/cuisine_middle_eastern_grill_1791222256181.jpg';
import americanBbqImg from '../assets/images/cuisine_american_bbq_1791222266924.jpg';
import grilledFishImg from '../assets/images/cuisine_grilled_fish_1791220585757.jpg';
import asianWokImg from '../assets/images/cuisine_asian_continental_1791220596513.jpg';
import dessertPastriesImg from '../assets/images/dessert_pastries_luxury_1791220607071.jpg';

export const WHATSAPP_BASE_URL = 'https://wa.me/PHONE_NUMBER';

export const getWhatsAppLink = (customMessage?: string) => {
  if (!customMessage) return WHATSAPP_BASE_URL;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(customMessage)}`;
};

export const IMAGES = {
  hero: heroBanquetImg,
  jollof: jollofRiceImg,
  friedRice: friedRiceImg,
  european: europeanPaellaImg,
  middleEastern: middleEasternGrillImg,
  american: americanBbqImg,
  grilledFish: grilledFishImg,
  asian: asianWokImg,
  desserts: dessertPastriesImg,
};

export const STATS = [
  { value: 500, suffix: '+', label: 'Events Catered', detail: 'Weddings & parties' },
  { value: 20, suffix: '+', label: 'Dishes', detail: 'Cooked fresh' },
  { value: 8, suffix: '+', label: 'World Cuisines', detail: 'African, Asian, Western' },
  { value: 5, suffix: '/5', label: 'Client Rating', detail: 'Top rated reviews' },
];

export const CUISINES: Cuisine[] = [
  {
    id: 'nigerian',
    name: 'Nigerian Food',
    origin: 'West Africa',
    description: 'Smoky party Jollof rice, sweet plantains (Dodo), spicy beef Suya, and Egusi soup.',
    highlights: ['Smoky Jollof Rice', 'Beef Suya Skewers', 'Fried Plantains (Dodo)', 'Egusi & Pounded Yam'],
    image: jollofRiceImg,
    accentText: 'Smoky & bold',
  },
  {
    id: 'west-african',
    name: 'West African',
    origin: 'Ghana & Senegal',
    description: 'Ghanaian Waakye with spicy shito, Senegalese Thieboudienne rice, and pepper soup.',
    highlights: ['Ghanaian Waakye', 'Senegalese Thieboudienne', 'Kelewele Plantain', 'Spicy Pepper Soup'],
    image: jollofRiceImg,
    accentText: 'Traditional spices',
  },
  {
    id: 'asian',
    name: 'Asian Food',
    origin: 'East Asia',
    description: 'Wok garlic noodles, special fried rice, teriyaki chicken, and Thai coconut curry.',
    highlights: ['Wok Garlic Noodles', 'Teriyaki Chicken', 'Thai Coconut Curry', 'Crispy Spring Rolls'],
    image: asianWokImg,
    accentText: 'Savory & sweet',
  },
  {
    id: 'middle-eastern',
    name: 'Middle Eastern',
    origin: 'Levant',
    description: 'Grilled lamb and chicken skewers, saffron basmati rice, garlic hummus, and pita bread.',
    highlights: ['Lamb & Chicken Kebabs', 'Saffron Basmati Rice', 'Hummus & Warm Pita', 'Fresh Tabbouleh'],
    image: middleEasternGrillImg,
    accentText: 'Charcoal grills',
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean',
    origin: 'Southern Europe',
    description: 'Fresh grilled sea bass with lemon and herbs, seafood paella, and Greek feta salad.',
    highlights: ['Grilled Sea Bass', 'Seafood Rice Paella', 'Lemon Herb Chicken', 'Greek Feta Salad'],
    image: grilledFishImg,
    accentText: 'Fresh & zesty',
  },
  {
    id: 'european',
    name: 'European',
    origin: 'Italy & France',
    description: 'Creamy pasta, beef lasagna, pan-seared steak with herb butter, and roasted potatoes.',
    highlights: ['Creamy Herb Pasta', 'Baked Beef Lasagna', 'Pan-Seared Steak', 'Roasted Baby Potatoes'],
    image: europeanPaellaImg,
    accentText: 'Classic favorites',
  },
  {
    id: 'american',
    name: 'American BBQ',
    origin: 'USA',
    description: '12-hour slow-smoked beef brisket, baked mac and cheese, crispy fried chicken, and cornbread.',
    highlights: ['Smoked Beef Brisket', 'Baked Mac & Cheese', 'Crispy Fried Chicken', 'Honey Cornbread'],
    image: americanBbqImg,
    accentText: 'Smoky & hearty',
  },
  {
    id: 'african',
    name: 'East & South African',
    origin: 'Pan-African',
    description: 'Slow-cooked spiced beef stew, grilled meats (Nyama Choma), yellow rice, and greens.',
    highlights: ['Spiced Beef Stew', 'Grilled Meats', 'Aromatic Yellow Rice', 'Sautéed Greens'],
    image: jollofRiceImg,
    accentText: 'Hearty stews',
  },
];

export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: 'jollof-rice',
    name: 'Party Smoky Jollof Rice',
    cuisine: 'Nigerian',
    category: 'rice',
    description: 'Cooked with tomatoes, red peppers, and authentic firewood smoke. Served with sweet fried plantains.',
    keyIngredients: ['Smoky Rice', 'Pepper Sauce', 'Sweet Plantains'],
    image: jollofRiceImg,
  },
  {
    id: 'royal-fried-rice',
    name: 'Special Catering Fried Rice',
    cuisine: 'Fusion',
    category: 'rice',
    description: 'Golden seasoned rice stir-fried with sweet corn, carrots, green peas, and shrimp.',
    keyIngredients: ['Sweet Corn', 'Carrots & Peas', 'Plump Shrimp'],
    image: friedRiceImg,
  },
  {
    id: 'grilled-fish',
    name: 'Whole Grilled Fish',
    cuisine: 'Mediterranean',
    category: 'grills',
    description: 'Fresh whole fish seasoned with garlic and herbs, grilled crispy with fresh lemon slices.',
    keyIngredients: ['Fresh Fish', 'Garlic & Herbs', 'Lemon'],
    image: grilledFishImg,
  },
  {
    id: 'flame-grilled-chicken',
    name: 'Flame-Grilled Chicken',
    cuisine: 'Grill',
    category: 'grills',
    description: 'Chicken pieces marinated in garlic, ginger, and peppers, flame-grilled tender and juicy.',
    keyIngredients: ['Tender Chicken', 'Garlic Ginger Marinade'],
    image: middleEasternGrillImg,
  },
  {
    id: 'smoked-beef-brisket',
    name: 'Smoked Beef Brisket',
    cuisine: 'American BBQ',
    category: 'grills',
    description: 'Prime beef brisket smoked low and slow for 12 hours until melt-in-your-mouth tender.',
    keyIngredients: ['Prime Brisket', 'Smoked Bark', 'BBQ Sauce'],
    image: americanBbqImg,
  },
  {
    id: 'spanish-seafood-paella',
    name: 'Spanish Seafood Paella',
    cuisine: 'European',
    category: 'rice',
    description: 'Traditional Spanish rice cooked in saffron broth with prawns, mussels, and sweet peppers.',
    keyIngredients: ['Saffron Rice', 'Jumbo Prawns', 'Mussels'],
    image: europeanPaellaImg,
  },
  {
    id: 'asian-noodles',
    name: 'Wok-Fried Garlic Noodles',
    cuisine: 'Asian',
    category: 'pastas',
    description: 'Egg noodles stir-fried with fresh garlic, scallions, crisp vegetables, and savory sauce.',
    keyIngredients: ['Egg Noodles', 'Garlic Sauce', 'Scallions'],
    image: asianWokImg,
  },
  {
    id: 'assorted-pastries',
    name: 'Small Chops & Pastries',
    cuisine: 'Finger Food',
    category: 'pastries',
    description: 'Flaky meat pies, crispy beef spring rolls, samosas, and sweet golden puff-puff.',
    keyIngredients: ['Meat Pies', 'Spring Rolls', 'Puff-Puff'],
    image: dessertPastriesImg,
  },
  {
    id: 'international-desserts',
    name: 'Assorted Dessert Bites',
    cuisine: 'Dessert',
    category: 'desserts',
    description: 'Mini chocolate tarts, French macarons, and fresh fruit skewers.',
    keyIngredients: ['Chocolate Tarts', 'Macarons', 'Fresh Fruits'],
    image: dessertPastriesImg,
  },
];

export const MENU_PLANS: MenuPlan[] = [
  {
    id: 'royal-classic',
    name: 'ROYAL CLASSIC',
    tagline: 'Best for birthdays & small parties (20–100 guests)',
    idealFor: 'Simple, delicious catering for intimate gatherings.',
    features: [
      '2 Main Rice options (Jollof & Fried Rice)',
      '1 Main Meat or Fish (Grilled Chicken or Fish)',
      'Sides (Sweet Plantains & Salad)',
      'Buffet warming trays and serving spoons included',
    ],
    inclusions: {
      mains: 'Party Jollof + Fried Rice + Grilled Chicken or Fish',
      sides: 'Sweet Plantains (Dodo) + Fresh Salad',
      dessert: 'Small chops platter (Puff-Puff, Spring Rolls)',
      service: 'Buffet setup with food warmers',
    },
    pricePlaceholder: 'Price based on guest count',
  },
  {
    id: 'royal-premium',
    name: 'ROYAL PREMIUM',
    tagline: 'Most popular for weddings & celebrations (50–500+ guests)',
    idealFor: 'Our complete wedding package with waitstaff.',
    isRecommended: true,
    features: [
      'Appetizers (Meat pies, Spring rolls, Samosas, Puff-Puff)',
      '3 Main Dishes (Jollof, Fried Rice, Paella or Noodles)',
      '2 Meats & Seafood (Grilled Chicken, Suya, Grilled Fish)',
      'Sides (Fried Plantains, Salad, Coleslaw)',
      'Dessert platter with mini cakes',
      'Uniformed waitstaff to serve food and clear tables',
    ],
    inclusions: {
      appetizers: 'Small chops platter for cocktail hour',
      mains: '3 Mains: Jollof, Fried Rice, Asian Noodles',
      sides: 'Grilled Fish, Chicken, Suya, Plantains, Salad',
      dessert: 'Mini cakes, pastries, and macarons',
      service: 'Full waitstaff and food setup',
    },
    pricePlaceholder: 'Price based on guest count',
  },
  {
    id: 'royal-grand',
    name: 'ROYAL GRAND',
    tagline: 'Full luxury catering for large weddings & VIP events',
    idealFor: 'Any cuisine combination with chef on site.',
    features: [
      'Custom menu with foods from any country',
      'Live grill station with fresh meat and fish',
      'Passed appetizers during cocktail hour',
      'Full main course buffet or plated table service',
      'Dessert table with pastries and fresh fruit',
      'Full team of chefs and waitstaff',
    ],
    inclusions: {
      appetizers: 'Passed appetizers during arrivals',
      mains: 'Custom multi-country menu',
      sides: 'Full selection of sides and salads',
      dessert: 'Grand dessert table',
      service: 'Head chef on site with full service team',
    },
    pricePlaceholder: 'Custom quote on WhatsApp',
  },
];

export const CATERING_SERVICES: CateringService[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    subtitle: 'Hot food and waitstaff for your big day',
    description: 'We handle everything from cocktail appetizers to full dinner. Hot, fresh, and on time.',
    capacity: '50 to 1,000+ Guests',
    features: ['Cocktail finger foods', 'Buffet or table service', 'Uniformed servers', 'Food warmers included'],
    iconName: 'HeartHandshake',
  },
  {
    id: 'birthdays',
    title: 'Birthdays',
    subtitle: 'Great food for family and friends',
    description: 'Hot Jollof rice, seasoned grills, small chops, and snacks for any birthday party.',
    capacity: '20 to 300+ Guests',
    features: ['Party rice and grills', 'Small chops platters', 'Dessert setup', 'Easy clean setup'],
    iconName: 'Calendar',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    subtitle: 'On-time office catering and lunches',
    description: 'Punctual, clean catering for company meetings, dinners, and annual celebrations.',
    capacity: '30 to 500+ Guests',
    features: ['Buffet lines or boxed lunches', 'Halal and veggie friendly', 'Clean setup', 'Invoice provided'],
    iconName: 'Building2',
  },
  {
    id: 'private-dining',
    title: 'Private Home Chef',
    subtitle: 'Fresh meals cooked in your kitchen',
    description: 'A chef comes to your home to cook, plate, and serve fresh food for your guests.',
    capacity: '6 to 25 Guests',
    features: ['Cooked in your home', 'Custom menu', 'Kitchen cleanup included', 'Relax with guests'],
    iconName: 'UtensilsCrossed',
  },
  {
    id: 'outdoor-events',
    title: 'Outdoor Parties',
    subtitle: 'Hot food in backyards and parks',
    description: 'We bring safe food warmers and live grills so food stays hot outdoors.',
    capacity: '40 to 600+ Guests',
    features: ['Outdoor live grills', 'Weather-safe food warmers', 'Friendly servers', 'Clean area'],
    iconName: 'Sun',
  },
  {
    id: 'bespoke-feasts',
    title: 'Custom Menus',
    subtitle: 'Any dish, any guest count',
    description: 'Tell us what you want to eat. We will plan the menu, cook the food, and serve it.',
    capacity: 'Any Size',
    features: ['Choose from 8 cuisines', 'Flexible serving', 'Quick quote on WhatsApp', 'Tailored to you'],
    iconName: 'Crown',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Party Jollof Rice & Plantains',
    category: 'dishes',
    image: jollofRiceImg,
    caption: 'Smoky party Jollof rice with sweet fried plantains.',
  },
  {
    id: 'g-2',
    title: 'Special Fried Rice',
    category: 'dishes',
    image: friedRiceImg,
    caption: 'Fried rice with shrimp, sweet corn, and vegetables.',
  },
  {
    id: 'g-3',
    title: 'Whole Grilled Fish',
    category: 'dishes',
    image: grilledFishImg,
    caption: 'Grilled sea bass with fresh lemon and herbs.',
  },
  {
    id: 'g-4',
    title: 'Spanish Seafood Paella',
    category: 'dishes',
    image: europeanPaellaImg,
    caption: 'Saffron rice with jumbo prawns and mussels.',
  },
  {
    id: 'g-5',
    title: 'Middle Eastern Grill Platter',
    category: 'dishes',
    image: middleEasternGrillImg,
    caption: 'Grilled lamb and chicken skewers with saffron rice.',
  },
  {
    id: 'g-6',
    title: 'Smoked Beef Brisket',
    category: 'dishes',
    image: americanBbqImg,
    caption: 'Slow-smoked beef brisket with baked mac and cheese.',
  },
  {
    id: 'g-7',
    title: 'Wok-Fried Asian Noodles',
    category: 'dishes',
    image: asianWokImg,
    caption: 'Noodles stir-fried with scallions and garlic sauce.',
  },
  {
    id: 'g-8',
    title: 'Desserts & Small Chops',
    category: 'dessert',
    image: dessertPastriesImg,
    caption: 'Meat pies, pastries, and mini dessert bites.',
  },
  {
    id: 'g-9',
    title: 'Wedding Banquet Setup',
    category: 'banquet',
    image: heroBanquetImg,
    caption: 'Clean buffet setup ready for wedding guests.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'The Jollof rice was incredible and the grilled chicken was finished in minutes. Everyone at our wedding loved the food!',
    clientName: 'Chidi & Sophia Okonkwo',
    role: 'Wedding',
    event: '400 Guests',
    location: '',
    rating: 5,
  },
  {
    id: 't-2',
    quote: 'Royal Cooks catered our company dinner. They showed up early, set up clean warmers, and served 150 people smoothly.',
    clientName: 'Elena Rostova',
    role: 'Company Dinner',
    event: '150 Guests',
    location: '',
    rating: 5,
  },
  {
    id: 't-3',
    quote: 'We booked them for a 50th birthday. The food was hot, fresh, and generous. Booking on WhatsApp was super easy.',
    clientName: 'Marcus Adeleke',
    role: 'Birthday',
    event: '80 Guests',
    location: '',
    rating: 5,
  },
];

export const FAQS = [
  {
    question: 'How do I get a price?',
    answer: 'Send us a quick WhatsApp message with your event date and estimated guest count. We will send you menu options and prices immediately.',
  },
  {
    question: 'Can we mix dishes from different countries?',
    answer: 'Yes! You can mix Nigerian Jollof rice, Asian noodles, grilled fish, American BBQ, and salads on the same menu.',
  },
  {
    question: 'Do you bring food warmers and staff?',
    answer: 'Yes. We bring clean chafing dishes to keep food hot, and our staff can stay and serve your guests.',
  },
  {
    question: 'How early should we book?',
    answer: 'For weddings, 3 to 6 weeks ahead is best. For smaller parties, 1 to 2 weeks notice is usually fine.',
  },
];
