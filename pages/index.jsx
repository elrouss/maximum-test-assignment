/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { URLS } from '../utils/constants';
import Showcase from '../components/Showcase/Showcase';
import useWindowDimensions from '../hooks/useWindowDimensions';

export const getServerSideProps = async () => {
  const { SHOWCASE } = URLS;

  try {
    // Chery is a start point.
    // Then we'll get dynamic values to see other cars while clicking on brand filters (see [brandName] -> [id])
    const response = await fetch(`${SHOWCASE}Chery`);
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
  const [isBigScreenDevice, setBigScreenDevice] = useState(false);
  const screenWidth = useWindowDimensions() >= 1024;

  useEffect(() => {
    setBigScreenDevice(screenWidth);
  }, [screenWidth]);

  return (
    <main>
      <Showcase list={list} isBigScreenDevice={isBigScreenDevice} />
    </main>
  );
}
