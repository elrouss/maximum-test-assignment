import Showcase from '../components/Showcase/Showcase';

import { URLS } from '../utils/constants';

export const getStaticProps = async () => {
  const response = await fetch(`${URLS.SHOWCASE}Chery`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { cars: data },
  };
};

export default function Home({ cars }) {
  console.log(cars)
  return (
    <main>
      <Showcase cars={cars} />;
    </main>
  );
}
