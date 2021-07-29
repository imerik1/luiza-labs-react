import {
  ChangeEvent,
  useEffect,
  useState,
} from "react";

import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";

import { HeaderComponent } from "../components/HeaderComponent";

export default function Index() {
  const [useLocalization, setLocalization] = useState<
    string | null | undefined
  >();
  useEffect(() => {
    if (localStorage.getItem("localization")) {
      setLocalization(localStorage.getItem("localization"));
    }
  }, []);
  const handleInputCep = (e: ChangeEvent<HTMLInputElement>) => {
    // habilita apenas número
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1");
    if (e.target.value.length === 8) {
      fetch(`https://viacep.com.br/ws/${e.target.value}/json`).then(
        (response) => {
          response.json().then((data) => {
            setLocalization(`${data.localidade} - ${data.uf}`);
            localStorage.setItem(
              "localization",
              `${data.localidade} - ${data.uf}`
            );
          });
        }
      );
    }
  };
  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      {useLocalization ? (
        <></>
      ) : (
        <div className="choose">
          <label htmlFor="cep">Digite seu CEP</label>
          <input
            className="choose__locate"
            id="cep"
            type="text"
            placeholder="Digite seu CEP"
            maxLength={8}
            onInput={handleInputCep}
          />
        </div>
      )}
      <HeaderComponent title="MegaNets" localization={useLocalization} />
      <Breadcrumbs
        containerClassName="breadcrumbs"
        useDefaultStyle
        rootLabel="Home"
      />
      <main></main>
    </>
  );
}
