import {
  useEffect,
  useState,
} from 'react';

import Head from 'next/head';

import { HeaderComponent } from '../components/HeaderComponent';

export default function Index() {
  const [useLocalization, setLocalization] = useState<
    string | null | undefined
  >();
  useEffect(() => {
    if (localStorage.getItem("localization")) {
      setLocalization(localStorage.getItem("localization"));
    } else {
    }
  }, []);
  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      <div className="choose"></div>
      <HeaderComponent title="MegaNets" localization={useLocalization} />
    </>
  );
}
