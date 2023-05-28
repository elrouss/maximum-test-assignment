/* eslint-disable react/prop-types */
import CardInfo from '../components/CardInfo/CardInfo';

import { URLS } from '../utils/constants';

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  try {
    const response = await fetch(`${URLS.SHOWCASE}Chery`);
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
