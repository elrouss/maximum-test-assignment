import PropTypes from 'prop-types';

import Head from 'next/head';
import Layout from '../components/Layout/Layout';

import 'normalize.css';
import '../styles/globals.scss';

function App({ Component, pageProps }) {
  // TODO: fix display of favicon

  return (
    <>
      <Head>
        <title>
          Официальный дилер автомобилей в Санкт-Петербурге – автохолдинг
          «Максимум»
        </title>
        <meta
          name="description"
          content="⭐⭐⭐⭐⭐ Автомобильный холдинг «Максимум» является официальным дилером брендов Honda, Ford, KIA, Genesis, Audi, Mitsubishi и Hyundai в Санкт-Петербурге. Автомобили в кредит, трейд-ин и помощь при подборе в салоне официального дилерского центра."
        />
        <meta name="distribution" content="global" />
        <meta name="theme-color" content="#fff" />
        <meta
          name="keywords"
          content="Максимум, автомобили, Санкт-Петербург, Питер"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../public/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../public/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../public/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="../public/assets/favicon/site.webmanifest" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.element,
};

App.defaultProps = {
  Component: PropTypes.null,
  pageProps: PropTypes.undefined,
};

export default App;
