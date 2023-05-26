import styles from './Filters.module.scss';

import FiltersGroup from './FilterTabs/FilterTabs';

function Filters() {
  const filterGroups = [
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

  return (
    <div className={styles.filters}>
      {filterGroups.map(({ name, filters }) => (
        <FiltersGroup key={name} heading={name} filters={filters} />
      ))}
      <button
        className={styles.btnReset}
        type="button"
        aria-label="Сбросить все фильтры, кроме первого по бренду"
      >
        Сбросить фильтр
      </button>
    </div>
  );
}

export default Filters;
