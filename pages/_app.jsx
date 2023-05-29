/* eslint-disable react/prop-types */
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

import 'normalize.css';
import '../styles/globals.scss';

function App({ Component, pageProps }) {
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
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
