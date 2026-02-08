export interface Package {
  id: string;
  category: 'group' | 'gym' | 'private';
  name: string;
  price: number;
  priceFormatted: string;
  unit: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export const allPackages: Package[] = [
  // Group Classes
  {
    id: 'group-drop-in',
    category: 'group',
    name: 'Drop In',
    price: 450,
    priceFormatted: '450',
    unit: 'THB',
    period: 'single session',
    features: ['Single session', 'All equipment included'],
  },
  {
    id: 'group-10-sessions',
    category: 'group',
    name: '10 Sessions',
    price: 3500,
    priceFormatted: '3,500',
    unit: 'THB',
    period: 'valid 2 months',
    features: ['Valid for 2 months', 'All equipment included'],
    popular: true,
  },
  {
    id: 'group-1-month',
    category: 'group',
    name: '1 Month Unlimited',
    price: 10000,
    priceFormatted: '10,000',
    unit: 'THB',
    period: 'per month',
    features: ['Unlimited classes', 'Free T-shirt', 'All equipment included'],
  },
  {
    id: 'group-3-months',
    category: 'group',
    name: '3 Months Unlimited',
    price: 27000,
    priceFormatted: '27,000',
    unit: 'THB',
    period: '3 months',
    features: ['Unlimited classes', '3 Free T-shirts', 'All equipment included'],
  },

  // Open Gym
  {
    id: 'gym-day-pass',
    category: 'gym',
    name: 'Day Pass',
    price: 200,
    priceFormatted: '200',
    unit: 'THB',
    period: 'single day',
    features: ['Full day access', 'All equipment'],
  },
  {
    id: 'gym-1-month',
    category: 'gym',
    name: 'Gym Monthly',
    price: 2000,
    priceFormatted: '2,000',
    unit: 'THB',
    period: 'per month',
    features: ['Unlimited access', 'All equipment'],
  },

  // Private Classes
  {
    id: 'private-boxing',
    category: 'private',
    name: 'Private Boxing',
    price: 1500,
    priceFormatted: '1,500',
    unit: 'THB / Session',
    period: '60 minutes',
    features: ['1-on-1 training', '60 minutes', 'Personalized coaching'],
  },
  {
    id: 'private-kickboxing',
    category: 'private',
    name: 'Private Kickboxing',
    price: 1000,
    priceFormatted: '1,000',
    unit: 'THB / Session',
    period: '60 minutes',
    features: ['1-on-1 training', '60 minutes', 'Personalized coaching'],
  },
  {
    id: 'private-weightlifting',
    category: 'private',
    name: 'Weight Lifting',
    price: 2000,
    priceFormatted: '2,000',
    unit: 'THB / Session',
    period: '90 minutes',
    features: ['Olympic style', '90 minutes', 'Expert guidance'],
  },
  {
    id: 'private-weightloss',
    category: 'private',
    name: 'Weight Loss',
    price: 1500,
    priceFormatted: '1,500',
    unit: 'THB / Session',
    period: '60 minutes',
    features: ['Personalized program', '60 minutes', 'Nutrition advice'],
  },
];

export const groupPackages = allPackages.filter(p => p.category === 'group');
export const gymPackages = allPackages.filter(p => p.category === 'gym');
export const privatePackages = allPackages.filter(p => p.category === 'private');

export function getPackageById(id: string): Package | undefined {
  return allPackages.find(p => p.id === id);
}

export function getPackagesByCategory(category: Package['category']): Package[] {
  return allPackages.filter(p => p.category === category);
}
