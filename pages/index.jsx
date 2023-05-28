/* eslint-disable react/prop-types */
import Showcase from '../components/Showcase/Showcase';

import { URLS } from '../utils/constants';

export const getServerSideProps = async () => {
  const { SHOWCASE, SELECTED_BRAND_NAME } = URLS;

  try {
    const response = await fetch(`${SHOWCASE}${SELECTED_BRAND_NAME}`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data },
    };
  } catch (err) {
    return console.error(
      `Ошибка в процессе стартового запроса на сервер: ${err}`
    );
  }
};

export default function HomePage({ data: { list } }) {
  return (
    <main>
      <Showcase list={list} />
    </main>
  );
}
