export const ROUTES = Object.freeze({
  ROOT: '/',
});

// In the end should be added a car's brand
export const URLS = Object.freeze({
  SHOWCASE: 'https://maximum.expert/api/stock-test?brand=',
});

export const filterGroups = [
  {
    name: 'Бренд',
    filters: ['Chery', 'Haval', 'Geely', 'Exeed', 'Audi', 'Kia', 'Hyundai'],
  },
  {
    name: 'Объем двигателя',
    filters: ['1,5 л.', '1,6 л.', '2,0 л.'],
  },
  {
    name: 'Комплектация',
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
