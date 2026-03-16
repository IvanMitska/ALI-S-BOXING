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
    nameKey: 'groupBoxingClass',
    price: 450,
    priceFormatted: '450',
    unit: 'THB',
    periodKey: 'perSession',
    featureKeys: ['groupTraining', 'equipmentIncluded'],
  },
  {
    id: 'group-10-sessions',
    category: 'group',
    nameKey: 'tenSessions',
    price: 3500,
    priceFormatted: '3,500',
    unit: 'THB',
    periodKey: 'valid2Months',
    featureKeys: ['tenSessions', 'flexibleSchedule', 'equipmentIncluded'],
    popular: true,
  },
  {
    id: 'group-1-month',
    category: 'group',
    nameKey: 'oneMonthFullAccess',
    price: 10000,
    priceFormatted: '10,000',
    unit: 'THB',
    periodKey: 'perMonth',
    featureKeys: ['unlimitedClasses', 'gymAccess', 'equipmentIncluded'],
  },
  {
    id: 'group-3-months',
    category: 'group',
    nameKey: 'threeMonthsFullAccess',
    price: 22000,
    priceFormatted: '22,000',
    unit: 'THB',
    periodKey: 'threeMonths',
    featureKeys: ['unlimitedClasses', 'gymAccess', 'freeAlisSet'],
  },

  // Open Gym
  {
    id: 'gym-day-pass',
    category: 'gym',
    nameKey: 'openGym',
    price: 200,
    priceFormatted: '200',
    unit: 'THB',
    periodKey: 'perSession',
    featureKeys: ['gymAccess', 'allEquipment'],
  },
  {
    id: 'gym-1-month',
    category: 'gym',
    nameKey: 'oneMonthOpenGym',
    price: 2500,
    priceFormatted: '2,500',
    unit: 'THB',
    periodKey: 'perMonth',
    featureKeys: ['unlimitedGymAccess', 'allEquipment'],
  },

  // Private Classes
  {
    id: 'private-day-pass',
    category: 'private',
    nameKey: 'dayPass',
    price: 700,
    priceFormatted: '700',
    unit: 'THB',
    periodKey: 'perDay',
    featureKeys: ['fullDayAccess', 'allClasses', 'allEquipment'],
  },
  {
    id: 'private-1-week',
    category: 'private',
    nameKey: 'oneWeekAllClasses',
    price: 3000,
    priceFormatted: '3,000',
    unit: 'THB',
    periodKey: 'perWeek',
    featureKeys: ['unlimitedClasses', 'gymAccess', 'equipmentIncluded'],
    popular: true,
  },
  {
    id: 'private-6-months-full',
    category: 'private',
    nameKey: 'sixMonthsFullAccess',
    price: 40000,
    priceFormatted: '40,000',
    unit: 'THB',
    periodKey: 'sixMonths',
    featureKeys: ['unlimitedClasses', 'gymAccess', 'freeGloves'],
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
