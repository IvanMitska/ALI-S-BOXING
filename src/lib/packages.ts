export interface Package {
  id: string;
  category: 'dropIn' | 'weekly' | 'monthly' | 'special';
  nameKey: string;
  price: number;
  priceFormatted: string;
  unit: string;
  periodKey: string;
  featureKeys: string[];
  popular?: boolean;
}

export const allPackages: Package[] = [
  // DROP IN
  {
    id: 'drop-in-day-pass',
    category: 'dropIn',
    nameKey: 'dayPass',
    price: 700,
    priceFormatted: '700',
    unit: 'THB',
    periodKey: 'perDay',
    featureKeys: ['fullDayAccess', 'allClasses', 'allEquipment'],
    popular: true,
  },
  {
    id: 'drop-in-group-boxing',
    category: 'dropIn',
    nameKey: 'groupBoxingClass',
    price: 450,
    priceFormatted: '450',
    unit: 'THB',
    periodKey: 'perSession',
    featureKeys: ['groupTraining', 'equipmentIncluded'],
  },
  {
    id: 'drop-in-conditioning',
    category: 'dropIn',
    nameKey: 'conditioningClass',
    price: 450,
    priceFormatted: '450',
    unit: 'THB',
    periodKey: 'perSession',
    featureKeys: ['strengthConditioning', 'equipmentIncluded'],
  },
  {
    id: 'drop-in-womens-boxing',
    category: 'dropIn',
    nameKey: 'womensBoxingClass',
    price: 450,
    priceFormatted: '450',
    unit: 'THB',
    periodKey: 'perSession',
    featureKeys: ['womenOnly', 'equipmentIncluded'],
  },
  {
    id: 'drop-in-pro-fighter',
    category: 'dropIn',
    nameKey: 'proFighterClass',
    price: 300,
    priceFormatted: '300',
    unit: 'THB',
    periodKey: 'perSession',
    featureKeys: ['advancedTraining', 'equipmentIncluded'],
  },
  {
    id: 'drop-in-open-gym',
    category: 'dropIn',
    nameKey: 'openGym',
    price: 200,
    priceFormatted: '200',
    unit: 'THB',
    periodKey: 'perSession',
    featureKeys: ['gymAccess', 'allEquipment'],
  },

  // WEEKLY
  {
    id: 'weekly-10-sessions',
    category: 'weekly',
    nameKey: 'tenSessions',
    price: 3500,
    priceFormatted: '3,500',
    unit: 'THB',
    periodKey: 'valid2Months',
    featureKeys: ['tenSessions', 'flexibleSchedule', 'equipmentIncluded'],
  },
  {
    id: 'weekly-all-classes',
    category: 'weekly',
    nameKey: 'oneWeekAllClasses',
    price: 3000,
    priceFormatted: '3,000',
    unit: 'THB',
    periodKey: 'perWeek',
    featureKeys: ['unlimitedClasses', 'gymAccess', 'equipmentIncluded'],
    popular: true,
  },
  {
    id: 'weekly-open-gym',
    category: 'weekly',
    nameKey: 'oneWeekOpenGym',
    price: 1000,
    priceFormatted: '1,000',
    unit: 'THB',
    periodKey: 'perWeek',
    featureKeys: ['unlimitedGymAccess', 'allEquipment'],
  },

  // MONTHLY
  {
    id: 'monthly-full-access',
    category: 'monthly',
    nameKey: 'oneMonthFullAccess',
    price: 10000,
    priceFormatted: '10,000',
    unit: 'THB',
    periodKey: 'perMonth',
    featureKeys: ['unlimitedClasses', 'gymAccess', 'equipmentIncluded'],
    popular: true,
  },
  {
    id: 'monthly-open-gym',
    category: 'monthly',
    nameKey: 'oneMonthOpenGym',
    price: 2500,
    priceFormatted: '2,500',
    unit: 'THB',
    periodKey: 'perMonth',
    featureKeys: ['unlimitedGymAccess', 'allEquipment'],
  },

  // SPECIAL DEAL
  {
    id: 'special-6-months-full',
    category: 'special',
    nameKey: 'sixMonthsFullAccess',
    price: 40000,
    priceFormatted: '40,000',
    unit: 'THB',
    periodKey: 'sixMonths',
    featureKeys: ['unlimitedClasses', 'gymAccess', 'freeGloves'],
  },
  {
    id: 'special-3-months-full',
    category: 'special',
    nameKey: 'threeMonthsFullAccess',
    price: 22000,
    priceFormatted: '22,000',
    unit: 'THB',
    periodKey: 'threeMonths',
    featureKeys: ['unlimitedClasses', 'gymAccess', 'freeAlisSet'],
    popular: true,
  },
  {
    id: 'special-1-year-gym',
    category: 'special',
    nameKey: 'oneYearOpenGym',
    price: 18000,
    priceFormatted: '18,000',
    unit: 'THB',
    periodKey: 'oneYear',
    featureKeys: ['unlimitedGymAccess', 'allEquipment', 'bestValue'],
  },
  {
    id: 'special-6-months-gym',
    category: 'special',
    nameKey: 'sixMonthsOpenGym',
    price: 11000,
    priceFormatted: '11,000',
    unit: 'THB',
    periodKey: 'sixMonths',
    featureKeys: ['unlimitedGymAccess', 'allEquipment', 'bestValue'],
  },
];

export const dropInPackages = allPackages.filter(p => p.category === 'dropIn');
export const weeklyPackages = allPackages.filter(p => p.category === 'weekly');
export const monthlyPackages = allPackages.filter(p => p.category === 'monthly');
export const specialPackages = allPackages.filter(p => p.category === 'special');

export function getPackageById(id: string): Package | undefined {
  return allPackages.find(p => p.id === id);
}

export function getPackagesByCategory(category: Package['category']): Package[] {
  return allPackages.filter(p => p.category === category);
}
