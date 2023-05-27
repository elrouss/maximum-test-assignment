import CardInfo from '../components/CardInfo/CardInfo';

import { URLS } from '../utils/constants';

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  console.log(id);

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
