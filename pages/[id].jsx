/* eslint-disable react/prop-types */
import CardInfo from '../components/CardInfo/CardInfo';

import { URLS } from '../utils/constants';

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const { SELECTED_BRAND_NAME, SHOWCASE } = URLS;

  try {
    const response = await fetch(`${SHOWCASE}${SELECTED_BRAND_NAME}`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { cars: data, id },
    };
  } catch (err) {
    return console.error(
      `Ошибка в процессе перехода на страницу с подробной информацией об автомобиле: ${err}`
    );
  }
};

function Info({ cars: { list }, id }) {
  console.log(URLS.SELECTED_BRAND_NAME);
  let car = {};

  list.find((item) => {
    if (item._id === id) {
      car = item;
    }
  });

  return (
    <main>
      <CardInfo car={car} />
    </main>
  );
}

export default Info;
