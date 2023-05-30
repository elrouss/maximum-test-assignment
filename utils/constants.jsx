export const ROUTES = Object.freeze({
  ROOT: '/',
});

// In the end should be added a car's brand
export const URLS = Object.freeze({
  SHOWCASE: 'https://maximum.expert/api/stock-test?brand=',
});

export const filterBrandCar = [
  {
    name: 'Бренд',
    engName: 'brand',
    filters: ['Chery', 'Haval', 'Geely', 'Exeed', 'Audi', 'Kia', 'Hyundai'],
  },
];

export const filterGroups = [
  {
    name: 'Объем двигателя',
    engName: 'engineCapacity',
    filters: ['1,5 л.', '1,6 л.', '2,0 л.'],
  },
  {
    name: 'Комплектация',
    engName: 'engineTransmission',
    filters: [
      'Action',
      'Techno',
      'Travel',
      'Luxury',
      'Cosmo',
      'Trek',
      'Comfort',
      'Family',
      'Prestige',
      'Elite',
      'Dreamline',
      'Speedline',
      'Ultimate',
    ],
  },
];
