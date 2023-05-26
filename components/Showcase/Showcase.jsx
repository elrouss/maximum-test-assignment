import styles from './Showcase.module.scss';

import Filters from './Filters/Filters';
import Gallery from './Gallery/Gallery';

function Showcase() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <h2 className={styles.heading}>Автомобили Chery в СПб</h2>
        <div className={styles.content}>
          <Filters />
          <Gallery />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
