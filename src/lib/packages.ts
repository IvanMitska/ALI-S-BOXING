export interface Package {
  id: string;
  category: 'group' | 'gym' | 'private';
  nameKey: string;
  price: number;
  priceFormatted: string;
  unit: string;
  periodKey: string;
  featureKeys: string[];
  popular?: boolean;
}

export const allPackages: Package[] = [
  // Group Classes
  {
    id: 'group-drop-in',
    category: 'group',
    nameKey: 'dropIn',
    price: 450,
    priceFormatted: '450',
    unit: 'THB',
    periodKey: 'singleSession',
    featureKeys: ['singleSession', 'equipmentIncluded'],
  },
  {
    id: 'group-10-sessions',
    category: 'group',
    nameKey: 'tenSessions',
    price: 3500,
    priceFormatted: '3,500',
    unit: 'THB',
    periodKey: 'valid2Months',
    featureKeys: ['valid2Months', 'equipmentIncluded'],
    popular: true,
  },
  {
    id: 'group-1-month',
    category: 'group',
    nameKey: 'oneMonthUnlimited',
    price: 10000,
    priceFormatted: '10,000',
    unit: 'THB',
    periodKey: 'perMonth',
    featureKeys: ['unlimitedClasses', 'freeTShirt', 'equipmentIncluded'],
  },
  {
    id: 'group-3-months',
    category: 'group',
    nameKey: 'threeMonthsUnlimited',
    price: 27000,
    priceFormatted: '27,000',
    unit: 'THB',
    periodKey: 'threeMonths',
    featureKeys: ['unlimitedClasses', 'threeTShirts', 'equipmentIncluded'],
  },

  // Open Gym
  {
    id: 'gym-day-pass',
    category: 'gym',
    nameKey: 'dayPass',
    price: 200,
    priceFormatted: '200',
    unit: 'THB',
    periodKey: 'singleDay',
    featureKeys: ['fullDayAccess', 'allEquipment'],
  },
  {
    id: 'gym-1-month',
    category: 'gym',
    nameKey: 'gymMonthly',
    price: 2000,
    priceFormatted: '2,000',
    unit: 'THB',
    periodKey: 'perMonth',
    featureKeys: ['unlimitedAccess', 'allEquipment'],
  },

  // Private Classes
  {
    id: 'private-boxing',
    category: 'private',
    nameKey: 'privateBoxing',
    price: 1500,
    priceFormatted: '1,500',
    unit: 'THB',
    periodKey: 'perSession',
    featureKeys: ['oneOnOneTraining', 'sixtyMinutes', 'personalizedCoaching'],
  },
  {
    id: 'private-kickboxing',
    category: 'private',
    nameKey: 'privateKickboxing',
    price: 1000,
    priceFormatted: '1,000',
    unit: 'THB',
    periodKey: 'perSession',
    featureKeys: ['oneOnOneTraining', 'sixtyMinutes', 'personalizedCoaching'],
  },
  {
    id: 'private-weightlifting',
    category: 'private',
    nameKey: 'weightLifting',
    price: 2000,
    priceFormatted: '2,000',
    unit: 'THB',
    periodKey: 'perSession',
    featureKeys: ['olympicStyle', 'ninetyMinutes', 'expertGuidance'],
  },
  {
    id: 'private-weightloss',
    category: 'private',
    nameKey: 'weightLoss',
    price: 1500,
    priceFormatted: '1,500',
    unit: 'THB',
    periodKey: 'perSession',
    featureKeys: ['personalizedProgram', 'sixtyMinutes', 'nutritionAdvice'],
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
